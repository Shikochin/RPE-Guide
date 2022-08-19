import type { PluginConfig } from 'vuepress';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'

const pluginConfigs: PluginConfig = [
    sitemapPlugin({
        hostname: 'rpe.chinq.xyz'
    }),
    searchPlugin({
        hotKeys: ['ctrl', 'k']
    }),
    pwaPlugin({}),
    pwaPopupPlugin({}),
]

export default pluginConfigs;