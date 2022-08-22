import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import type Renderer from 'markdown-it/lib/renderer'
import type Token from 'markdown-it/lib/token'

interface ContainerOpts {
    marker?: string | undefined;
    validate?(params: string): boolean;
    render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string;
}
export default defineConfig({
    title: 'ExampleUI',
    description: '你好啊',
    lang: 'en-US',

    head: [
        
    ],
    markdown: {
       config: (md: MarkdownIt) => {
        // md.use(MarkdownItContainer, 'demo', {
        //     validate(params) {
        //         return !!params.trim().match(/^demo\s*(.*)$/)
        //     },
        //     render(tokens, idx) {
        //         var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        //         if (tokens[idx].nesting === 1) {
        //             const description = Array.isArray(m) && m.length ? m[1] : ''
        //             const sourceFileToken = tokens[idx + 2]
        //             const sourceFile = sourceFileToken.children?.[0].content ?? ''
        //             console.log(sourceFileToken);
        //             debugger
        //             let source = fs.readFileSync(
        //                 path.resolve('.', 'examples', `${sourceFile}.vue`),
        //                 'utf-8'
        //             )
                    

        //             return `<Demo
        //                 :demo="demo"
        //                 description="${description}"
        //                 source="${source}"
        //             >`;
        //         } else {
        //             return '</Demo>';
        //         }
        //     }
        // } as ContainerOpts)
        md.use(demoBlockPlugin)
       } 
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
        },
        algolia: {
            appId: 'R2IYF7ETH7',
            apiKey: '599cec31baffa4868cae4e79f180729b',
            indexName: 'docsearch',
          }
    }
})