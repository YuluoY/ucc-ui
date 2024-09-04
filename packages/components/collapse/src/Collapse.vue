
<template>
  <div 
    class="u-collapse"
    :class="{
      'is-accordion': accordion
    }"
  >
    <template v-if="slots.default">
      <component 
        v-for="(item, index) in defaultSlots" 
        :key="index" 
        :is="item" 
        :class="{
          'is-active': activeName === item.props?.name || activeName?.includes(item.props?.name),
        }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, toRef, watchEffect } from 'vue';
import type { UCollapseEmits, UCollapseProps } from '../types';

  defineOptions({
    name: 'UCollapse'
  })

  const props = withDefaults(defineProps<UCollapseProps>(), {
    accordion: false
  })
  const emit = defineEmits<UCollapseEmits>()
  const slots = defineSlots()
  const defaultSlots = Array.isArray(slots.default()) ? slots.default() : [slots.default()]

  const activeName = toRef(props, 'modelValue')
  const valueWatcherEffect = watchEffect(() => {
    emit('update:modelValue', activeName.value)
    emit('change', activeName.value)
  })

  onBeforeUnmount(() => {
    valueWatcherEffect()
  })
  
</script>

<style>

</style>