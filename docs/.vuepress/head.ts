import { HeadConfig } from 'vuepress';

const headConfigs: HeadConfig[] = [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/imgs/icons/apple-touch-icon.png" }],
    ['link', { rel: "icon", sizes: "32x32", href: "/assets/imgs/icons/favicon-32x32.png" }],
    ['link', { rel: "icon", sizes: "16x16", href: "/assets/imgs/icons/favicon-16x16.png" }],
    ['link', { rel: "manifest", sizes: "32x32", href: "/manifest.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/assets/imgs/icons/safari-pinned-tab.svg", color: "#5bbad5" }],
    ['link', { rel: "shortcut icon", href: "/assets/imgs/icons/favicon.ico" }],
    ['link', { rel: "msapplication-TileColor", content: "#da532c" }],
    ['link', { rel: "msapplication-config", content: "/browserconfig.xml" }],
    ['link', { rel: "theme-color", content: "#3eaf7c" }],
]

export default headConfigs;