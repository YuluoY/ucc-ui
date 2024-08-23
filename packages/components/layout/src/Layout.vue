<template>
  <main 
    :class="[
      'u-layout', 
      `u-layout__${props.mode}`, 
      { 'u-layout__fit': props.fit },
      'u-container',
    ]"
    :style="styles"
  >
    <template v-for="(region, index) in Object.keys(regionGroup)" :key="`${region}-${index}`">
      <component 
        v-for="(item, i) in regionGroup[region as RegionType]" 
        :is="item" 
        :key="`${item}-${index}-${i}`" 
        :mode="props.mode" 
        v-bind="handleComProps(item)"
      >
      </component>
    </template>
    <component class="u-region" v-for="(item, i) in ortherRegions" :is="item" :key="i" :style="handleComProps(item)"></component>
  </main>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import type { UlayoutProps } from '../types';
import type { RegionType } from '../types/const';
import useLayout from '../hooks/useLayout';

  defineOptions({ name: 'ULayout' });
  const props = withDefaults(defineProps<UlayoutProps>(), {
    mode: 'default',
    padding: 14,  
    gap: 10,
    col: 1,      
    fit: false
  })

  const {
    styles,
    regionGroup,
    ortherRegions,
    rootFontSize,
    handleComProps
  } = useLayout<typeof props>({
    props
  })

  provide('rootFontSize', rootFontSize)

</script>

<style>
@import '../styles/index.css';
</style>