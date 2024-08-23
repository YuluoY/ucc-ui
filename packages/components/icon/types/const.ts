export const IconSize = [
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
] as const;

export const IconRotation = [
  '90',
  '180',
  '270',
  90,
  180,
  270,
  'default'
] as const;


export const IconType = [
  'success',
  'warning',
  'danger',
  'info',
  'primary',
  'default'
] as const;

export const IconFlip = [
  'horizontal',
  'vertical',
  'both',
  'default'
] as const;

export const IconPull = [
  'left',
  'right',
  'default'
] as const;

export type UIconSize = typeof IconSize[number]
export type UIconRotation = typeof IconRotation[number]
export type UIconType = typeof IconType[number]
export type UIconFlip = typeof IconFlip[number]
export type UIconPull = typeof IconPull[number]