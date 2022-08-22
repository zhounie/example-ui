import DefaultTheme from 'vitepress/client/theme-default/index'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import VPApp, { NotFound, globals } from '../vitepress/index'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import type { Theme } from 'vitepress'
import { ExButton } from '@example-ui/components'
// import './demo.scss'

const config: Theme = {
    ...DefaultTheme,
    // Layout: VPApp,
    // NotFound,
    enhanceApp({ app }) {
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
        app.component('ExButton', ExButton)
        // globals.map(([name, cm]) => {
        //     app.component(name, cm)
        // })
    }
}
 
export default config