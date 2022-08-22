<script setup lang="ts">
    const props = defineProps<{
        source: {
            type: string,
            required: true
        }
    }>()
</script>

<template>
    <div>
        <div>
            <!-- <pre v-pre><code v-html="source"></code></pre> -->
        </div>
    </div>
</template>

<style scoped>

</style>