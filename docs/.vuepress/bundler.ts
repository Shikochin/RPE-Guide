import {ViteBundlerOptions} from 'vuepress';

const customElements = ['mjx-container', 'g'];

const bundlerConfigs: ViteBundlerOptions = {
    vuePluginOptions: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
}

export default bundlerConfigs;