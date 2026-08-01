---
title: 'Hello, world (and how this site works)'
description: 'The first post: what this site is built with and why every part of it is free.'
pubDate: 2026-07-22
tags: ['meta', 'astro']
---

Welcome to my corner of the internet. This is a sample post — I'll replace it with real writing soon — but it doubles as documentation for how the site works.

## The stack

The whole site is static. It's built with [Astro](https://astro.build), hosted on **GitHub Pages**, and served from my own domain. There's no server, no database, and no hosting bill.

Every post here is just a Markdown file. When I push a new `.md` file to GitHub, an action rebuilds the site and the post appears at its own URL about a minute later.

## Comments and likes without a backend

Comments are powered by [Giscus](https://giscus.app), which stores everything in this repo's GitHub Discussions. If you react to a post with a 👍 or ❤️, that's the "like" system — also free, also spam-resistant, because you sign in with GitHub.

## Try the terminal

This site has a working terminal. Press the <code>`</code> key (or `Ctrl+K` for the command palette) and type `help`. There may or may not be a hidden command involving `sudo`.

More soon — probably something about fuzzing Rust binaries or predicting glaucoma progression from retinal scans, depending on which rabbit hole I fall into first.
