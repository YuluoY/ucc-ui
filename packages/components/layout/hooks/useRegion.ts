import { type CSSProperties } from "vue";
import type { URegionProps } from "../types";
import { pxToRem } from "../../../utils";

export default function useRegion<P extends URegionProps>({
  props
}:{
  props: P
})
{
  const regionStyles: CSSProperties = {}
  regionStyles.width = props.width && String(props.width).endsWith('px') ? pxToRem(parseInt(props.width + '')) : props.width

  return {
    regionStyles
  }
}