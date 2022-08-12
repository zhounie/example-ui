import { defineConfig } from 'vitepress'
export default defineConfig({
    title: 'Hello World',
    description: '你好啊',
    lang: 'en-US',

    head: [
        
    ],
    markdown: {
    },
    themeConfig: {
        logo: '/image/logo.svg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhounie/example-ui' },
        ],      
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Component', link: '/components/button' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        sidebar: {
            '/guide/': [
                {
                    items: [
                        {
                            text: '设计原则',
                            link: '/guide/design',
                        },
                        {
                            text: '导航',
                            link: '/guide/nav',
                        },
                    ]
                }
            ],
            '/components/': [
                {
                    text: 'Components',
                    items: [
                      // This shows `/guide/index.md` page.
                      { text: 'Button', link: '/components/button' },
                      { text: 'Alert', link: '/components/alert' },
                    ]
                  }
            ]
        }
    }
})