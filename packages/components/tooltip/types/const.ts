export const CTooltipContainerId = 'u-popper-container'

export const CTooltipEffect = {
  DARK: 'dark',
  LIGHT: 'light'
} as const;

export const CTooltipTrigger = {
  HOVER: 'hover',
  CLICK: 'click',
  FOCUS: 'focus',
  CONTEXTMENU: 'contextmenu'
} as const;


export type UTooltipEffect = typeof CTooltipEffect[keyof typeof CTooltipEffect];
export type UTooltipTrigger = typeof CTooltipTrigger[keyof typeof CTooltipTrigger];