import type { InjectionKey } from 'vue'
import type { ComputedRef } from 'vue'

export const CFormLabelPosition = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
} as const

export const CRequiredAsteriskPosition = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

export const CFormSize = {
  LARGE: 'large',
  DEFAULT: 'default',
  SMALL: 'small',
} as const

export const CFormItemRuleTrigger = {
  CHANGE: 'change',
  BLUR: 'blur',
  FOCUS: 'focus',
} as const

export const CFormItemValidateStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  VALIDATING: 'validating',
} as const

export type UFormLabelPosition = typeof CFormLabelPosition[keyof typeof CFormLabelPosition]
export type URequiredAsteriskPosition = typeof CRequiredAsteriskPosition[keyof typeof CRequiredAsteriskPosition]
export type UFormSize = typeof CFormSize[keyof typeof CFormSize] | ''
export type UFormItemRuleTrigger = typeof CFormItemRuleTrigger[keyof typeof CFormItemRuleTrigger]
export type UFormItemValidateStatus = typeof CFormItemValidateStatus[keyof typeof CFormItemValidateStatus] | ''

// FormItem size injection key
export const FORM_ITEM_SIZE_INJECTION_KEY: InjectionKey<ComputedRef<UFormSize | undefined>> = Symbol('formItemSize')
