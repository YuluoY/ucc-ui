import type { Component, ComponentInternalInstance, Ref, VNode } from "vue";
import type { UDVueDirectivesType } from "./const";
import type { UseDvueDirectivesResult } from "../hooks/useDVueDirectives";

export type UDynamicComponentType = string | Function | VNode | Component

export type UDVueDirectivesTypeValues = string | Function | boolean | number | object | symbol | undefined

type Props = Record<string, any> & { modelValue?: any, modelValueSplit?: string }
type Children = string | UDynamicComponentProps | UDynamicComponentProps[]
type Directives = Record<UDVueDirectivesType, UDVueDirectivesTypeValues> & { [key: string]: UDVueDirectivesTypeValues }

export interface UDynamicComponentProps {
  __D_V_KEY__?: string | number | symbol            // 组件的key
  modelValues?: Record<string, any>                 // 收集子组件的modelValue, 并将收集的子组件响应式对象放在全局变量中: appContext.config.globalProperties.$modelValues
  type?: UDynamicComponentType                      // 组件类型
  props?: Props                                     // 组件的props, 如果有modelValue, 则会自动绑定v-model
  children?: Children                               // 子组件
  events?: Record<string, Function>                 // 使用事件, 在events中定义的事件函数的this指向当前组件实例: getCurrentInstance()
  slots?: Record<string, UDynamicComponentProps>    // 使用具名插槽
  directives?: Directives                           // 使用指令
  hooks?: Record<string, Function>                  // 使用钩子函数
}

export interface UDynamicComponentEmits {
  (event: 'update:modelValues', value: Record<string, any>): void
  (event: 'change', value: any): void
}

type Result = Omit<UseDvueDirectivesResult, 'extraProps'>
export interface UDynamicComponentExpose {
  instance: ComponentInternalInstance | null,
  root: ComponentInternalInstance | null,
  uid: number | undefined,
  modelValue: Ref<any> | null | undefined,
  modelValues: Readonly<Record<string, Ref<any>>>,
  directiveMap: Readonly<Result['directiveMap']>
  // directiveEvents?: Readonly<Result['directiveEvents']>
}

// ModelComponent.vue