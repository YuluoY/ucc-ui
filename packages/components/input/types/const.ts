export const CInputType = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  FILE: 'file',
  NUMBER: 'number',
  RADIO: 'radio'
} as const;

export const CInputSize = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large'
} as const;

export const CInputResize = {
  NONE: 'none',
  BOTH: 'both',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
} as const;

export type UInputType = typeof CInputType[keyof typeof CInputType];
export type UInputSize = typeof CInputSize[keyof typeof CInputSize];
export type UInputResize = typeof CInputResize[keyof typeof CInputResize];