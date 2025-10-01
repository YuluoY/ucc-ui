export const CIconSize = [
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '1x',
  '2x',
  '3x',
  '4x',
  '5x',
  '6x',
  '7x',
  '8x',
  '9x',
  '10x'
] as const

export const CIconRotation = [
  '90',
  '180',
  '270',
  90,
  180,
  270,
  'default'
] as const


export const CIconType = [
  'success',
  'warning',
  'danger',
  'info',
  'primary',
  'default'
] as const

export const CIconFlip = [
  'horizontal',
  'vertical',
  'both',
  'default'
] as const

export const CIconPull = [
  'left',
  'right',
  'default'
] as const

export type UIconSize = typeof CIconSize[number]
export type UIconRotation = typeof CIconRotation[number]
export type UIconType = typeof CIconType[number]
export type UIconFlip = typeof CIconFlip[number]
export type UIconPull = typeof CIconPull[number]