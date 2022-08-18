---
next: ./prepare/
---
# 前言

本项目为兴趣使然，目前由[我](https://www.chinq.xyz/)一人撰写，会有疏漏的地方还请谅解

## 参与贡献

我希望与更多人一起维护本指南，你可以对文章中不合理的部分进行修改、可以补充我描述不全面的部分、你甚至可以写一个新的页面！只要理由足够合理，我就会听取你的建议

1. Fork 本仓库

2. 修改页面或撰写新页面（页面中请全部使用相对路径）

::: tip
如有图片请使用 [AVIF](https://avif.io) 格式，并放置在 `docs/.vuepress/public/assets/imgs/contents/` 下

如果是撰写新页面，请同时在 `docs/.vuepress/sidebar.ts` 中添加该页面的索引（格式请参考 [sidebar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar)），并在页面的 Frontmatter 部分中添加相应的 [前后页面链接](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#prev)
:::

3. 提交 [Pull request](https://docs.github.com/pull-requests)，并说明修改的理由（或者新页面的作用）

4. 等待 review，如有修改意见，请按照修改意见修改

5. 大功告成 🥰

## 图片问题

本文档因图片较多，为压缩图片体积，图片均采用 AVIF 格式存储，若无法加载图片，请参考 [caniuse](https://caniuse.com/avif) 更换浏览器。

如果您是 Windows 8 及以上用户，请在 Microsoft Store 中下载 [AV1 视频扩展](https://www.microsoft.com/store/productId/9MVZQVXJBQ9V)

### 离线阅读

推荐使用离线阅读，目前图片的加载速度还不够优秀

```sh
git clone https://github.com/CQBerry/RPE-Guide.git --depth 1

cd RPE-Guide

yarn install # 安装依赖

yarn dev # 开启本地服务器，默认端口 8080
```

## 版权

本文档所有页面，除特殊声明外，均采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议

在该许可协议下，您可以自由地：

- **共享**：在任何媒介以任何形式复制、发行本作品

- **演绎**：修改、转换或以本作品为基础进行创作（在任何用途下，甚至商业目的）

但您需要遵循以下条件：

- **署名**：您必须给出[适当的署名](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式来署名，但是不得以任何方式暗示许可人为您或您的使用背书

- **相同方式共享**：如果您再混合、转换或者基于本作品进行创作，您必须基于 [与原先许可协议相同的许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 分发您贡献的作品

- **没有附加限制** — 您不得使用法律术语或者技术措施 从而限制其他人做许可协议允许的事情
