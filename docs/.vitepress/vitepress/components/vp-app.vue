<script setup lang="ts">
    import VPNav from './vp-navbar.vue'
    import DefaultTheme, { VPTeamPageTitle} from 'vitepress/theme'
    const { Layout } = DefaultTheme
</script>


<template>
    <div class="app">
        <VPNav />
        <!-- <Layout>
            <template #nav-bar-content-before>
                <div>
                    mide
                </div>
            </template>
        </Layout> -->
        
    </div>
</template>