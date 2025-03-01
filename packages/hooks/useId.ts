import { computed, type Ref } from "vue";

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

/**
 * 
 * @param namespace 命名空间
 * @returns 生成的id
 * @description 用于生成唯一的id
 * @example
 * ```ts
 * const id = useId()
 * console.log(id)
 * ```
 */
export function useId(namespace: string = 'u'): Ref<string> {
  const idRef = computed(() =>
  `${namespace}-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`)

  return idRef
}

export default useId