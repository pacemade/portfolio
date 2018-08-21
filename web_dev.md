---
layout: default
---

<div class="portrait" markdown="1" >
  ![Project](/assets/images/portraits/hello_world.png)
  <h2> HTML | CSS | Javascript | Ruby on Rails | ReactJS </h2>
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
