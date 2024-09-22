<template>
  <section 
    :class="['u-region', `u-region__${region}`, 'u-region-container']" 
    :style="regionStyles"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import type { URegionProps } from '../types';
import useRegion from '../hooks/useRegion';

  defineOptions({
    name: 'URegion',
  })
  const props = withDefaults(defineProps<URegionProps>(), {
    region: 'center'
  })

  const {
    regionStyles
  } = useRegion({
    props
  })
  
</script>
