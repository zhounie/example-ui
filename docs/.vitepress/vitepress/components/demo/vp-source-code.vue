<script setup lang="ts">
    const props = defineProps<{
        source: {
            type: string,
            required: true
        }
    }>()
    console.log(props.source);
    console.log(1111);
    
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