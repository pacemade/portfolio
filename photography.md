---
layout: default
---


<h1>This is the photography page</h1>

{% for gallery in site.data.galleries %}
- [{{ gallery.id  }}]({{ gallery.id }})
{% endfor %}
