<script setup lang="ts">
  defineOptions({
    name: 'UButton'
  })
  defineProps({
    type: {
      type: String,
      default: 'default'
    }
  })
</script>

<template>
  <button class="u-button" style="background-color: red;">666</button>
</template>

<style src="../styles/index.css"></style>