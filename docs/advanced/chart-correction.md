---
prev: ../basis/others/settings
---

# 🌟 谱面纠错

在本页您将会学习怎样读懂谱面纠错信息，以及如何利用纠错信息**改善谱面**。

在功能区点击 ***谱面纠错***，出现如下界面：

![谱面纠错和三个 Error](/assets/imgs/contents/谱面纠错和三个Error.avif)

纠错信息按所属分为音符、事件、其他，按严重等级分为 *Error*（错误，红色），*Warning*（警告，黄色），*Caution*（注意，绿色）。如果谱面有 Error，则纠错指示器的第一条线会变红，提醒你去查看谱面纠错。

点击隐藏警告勾选框可以只显示 Error 信息，其上方显示了 Error，Warning，Caution 的个数。

如上图，$3\frac{3}{4}$ 拍处的 Flick 音符与 $4\frac{1}{4}$ 的 Tap 音符构成了一个 Error，对 Flick 音符的点滑会导致 Tap 音符被判定为 Good。

点击跳转会将全局时间以及视野与发生纠错的位置对齐（下图对齐了 $3\frac{3}{4}$ 拍的 Flick 音符）：

![谱面纠错跳转](/assets/imgs/contents/谱面纠错跳转.avif)

如果是事件下的纠错信息，还会显示事件所属的层级（Layer）。

::: warning
一般来说，Error 基本需要改正，Warning 要仔细排查，Caution 作为参考。
:::

## 纠错种类列表

### 音符

- Error: Time Out of Range：音符的时间超过范围（$< 0$ 或大于音乐时长），跳转会自动选择该音符。
- Error: Tap&Hold / Tap&Tap / Hold&Hold Overlapped：两个等时的音符相撞，碰撞检测距离可设置（请参阅 [纠错相关](../basis/others/settings.md#纠错相关-待考究与修缮)）。
- Error: Tap After Flick($n$ ms)：检测到会导致严重问题的 Flick 音符接 Tap 音符。
- Warning: Note Judged OutScreen：音符判定的位置在可视屏幕外。
- Warning: Tap After Drag($n$ ms)：检测到会导致严重问题的 Drag 音符接 Tap 音符。
- Caution: X Too Large：音符的 $X$ 坐标绝对值过大（超过设置中的 X 大小阈值，请参阅 [纠错相关](../basis/others/settings.md#纠错相关-待考究与修缮)）。
- Caution: Short Readtime($n$ ms)：音符读谱时间过短（小于设置中的读谱事件下界，请参阅 [纠错相关](../basis/others/settings.md#纠错相关-待考究与修缮)）。
- Caution: Hold Sticked?：两个 $X$ 坐标同号的 Hold 音符的头尾相连（或交叉，请参阅 [纠错相关](../basis/others/settings.md#纠错相关-待考究与修缮)）。
- Caution: Tap After Flick?($n$ ms)：检测到很可能导致手感问题的 Flick 音符接 Tap 音符。
- Caution: Tap After Drag?($n$ ms) 检测到很可能导致手感问题的 Drag 音符接 Tap 音符。

### 事件

- Error: Event Time Out of Range：事件的时间超过范围（$< 0$ 或大于音乐时长），跳转会自动选择该事件。
- Error: illegal xxx Event：非法事件，结束时间小于等于开始时间，跳转会自动选择该事件。
- Error: xxx Event OverLapped：两个同层同类的事件在时间上重叠。
- Warning: Alpha Event Over Range：Alpha 事件的头部或尾部不在 $[0,255]$ 范围内。
- Caution: Too Many Linear MoveX/MoveY/Rotate：该线上该种事件中线性缓动的占比过大。
- Caution: separated MoveX/MoveY Event：不等时的 MoveX/MoveY 事件。

### 其他

- Caution: Customized Note Size：音符宽度不为 1.0。
- Caution: Using Fake Note：使用了假音符。
- Caution: Customized Visible Time：使用了自定义音符可视时间。
