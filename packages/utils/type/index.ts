/**
 * 是否是字符串
 * @param     {any}     val 
 * @returns   {boolean}
 */
export const isString = (val: any): val is string => typeof val === 'string'

/**
 * 是否是有效的数组
 * @param     {any}     val 
 * @returns   {boolean}
 */
export const isEffectArray = (val: any): val is boolean => !!(Array.isArray(val) && val.length)

/**
 * 是否是有效的对象
 * @param     {any}     val
 * @returns   {boolean}
 */
export const isEffectObject = (val: any): val is boolean => !!(val && typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length)

/**
 * 是否是函数
 * @param     {any}     val 
 * @returns   {boolean}
 */
export const isFunction = (val: any): val is Function => typeof val === 'function'