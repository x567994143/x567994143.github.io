export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>这是个人介绍页</p>\n","r":{"minutes":0.06,"words":17},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"森萤之火的博客","i":"home"} }],
  ["/blog/1.html", { loader: () => import(/* webpackChunkName: "blog_1.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/blog/1.html.js"), meta: {"d":1729382400000,"l":"2024年10月20日","e":"<h3>这是我的第一篇博客</h3>\n<p>别看了，什么内容都没有[doge]</p>\n","r":{"minutes":0.11,"words":32},"t":"我的第一篇博客","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/blog/index.html.js"), meta: {"t":"Blog"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/ACode/my-blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
