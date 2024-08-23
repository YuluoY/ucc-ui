import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { UIconFlip, UIconPull, UIconRotation, UIconSize, UIconType } from './const'

export interface UIconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: UIconFlip
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: UIconPull
  pulse?: boolean
  rotation?: UIconRotation
  swapOpacity?: boolean
  size?: UIconSize
  spin?: boolean
  transform?: object | string
  symbol?: boolean
  title?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
  type?: UIconType
  color?: string

}