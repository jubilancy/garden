# Digital Garden (Jekyll)
Monospace digital garden template: collections, folders, topics, tags, growth stages, backlinks, embeds, search.

```bash
bundle install && bundle exec jekyll serve
```
Start at `_notes/docs/about-this-theme.md`. Delete `_notes/docs`, `_essays`, `_log`, `_projects`, `_reading`, `_glossary` placeholders when ready.

Design tokens mirror the Directory Design System in the parent project (`styles.css`, `tokens/`).

## Deploy without a terminal
Push to `main` (the web editor counts). `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. One-time: Settings → Pages → Source: GitHub Actions.
