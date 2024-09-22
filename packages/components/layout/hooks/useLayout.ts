import { Fragment, isVNode, provide, useSlots, type CSSProperties, type Slots, type VNode } from "vue"
import type { ULayoutProps } from "../types"
import { CLayoutContext, CLayoutMode, CRegion, type RegionType  } from "../types/const"
import RegionVue from '../src/Region.vue'
import { pxToRem } from "../../../utils"

export default function useLayout<P extends ULayoutProps> ({
  props
}:{
  props: P
})
{
  provide(CLayoutContext, { mode: props.mode })

  /**
   * 处理插槽
   */
  const processSlots = (slots: VNode[] | any): VNode[] | any => {
    // 如果传入的是数组，则遍历每个 VNode 并处理它们
    if (Array.isArray(slots)) {
      return slots.flatMap((slotVNode: any) => processSlots(slotVNode)); // 展开并递归处理
    }
  
    // 检查是否为 Fragment
    if (isVNode(slots) && slots.type === Fragment) {
      // 获取子节点
      const children = slots.children;
  
      // 对子节点进行处理
      if (Array.isArray(children)) {
        return children.flatMap((child: any) => processSlots(child)); // 递归处理并展开
      }
      return children ? [children] : []; // 返回单个子节点作为数组
    }
  
    // 非 Fragment 的节点可以直接返回或处理
    return [slots];
  }

  /**
   * 对插槽子元素做处理
   */
  const slots = useSlots() as Slots
  const slotsArr = processSlots((slots.default && slots.default()) || [])

  let ortherRegions: VNode[] = []
  const regions = Object.values(CRegion)
  const regionGroup = {
    [CRegion.TOP]: [],
    [CRegion.LEFT]: [],
    [CRegion.CENTER]: [],
    [CRegion.RIGHT]: [],
    [CRegion.BOTTOM]: [],
  } as Record<RegionType, VNode[]>
  for (let item of slotsArr)
  {
    // @ts-ignore
    if (item.type.name === RegionVue.name && regions.includes(item.props?.region))
      item.props?.region && (regionGroup[item.props.region as RegionType]).push(item)
    else
      ortherRegions.push(item)
  }

  /**
   * 组件样式
   */
  const styles: CSSProperties = {
    padding: pxToRem(props.padding!),
    gap: pxToRem(props.gap!)
  }
  if (props.mode === CLayoutMode.VERTICAL && !props.fit)
  {
    styles.gridTemplateColumns = `repeat(${props.col}, 1fr)`
  }

  /**
   * 子组件的宽度，根据列数计算
   */
  const regionValuesFlat = Object.values(regionGroup).flat(Infinity) as VNode[]
  let restSlots: VNode[] | null = null, restLens: number | null = null
  let index = 0
  const handleComProps = (item: VNode) =>
  {
    if (props.mode === CLayoutMode.DEFAULT)
      return {}
    if (props.col === 1)
      return { width: 'inherit' }

    restLens === null && (restLens = ortherRegions.length ? slotsArr.length % props.col! : regionValuesFlat.length % props.col!)
    restSlots === null && (restSlots = ortherRegions.length ? ortherRegions.slice(-restLens) : regionValuesFlat.slice(-restLens))

    const gap = ++index % props.col! === 0 || index === slotsArr.length ? '0px' : styles.gap

    return restLens && restSlots?.some(v => v === item) ? 
    { width: `calc(${100 / restLens}% - ${gap})` }  : 
    { width: `calc(${100 / props.col!}% - ${gap})` }
  }

  return {
    styles,
    regionGroup,
    ortherRegions,
    handleComProps
  }
}