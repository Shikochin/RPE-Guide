# 🌟 批量编辑基础

在本页，您将会学习到对于音符和事件的初级批量编辑。

按住 CTRL，点击音符，可以将该音符加入多选，或从多选音符中拿出。

![单击多选音符](/assets/imgs/contents/单击多选音符.avif)

按住 SHIFT 键，点击鼠标左键，移动鼠标位置（此时可以松开 SHIFT），会出现绿色的多选框跟随鼠标的位置变化。

再次按住 SHIFT 键点击鼠标左键结束框选，被框到的所有音符都会加入多选。

点击 ESC 可以拿出所有多选的音符。

![多选音符第一阶段](/assets/imgs/contents/多选音符第一阶段.avif)

![多选音符第二阶段](/assets/imgs/contents/多选音符第二阶段.avif)

多选后信息窗口会出现 ***多音符编辑***，我们暂且不介绍。

多选后：

- CTRL+C：复制。
- CTRL+X：剪切。
- 移动鼠标，按下 CTRL+V 粘贴剪切板内的音符（对齐方式是将剪切板中的时间最早的音符与鼠标所在位置最近的横线对齐）。

![粘贴](/assets/imgs/contents/粘贴.avif)

- CTRL+B 为镜像粘贴，即将剪切板内所有音符 $X$ 坐标取反后粘贴（可以跨线粘贴）。

![镜像粘贴](/assets/imgs/contents/镜像粘贴.avif)

- 使用方向键操控，左右每次移动半个竖线间距，上下移动一个横线间距。
- ALT+V 为数值粘贴，使用此功能能在粘贴事件时不会新建事件，而是将时间能够吻合的事件相应的修改（***相加***）。配合切割可以将不同层级的事件合在一起。

![数值粘贴](/assets/imgs/contents/数值粘贴.avif)

- ALT+F 可以跳到多选内容的起始位置，ALT+G 可以跳到多选内容的结束位置。

按下删除、Delete 键或 D 键和鼠标右键可以删除掉所有多选的音符。

以上对于音符的多选编辑**对于事件也是完全一样的**（除了没有 ***镜像复制***），故不再赘述。下面介绍**只对于音符多编辑有效的 *执行列表***（关于执行列表的简介，请参阅 [工具栏](../UI/tools-bar.md)）。

多选音符，选择执行项，点击执行按钮（手型按钮）会导致如下变化：

- ***MirrorY***：多选的每个音符按照 Y 轴翻转（以下省略 **多选的**）。

![MirrorY](/assets/imgs/contents/MirrorY.avif)

- ***MirrorMid***：每个音符按照选中的中心（排序后中间音符的 $X$ 坐标）翻转。

![MirrorMid](/assets/imgs/contents/MirrorMid.avif)

- ***SideSwitch***：每个音符反转下落方向。

![SideSwitch](/assets/imgs/contents/SideSwitch.avif)

- ***SideUp / Down***：音符下落方向全部置为 Up / Down。

![SideUp](/assets/imgs/contents/SideUp.avif)

![SideDown](/assets/imgs/contents/SideDown.avif)

- ***ToReal / Fake*** 音符全部置为真 / 假音符。
- ***ToTap / Flick / Drag*** 全部置为 Tap / Flick / Drag 音符（**对 Hold 音符无效**）。

![ToFlick](/assets/imgs/contents/ToFlick.avif)

- ***AttachX*** 每个音符吸附到最近的竖线上（可用于修改竖线条数后的维护）。

![AttachX](/assets/imgs/contents/AttachX.avif)
