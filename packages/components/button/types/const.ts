export const TYPE = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
  LINK: 'link'
} as const;

export const SIZE = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
} as const;

export const ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export type ButtonSize = typeof SIZE[keyof typeof SIZE];
export type ButtonType = typeof TYPE[keyof typeof TYPE];
export type ButtonIconPosition = typeof ICON_POSITION[keyof typeof ICON_POSITION];