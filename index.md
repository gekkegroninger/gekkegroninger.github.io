---
layout: home
title: Welcome
---

{% for pg in site.pages %}
<a href="{{ pg.url }}" class="btn btn-primary px-4 me-md-2 rounded-pill">{{ pg.title }}</a>
{% endfor %}