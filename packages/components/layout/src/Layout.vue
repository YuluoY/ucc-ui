<template>
  <main 
    :class="['u-layout', `u-layout__${mode}`]" 
    :style="layoutStyle"
  >
    <LayoutMode v-if="mode === CLayoutMode.DEFAULT" />
    <slot v-else />
  </main>
</template>

<script setup lang="ts">
import {
  useSlots,
  type VNode,
  type Slots,
  type CSSProperties,
  shallowRef,
  provide,
  computed,
} from "vue";
import { isNumber, isNil } from "lodash-es";
import type { ULayoutProps } from "../types";
import {
  CLayoutMode,
  CLayoutContext,
  type ULayoutMode,
  CComponentName,
  CMaxSpan,
  type ULayoutExtend,
} from "../types/const";
import LayoutMode from "../components/LayoutMode.vue";
import { pxToRem } from "../../../utils";

defineOptions({ name: CComponentName.LAYOUT });
const props = withDefaults(defineProps<ULayoutProps>(), {
  mode: CLayoutMode.DEFAULT,
});

const slots: VNode[] = (useSlots() as Slots).default?.(props) || [];

/**
 * 布局样式
 */
const layoutStyle = computed(() => {
  const style: CSSProperties = {};
  if (!isNil(props.padding)) 
    style.padding = isNumber(props.padding) ? pxToRem(props.padding, { unit: 'rem' }) : props.padding;
  if (!isNil(props.gutter)) 
    style.gap = isNumber(props.gutter) ? pxToRem(props.gutter, { unit: 'rem' }) : props.gutter;
  return style;
});

/**
 * 缓存u-region组件
 */
const regions = shallowRef(
  slots.filter((item: any) => item.type?.name === CComponentName.REGION)
);

/**
 * 缓存u-region vnode结点以及更新状态
 */
const regionVNodes = [] as Partial<{
  vnode?: VNode;
  updated?: boolean;
}>[];

/**
 * 添加区域节点
 * @param vnode 区域节点
 * @param updated 是否已更新
 */
const addRegionVNode = (vnode: VNode, updated?: boolean) => {
  /**
   * 如果区域节点已存在，则不添加
   */
  if (regionVNodes.some((item) => item.vnode === vnode))
    return;
  regionVNodes.push({ vnode, updated });

  /**
   * 所有u-region组件都已经加载
   */
  if (regionVNodes.length >= regions.value.length) {
    /**
     * 同步计算其他span属性未更新的u-region组件
     */
    regionVNodes.forEach((item) => {
      if (!item.updated)
        item.vnode?.component?.exposed?.updateSelf?.();
    });
    regionVNodes.length = 0;
  }
};

/**
 * 提供上下文
 */
provide(CLayoutContext, {
  mode: computed(() => props.mode as ULayoutMode),
  extend: computed(() => props.extend as ULayoutExtend),
  maxSpan: computed(() => props.maxSpan ?? CMaxSpan),
  regions,
  addRegionVNode,
});
</script>

<style>
@import "../styles/index.css";
</style>
