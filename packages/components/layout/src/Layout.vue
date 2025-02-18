<template>
  <main 
    class="u-layout"
    :class="['u-layout', `u-layout__${mode}`]"
    :style="[
      padding ? `padding: ${padding}px` : '',
      gutter ? `gap: ${gutter}px` : ''
    ]"
  >
    <LayoutMode />
  </main>
</template>

<script setup lang="ts">
import { useSlots, type VNode, type Slots, shallowRef, provide } from 'vue';
import type { ULayoutProps } from '../types';
import { CLayoutMode, CLayoutContext, type ULayoutMode, CComponentName } from '../types/const';
import LayoutMode from '../components/LayoutMode.vue';

  defineOptions({ name: CComponentName.LAYOUT });
  const props = withDefaults(defineProps<ULayoutProps>(), {
    mode: CLayoutMode.DEFAULT
  })

  const slots: VNode[] = (useSlots() as Slots).default?.(props) || [];

  provide(CLayoutContext, {
    mode: props.mode as ULayoutMode,
    extend: props.extend,
    regions: shallowRef(slots)
  })
  
</script>

<style>
@import '../styles/index.css';
</style>