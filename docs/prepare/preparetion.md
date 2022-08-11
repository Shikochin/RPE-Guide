# 准备工作

## 获取

RPE 目前处于公测状态，需要在 [cmdysj 的动态](https://space.bilibili.com/252635690/dynamic) 中获取加入 QQ 频道的链接，在频道中下载 RPE

## 常见问题

- 运行 RPE 时报错，提示缺少 DLL 文件
  - 需要安装 [Microsoft Visual C++ Redistributable](https://docs.microsoft.com/cpp/windows/latest-supported-vc-redist) 和 [DirectX 9](https://www.microsoft.com/zh-CN/download/confirmation.aspx?id=35)
- RPE 窗口过大
  - 打开 RPE 目录下的 `Settings.txt`，按照实际情况减小 `WindowSize` 后的值，保存并重启软件
- 字体问题
  - 请安装 `[RPE 目录]/Resources/fonts` 内的全部字体
- 添加谱面闪退
  - 可能是使用的音乐或者图片文件格式错误（常见于直接改变文件后缀名）
    - 解决方法：使用格式转换工具转换（例如 [ffmpeg](https://ffmpeg.org/)）
  - 可能是存放 RPE 的文件夹路径包含中文
    - 解决方法：移动到不含中文的目录中
  - 可能是添加谱面时，没有输入基础 BPM
    - 解决方法：请至少填入一个正整数作为 BPM
