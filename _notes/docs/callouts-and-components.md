---
title: Callouts and components
description: Callouts, stage badges and doc lists you can drop into any note.
date: 2026-10-01
updated: 2026-10-01
stage: budding
topics: [docs]
tags: [components, reference]
---
{% raw %}
Callout types: `note`, `tip`, `warning`, `deal`.
{% endraw %}

{% include callout.html type="note" text="A **note** is neutral gray." %}
{% include callout.html type="tip" title="Tip" text="Tips use the green tint and border." %}
{% include callout.html type="warning" text="Warnings get a heavy ink border." %}
{% raw %}
Other includes:
- `{% include stage.html stage="budding" %}` renders a badge.
- `{% include doc-list.html docs=some_array %}` renders a linked list.
- Buttons and chips are plain HTML: `<a class="btn btn-primary">Visit</a>`.
{% endraw %}
