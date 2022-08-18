# Re:Phiedit 指南

重构 RPE 说明书结构，优化阅读体验，本项目旨在提升 RPE 说明书的易懂程度

## 快速开始

- [在线阅读](https://rpe.chinq.xyz/)

- 离线阅读（推荐，因为目前图片加载的速度还不够优秀）：

```sh
git clone https://github.com/CQBerry/RPE-Guide.git --depth 1

cd RPE-Guide

yarn

yarn dev
```

将会在本地开启服务器，之后通过浏览器访问即可（默认地址 `localhost:8080`）

## 参与贡献

我希望与更多人一起维护本指南，你可以对文章中不合理的部分进行修改、可以补充我描述不全面的部分、你甚至可以写一个新的页面！只要理由足够合理，我就会听取你的建议

1. Fork 本仓库；

2. 修改页面或撰写新页面

如有图片请使用 [AVIF](https://avif.io) 格式，并放置在 `docs/.vuepress/public/assets/imgs/contents/` 下；

> 如果是撰写新页面，请同时在 `docs/.vuepress/sidebar.ts` 中添加该页面的索引（格式请参考 [sidebar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar)），并在页面的 Frontmatter 部分中添加相应的 [前后页面链接](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#prev)（使用相对路径）

3. 提交 [Pull request](https://docs.github.com/pull-requests)，并说明修改的理由（或者新页面的作用）；

4. 等待 review，如有修改意见，请按照修改意见修改；

5. 大功告成！
