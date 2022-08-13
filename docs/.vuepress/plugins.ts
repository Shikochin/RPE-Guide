import type { PluginConfig } from 'vuepress';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import searchPlugin from '@vuepress/plugin-search'

const pluginConfig: PluginConfig = [
    backToTopPlugin(),
    sitemapPlugin({
        hostname: 'rpe.chinq.xyz'
    }),
    searchPlugin({
        hotKeys: ['ctrl', 'k']
    }),
]

export default pluginConfig;