export const CTextType = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
} as const;

export const CTextSize = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large'
} as const;

export type UTextType = typeof CTextType[keyof typeof CTextType];
export type UTextSize = typeof CTextSize[keyof typeof CTextSize];