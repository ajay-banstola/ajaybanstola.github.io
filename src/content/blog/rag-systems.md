---
title: 'What actually breaks in RAG systems'
description: "Retrieval-augmented generation looks simple in a diagram. Here's where it actually falls apart, and what fixes each failure mode."
pubDate: 2026-08-01
tags: ['ai', 'rag', 'llm']
---

Retrieval-augmented generation gets pitched as: embed your docs, stuff the top-k matches into a prompt, let the model answer. That version works for a demo. It falls apart in production for a handful of predictable reasons, and most of the "advanced RAG" literature is just patches for these specific failure modes.

## Chunking is the decision that matters most

Everything downstream — retrieval quality, answer grounding, cost — is bounded by how you split documents. Fixed-size chunking (e.g. 500 tokens with overlap) is the default because it's easy, but it cuts sentences and tables in half and severs the context a chunk needs to be self-explanatory.

Two things help more than tuning chunk size:

- **Structure-aware splitting.** Split on headings, list boundaries, and paragraph breaks before falling back to a token budget. A chunk that's a complete thought retrieves and reads better than one that's an arbitrary slice.
- **Contextual headers.** Prepend the section title (and sometimes a one-line LLM-generated summary of the parent document) to each chunk before embedding. A chunk that says "set `timeout` to 30s" is useless out of context; one that says "HTTP client config: set `timeout` to 30s" is retrievable on its own.

## Embedding similarity isn't relevance

Cosine similarity between query and chunk embeddings finds *topically similar* text, not *the text that answers the question*. Ask "why did the migration fail in staging" and a pure vector search will happily return every paragraph that mentions "migration," including the ones about a different failure.

The fix that matters most here is a **reranker**: retrieve a wider candidate set (top 50) with the cheap vector search, then score that set with a cross-encoder (a model that sees the query and chunk together, not as separate embeddings) and keep the top 5–10. Cross-encoders are slower per pair but far more precise, and reranking only 50 candidates is cheap enough to do on every query.

Hybrid search — combining dense vector search with sparse keyword search (BM25) — is the other half of this. Vector search misses exact matches on IDs, error codes, and proper nouns that never appeared together in training data; BM25 catches those. Most production RAG stacks that "just work" are running both and merging the results (reciprocal rank fusion is the usual merge function), not vectors alone.

## Retrieval can succeed and the answer can still be wrong

Even with perfect retrieval, models:

- **Ignore context that contradicts their prior.** If the model "knows" something from pretraining and your retrieved chunk says otherwise, it doesn't reliably defer to the chunk.
- **Get lost in the middle.** Relevant information placed in the middle of a long context window is used less reliably than information at the start or end. Ordering retrieved chunks by relevance and putting the best match last (closest to the question) helps.
- **Hallucinate citations even when grounded.** The model can produce a correct-sounding answer and attribute it to the wrong source, which is worse than an ungrounded answer because it's more convincing.

None of this shows up in a retrieval-quality eval (precision@k, recall@k) — it only shows up if you evaluate the final answer against the retrieved context, not just the retrieved context against the query.

## Evaluate retrieval and generation separately

The single highest-leverage thing I've done on a RAG system is splitting eval into two stages instead of one end-to-end "does the answer look right" check:

1. **Retrieval eval:** given a query, did the retrieved set contain the chunk(s) needed to answer it? This is a labeling problem you can solve with a golden set of (query, expected-chunk-id) pairs, and it's cheap to run on every change to chunking or the embedding model.
2. **Faithfulness eval:** given the retrieved chunks and the generated answer, is every claim in the answer supported by the chunks? An LLM-as-judge works reasonably well here if you give it the chunks and the answer and ask it to flag unsupported claims, not just rate overall quality.

Collapsing these into one score hides which half of the pipeline broke when the score drops. If retrieval eval is stable and faithfulness eval drops after a prompt change, you know exactly where to look.

## What I'd prioritize, in order

1. Structure-aware chunking with contextual headers — fixes the most retrievals for the least engineering effort.
2. Hybrid search (vector + BM25) with reciprocal rank fusion — catches the queries pure vector search structurally can't.
3. A reranker on top of a wider candidate set — turns "topically related" into "actually relevant."
4. Separate retrieval and faithfulness evals — without this you're debugging blind.

Everything past that — query rewriting, HyDE, agentic multi-hop retrieval — is worth trying, but it's optimizing a pipeline that's already sound. Applied to one that isn't, it just adds latency to the same wrong answers.
