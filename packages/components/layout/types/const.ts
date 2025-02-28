import type { InjectionKey, Reactive } from "vue";
import type { ULayoutContext } from ".";

/**
 * 最大span
 */
export const CMaxSpan = 24 as const;

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

export const CLayoutFlexAlign = {
  START: 'start',
  END: 'end',
  CENTER: 'center',
  BETWEEN: 'between',
  AROUND: 'around',
} as const;

export const CLayoutContext: InjectionKey<ULayoutContext> = Symbol('c-layout-context');

export type URegionType = typeof CRegion[keyof typeof CRegion];
export type ULayoutMode = typeof CLayoutMode[keyof typeof CLayoutMode];
export type ULayoutExtend = typeof CLayoutExtend[keyof typeof CLayoutExtend];
export type ULayoutFlexAlign = typeof CLayoutFlexAlign[keyof typeof CLayoutFlexAlign];
