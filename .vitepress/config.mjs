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
  title: "开发者日志",
  titleTemplate: ':title - 开发者日志',
  description: "探索编程新境界，连接开发者智慧。我们提供前沿技术资讯、实战教程、高效工具与深度交流平台，激发创意，助力每一位开发者成就不凡。从Vue.js到VitePress，携手构建互联网的明天",
  head: head,
  outDir: './dist',
  assetsDir: './assets',
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: '/config/light_logo.svg',
      dark: '/config/dark_logo.svg',
      alt: 'VitePress',
    },
    socialLinks: socialLinks,
    // sidebar: sidebar,
    siteTitle: false,
    nav: nav,
    footer: footer,
    // carbonAds: carbonAds,
    // algolia: algolia,
    outline: {
      level: [2, 3],
      label: '大纲',
    },
    sitemap: {
      hostname: '/'
    },
    search: {
      provider: 'local',
    },
    sidebar: {
      '/dev/git/': [
        {
          text: 'Git指南',
          collapsed: false,
          items: [
            { text: '前言', link: '/dev/git/' },
            { text: '目录', link: '/dev/git/#Quick-positioning' },
          ]
          
        },
        {
          text: '初级命令',
          collapsed: true,
          items: [
            { text: '配置', link: '/dev/git/config' },

          ]
        },
        {
          text: '高级命令',
          collapsed: true,
          items: [
            { text: '查看远程', link: '//git/remote' },
          ]
        },
        {
          text: '代码托管仓库',
          items: [
            { text: 'GitHub', link: 'https://www.github.com' },
            { text: 'GitLab', link: 'https://www.gitlab.com' },
            { text: 'Gitee', link: 'https://www.gitee.com' },
            { text: 'GitCode', link: 'https://www.gitcode.net' },
            { text: 'GitCafe', link: 'https://www.gitcafe.com' },
            { text: 'Bitbucket', link: 'https://www.gitee.com' },
            { text: 'Gitblit', link: 'https://www.gitlab.com' },
            { text: 'Gitea', link: 'https://www.gitcode.net' },
            { text: 'SourceForge', link: 'https://www.gitcafe.com' },
            { text: 'Coding', link: 'https://www.gitee.com' },


          ],
        },

      ],
      '/dev/frontend/': [
        {
          text: 'vue指南',
          collapsed: true,
          items: [
            { text: 'Vite', link: '/dev/vite/' },
          ],
        },
        {
          text: '前端指南',
          collapsed: true,
          items: [
            { text: 'Vue', link: '/dev/vue/' },
          ]
        }],
      '/dev/system/': [
        {
          text: '',
          items: [
            { text: '简介', link: '/dev/centos/' },

          ]
        },
        {
          text: 'CentOS',
          items: [
            { text: 'CentOS', link: '/dev/centos/' },
            { text: 'CentOS', link: '/dev/centos/config' },

          ]
        },
        {
          text: 'Ubuntu',
          collapsed: true,
          items: [
            { text: 'Ubuntu', link: '/dev/Ubuntu/' },
            { text: 'Ubuntu', link: '/dev/Ubuntu/config' },

          ]
        },
        {
          text: 'deepin',
          collapsed: true,
          items: [
            { text: 'deepin', link: '/dev/deepin/' },
            { text: 'deepin', link: '/dev/deepin/config' },

          ]
        },
        {
          text: 'Windows',
          collapsed: true,
          items: [
            { text: 'Windows', link: '/dev/Windows/' },
            { text: 'Windows', link: '/dev/Windows/config' },

          ]
        },
        {
          text: 'MacOS',
          collapsed: true,
          items: [
            { text: 'MacOS', link: '/dev/MacOS/' },
            { text: 'MacOS', link: '/dev/MacOS/config' },

          ]
        },
        {
          text: 'Docker',
          collapsed: true,
          items: [
            { text: 'Docker', link: '/dev/Docker/' },
            { text: 'Docker', link: '/dev/Docker/config' },

          ]
        },
      ],
      '/info/': [
        {
          text: '',
          items: [
            { text: '2024年度', link: '/info/' },
            { text: 'strapi安装指南', link: '/info/strapi' },
            { text: 'clone、pull或push等证书异常', link: '/info/clone' },

          ]
        },
      ]
    },

  },

})
