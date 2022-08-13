import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from 'vuepress'
import mathjax from 'markdown-it-mathjax3';
import themeOptions from './theme';
import pluginConfig from './plugins';
import bundlerOptions from './bundler';
import headConfigs from './head';

export default defineUserConfig({
    extendsMarkdown: md => {
        md.use(mathjax);
    },
    bundler: viteBundler(bundlerOptions),
    head: headConfigs,
    plugins: pluginConfig,

    lang: 'zh-CN',
    title: 'Re:Phiedit 指南',
    theme: defaultTheme(themeOptions),
})