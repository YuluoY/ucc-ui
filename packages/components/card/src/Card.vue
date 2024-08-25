
<template>
  <div 
    :class="[
      'u-card',
      { [`u-card--${shadow}`]: shadow }
    ]">
    <header v-if="$slots.header || header" class="u-card-header">
      <slot name="header">
        <span>{{ header }}</span>
      </slot>
    </header>
    <main v-if="$slots.default" :class="['u-card-body', bodyClass]" :style="bodyStyle">
      <slot></slot>
    </main>
    <footer v-if="$slots.footer || footer" class="u-card-footer">
      <slot name="footer">
        <span>{{ footer }}</span>
      </slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { UCardProps } from '../types';

  defineOptions({
    name: 'UCard'
  })
  const props = withDefaults(defineProps<UCardProps>(), {
    padding: 16
  })
  const rootFontSize = parseInt(document.documentElement.style.fontSize) || (window.innerWidth / 100) as number
  const _padding = computed(() => props.padding / rootFontSize + 'rem')

</script>

<style lang="scss">
@import '../styles/index.css';

.u-card {
  .u-card-header,
  .u-card-footer {
    padding: v-bind(_padding);
  }
 
  .u-card-body {
    padding: v-bind(_padding);
  }
}
</style>