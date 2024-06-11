// sidebarConfig.js
export default {
    '/guide/': [ // 确保这一层级是一个对象的键
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
    ],
    '/': [
        {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' }
              // ... 其他项
            ]
        }
    ]
};