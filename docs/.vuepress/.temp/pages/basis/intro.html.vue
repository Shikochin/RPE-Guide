<template><div><h1 id="🌟-了解谱面" tabindex="-1"><a class="header-anchor" href="#🌟-了解谱面" aria-hidden="true">#</a> 🌟 了解谱面</h1>
<h2 id="时间概念" tabindex="-1"><a class="header-anchor" href="#时间概念" aria-hidden="true">#</a> 时间概念</h2>
<p>首先，在 RPE 中，除可视时间外的<strong>一切时间</strong>的记录方式都是带分数 <code v-pre>a:b/c</code> ， 意为时刻 拍</p>
<p>每个谱面拥有一个 BPM 列表，由其得到第拍与秒时间的换算关系</p>
<h2 id="组成" tabindex="-1"><a class="header-anchor" href="#组成" aria-hidden="true">#</a> 组成</h2>
<ul>
<li><RouterLink to="/inside-chart/line.html"><strong>判定线</strong>（Line）</RouterLink>
<ul>
<li><RouterLink to="/inside-chart/note.html"><strong>音符</strong>（Note）</RouterLink></li>
<li><RouterLink to="/inside-chart/event.html"><strong>事件</strong>（Event）</RouterLink></li>
</ul>
</li>
</ul>
<p>一张谱面由若干条<strong>判定线</strong>组成，每条判定线上有若干<strong>音符</strong>以及若干<strong>事件</strong></p>
<p>判定线上的音符会从极远处始终沿与判定线垂直的方向移动，并在某个时刻恰好落到判定线的某处并被打击。事件分为若干种类，每一条判定线会按照时间顺序执行其上的每一种事件下所属的事件，事件可能会影响判定线的位置，角度，透明度，以及其上音符的基准速度等等</p>
</div></template>
