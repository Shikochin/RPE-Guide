import { DefaultThemeOptions } from '@vuepress/theme-default';
import sidebarConfigs from './sidebar';

const themeConfigs: DefaultThemeOptions = {
    logo: '/assets/imgs/icons/android-chrome-512x512.png',
    repo: 'CQBerry/RPE-Guide',
    docsDir: 'docs',
    locales: {
        '/': {
            contributorsText: '贡献者',
            lastUpdatedText: '上次更新',
            editLinkText: '在 Github 上编辑此页',
            notFound: ['未找到请求的页面'],
            tip: '提示',
            warning: '注意',
            danger: '警告',
            backToHome: '返回首页',
            toggleColorMode: '切换明暗模式',
            sidebar: sidebarConfigs,
        }
    },

}

export default themeConfigs;