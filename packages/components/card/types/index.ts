import type { CardShadow } from "./const"

export interface UCardProps {
  header?: string
  footer?: string
  shadow?: CardShadow
  padding?: number
  bodyStyle?: import('vue').CSSProperties
  bodyClass?: string
}