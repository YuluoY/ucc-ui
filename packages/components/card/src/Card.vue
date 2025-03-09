
<template>
  <div 
    :class="[
      'u-card',
      { [`u-card--${shadow}`]: shadow }
    ]">
    <header v-if="$slots.header || header" class="u-card-header" :style="{ padding: _padding }">
      <slot name="header">
        <span>{{ header }}</span>
      </slot>
    </header>
    <main v-if="$slots.default" :class="['u-card-body', bodyClass]" :style="_bodyStyle">
      <slot></slot>
    </main>
    <footer v-if="$slots.footer || footer" class="u-card-footer" :style="{ padding: _padding }">
      <slot name="footer">
        <span>{{ footer }}</span>
      </slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { UCardProps } from '../types';
import { pxToRem } from '../../../utils';

  defineOptions({
    name: 'UCard'
  })
  const props = withDefaults(defineProps<UCardProps>(), {
    padding: 16,
    bodyStyle: () => ({})
  })
  const _padding = computed(() =>  pxToRem(props.padding, { unit: 'rem' }))
  const _bodyStyle = computed(() => ({
    ...props.bodyStyle,
    padding: _padding.value
  }))
</script>

<style lang="scss">
@import '../styles/index.css';
</style>