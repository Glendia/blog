export const nav = [
    { text: '首页', link: '/' },
    { text: '博客', link: '/posts/' },
    { text: '文档', link: '/doc/' },
    { text: '资源', link: '/resource/' },
    { text: '关于', link: '/about/' },
    {
        text: '线上产品',
        items: [
          {
            // 该部分的标题
            text: '网站应用',
            items: [
              { text: '奥斯壁纸', link: 'http://www.oisx.cn' },
              { text: 'chatGPT', link: 'https://chat.oisx.cn' }
            ]
          }
        ]
      },
]
