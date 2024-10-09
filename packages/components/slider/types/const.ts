export const CSliderSize = {
  small: 'small',
  default: 'default',
  large: 'large',
} as const;

export type USliderSize = typeof CSliderSize[keyof typeof CSliderSize];