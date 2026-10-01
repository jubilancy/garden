---
title: "Deploying"
description: "GitHub Pages, Netlify and Cloudflare Pages."
date: 2026-10-01
updated: 2026-10-01
stage: budding
topics: [docs]
tags: [deploy]
---
{% raw %}
## GitHub Pages (no terminal)
The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`, including edits made in the GitHub web editor.

1. Create a GitHub repo and upload this folder (Add file → Upload files, or drag it into github.dev).
2. Settings → Pages → Source: **GitHub Actions**.
3. Edit or add a note in the browser (press `.` on the repo for the editor) and commit to `main`. The Actions tab shows the deploy; the site updates in about a minute.

The workflow sets the base path automatically, so you don't need to edit `baseurl`. Custom plugins (tag pages) work because Actions runs a real Jekyll build.

## Netlify / Cloudflare Pages
Build command `bundle exec jekyll build`, publish directory `_site`.

## Checklist
- [ ] `url` set
- [ ] drafts marked `draft: true`
- [ ] `feed.xml` and `sitemap.xml` resolve
{% endraw %}
