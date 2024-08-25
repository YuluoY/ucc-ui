export const CTagType = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
} as const;

export const CTagSize = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large'
} as const;

export const CTagEffect = {
  DARK: 'dark',
  LIGHT: 'light',
  PLAIN: 'plain'
} as const;

export const CTagClosePosition = {
  LEFT: 'left',
  RIGHT: 'right',
  DEFAULT: 'default'
} as const;

export type UTagType = typeof CTagType[keyof typeof CTagType];
export type UTagSize = typeof CTagSize[keyof typeof CTagSize];
export type UTagEffect = typeof CTagEffect[keyof typeof CTagEffect];
export type UTagClosePosition = typeof CTagClosePosition[keyof typeof CTagClosePosition];