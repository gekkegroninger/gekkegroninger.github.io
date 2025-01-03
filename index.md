---
layout: home
title: Welcome
---

{% for pg in site.pages %}
- <a href="{{ pg.url }}">{{ pg.title }}</a>
{% endfor %}