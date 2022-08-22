

<script setup lang="ts">
    import { defineProps, computed } from 'vue'
    import VPExample from './demo/vp-example.vue'
    import VPSourceCode from './demo/vp-source-code.vue'
    const props = defineProps<{
        demos: object,
        description: string,
        source: string
    }>()

    const formatPathDemos = computed(() => {
        console.log(props.demos);
        
        const demos = {}
        // Object.keys(props.demos).forEach(key => {
        //     demos[key.replace('../../examples/', '').replace('.vue', '')] = props.demos[key].default
        // })
        return demos
    })

</script>

<template>
    <div class="demo">
        <p>{{props.description}}</p>

        <VPExample :demo="formatPathDemos[path]" />

        <VPSourceCode :source="source" />
    </div>
</template>

<style scoped>

</style>