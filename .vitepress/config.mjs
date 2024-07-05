import { defineConfig } from "vitepress";
//import {algolia} from "./js/algolia.js";
//import {carbonAds} from "./js/carbonAds.js";
import { footer } from "./js/footer.js";
import { head } from "./js/head.js";
import { nav } from "./js/nav.js";
import { search } from "./js/search.js";
import { sidebar } from "./js/sidebar.js";
import { socialLinks } from "./js/socialLinks.js";
import { markdown } from "./js/markdown.js";

export default defineConfig({
  lang: "zh-CN",
  base: "/",
  title: "思行工坊",
  titleTemplate: ":title - 字里行间，代码生辉｜开发者的创意工坊",
  description: "我的博客与文档网站,包含各种开发文档以及免费的在线CDN字体。",
  cleanUrls: true, //清理url
  outDir: "./dist", //输出目录
  assetsDir: "./assets", //静态资源目录
  cacheDir: "cache", //缓存目录
  ignoreDeadLinks: true, //忽略死链接
  metaChunks: true, //压缩js
  appearance: true, //暗黑模式
  markdown: markdown,//markdown配置
  head: head, //头部
  themeConfig: {
    logo: {
      src: "./favicon.svg",
      alt: "思行工坊",
    },
    darkModeSwitchLabel: "深色模式", //浅色模式
    lightModeSwitchTitle: "浅色模式", //浅色模式
    darkModeSwitchTitle: "深色模式", //深色模式
    sidebarMenuLabel: "菜单", //菜单
    returnToTopLabel: "返回顶部", //返回顶部
    langMenuLabel: "语言", //语言
    externalLinkIcon: true, //外部链接图标
    //    algolia: algolia, //搜索
    //    carbonAds: carbonAds, //广告
    footer: footer,//页脚
    nav: nav, //导航
    search: search, //本地搜索
    sidebar: sidebar, //侧边栏
    socialLinks: socialLinks, //社交链接
    outline: {
      level: "deep",
      label: "本页目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
