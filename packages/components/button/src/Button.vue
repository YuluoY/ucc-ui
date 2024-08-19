<script setup lang="ts">
import type { UButtonProps } from '../types';
  defineOptions({
    name: 'UButton'
  })
  withDefaults(defineProps<UButtonProps>(), {
    type: 'primary',
    size: 'medium',
    disabled: false,
    round: 5
  })
</script>

<template>
  <button class="u-button">测试</button>
</template>

<style scoped>
@import '../styles/index.css';
</style>