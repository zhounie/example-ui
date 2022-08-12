<script setup lang="ts">
    import VPNav from './vp-navbar.vue'
    import DefaultTheme from 'vitepress/theme'
    const { Layout } = DefaultTheme
</script>


<template>
    <div class="app">
        <Layout>
            <template #nav-bar-content-before>
                <div>
                    mide
                </div>
            </template>
        </Layout>
        
    </div>
</template>