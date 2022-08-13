import { ViteBundlerOptions } from 'vuepress';
const customElements = ['mjx-container', 'g'];

const bundlerOptions: ViteBundlerOptions = {
    vuePluginOptions: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
}

export default bundlerOptions;