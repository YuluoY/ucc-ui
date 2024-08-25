import type { CSSProperties } from "vue";
import type { UTagClosePosition, UTagEffect, UTagSize, UTagType } from "./const";

export interface UTagProps {
  type?: UTagType
  size?: UTagSize
  effect?: UTagEffect
  closable?: boolean
  border?: boolean
  color?: CSSProperties['color']
  textColor?: CSSProperties['color']
  round?: boolean
  transition?: boolean
  closePosition?: UTagClosePosition
  triggerClick?: boolean
}

export interface UTagEmits {
  (e: 'close', evt: MouseEvent): void
  (e: 'click', evt: MouseEvent): void
}