import { defineConfig } from 'vitepress'
import { nav } from './js/nav';
// import { sidebar } from './js/sidebar';
import { head } from './js/head';
import { socialLinks } from './js/socialLinks';
import { footer } from './js/footer';
//import { editLink } from './js/editLink';
// import { carbonAds } from './js/carbonAds';
// import { algolia } from './js/algolia';

export default defineConfig({
  lang: 'zh-CN',
  base: '/',
  title: "思行",
  titleTemplate:
  ":title - 字里行间，代码生辉｜开发者的创意工坊！",
description: "我的博客与文档网站，包含各种开发文档以及免费的在线CDN字体。",
  head: head,//头部
  cleanUrls: true,//清理url
  outDir: './dist',//输出目录
  assetsDir: './assets',//静态资源目录
  cacheDir: "cache",//缓存目录
  ignoreDeadLinks: true,//忽略死链接
  metaChunks: true,//压缩js
  appearance: false,//暗黑模式
  themeConfig: {
    logo: {
      light: '/config/light_logo.svg',
      dark: '/config/dark_logo.svg',
      alt: 'VitePress',
    },
    siteTitle: false,//站点标题
    darkModeSwitchLabel: "深色模式",//浅色模式
    lightModeSwitchTitle: "浅色模式",//浅色模式
    darkModeSwitchTitle: "深色模式",//深色模式
    sidebarMenuLabel: "菜单",//菜单
    returnToTopLabel: "返回顶部",//返回顶部
    langMenuLabel: "语言",//语言
    externalLinkIcon: true,//外部链接图标
    outline: {
      level: "deep",
      label: '本页目录',
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    sitemap:sitemap,//站点地图
    search:search,//搜索
    sidebar:sidebar,//侧边栏
    socialLinks: socialLinks,//社交链接
    footer: footer,//页脚
    carbonAds: carbonAds,//广告
    algolia: algolia,//搜索
  },

})
