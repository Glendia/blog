import { defineConfig } from 'vitepress'
import { nav } from './js/nav';
// import { sidebar } from './js/sidebar';
import { head } from './js/head';
import { socialLinks } from './js/socialLinks';
import { footer } from './js/footer';
import { editLink } from './js/editLink';
// import { carbonAds } from './js/carbonAds';
// import { algolia } from './js/algolia';

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "My Awesome Project",
  titleTemplate: ':title - Developer | 编织代码梦想，启航开发者未来',
  description: "探索编程新境界，连接开发者智慧。我们提供前沿技术资讯、实战教程、高效工具与深度交流平台，激发创意，助力每一位开发者成就不凡。从Vue.js到VitePress，携手构建互联网的明天",
  head: head,
  outDir: './docs',
  assetsDir: './assets',
  cacheDir: './.vitepress/.vite',
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
    editLink: {
      pattern: 'https://github.com/glendia/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
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
      '/developer/git/': [
        {
          text: 'Git指南',
          collapsed: false,
          items: [
            { text: '前言', link: '/git/' },
            { text: '目录', link: '/git/#快速定位' },
          ]
        },
        {
          text: '初级命令',
          collapsed: true,
          items: [
            { text: '配置', link: '/git/config' },
            { text: '初始化仓库', link: '/git/init' },
            { text: '克隆仓库', link: '/git/clone' },
            { text: '管理仓库', link: '/git/manage' },
            { text: '暂存文件', link: '/git/stage' },
            { text: '提交文件', link: '/git/commit' },
            { text: '推送远端', link: '/git/push' },
            { text: '查看分支', link: '/git/branch' },
            { text: '切换分支', link: '/git/switch' },
            { text: '创建分支', link: '/git/create' },
            { text: '删除分支', link: '/git/delete' },
            { text: '重命名分支', link: '/git/rename' },
            { text: '转移提交', link: '/git/transfer' },
            { text: '临时保存', link: '/git/stash' },
            { text: '文件状态', link: '/git/status' },
            { text: '查看日志', link: '/git/log' },
            { text: '查看作者', link: '/git/blame' },
            { text: '合并', link: '/git/merge' },
            { text: '还原', link: '/git/revert' }

          ]
        },
        {
          text: '高级命令',
          collapsed: true,
          items: [
            { text: '查看远程', link: '/git/remote' },
            { text: '添加远程', link: '/git/add' },
            { text: '删除远程', link: '/git/delete' },
            { text: '查看标签', link: '/git/tag' },
            { text: '创建标签', link: '/git/create' },
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
      '/developer/frontend/': [
        {
          text: 'vue指南',
          collapsed: true,
          items: [
            { text: 'Vite', link: '/developer/vite/' },
            { text: 'VuePress', link: '/developer/vuepress/' },
            { text: 'VuePress Theme', link: '/developer/vuepress-theme/' },
            { text: 'VuePress Plugin', link: '/developer/vuepress-plugin/' },
            { text: 'VuePress Theme Blog', link: '/developer/vuepress-theme-blog/' },
          ],
        },
        {
          text: '前端指南',
          collapsed: true,
          items: [
            { text: 'Vue', link: '/developer/vue/' },
            { text: 'Vuex', link: '/developer/vuex/' },
            { text: 'Vue Router', link: '/developer/vue-router/' },
            { text: 'Vue CLI', link: '/developer/vue-cli/' },
            { text: 'VuePress', link: '/developer/vuepress/' },
            { text: 'Node', link: '/developer/node/' },
            { text: 'Vue', link: '/developer/vue/' },
            { text: 'JavaScript', link: '/developer/javascript/' },
            { text: 'HTML', link: '/developer/html/' },
            { text: 'CSS', link: '/developer/css/' },
            { text: 'TypeScript', link: '/developer/typescript/' },
          ]
        }],
      '/developer/system/': [
        {
          text: 'CentOS',
          items: [
            { text: 'CentOS', link: '/developer/centos/' },
            { text: 'CentOS', link: '/developer/centos/config' },

          ]
        },
        {
          text: 'Ubuntu',
          collapsed: true,
          items: [
            { text: 'Ubuntu', link: '/developer/Ubuntu/' },
            { text: 'Ubuntu', link: '/developer/Ubuntu/config' },

          ]
        },
        {
          text: 'deepin',
          collapsed: true,
          items: [
            { text: 'deepin', link: '/developer/deepin/' },
            { text: 'deepin', link: '/developer/deepin/config' },

          ]
        },
        {
          text: 'Windows',
          collapsed: true,
          items: [
            { text: 'Windows', link: '/developer/Windows/' },
            { text: 'Windows', link: '/developer/Windows/config' },

          ]
        },
        {
          text: 'MacOS',
          collapsed: true,
          items: [
            { text: 'MacOS', link: '/developer/MacOS/' },
            { text: 'MacOS', link: '/developer/MacOS/config' },

          ]
        },
        {
          text: 'Docker',
          collapsed: true,
          items: [
            { text: 'Docker', link: '/developer/Docker/' },
            { text: 'Docker', link: '/developer/Docker/config' },

          ]
        },
      ]
    },

  },

})