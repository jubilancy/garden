---
title: "Customizing colors"
description: "Change the accent in one line, or re-theme everything."
date: 2026-10-01
updated: 2026-10-01
stage: evergreen
topics: [docs, design]
tags: [customizing, color]
---
{% raw %}
All colors live as variables at the top of `assets/css/main.css`.

## Swap the accent
```css
:root{--green:#ff5a1f;--green-ink:#c43d0a;--green-tint:#fff0e8}
```

## Rules that keep it coherent
- One accent. Reserve it for state and the featured item.
- Text on tint uses `--accent-text`, never the bright accent (contrast).
- Neutrals stay flat gray. No gradients, no shadows.

## Dark mode
Built in. It follows the system setting, and the **Theme** button in the sidebar overrides it (saved in localStorage). Tune the values in the two dark blocks near the top of `main.css`. Force one mode with `<html data-theme="light">` in `_layouts/default.html`.
{% endraw %}
