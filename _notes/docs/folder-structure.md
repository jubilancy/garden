---
title: Folder structure
description: Where everything lives, and how folders become URLs.
date: 2026-10-01
updated: 2026-10-01
stage: evergreen
topics: [docs]
tags: [reference, structure]
---
{% raw %}
```text
_config.yml          site settings, collections, defaults
_data/               navigation.yml, collections.yml
_includes/           embed, callout, stage, backlinks, doc-list
_layouts/            default, page, note, collection, home
_notes/ _essays/ _log/ _projects/ _reading/ _glossary/
  docs/              any subfolder works; becomes part of the URL
assets/css/main.css  tokens, components, layout
assets/js/main.js    search, contents, icons
tags.html stages.html search.json
```

A file at `_notes/docs/about-this-theme.md` is served at `/notes/docs/about-this-theme/`. The breadcrumb shows `Notes / docs`. Folders are for you; **taxonomy is for readers**. Don't rely on folders alone.

Rule of thumb: folders for one-level topic grouping, topics and tags for everything cross-cutting.
{% endraw %}
