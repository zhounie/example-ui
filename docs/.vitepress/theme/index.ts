import DefaultTheme from 'vitepress/theme'
import VPApp, { NotFound } from '../vitepress/index'

import type { Theme } from 'vitepress'


const config: Theme = {
    ...DefaultTheme,
    Layout: VPApp,
    NotFound,
    enhanceApp() {

    }
}
 
export default config