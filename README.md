# Daily Side-Channel

A static archive for the Daily Side-Channel briefing.

## Stack

- Astro
- Markdown content collections
- GitHub Pages
- GitHub Actions
- no database, no CMS, no auth

## Content

Each briefing is a Markdown file in:

```text
src/content/briefings/YYYY-MM-DD.md
```

Frontmatter:

```yaml
---
title: "daily side-channel · september 29"
date: 2026-09-29
summary: "One or two useful sentences."
tags:
  - experimental-music
  - game-design
---
```

Everything below frontmatter is ordinary Markdown.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Publishing

Push to `main`. The GitHub Pages workflow builds and deploys automatically.

For the scheduled ChatGPT briefing, the publishing step is intentionally simple:

1. Generate the finished briefing.
2. Create `src/content/briefings/YYYY-MM-DD.md` in this repo.
3. Use commit message `Add Daily Side-Channel YYYY-MM-DD`.
4. GitHub Actions redeploys the site.

Markdown is the canonical archive. If the site stack is replaced later, the content remains portable.

## GitHub Pages

If the first deploy reports that Pages is not enabled, open **Settings → Pages** and set **Source** to **GitHub Actions** once. After that, pushes to `main` are automatic.
