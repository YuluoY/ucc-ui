
<template>
  <div 
    class="u-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="u-collapse-item__header" v-if="$slots.title" @click="onClick">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="u-collapse-item__content" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UCollapseItemProps } from '../types';

  defineOptions({
    name: 'UCollapseItem'
  })
  const props = withDefaults(defineProps<UCollapseItemProps>(), {})
  const onClick = () => {
    
  }
</script>

<style>

</style>