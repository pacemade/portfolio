---
layout: default
---

<div class="portrait" markdown="1" >
  ![Sony A7](/assets/images/photography/sonyA7.jpg)
  <h2> Sony A7 | 35mm  </h2>
</div>

<div class="album-container">

{% for gallery in site.data.galleries %}

  <div class="album" markdown="1" >
  <a href="{{ gallery.id }}">
  ![{{ gallery.id }}]({{ gallery.imagefolder }}/{{gallery.images[0].name }})
  </a>
    {{ gallery.id }}
  </div>

{% endfor %}

</div>
