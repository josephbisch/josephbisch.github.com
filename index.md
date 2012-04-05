---
layout: page
title: Home
tagline: 
---
{% include JB/setup %}

<div class="row-fluid">
  <div class="span4"><a href="http://github.com/josephbisch">Fork me on GitHub</a></div>
</div>
    
## Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


