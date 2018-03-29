---
layout: default
---

<div class="portrait" markdown="1" >
  ![Sony A7](/assets/images/photography/sonyA7.jpg)
</div>

{% for gallery in site.data.galleries %}
  [{{ gallery.id  }}]({{ gallery.id }})
  <div class="gallery" markdown="1" >
  ![{{ gallery.id }}]({{ gallery.imagefolder }}/{{gallery.images[0].name }})
  </div>
{% endfor %}
