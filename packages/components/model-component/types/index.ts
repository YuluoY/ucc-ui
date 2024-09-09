import type { Component, ComponentInternalInstance, Reactive, Ref, VNode } from "vue"
import type { UStructDirectiveEventsType, UStructDirectivesType, UStructHooksType } from "./const"

export type UModelInternalInstanceFn<R = void> = (this: ComponentInternalInstance | null, ...args: any) => R

export type StructDirectivesValue = string | boolean | UModelInternalInstanceFn | object

export type StructType = string | VNode | Component | Function | null
export type StructProps = Record<string, any> & Partial<{ modelValue: string, modelValueSplitter: string }>
export type StructChildren = string | UModelComponentProps | UModelComponentProps[] | null
export type StructEvents = Record<string, UModelInternalInstanceFn>
export type StructSlots = Record<string, UModelInternalInstanceFn>
export type StructHooks = Record<UStructHooksType, UModelInternalInstanceFn>
export type StructDirectives = Record<UStructDirectivesType, StructDirectivesValue>

export interface UStructComponentProps {
  [key: string]: any
  type?: StructType
  props?: StructProps
  children?: StructChildren
  events?: StructEvents
  slots?: StructSlots
  hooks?: Partial<StructHooks> & { [key: string]: UModelInternalInstanceFn }
  directives?: Partial<StructDirectives>
}

export interface UModelComponentProps extends UStructComponentProps {
  modelValues?: string | Record<string, any>
}

export interface UModelComponentEmits {
  (event: "update:modelValues", value: any): void
  (event: 'change', value: any): void  
}


export interface UModelComponentExpose extends Partial<Record<UStructDirectiveEventsType, Function>> {
  root: ComponentInternalInstance | null,
  instance: ComponentInternalInstance | null,
  modelValue: Readonly<Ref<any>>,
  modelValues: Readonly<Reactive<any>>
}