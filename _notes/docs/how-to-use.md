---
title: "How to use it"
description: "From clone to first published note in ten minutes."
date: 2026-10-01
updated: 2026-10-01
stage: evergreen
topics: [docs]
tags: [theme, start-here]
---
{% raw %}
## 1. Run it
```bash
bundle install
bundle exec jekyll serve --livereload
```
Open http://localhost:4000.

## 2. Make it yours
1. Edit `title`, `tagline`, `author` and `url` in `_config.yml`.
2. Replace the placeholder notes. Keep the `docs/` folder until you no longer need it, then delete `_notes/docs/`.
3. Update the sidebar in `_data/navigation.yml`.

## 3. Write a note
Create `_notes/my-first-idea.md`:
```markdown
---
title: My first idea
date: 2026-10-02
stage: seedling
topics: [thinking]
tags: [draft]
---
Write here. Link to [another note](/notes/docs/about-this-theme/).
```
It appears at `/notes/my-first-idea/`, in the tag index, and on the home page.

See [Front matter reference](/notes/docs/front-matter-reference/) for every field.
{% endraw %}
