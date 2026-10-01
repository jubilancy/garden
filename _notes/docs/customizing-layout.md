---
title: "Customizing layout"
description: "Sidebar, rail, measure, and removing columns."
date: 2026-10-01
updated: 2026-10-01
stage: seedling
topics: [docs, design]
tags: [customizing, layout]
---
{% raw %}
- Widths: `--side-w`, `--rail-w`, `--measure`.
- Remove the right rail by deleting the `<aside class="rail">` block in `_layouts/note.html`; the main column expands automatically.
- Sidebar links come from `_data/navigation.yml`. Icon names are from [Lucide](https://lucide.dev).
- Under 760px the sidebar becomes a drawer opened with the menu button.
- Add a layout by creating `_layouts/yourname.html` with `layout: default` front matter.
{% endraw %}
