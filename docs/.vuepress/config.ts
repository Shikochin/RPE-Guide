import { defineUserConfig } from 'vuepress';

const { defaultTheme } = require('@vuepress/theme-default');

const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');

// Mathjax3

const { viteBundler } = require('vuepress')

const mathjax = require('markdown-it-mathjax3');

const customElement = ['maction', 'math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mi', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mjx-container', 'g'];

// Algolia Doc Search

// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

// Sitemap

const { sitemapPlugin } = require('vuepress-plugin-sitemap2');

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
        lastUpdated: '上次更新',
        repo: 'CQBerry/RPE-Guide',
        docsDir: 'docs',
        editLinkText: '在 Github 上编辑此页',
        logo: '/assets/img/logo.png',
        sidebar: [{
            text: '准备',
            link: '/prepare/',
            children: [
                '/prepare/intro',
                '/prepare/preparetion',
            ]
        }, {
            text: '基础',
            children: [
                {
                    text: '谱面',
                    link: '/basis/chart/',
                    children: [
                        '/basis/chart/create-a-chart',
                        '/basis/chart/intro',
                    ]
                }, {
                    text: '谱面之下',
                    link: '/basis/inside-chart/',
                    children: [
                        '/basis/inside-chart/line',
                        '/basis/inside-chart/note',
                        '/basis/inside-chart/event',
                    ]
                }, {
                    text: 'UI 界面',
                    link: '/basis/UI/',
                    children: [
                        '/basis/UI/tools-bar',
                        '/basis/UI/progress-bar',
                        '/basis/UI/play-interface',
                        '/basis/UI/edit-window',
                        '/basis/UI/indicator',
                        '/basis/UI/functions',
                        '/basis/UI/status-bar',
                    ]
                }, {
                    text: '写谱',
                    link: '/basis/charting/',
                    children: [
                        '/basis/charting/edit-notes',
                        '/basis/charting/edit-events',
                        '/basis/charting/batch-edit-basics',
                        '/basis/charting/judgment-line-management',
                    ]
                }
            ]
        }]
    }),
})