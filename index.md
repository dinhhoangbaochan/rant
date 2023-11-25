---
layout: default
title: Hello, Chan Dinh!
---

# Welcome to My Blog

Here you'll find my thoughts, insights, and experiences.

## Recent Posts

{% for post in site.posts %}
  * [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
