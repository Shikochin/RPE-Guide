<template><div><h1 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h1>
<h2 id="获取" tabindex="-1"><a class="header-anchor" href="#获取" aria-hidden="true">#</a> 获取</h2>
<p>RPE 目前处于公测状态，需要在 <a href="https://space.bilibili.com/252635690/dynamic" target="_blank" rel="noopener noreferrer">cmdysj 的动态<ExternalLinkIcon/></a> 中获取加入 QQ 频道的链接，在频道中下载 RPE</p>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<ul>
<li>运行 RPE 时报错，提示缺少 DLL 文件
<ul>
<li>需要安装 <a href="https://docs.microsoft.com/cpp/windows/latest-supported-vc-redist" target="_blank" rel="noopener noreferrer">Microsoft Visual C++ Redistributable<ExternalLinkIcon/></a> 和 <a href="https://www.microsoft.com/zh-CN/download/confirmation.aspx?id=35" target="_blank" rel="noopener noreferrer">DirectX 9<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>RPE 窗口过大
<ul>
<li>打开 RPE 目录下的 <code v-pre>Settings.txt</code>，按照实际情况减小 <code v-pre>WindowSize</code> 后的值，保存并重启软件</li>
</ul>
</li>
<li>字体问题
<ul>
<li>请安装 <code v-pre>[RPE 目录]/Resources/fonts</code> 内的全部字体</li>
</ul>
</li>
<li>添加谱面闪退
<ul>
<li>可能是使用的音乐或者图片文件格式错误（常见于直接改变文件后缀名）
<ul>
<li>解决方法：使用格式转换工具转换（例如 <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer">ffmpeg<ExternalLinkIcon/></a>）</li>
</ul>
</li>
<li>可能是存放 RPE 的文件夹路径包含中文
<ul>
<li>解决方法：移动到不含中文的目录中</li>
</ul>
</li>
<li>可能是添加谱面时，没有输入基础 BPM
<ul>
<li>解决方法：请至少填入一个正整数作为 BPM</li>
</ul>
</li>
</ul>
</li>
</ul>
</div></template>
