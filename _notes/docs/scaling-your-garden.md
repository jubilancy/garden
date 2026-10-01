---
title: Scaling your garden
description: What to do at 100, 1,000 and 10,000 notes.
date: 2026-10-01
updated: 2026-10-01
stage: budding
topics: [docs, organisation]
tags: [scaling, performance]
---
{% raw %}
## ~100 notes
Nothing to do. Keep tags tidy.

## ~1,000 notes
- Builds slow because every page scans every document for backlinks. Use `jekyll build --incremental` locally, or precompute links into `_data` with a small script.
- Trim `search.json`: shorten `truncate: 400` or index titles and tags only.
- Split `tags.html` into per-letter pages.

## ~10,000 notes
- Move search to Pagefind, which indexes after build with no JSON payload.
- Paginate collection indexes.
- Consider archiving old log entries into yearly folders.

## Always
- Prune tags. If a tag has one document, it is probably a topic or a typo.
- Date `updated` honestly; the home page sorts by it.
{% endraw %}
