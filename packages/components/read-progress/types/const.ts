export const CReadProgress = {
  PRIMARY: 'primary',
  DANGER: 'danger',
  WARNING: 'warning',
  SUCCESS: 'success',
  INFO: 'info'
} as const;

export type UReadProgressType = typeof CReadProgress[keyof typeof CReadProgress];