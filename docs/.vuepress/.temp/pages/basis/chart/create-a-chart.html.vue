<template><div><h1 id="创建一个谱面" tabindex="-1"><a class="header-anchor" href="#创建一个谱面" aria-hidden="true">#</a> 创建一个谱面</h1>
<h2 id="运行-rpe" tabindex="-1"><a class="header-anchor" href="#运行-rpe" aria-hidden="true">#</a> 运行 RPE</h2>
<p>在 RPE 目录下找到一个叫做 <code v-pre>Phiedit.exe</code> 的可执行文件，双击打开即可</p>
<h2 id="rpe-主界面" tabindex="-1"><a class="header-anchor" href="#rpe-主界面" aria-hidden="true">#</a> RPE 主界面</h2>
<p><img src="/assets/img/content/RPE主界面.avif" alt="RPE 主界面"></p>
<p>这是 RPE 的主界面，分为三个部分，从左到右分别是：</p>
<ul>
<li>导出、导入、添加谱面
<ul>
<li>导出：导出谱面会在 <code v-pre>[RPE 目录]/Resources</code> 目录下导出打包好的 PEZ（打包的谱面） 文件</li>
<li>导入：导入谱面可以导入 PEZ 文件</li>
<li>添加：选择音乐文件（MP3，WAV 或 OGG）和图片文件（JPG / JPEG 或 PNG），并填写谱面相关信息。之后会在 <code v-pre>[RPE 目录]/Resources</code> 目录下生成一个由随机生成的八位数字为名的文件夹，里面存放了选择的音乐文件、图片文件和一个空谱面文件</li>
</ul>
</li>
<li>谱面列表
<ul>
<li>使用鼠标滚轮可以上下切换歌曲</li>
</ul>
</li>
<li>谱面基本信息
<ul>
<li>点击编辑即可编辑谱面信息</li>
</ul>
</li>
</ul>
<p><img src="/assets/img/content/编辑谱面信息界面.avif" alt="编辑谱面信息界面"></p>
<ul>
<li>点击删除将会在谱面列表中删除该谱面，但并不会删除 <code v-pre>[RPE 目录]/Resources</code> 目录下的谱面文件夹</li>
</ul>
<h2 id="创建谱面" tabindex="-1"><a class="header-anchor" href="#创建谱面" aria-hidden="true">#</a> 创建谱面</h2>
<p>点击添加谱面，选择好音乐文件和谱面文件后，填写相关信息即可完成谱面的创建（若出现问题，请参阅 <RouterLink to="/prepare/preparetion.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题/添加谱面闪退</RouterLink>）</p>
<p><img src="/assets/img/content/填写谱面信息.avif" alt="填写谱面信息"></p>
<p>相关信息：</p>
<ul>
<li>谱面名称</li>
<li>作曲者</li>
<li>谱面设计</li>
<li>基础 <a href="https://zh.wikipedia.org/wiki/%E9%80%9F%E5%BA%A6_(%E9%9F%B3%E6%A8%82)#%E9%87%8F%E5%BA%A6%E9%9F%B3%E6%A8%82%E9%80%9F%E5%BA%A6" target="_blank" rel="noopener noreferrer">BPM<ExternalLinkIcon/></a>：可通过导入 <a href="https://m.mugzone.net/" target="_blank" rel="noopener noreferrer">Malody<ExternalLinkIcon/></a> 测得，非常重要，请务必填写准确</li>
</ul>
<p>创建好后将会直接进入编辑谱面的区域</p>
</div></template>
