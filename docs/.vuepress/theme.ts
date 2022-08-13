import { DefaultThemeOptions } from '@vuepress/theme-default';
import sidebarConfig from './sidebar';

const themeOptions: DefaultThemeOptions = {
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
}

export default themeOptions;