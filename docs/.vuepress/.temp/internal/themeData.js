export const themeData = JSON.parse("{\"contributorsText\":\"贡献者\",\"notFound\":[\"未找到请求的页面\"],\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"backToHome\":\"返回首页\",\"toggleColorMode\":\"切换明暗模式\",\"lastUpdated\":\"上次更新\",\"repo\":\"CQBerry/RPE-Guide\",\"docsDir\":\"docs\",\"editLinkText\":\"在 Github 上编辑此页\",\"logo\":\"/assets/img/logo.png\",\"sidebar\":[{\"text\":\"准备\",\"collapsable\":false,\"link\":\"/prepare/\",\"children\":[\"/prepare/intro\",\"/prepare/preparetion\"]},{\"text\":\"基础\",\"collapsable\":false,\"children\":[{\"text\":\"谱面\",\"link\":\"/basis/chart/\",\"children\":[\"/basis/chart/create-a-chart\",\"/basis/chart/intro\"]},{\"text\":\"谱面之下\",\"link\":\"/basis/inside-chart/\",\"children\":[\"/basis/inside-chart/line\",\"/basis/inside-chart/note\",\"/basis/inside-chart/event\"]},{\"text\":\"UI 界面\",\"link\":\"/basis/UI/\",\"children\":[\"/basis/UI/tools-bar\",\"/basis/UI/progress-bar\",\"/basis/UI/play-interface\",\"/basis/UI/edit-window\",\"/basis/UI/indicator\",\"/basis/UI/functions\",\"/basis/UI/status-bar\"]},{\"text\":\"写谱\",\"link\":\"/basis/charting/\",\"children\":[\"/basis/charting/edit-notes\",\"/basis/charting/edit-events\",\"/basis/charting/batch-edit-basics\",\"/basis/charting/judgment-line-management\"]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"openInNewWindow\":\"open in new window\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
