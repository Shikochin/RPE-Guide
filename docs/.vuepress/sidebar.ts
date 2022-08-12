import type { SidebarConfig } from '@vuepress/theme-default'

const sidebarConfig: SidebarConfig = [{
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

export default sidebarConfig;