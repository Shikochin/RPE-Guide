export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Re:Phiedit 指南\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/assets/img/logo.png\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/img/logo.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
