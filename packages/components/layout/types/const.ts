import type { InjectionKey } from "vue";
import type { ULayoutContext } from ".";

export const CRegion = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
} as const;


export const CLayoutMode = {
  ROW: 'row',
  COLUMN: 'column',
  DEFAULT: 'default',
} as const;

export const CLayoutExtend = {
  LEFT_TOP: 'left-top',
  RIGHT_TOP: 'right-top',
  LEFT_BOTTOM: 'left-bottom',
  RIGHT_BOTTOM: 'right-bottom',
  LEFT: 'left',
  RIGHT: 'right',
  BOTH: 'both'
} as const;

export const CComponentName = {
  LAYOUT: 'ULayout',
  REGION: 'URegion',
  LAYOUT_MODE: 'ULayoutMode',
} as const;

export const CLayoutContext: InjectionKey<ULayoutContext> = Symbol('c-layout-context');

export type URegionType = typeof CRegion[keyof typeof CRegion];
export type ULayoutMode = typeof CLayoutMode[keyof typeof CLayoutMode];
export type ULayoutExtend = typeof CLayoutExtend[keyof typeof CLayoutExtend];
