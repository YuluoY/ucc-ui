import { reactive, ref  } from "vue";
import type { UDynamicCompProps } from "../types";
import { isArray, isPlainObject } from "lodash-es";

export default function handleParameter(
  this: UDynamicCompProps
) {
  const props = reactive<UDynamicCompProps>({ ...this })
  const innerProps = reactive<UDynamicCompProps['props']>({ ...this.props })
  const children = ref<UDynamicCompProps['children'] | null>(null)

  if (isArray(this.children)) {
    children.value = [...this.children]
  } else if (isPlainObject(this.children)) {
    children.value = { ...(this.children as UDynamicCompProps) }
  } else {
    children.value = this.children
  } 

  return {
    props,
    innerProps,
    children
  }
}