import { inject, type CSSProperties } from "vue";
import type { URegionProps } from "../types";

export default function useRegion<P extends URegionProps>({
  props
}:{
  props: P
})
{
  const rootFontSize = inject('rootFontSize') as number

  const regionStyles: CSSProperties = {}
  regionStyles.width = props.width && String(props.width).endsWith('px') ? `${parseInt(props.width + '') / rootFontSize}rem` : props.width

  return {
    regionStyles
  }
}