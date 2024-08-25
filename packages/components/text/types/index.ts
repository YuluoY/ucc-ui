import type { UTextSize, UTextType } from './const'

export interface UTextProps {
  type?: UTextType
  size?: UTextSize
  ellipsis?: boolean
  maxLine?: number
  tag?: string
}