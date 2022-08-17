import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from 'vuepress'
import mathjax from 'markdown-it-mathjax3';
import themeConfigs from './theme';
import pluginConfigs from './plugins';
import bundlerConfigs from './bundler';
import headConfigs from './head';

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Re:Phiedit 指南',
            description: '重构 RPE 说明书结构，优化阅读体验，本项目旨在提升 RPE 说明书的易懂程度',
            head: headConfigs,
        }
    },
    extendsMarkdown: md => {
        md.use(mathjax);
    },
    bundler: viteBundler(bundlerConfigs),
    plugins: pluginConfigs,
    theme: defaultTheme(themeConfigs),
})