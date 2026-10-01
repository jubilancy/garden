---
title: "Front matter reference"
description: "Every field the layouts understand."
date: 2026-10-01
updated: 2026-10-01
stage: evergreen
topics: [docs]
tags: [reference, front-matter]
---
{% raw %}
| Field | Type | Used by | Notes |
|---|---|---|---|
| `title` | string | all | Required |
| `description` | string | lists, meta | One sentence |
| `date` | YYYY-MM-DD | lists, sorting | "planted" |
| `updated` | YYYY-MM-DD | lists | "tended"; overrides date in lists |
| `stage` | seedling, budding, evergreen | note | Defaults per collection |
| `topics` | list | taxonomy | Broad shelves, 5 to 15 total |
| `tags` | list | taxonomy | Specific handles, grow freely |
| `series` | string | note meta | Group multi-part writing |
| `status` | string | projects | e.g. active, paused, shipped |
| `featured` | boolean | home | Shows under Featured |
| `draft` | boolean | everywhere | true hides it from lists, search, backlinks |
| `toc` | boolean | note | false hides the contents panel |
| `cover` | path | note | Image under /assets/images |
| `permalink` | path | all | Override the generated URL |

Collection defaults (layout, starting stage) live under `defaults:` in `_config.yml`.
{% endraw %}
