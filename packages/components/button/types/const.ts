export const CButtonType = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
  LINK: 'link'
} as const;

export const CButtonSize = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
} as const;

export const CIconPosition = {
  LEFT: 'left',
  RIGHT: 'right',
  DEFAULT: 'default' // left
} as const;

export type ButtonSize = typeof CButtonSize[keyof typeof CButtonSize];
export type ButtonType = typeof CButtonType[keyof typeof CButtonType];
export type ButtonIconPosition = typeof CIconPosition[keyof typeof CIconPosition];