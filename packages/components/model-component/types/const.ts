export const CStructDirectives = {
  V_IF: 'v-if',
  V_SHOW: 'v-show',
} as const;

export const CStructDirectiveEvents = {
  ON_REFRESH: 'onRefresh',
  ON_CHANGE_SHOW: 'onChangeShow',

  SET_MODELVALUE: 'setModelValue',
  SET_MODELVALUES: 'setModelValues',
} as const;

export const CStructHooks = {
  BEFORE_MOUNT: 'beforeMount',
  MOUNTED: 'mounted',
  BEFORE_UNMOUNT: 'beforeUnmount',

  BEFORE_UPDATE: 'beforeUpdate',
  UPDATED: 'updated',

  ERROR_Captured: 'errorCaptured',
} as const;

export type UStructDirectivesType = typeof CStructDirectives[keyof typeof CStructDirectives]
export type UStructDirectiveEventsType = typeof CStructDirectiveEvents[keyof typeof CStructDirectiveEvents]
export type UStructHooksType = typeof CStructHooks[keyof typeof CStructHooks]