export const CTopPosition = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

export type UTopPosition = typeof CTopPosition[keyof typeof CTopPosition]