<template>
  <main 
    :class="[
      'u-layout', 
      `u-layout__${mode}`, 
      { 'is-fit': fit, [`u-layout--${col}-col`]: col },
      'u-container',
    ]"
    :style="styles"
  >
    <template v-for="(region, index) in Object.keys(regionGroup)" :key="`${region}-${index}`">
      <component 
        v-for="(item, i) in regionGroup[region as RegionType]" 
        :is="item" 
        :key="`${item}-${index}-${i}`" 
        v-bind="handleComProps(item)"
      >
      </component>
    </template>
    <component class="u-region" v-for="(item, i) in ortherRegions" :is="item" :key="i" :style="handleComProps(item)"></component>
  </main>
</template>

<script setup lang="ts">
import type { ULayoutProps } from '../types';
import type { RegionType } from '../types/const';
import useLayout from '../hooks/useLayout';

  defineOptions({ name: 'ULayout' });
  const props = withDefaults(defineProps<ULayoutProps>(), {
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
    handleComProps
  } = useLayout<typeof props>({
    props
  })

</script>

<style>
@import '../styles/index.css';
</style>