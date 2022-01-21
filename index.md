---
layout: default
title: "GNOOO"
---
<h2 class="button-text">Oh, no, è arrivata la soundboard di Cardone</h2>

<div class="button-container">
{% assign sounds = site.static_files | where: "sound", true %}
    {% for sound in sounds %}
    <div class="button">
        <div class="pushable-area">
            <div class="round button-skin"></div>
            <div class="button-shape" onmousedown="play('{{site.baseurl}}{{sound.path}}')"></div>
            <div class="button-shadow"></div>
        </div>
        <p class="button-text">{{sound.basename}}</p>
    </div>
    {% endfor %}
</div>

&nbsp;
<div class="button-container large">
    <div class="button" style="text-align:center">
        <div class="pushable-area">
            <div class="round button-skin" style="background-color:#FF0000;"></div>
            <div class="button-shape" onmousedown="stopAll()"></div>
            <div class="button-shadow"></div>
        </div>
        <h3 class="button-text">STOP!</h3>
    </div>
</div>