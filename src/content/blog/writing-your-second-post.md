---
title: 'How to publish a post on this site'
description: 'A 60-second guide to adding a new blog post (delete me once you know the drill).'
pubDate: 2026-07-20
tags: ['meta']
---

*(This is a placeholder post for Ajay — delete it once you've published something real.)*

Publishing a post takes three steps:

1. Create a new file in `src/content/blog/`, e.g. `fuzzing-rust-binaries.md`. The filename becomes the URL: `/blog/fuzzing-rust-binaries/`.
2. Start the file with frontmatter:

```markdown
---
title: 'Fuzzing Rust binaries with AFL++'
description: 'What taint tracking reveals about memory safety.'
pubDate: 2026-08-01
tags: ['fuzzing', 'rust']
---

Your post content here, in plain Markdown.
```

3. Commit and push:

```bash
git add .
git commit -m "new post: fuzzing rust binaries"
git push
```

GitHub Actions rebuilds the site automatically. The post shows up in the blog list, in the command palette (Ctrl+K), and gets its own comments thread the first time someone comments.
