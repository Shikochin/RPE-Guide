<template><div><h1 id="🌟-批量编辑基础" tabindex="-1"><a class="header-anchor" href="#🌟-批量编辑基础" aria-hidden="true">#</a> 🌟 批量编辑基础</h1>
<p>在本页，您将会学习到对于音符和事件的初级批量编辑</p>
<p>按住 CTRL，点击音符，可以将该音符加入多选，或从多选音符中拿出</p>
<p><img src="/assets/img/content/单击多选音符演示.avif" alt="单击多选音符演示"></p>
<p>按住 SHIFT 键，点击鼠标左键，移动鼠标位置（此时可以松开 SHIFT），会出现绿色的多选框跟随鼠标的位置变化</p>
<p>再次按住 SHIFT 键点击鼠标左键结束框选，被框到的所有音符都会加入多选</p>
<p>点击 ESC 可以拿出所有多选的音符</p>
<p><img src="/assets/img/content/多选音符第一阶段演示.avif" alt="多选音符第一阶段演示"></p>
<p><img src="/assets/img/content/多选音符第二阶段演示.avif" alt="多选音符第二阶段演示"></p>
<p>多选后信息窗口会出现 <em><strong>多音符编辑</strong></em>，我们暂且不介绍</p>
<p>多选后：</p>
<ul>
<li>
<p>CTRL + C 为复制</p>
</li>
<li>
<p>CTRL + X 为剪切</p>
</li>
<li>
<p>移动鼠标，按下 CTRL + V 粘贴剪切板内的音符（对齐方式是将剪切板中的时间最早的音符与鼠标所在位置最近的横线对齐）</p>
</li>
</ul>
<p><img src="/assets/img/content/粘贴演示.avif" alt="粘贴演示"></p>
<ul>
<li>CTRL + B 为镜像粘贴， 即将剪切板内所有音符 X 坐标取反后粘贴（可以跨线粘贴）</li>
</ul>
<p><img src="/assets/img/content/镜像粘贴演示.avif" alt="镜像粘贴演示"></p>
<ul>
<li>
<p>使用方向键（上下左右）操控，左右每次移动半个竖线间距，上下移动一个横线间距</p>
</li>
<li>
<p>ALT + V 为数值粘贴，使用此功能能在粘贴事件时不会新建事件，而是将时间能够吻合的事件相应的修改（<strong>相加</strong>）。配合切割可以 将不同层级的事件合在一起</p>
</li>
</ul>
<p><img src="/assets/img/content/数值粘贴演示.avif" alt="数值粘贴演示"></p>
<ul>
<li>ALT + F 可以跳到多选内容的起始位置，ALT + G 可以跳到多选内容的结束位置</li>
</ul>
<p>按下删除、Delete 键或 D 键和鼠标右键可以删除掉所有多选的音符</p>
<p>以上对于音符的多选编辑<strong>对于事件也是完全一样的</strong>（除了没有 <em><strong>镜像复制</strong></em>），故不再赘述，下面介绍<strong>只对于音符多编辑有效的 <em>执行列表</em></strong>（关于执行列表的介绍，详见 <RouterLink to="/basis/UI/tools-bar.html">工具栏</RouterLink>）</p>
<p>多选音符，选择执行项，点击执行按钮（手型按钮）会导致如下变化：</p>
<ul>
<li>MirrorY：多选的每个音符按照 Y 轴翻转（以下省略 <strong>多选的</strong>）</li>
</ul>
<p><img src="/assets/img/content/MirrorY演示.avif" alt="MirrorY演示"></p>
<ul>
<li>MirrorMid：每个音符按照选中的中心（排序后中间音符的 <mjx-container class="MathJax" jax="SVG" style="direction: ltr;"><svg style="overflow: visible; min-height: 1px; min-width: 1px; vertical-align: 0;" xmlns="http://www.w3.org/2000/svg" width="1.928ex" height="1.545ex" role="img" focusable="false" viewBox="0 -683 852 683"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44B" d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z" style="stroke-width: 3;"/></g></g></g></svg></mjx-container> 坐标）翻转</li>
</ul>
<p><img src="/assets/img/content/MirrorMid演示.avif" alt="MirrorMid演示"></p>
<ul>
<li>SideSwitch：每个音符反转下落方向</li>
</ul>
<p><img src="/assets/img/content/SideSwitch演示.avif" alt="SideSwitch演示"></p>
<ul>
<li>SideUp/Down：音符下落方向全部置为 Up / Down</li>
</ul>
<p><img src="/assets/img/content/SideUp演示.avif" alt="SideUp演示"></p>
<p><img src="/assets/img/content/SideDown演示.avif" alt="SideDown演示"></p>
<ul>
<li>
<p>ToReal/Fake 音符全部置为真 / 假音符</p>
</li>
<li>
<p>ToTap/Flick/Drag 全部置为 Tap / Flick / Drag 音符，<strong>对 Hold 无效</strong></p>
</li>
</ul>
<p><img src="/assets/img/content/ToFlick演示.avif" alt="ToFlick演示"></p>
<ul>
<li>AttachX 每个音符吸附到最近的竖线上（可用于修改竖线条数后的维护）</li>
</ul>
<p><img src="/assets/img/content/AttachX演示.avif" alt="AttachX演示"></p>
</div></template>
