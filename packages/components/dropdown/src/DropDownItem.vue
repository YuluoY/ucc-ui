<template>
  <li v-if="divided" role="separator" class="u-dropdown-item__divider"></li>
  <li 
    :class="{
      'u-dropdown-item': true,
      ['u-dropdown-item--' + size]: size,
      'is-disabled': disabled,
      'is-divided': divided
    }"
    @click="handleClick"
  >
    <slot name="icon">
      <u-icon v-if="icon" :icon="icon" v-bind="iconProps ?? void 0" />
    </slot>
    <span class="u-dropdown-item__label">
      <slot name="label">{{ label }}</slot>
    </span>
  </li>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { UDropdownItemProps } from '../types';
import { CDropdownCtx } from '../types/const';
import { useId } from '@ucc-ui/hooks';
import { UIcon } from '../../icon'

defineOptions({
  name: 'UDropDownItem'
})
const props = withDefaults(defineProps<UDropdownItemProps>(), {
  disabled: false,
  divided: false,
  command: useId().value
})
const ctx = inject(CDropdownCtx)
const size = computed(() => ctx?.size.value)

function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props)
}
</script>