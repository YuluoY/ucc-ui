
<template>
  <component 
    :is="tag"
    class="u-text"
    :class="{
      [`u-text--${type}`]: type,
      [`u-text--${size}`]: size,
      'is-ellipsis': ellipsis,
      'is-limit-line': maxLine
    }"
    :style="styles"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import type { UTextProps } from '../types';

defineOptions({
  name: 'UText'
})
const props = withDefaults(defineProps<UTextProps>(), {
  type: 'primary',
  size: 'default',
  ellipsis: false,
  tag: 'span'
})
const styles = computed<CSSProperties>(() => props.maxLine ? {
  'line-clamp': props.maxLine,
  '-webkit-line-clamp': props.maxLine
} : {})
</script>

<style>
@import '../styles/index.css';

.u-text {
  &.is-limit-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
}
</style>