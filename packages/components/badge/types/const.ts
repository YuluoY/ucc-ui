export const CBadgeType = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
} as const;

export type UBadgeType = typeof CBadgeType[keyof typeof CBadgeType];