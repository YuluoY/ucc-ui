/**
 * 解析JSON
 * @param   str   字符串
 * @param   def   默认值
 */
export declare function parseJson(str: string, def?: any): any;
export declare const rootFontSize: number;
/**
 * px转rem
 * @param   {number}  px                                  px值
 * @param   {object}  opts                                options
 * @param   {number}  [opts.rootFontSize=rootFontSize]    根字体大小
 * @param   {boolean} [opts.isReverse=false]              是否反转
 * @param   {string}  [opts.unit]                         单位，如果存在，则返回字符串，否则返回数字
 * @returns {string | number} rem值
 * ```js
 * pxToRem(10) // 0.1
 * pxToRem(10, { unit: 'rem' }) // 0.1rem
 * ```
 */
export declare function pxToRem<T = string | number>(px: number, opts?: Partial<{
    isReverse: boolean;
    unit: 'px' | 'rem';
    rootFontSize: number;
}>): T;
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
export declare const isVueComponent: (obj: any) => boolean;
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
export declare const restoreValue: <T = any>(str: string) => T;
