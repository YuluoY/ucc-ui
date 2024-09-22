
export const CTooltipEffect = {
  DARK: 'dark',
  LIGHT: 'light'
} as const;

export const CTooltipPlacement = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end'
} as const;

export const CTooltipTrigger = {
  HOVER: 'hover',
  CLICK: 'click',
  FOCUS: 'focus',
  CONTEXTMENU: 'contextmenu'
} as const;


export type UTooltipEffect = typeof CTooltipEffect[keyof typeof CTooltipEffect];
export type UTooltipPlacement = typeof CTooltipPlacement[keyof typeof CTooltipPlacement];
export type UTooltipTrigger = typeof CTooltipTrigger[keyof typeof CTooltipTrigger];