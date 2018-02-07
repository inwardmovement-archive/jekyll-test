---
title: Applications
layout: applications
---

<div class="grid-apps">

  {% for app in site.data.applications %}

  <div class="card">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">{{ app.name }}</h4>
      <p class="card-text">{{ app.description }}</p>
      <a href="{{ app.url }}" class="btn btn-primary">Visit</a>
    </div>
  </div>

  {% endfor %}

</div>
