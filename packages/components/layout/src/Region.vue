<template>
  <section
    :class="['u-region', `u-region__${region}`, 'u-region-container']"
    :style="regionStyle"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { pxToRem } from "../../../utils";
import type { URegionProps, ULayoutContext } from "../types";
import { CComponentName, CLayoutContext, CLayoutMode } from "../types/const";
import { computed, getCurrentInstance, inject, shallowRef, type VNode, nextTick, watch, onBeforeUnmount, type CSSProperties } from "vue";
import { isNil, isNumber } from "lodash-es";

defineOptions({
  name: CComponentName.REGION,
});

const instance = getCurrentInstance()

const props = withDefaults(defineProps<URegionProps>(), {
  region: "center"
});

/**
 * 上下文
 */
const ctx = inject<ULayoutContext>(CLayoutContext)

/**
 * 最大列数
 */
const maxSpan = computed(() => ctx?.maxSpan?.value!)
const maxSpanWatcher = watch(maxSpan, () => updateSelf())

/**
 * 同级dom
 */
const siblings = shallowRef((instance?.parent?.subTree.children as VNode[])?.[0]?.children as VNode[]);
/**
 * region组件
 */
const siblingRegions = computed(() => siblings.value.filter(item => (item.type as any)?.name === CComponentName.REGION));
/**
 * region没有span的组件
 */
const siblingRegionsWithoutSpan = computed(() => siblingRegions.value.filter(item => isNil(item.props?.span)));

/**
 * 列数
 */
const span = computed(() => {
  if (props.span)
    return props.span
  if (siblingRegionsWithoutSpan.value.length === 0)
    return 0
  const { surplus } = handleRowSpan(siblingRegions.value);
  return surplus / siblingRegionsWithoutSpan.value.length;
})

/**
 * 区域样式
 */
const regionStyle = computed<CSSProperties>(() => {
  const style = {} as CSSProperties

  if (span.value)
    style['--u-layout-flex-size'] = span.value
  if (maxSpan.value && ctx?.mode.value === CLayoutMode.ROW)
    style['--u-layout-max-span'] = maxSpan.value

  if (!isNil(props.padding))
    style.padding = isNumber(props.padding) ? pxToRem(props.padding, { unit: 'rem' }) : props.padding

  if (!isNil(props.justify))
    style.justifyContent = props.justify

  if (!isNil(props.align))
    style.alignItems = props.align

  return style
})

/**
 * 列数监听
 */
const spanWatcher = watch(span, () => {
  /**
   * 添加自身组件
   */
  ctx?.addRegionVNode?.(instance?.vnode as VNode, true)
  /**
   * 添加同级区域节点
   */
  siblingRegions.value.forEach(item => ctx?.addRegionVNode(item, false))
})

/**
 * 计算行跨度
 * @param regions 同级组件
 */
function handleRowSpan(regions: VNode[]) {
  let total = 0;
  let surplus = 0;

  for (const region of regions) {
    total += region.props?.span || 0;
  }

  surplus = maxSpan.value - total;
  
  return {
    total,
    surplus
  }
}

/**
 * 更新自身组件
 */
async function updateSelf() {
  await nextTick()
  siblings.value = (instance?.parent?.subTree.children as VNode[])?.[0]?.children as VNode[]
}

onBeforeUnmount(() => {
  spanWatcher()
  maxSpanWatcher()
})

defineExpose({
  updateSelf
})
</script>