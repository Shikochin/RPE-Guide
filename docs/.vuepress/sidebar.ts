import type { SidebarConfig } from '@vuepress/theme-default'

const sidebarConfigs: SidebarConfig = [{
    text: '准备',
    link: '/prepare/',
    children: [
        '/prepare/intro',
        '/prepare/preparetion',
    ]
}, {
    text: '基础',
    children: ['/basis/rpe-main-interface',
        {
            text: '谱面',
            link: '/basis/chart/',
            children: [
                '/basis/chart/create-a-chart',
                '/basis/chart/about-chart',
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
                '/basis/charting/handle-notes',
                '/basis/charting/handle-events',
                '/basis/charting/batch-edit-basics',
                '/basis/charting/line-management',
                '/basis/charting/curve-fill-notes',
                '/basis/charting/undo-and-redo'
            ]
        }, {
            text: '其他',
            link: '/basis/others/',
            children: [
                '/basis/others/settings',
            ]
        }
    ]
}, {
    text: "进阶",
    children: [
        '/advanced/chart-correction'
    ]
}]

export default sidebarConfigs;