---
layout: home
title: Welcome
show: oke
---

<ul>
{% for pg in site.pages %}
{%- if pg.show == "oke" -%}
<li><a href="{{ pg.url }}">{{ pg.title }}</a></li>
{%- endif -%}
{% endfor %}
</ul>