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

/**
 * 是否是数字
 * @param     {any}     val
 * @returns   {boolean}
 */
export const isNumber = (val: any): val is number => typeof val === 'number'

/**
 * 是否是布尔值
 * @param     {any}     val
 * @returns   {boolean}
 */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'

/**
 * 是否是null
 * @param     {any}     val
 * @returns   {boolean}
 */
export const isNull = (val: any): val is null => val === null

/**
 * 是否是undefined
 * @param     {any}     val
 * @returns   {boolean}
 */
export const isUndefined = (val: any): val is undefined => val === undefined

/**
 * 是否是有效值
 * @param     {any}     val
 * @returns   {boolean}
 */
export const isValue = (val: any): val is boolean => !!(val && typeof val !== 'undefined' && typeof val !== 'null' as any)