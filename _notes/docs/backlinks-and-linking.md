---
title: "Backlinks and linking"
description: "How notes connect without a plugin."
date: 2026-10-01
updated: 2026-10-01
stage: budding
topics: [docs]
tags: [linking, backlinks]
---
{% raw %}
Link with ordinary Markdown links to the final URL: `[About this theme](/notes/docs/about-this-theme/)`.

At build time `backlinks.html` scans every document for the current page's URL and lists matches under **Linked from**. Check the bottom of [About this theme](/notes/docs/about-this-theme/): this note appears there.

## Caveats
- Backlinks match on the full URL string, so write links in full.
- With thousands of notes the scan slows builds. See [Scaling your garden](/notes/docs/scaling-your-garden/).
- Disable globally with `garden.show_backlinks: false`.
{% endraw %}
