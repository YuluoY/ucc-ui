<template>
  <main 
    :class="['u-layout', `u-layout__${mode}`]" 
    :style="layoutStyle"
  >
     <component v-if="mode === CLayoutMode.DEFAULT" :is="processedSlot"></component>
    <slot v-else></slot>
  </main>
</template>

<script setup lang="ts">
import { isNumber, isNil } from "lodash-es";

import { pxToRem } from "../../../utils";
import useLayoutMode from "../hooks/useLayoutMode";

import {
  type CSSProperties,
  type SetupContext,

  useSlots,
  provide,
  computed,
} from "vue";
import type { ULayoutProps } from "../types";
import {
  type ULayoutMode,

  CLayoutMode,
  CLayoutContext,
  CComponentName,
  CMaxSpan,
} from "../types/const";

defineOptions({ name: CComponentName.LAYOUT });

const props = withDefaults(defineProps<ULayoutProps>(), {
  mode: CLayoutMode.DEFAULT,
});

const slots: SetupContext["slots"] = useSlots();

/**
 * 布局模式
 */
const {
  processedSlot
} = useLayoutMode({
  props, 
  slots
})

/**
 * 布局样式
 */
const layoutStyle = computed(() => {
  const style: CSSProperties = {};
  if (!isNil(props.padding)) 
    style.padding = isNumber(props.padding) ? pxToRem(props.padding) : props.padding;
  if (!isNil(props.gutter)) 
    style.gap = isNumber(props.gutter) ? pxToRem(props.gutter) : props.gutter;
  return style;
});


/**
 * 提供上下文信息
 */
provide(CLayoutContext, {
  mode: computed(() => props.mode as ULayoutMode),
  maxSpan: computed(() => props.maxSpan ?? CMaxSpan),
});
</script>

<style>
@import "../styles/index.css";
</style>
