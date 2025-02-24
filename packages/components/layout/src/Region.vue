<style lang="scss">
  .u-region { 
    --u-layout-flex-size: v-bind(span);
    --u-layout-max-span: v-bind(maxSpan);
  }
</style>

<template>
  <section
    :class="['u-region', `u-region__${region}`, 'u-region-container']"
    :style="[
      padding ? `padding: ${pxToRem(padding)}rem;` : '',
      span ? `var(--u-layout-flex-size)` : ''
    ]"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { pxToRem } from "@ucc-ui/utils";
import type { URegionProps, ULayoutContext } from "../types";
import { CComponentName, CLayoutContext } from "../types/const";
import { computed, getCurrentInstance, inject, shallowRef, type VNode, nextTick, watch, onBeforeUnmount } from "vue";
import { isNil } from "lodash-es";

defineOptions({
  name: CComponentName.REGION,
});

const instance = getCurrentInstance()

const props = withDefaults(defineProps<URegionProps>(), {
  region: "center",
  padding: 0
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
  const { surplus } = handleRowSpan(siblingRegions.value);
  return surplus / siblingRegionsWithoutSpan.value.length;
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