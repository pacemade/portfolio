---
layout: default
---

<div class="portrait" markdown="1" >
  ![Project](/assets/images/portraits/sonyA7.jpg)
  <h2> HTML | CSS | Javascript | Ruby on Rails  </h2>
</div>

<div class="album-container">

{% for project in site.data.projects %}

  <div class="album" markdown="1" >
  <a href="projects/{{ project.id }}.html">
  ![{{ project.id }}]({{ project.imagefolder }}/{{project.images[0].name }})
  </a>
    {{ project.title }}
  </div>

{% endfor %}

</div>
