export const CDVueDirectives = {
  IS_EXIST: 'isExist',
  IS_SHOW: 'isShow',
  IS_MEMO: 'isMemo'
} as const;

export const CDVueDirectiveEvents = {
  CHANGE_EXIST: 'changeExist',
  CHANGE_SHOW: 'changeShow',
} as const;

export type UDVueDirectivesType = typeof CDVueDirectives[keyof typeof CDVueDirectives]
export type UDVueDirectiveEventsType = typeof CDVueDirectiveEvents[keyof typeof CDVueDirectiveEvents]