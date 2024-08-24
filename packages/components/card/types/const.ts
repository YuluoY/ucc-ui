export const CCardShadow = {
  NEVER: 'never',
  ALWAYS: 'always',
  HOVER: 'hover',
  ACTIVE: 'active'
} as const;

export type CardShadow = typeof CCardShadow[keyof typeof CCardShadow];