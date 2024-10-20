import comp from "D:/ACode/my-blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"森萤之火的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"森萤之火的博客\",\"heroImage\":\"avatar.jpg\",\"heroText\":\"一名鶸的blog\",\"heroFullScreen\":true,\"tagline\":\"Cofun\",\"projects\":null,\"footer\":\"自定义你的页脚文字\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.6,\"words\":179},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
