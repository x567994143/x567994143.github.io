import comp from "D:/ACode/my-blog/src/.vuepress/.temp/pages/blog/1.html.vue"
const data = JSON.parse("{\"path\":\"/blog/1.html\",\"title\":\"我的第一篇博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的第一篇博客\",\"date\":\"2024-10-20T00:00:00.000Z\",\"description\":\"这是我的第一篇博客 别看了，什么内容都没有[doge]\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/blog/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"我的第一篇博客\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"这是我的第一篇博客 别看了，什么内容都没有[doge]\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-10-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"我的第一篇博客\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-10-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"森萤之火\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"这是我的第一篇博客\",\"slug\":\"这是我的第一篇博客\",\"link\":\"#这是我的第一篇博客\",\"children\":[]}],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"blog/1.md\",\"localizedDate\":\"2024年10月20日\",\"excerpt\":\"<h3>这是我的第一篇博客</h3>\\n<p>别看了，什么内容都没有[doge]</p>\\n\",\"autoDesc\":true}")
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
