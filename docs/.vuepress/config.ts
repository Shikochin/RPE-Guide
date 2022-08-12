import { defineUserConfig } from 'vuepress';

import { defaultTheme } from '@vuepress/theme-default';

import { backToTopPlugin } from '@vuepress/plugin-back-to-top';

// Mathjax3

import { viteBundler } from 'vuepress'

import mathjax from 'markdown-it-mathjax3';

const customElement = ['maction', 'math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mi', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mjx-container', 'g'];

// Algolia Doc Search

// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

import sidebarConfig from './sidebar'

// Sitemap

import { sitemapPlugin } from 'vuepress-plugin-sitemap2';

export default defineUserConfig({
    extendsMarkdown: md => {
        md.use(mathjax);
    },
    bundler: viteBundler({
        vuePluginOptions: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => customElement.includes(tag),
                },
            },
        },
    }),
    head: [
        ['link', { rel: "apple-touch-icon", href: "/assets/img/logo.png" }],
        ['link', { rel: "icon", href: "/assets/img/logo.png" }],
    ],
    plugins: [
        backToTopPlugin(),
        // docsearchPlugin({

        // }),
        sitemapPlugin({
            hostname: 'rpe.chinq.xyz'
        })
    ],

    lang: 'zh-CN',
    title: 'Re:Phiedit 指南',
    theme: defaultTheme({
        contributorsText: '贡献者',
        notFound: ['未找到请求的页面'],
        tip: '提示',
        warning: '注意',
        danger: '警告',
        backToHome: '返回首页',
        toggleColorMode: '切换明暗模式',
        lastUpdated: true,
        repo: 'CQBerry/RPE-Guide',
        docsDir: 'docs',
        editLinkText: '在 Github 上编辑此页',
        logo: '/assets/img/logo.png',
        sidebar: sidebarConfig,
    }),
})