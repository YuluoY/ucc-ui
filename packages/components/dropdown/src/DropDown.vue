<template>
  <div class="u-dropdown" :class="{ 'is-disabled': disabled }">
    <u-tooltip 
      ref="tooltipRef" 
      transition="" 
      :virtual-triggering="splitButton" 
      :virtual-ref="virtualRef"
      :trigger="trigger" 
      :padding="0" 
      :width="0" 
      v-bind="tooltipProps" 
      :transition-props="{
        onBeforeEnter: beforeEnter,
        onEnter: enter,
        onLeave: leave
      }"
      :visible="visible"
      @visible-change="$emit('visible-change', $event)"
    >
      <u-button-group v-if="splitButton" :type="type" :size="size" :disabled="disabled">
        <u-button @click="(e: MouseEvent) => $emit('click', e)">
          <slot name="default"></slot>
        </u-button>
        <u-button ref="triggerRef" icon="angle-down" />
      </u-button-group>

      <slot v-else name="default"></slot>

      <template #content>
        <DropdownMenu>
          <slot name="dropdown">
            <template v-for="item in data" :key="item.command">
              <DropDownItem v-bind="item" />
            </template>
          </slot>
        </DropdownMenu>
      </template>
    </u-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import type { UDropdownEmits, UDropdownExposes, UDropdownItemProps, UDropdownProps } from '../types';
import { CDropdownCtx } from '../types/const';
import type { UTooltipExposes, UTooltipProps } from '../../tooltip/types';
import type { UButtonInstance } from '../../button/types';
import DropDownItem from './DropdownItem.vue';
import DropdownMenu from './DropdownMenu.vue';
import { UTooltip } from '../../tooltip';
import { UButtonGroup, UButton } from '../../button';
import { isNil } from 'lodash-es';

defineOptions({
  name: 'UDropdown',
  inheritAttrs: false
})

const props = withDefaults(defineProps<UDropdownProps>(), {
  data: _ => ([]),
  size: 'default',
  trigger: 'click',
  hideOnClick: true
})
const emits = defineEmits<UDropdownEmits>()
const slots = defineSlots()
const _size = computed(() => props.size)
const visible = ref(false)

provide(CDropdownCtx, {
  size: _size,
  handleItemClick
})

const tooltipRef = ref<UTooltipExposes>()
const triggerRef = ref<UButtonInstance>()
const virtualRef = computed(() => triggerRef.value?.ref) as any

const tooltipProps = computed(() => ({
  effect: 'light',
  ...props.tooltipProps
}) as UTooltipProps)

function handleItemClick(item: UDropdownItemProps) {
  props.hideOnClick && tooltipRef.value?.hide()
  !isNil(item.command) && emits('command', item.command)
}

function doShow() {
  tooltipRef.value?.onOpen()
}

function doHide() {
  tooltipRef.value?.onClose()
}

function beforeEnter(el: HTMLElement) {
  el.style.height = '0'; // 进入之前高度为 0
}
function enter(el: HTMLElement) {
  el.style.height = el.scrollHeight + 'px'; // 进入时高度变为内容高度
  el.style.transition = 'height var(--uc-animation-delay-2) var(--uc-animation-ease-in)'; // 设置过渡效果
}
function leave(el: HTMLElement) {
  el.style.height = '0'; // 离开时高度变为 0
  el.style.transition = 'height var(--uc-animation-delay-2) var(--uc-animation-ease-in)'; // 设置过渡效果
}

defineExpose<UDropdownExposes>({
  doShow,
  doHide
})
</script>

<style>
@import '../styles/index.css';
</style>