<template>
    <div id="docsearch"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import "@docsearch/css"
import docsearch from '@docsearch/js'
onMounted(() => {
    docsearch({
        container: '#docsearch'
    })
})
</script>
