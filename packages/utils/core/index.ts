import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

/**
 * 解析JSON
 * @param   str   字符串
 * @param   def   默认值
 */
export function parseJson(str: string, def: any = {}): any {
  // 如果 str 不是字符串或者是空字符串，直接返回默认值 def
  if (typeof str !== 'string' || str.trim() === '')
    return typeof str === 'undefined' || str === null ? def : str;
  try {
    return JSON.parse(str)
  } catch (e) {
    return def
  }
}

/**
 * 设置对象值 - 默认是新增属性，如果属性已存在则替换
 * @param   obj         对象
 * @param   path        属性路径
 * @param   val         值
 * @param   splitter    分隔符  默认 .
 */
export function setDeepValue(obj: any, path: string | string[], val: any, splitter: string = '.') {
  // 如果 path 是字符串，且不包含splitter，直接赋值
  if (typeof path === 'string') {
    if (path.indexOf(splitter) === -1) {
      obj[path] = val;
      return obj;
    }
    // 如果包含splitter，则将字符串按splitter分割成数组
    path = path.split(splitter);
  }

  let active = obj; // active 指向当前操作的对象
  const length = path.length; // 获取路径的长度

  // 遍历路径，除了最后一层，都需要确保对应的对象存在
  for (let i = 0; i < length - 1; i++) {
    const p = path[i];
    // 如果路径上的对象不存在，则创建新对象
    active = active[p] = active[p] || {};
  }

  const lastKey = path[length - 1]; // 获取路径中的最后一个 key
  // 如果最后一个 key 对应的是数组，则将值加入数组；否则直接赋值
  Array.isArray(active[lastKey]) ? active[lastKey].push(val) : (active[lastKey] = val);

  return [active, lastKey]; // 返回修改后的对象
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