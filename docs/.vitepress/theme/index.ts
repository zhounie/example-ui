import DefaultTheme from 'vitepress/theme'
import VPApp, { NotFound, globals } from '../vitepress/index'

import type { Theme } from 'vitepress'


const config: Theme = {
    ...DefaultTheme,
    // Layout: VPApp,
    NotFound,
    enhanceApp({ app }) {
        globals.map(([name, cm]) => {
            app.component(name, cm)
        })
    }
}
 
export default config