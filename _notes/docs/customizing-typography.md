---
title: "Customizing typography"
description: "Swapping the mono font and tuning the scale."
date: 2026-10-01
updated: 2026-10-01
stage: budding
topics: [docs, design]
tags: [customizing, type]
---
{% raw %}
The theme uses one family, **Geist Mono**, loaded from Google Fonts. To change it, edit the `@import` line and `--font-mono`.

Good alternatives: JetBrains Mono, IBM Plex Mono, Space Mono.

| Token | Default | Role |
|---|---|---|
| `--fs-label` | 13px | uppercase labels |
| `--fs-small` | 14px | secondary text |
| `--fs-body` | 16px | body |
| `--fs-lead` | 18px | lead paragraphs |
| `--fs-title` | 32px | page title |

Labels are uppercase with `.14em` tracking; keep that pairing or they look accidental. To self-host, drop `.woff2` files in `assets/fonts/` and write an `@font-face`.
{% endraw %}
