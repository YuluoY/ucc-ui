export const REGION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
} as const;


export const LAYOUT_MODE = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  DEFAULT: 'default',
} as const;


export type RegionType = typeof REGION[keyof typeof REGION];
export type LayoutMode = typeof LAYOUT_MODE[keyof typeof LAYOUT_MODE];
