
<template>
  <div class="u-badge">
    <div
      v-if="showBadge"
      class="u-badge-content"
      :class="[badgeClass, `u-badge-${type}`]"
      :style="_badgeStyle"
    >
      {{ _value }}
    </div>
    <div
      v-else-if="isDot"
      class="u-badge-dot"
      :class="`u-badge-dot-${type}`"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { UBadgeProps } from '../types'
import { CBadgeType } from '../types/const'
import { isNumber } from 'lodash-es'

defineOptions({
  name: 'UBadge'
})
const props = withDefaults(defineProps<UBadgeProps>(), {
  value: 0,
  max: 99,
  isDot: false,
  hidden: false,
  type: CBadgeType.DANGER,
  showZero: true,
  offset: () => [0, 0],
})

const isNumberBadge = computed(() => isNumber(Number(props.value)))
const showBadge = computed(() => !props.isDot && !props.hidden && (props.showZero || props.value))
const _value = computed(() => isNumberBadge.value && Number(props.value) > props.max ? props.max + '+' : props.value)

const _badgeStyle = computed(() =>
{
  return {
    ...props.badgeStyle,
    backgroundColor: props.color,
    right: props.offset[0] + 'px',
    top: props.offset[1] + 'px',
  }
})
</script>

<style>
@import '../styles/index.css';
</style>