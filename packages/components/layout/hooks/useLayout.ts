import { useSlots, type CSSProperties, type Slots, type VNode } from "vue"
import type { UlayoutProps } from "../types"
import { LAYOUT_MODE, REGION, type Region  } from "../types/const"
import RegionVue from '../src/Region.vue'

export default function useLayout<P extends UlayoutProps> ({
  props
}:{
  props: P
})
{
  /**
   * 根据根元素的字体大小计算
   */
  const rootFontSize = parseInt(document.documentElement.style.fontSize) || 16 as number

  /**
   * 对插槽子元素做处理
   */
  const slots = useSlots() as Slots
  const slotsArr = (slots.default && slots.default()) || []
  
  let ortherRegions: VNode[] = []
  const regions = Object.values(REGION)
  const regionGroup = {
    [REGION.TOP]: [],
    [REGION.LEFT]: [],
    [REGION.CENTER]: [],
    [REGION.RIGHT]: [],
    [REGION.BOTTOM]: [],
  } as Record<Region, VNode[]>
  for (let item of slotsArr)
  {
    // @ts-ignore
    if (item.type.name === RegionVue.name && regions.includes(item.props?.region))
      item.props?.region && (regionGroup[item.props.region as Region]).push(item)
    else
      ortherRegions.push(item)
  }

  /**
   * 组件样式
   */
  const styles: CSSProperties = {
    padding: `${props.padding! / rootFontSize}rem`,
    gap: `${props.gap! / rootFontSize}rem`,
  }
  if (props.mode === LAYOUT_MODE.VERTICAL)
  {
    styles.gridTemplateColumns = `repeat(${props.col}, 1fr)`
  }

  /**
   * 子组件的宽度，根据列数计算
   */
  const regionValuesFlat = Object.values(regionGroup).flat()
  let restSlots: VNode[] | null = null, restLens: number | null = null
  const handleComProps = (item: VNode) =>
  {
    restLens === null && (restLens = ortherRegions.length ? slotsArr.length % props.col! : regionValuesFlat.length % props.col!)
    restSlots === null && (restSlots = ortherRegions.length ? ortherRegions.slice(-restLens) : regionValuesFlat.slice(-restLens))
    
    return restLens && restSlots.some(v => v === item) ? 
    { width: `calc(${100 / restLens}% - ${styles.gap})` }  : 
    { width: `calc(${100 / props.col!}% - ${styles.gap})` }
  }

  return {
    styles,
    regionGroup,
    ortherRegions,
    rootFontSize,
    handleComProps
  }
}