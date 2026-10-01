---
title: Embeds guide
description: Video, code, audio, tweets and arbitrary iframes with one include.
date: 2026-10-01
updated: 2026-10-01
stage: evergreen
topics: [docs]
tags: [embeds, reference]
---
{% raw %}
`include embed.html` takes a `type` plus provider-specific parameters.

| type | parameters |
|---|---|
| youtube | id, caption, ratio |
| vimeo | id, caption, ratio |
| codepen | id as user/pen, height |
| gist | id as user/hash |
| spotify | id as track/xyz, height |
| tweet | id as full tweet URL |
| iframe | url, ratio, caption |
| image | url, caption |
| figma | url (file link), ratio |
| loom | id |
| linkcard | url, title, description |

Example:
```liquid
{% include embed.html type="youtube" id="dQw4w9WgXcQ" caption="A caption" %}
```

Live demo, an image placeholder:
{% endraw %}

{% include embed.html type="iframe" url="about:blank" ratio="21/9" caption="iframe placeholder · replace with any URL" %}
{% raw %}
Live demo of the custom **linkcard** type:
{% endraw %}
{% include embed.html type="linkcard" url="https://jekyllrb.com" title="Jekyll" description="Transform your plain text into static websites." %}
{% raw %}

Embeds are lazy-loaded, framed with a hairline border and captioned in the label style. YouTube uses the privacy-friendly nocookie domain.

To add a provider, add a `{% when "name" %}` branch in `_includes/embed.html`.
{% endraw %}
