import type { Component, ComponentInternalInstance, Ref, VNode } from "vue";

export type UDynamicComponentType = string | Function | VNode | Component

export interface UDynamicComponentProps {
  modelValues?: Record<string, any> // 收集子组件的modelValue, 并将收集的响应式对象放在全局变量中: appContext.config.globalProperties.$modelValues
  type?: UDynamicComponentType  // 组件类型
  props?: Record<string, any> & { modelValue?: any, modelValueSplit?: string }  // 组件的props, 如果有modelValue, 则会自动绑定v-model
  children?:string | UDynamicComponentProps | UDynamicComponentProps[]  // 子组件
  events?: Record<string, Function>  // 使用事件, 在events中定义的事件函数的this指向当前组件实例: getCurrentInstance()
  slots?: Record<string, UDynamicComponentProps> // 使用具名插槽
  directives?: Record<string, any> // 使用指令
}

export interface UDynamicComponentEmits {
  (event: 'update:modelValues', value: Record<string, any>): void
  (event: 'change', value: any): void
}

export interface UDynamicComponentExpose {
  root: ComponentInternalInstance | null,
  modelValue: Ref<any> | null | undefined,
  modelValues: Record<string, Ref<any>>
}