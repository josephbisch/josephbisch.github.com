---
layout: page
title: Home
tagline: 
---
{% include JB/setup %}

<div class="row-fluid">
  <div class="span4">
    <h2>Who is Joseph Bisch?</h2>
      <p>I am a student majoring in Computer Engineering with a minor in Electrical Engineering at <a href="http://www.newhaven.edu/">University of New Haven</a>.</p>
      <p><a href="http://www.newhaven.edu/">University of New Haven</a> is located in West Haven, CT.</p>
  </div>
  <div class="span4">
    <h2>My Projects</h2>
      <p>See some of the projects I am working on at <a href="projects.html">my projects</a>.</p>
  </div>
</div>

<hr>
    
## Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


