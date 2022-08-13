import { ViteBundlerOptions } from 'vuepress';
const customElement = ['maction', 'math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mi', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mjx-container', 'g'];

const bundlerOptions: ViteBundlerOptions = {
    vuePluginOptions: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElement.includes(tag),
            },
        },
    },
}

export default bundlerOptions;