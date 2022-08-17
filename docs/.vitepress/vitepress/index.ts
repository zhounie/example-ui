import type { Component } from 'vue'

import VPApp from './components/vp-app.vue'

export { default as NotFound } from './components/vp-not-found.vue'

import VPDemo from './components/vp-demo.vue'

export default VPApp

export const globals: [string, Component][] = [
    ['Demo', VPDemo]
]