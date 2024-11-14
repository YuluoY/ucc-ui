/**
 * 解析JSON
 * @param   str   字符串
 * @param   def   默认值
 */
export function parseJson(str: string, def: any = {}): any {
  // 如果 str 不是字符串或者是空字符串，直接返回默认值 def
  if (typeof str !== 'string' || str.trim() === '')
    return typeof str === 'undefined' || str === null || str === '' ? def : str;
  try {
    return JSON.parse(str)
  } catch (e) {
    return def
  }
}

export const rootFontSize = parseInt(document.documentElement.style.fontSize) || (window.innerWidth / 100)
/**
 * px转rem
 * @param   {number}  px                px值
 * @param   {boolean} [isNumber=false]  是否返回数字 
 * @returns rem值
 * ```js
 * pxToRem(10) // 0.1rem
 * ```
 */
export function pxToRem<T = string | number>(px: number, isNumber: boolean = false): T {
  if (px === 0) return '0' as T
  if (isNumber)
    return px / rootFontSize as T
  return `${px / rootFontSize}rem` as T
}

/**
 * 是否是Vue组件
 * @author      Yuluo
 * @link        https://github.com/YuluoY
 * @date        2024-10-15
 * @param       {any}         obj       - 要检查的对象
 * @return      {boolean}
 * @example
 * ```ts
 * isVueComponent({ render: () => {} }) // true
 * isVueComponent({ setup: () => {} }) // true
 * isVueComponent({}) // false
 * ```
 */
export const isVueComponent = (obj: any): boolean => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    (typeof obj.setup === 'function' ||
      typeof obj.render === 'function' ||
      typeof obj.template === 'string' ||
      typeof obj.name === 'string' ||
      obj.functional === true) // 支持函数式组件
  )
}

/**
 * 还原字符串的类型值
 * @param   {string}  str
 * @returns {any}
 * ```js
 * restoreValue('null') // null
 * restoreValue('undefined') // undefined
 * restoreValue('true') // true
 * restoreValue('false') // false
 * restoreValue('[1,2,3]') // [1,2,3]
 * restoreValue('{a:1}') // {a:1}
 * restoreValue('123') // 123
 * ```
 */
export const restoreValue = <T = any>(str: string): T => {
  if (typeof str !== 'string')
    return str

  if (str === 'null')
    return null as T
  else if (str === 'undefined')
    return undefined as T
  else if (str === 'true')
    return true as T
  else if (str === 'false')
    return false as T
  else if (typeof str === 'string')
  {
    try
    {
      // eslint-disable-next-line no-new-func
      return new Function(`return ${str}`)()
    }
    catch (error)
    {
      return str as T
    }
  }
  else
    return str
}