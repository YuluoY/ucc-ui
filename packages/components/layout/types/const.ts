export const CRegion = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
} as const;


export const CLayoutMode = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  DEFAULT: 'default',
} as const;


export type RegionType = typeof CRegion[keyof typeof CRegion];
export type LayoutMode = typeof CLayoutMode[keyof typeof CLayoutMode];
