import type { Component, ComponentCustomProperties, ComponentInternalInstance, DirectiveArguments, VNode, Directive } from "vue"
import { withModifiers } from 'vue'
import type { CDirectives, CLifecycleHooks } from "./const";

export declare type LifecycleHooks = typeof CLifecycleHooks[keyof typeof CLifecycleHooks];

export declare type Directives = typeof CDirectives[keyof typeof CDirectives];

interface IDynamicCompProvide<T = any> {
  key: string | symbol,
  value: T
}

export type DynamicCompPropsCtxFn<T = any, A extends any[] = any[]> = (this: UDynamicCompProps, ...args: A) => T 
export type DynamicCompCtxFn<T = any, A extends any[] = any[]> = (this: ComponentInternalInstance | null, ...args: A) => T 

type DynamicCompType =  string | VNode | Component | Function
type DynamicCompChildren = string | VNode | Component | Function | UDynamicCompProps
type DynamicCompEvent = DynamicCompPropsCtxFn<DynamicCompChildren> | ReturnType<typeof withModifiers<any>>
type DynamicCompSlots = DynamicCompPropsCtxFn<DynamicCompChildren> | DynamicCompChildren
export type DynamicCompDirectives = boolean 

interface UDynamicCompExtraProps {
  isAsync?: boolean
  modelValue?: {
    path: string
    value: any
  }
}

export interface UDynamicCompProps {
  /**
   * 子组件的modelValue值集合
   *  - 用于存储其子组件下的modelValue值。
   *  - 如果为string且namespace不存在，则有效。
   *  - 如果为object，则可为子组件提供相同属性的默认的modelValue值。
   * @type {string | Record<string, any>}
   * @example
   * ```js
   *  modelValues: 'form'
   *  modelValues: { name: '张三', age: 18 }
   *  ```
   */
  modelValues: string | Record<string, any>

  /**
   * 命名
   *  - 用于存储其子组件下的modelValue值。
   *  - 在instance.appContext.config.globalProperties.$modelValues中，新增命名namespace的属性。
   *  - 优先级高于modelValues。
   * @type {string}
   * @example
   * ```js
   *  namespace: 'namespace'
   * ```
   */
  namespace: string

  /**
   * 提供
   * @type {IDynamicCompProvide}
   * @example
   * ```js
   *  provide: { [key]: value }
   *  ```
   */
  provide: IDynamicCompProvide

  /**
   * 注入 - 使用注入后，可以通过组件实例暴露（expose）出的"injectData"变量获取到值。
   * @type {string | symbol}
   * @example
   * ```js
   *  inject: 'key'
   *  inject: Symbol('key')
   * ```
   */
  inject: string | symbol

    /**
   * 组件类型
   * @type {DynamicCompType}
   * @example
   * ```js
   *  string：查找内置组件（如：'div'、'span'）与全局组件，如果组件未找到，会抛出一个运行时警告，并返回组件名字符串。
   *  Component: 组件。
   *  VNode: 虚拟节点。
   *  Function: 函数式组件。
   * ```
   */
  type: DynamicCompType

  /**
   * 组件属性
   * @type {Record<string, any>}
   * @example
   * ```js
   * {
   *   [属性名称]: 属性值
   * }
   * ```
   */
  props: Record<string, any> & UDynamicCompExtraProps

  /**
   * 子组件
   * @type {DynamicCompChildren | DynamicCompChildren[]}
   * @example
   * ```js
   *   // VNode - 虚拟节点
   *   children: h('div', { class: 'text' }, '文本内容')
   *   children: createVNode('div', { class: 'text' }, '文本内容')
   * 
   *   // Component - 组件
   *   children: MyComponent
   *   children: () => import('./MyComponent.vue')
   *   children: defineAsyncComponent(() => import('./MyComponent.vue'))
   * 
   *   // Function - 函数式组件
   *   children: (props) => h('div', { class: 'text' }, '文本内容')
   * 
   *   // Array - 多子组件
   *   children: [
   *     { type, props, children, ... }  // 同UModelComp的props
   *   ]
   *
   *   // Object - 单子组件
   *   children: { type, props, children, ... }  // 同UModelComp的props
   *
   *   // string - 文本内容
   *   children: '文本内容'
   * ```
   */
  children: DynamicCompChildren | DynamicCompChildren[]

  /**
   * 事件
   * @type {Record<string, DynamicCompEvent>}
   * @example
   * ```js
   * {
   *    // Function - this指向组件props，而非组件实例instance，事件名称不需要带前缀on。
   *   [事件名称]: (this: props) => {}
   *    // 若事件需要用到修饰符
   *   [事件名称]: withModifiers((this: props) => {}, [修饰符, ...])
   * }
   * ```
   */
  events: Record<string, DynamicCompEvent>

  /**
   * 插槽使用 - PS：并非定义插槽
   * @type {Record<string, Function | VNode | Component | object | string>}
   * @example
   * ```js
   * {
   *    // 不用箭头函数时，this为组件实例，使用箭头函数则this为undefined。
   *   [插槽名称]: (this: instance, data: any) => {},       // Function - data为插槽的props
   *   [插槽名称]: h('组件名称', { props: {} }, () => {}),  // VNode
   *   [插槽名称]: 组件,                                    // Component
   *   [插槽名称]: { type, props, children },               // object - 与 组件props 一致
   *   [插槽名称]: '插槽内容',                               // string
   * }
   * ```
   */
  slots: Record<string, DynamicCompSlots>

  /**
   * 生命周期钩子
   * @type {Record<LifecycleHooks, DynamicCompCtxFn<void>>}
   * @example
   * ```js
   *  {
   *    // 不用箭头函数时，this为组件实例，使用箭头函数则this为undefined。以下同理
   *    beforeCreate: (this: instance) => {},
   *    created: () => {},
   *    beforeMount: () => {},
   *    mounted: () => {},
   *    beforeUpdate: () => {},
   *    updated: () => {},
   *    beforeUnmount: () => {},
   *    unmounted: () => {},
   *    activated: () => {},
   *    deactivated: () => {},
   *    errorCaptured: () => {},
   *    renderTracked: () => {},
   *    renderTriggered: () => {},
   *  }
   *  ```
   */
  hooks: Record<LifecycleHooks, DynamicCompCtxFn<void>> 

  /**
   * 指令
   * @type {Record<Directives, DynamicCompDirectives | DynamicCompCtxFn<DynamicCompDirectives>> | DirectiveArguments}
   * @example
   * ```js
   *  // object
   *  {
   *     'v-if': true,
   *     'v-show': (this: instance) => true,  // 不用监听函数时，this为组件实例，使用箭头函数则this为undefined
   *  }
   * 
   * ```
   */
  directives: Record<Directives, DynamicCompDirectives | DynamicCompCtxFn<DynamicCompDirectives>>
}

export interface UDynamicCompExposes {
  uid: string
  $root: UDynamicCompRoot | null
  instance: ComponentInternalInstance | null

  injectData: Readonly<any>
  modelValue: Readonly<any>
  modelValues: Readonly<Record<string, any>>
  directives: Readonly<Record<string, any>>

  onShow: (val?: boolean) => void
  onRefresh: (val?: boolean, time?: number) => void
  setDirective: (directive: string, value: DynamicCompDirectives | DynamicCompCtxFn<DynamicCompDirectives>) => void
  setInnerProps: (val: UDynamicCompProps['props']) => void
  setProps: (fn: (val: UDynamicCompProps) => void) => void
  setModelValue: (val: any) => void
  setModelValues: (path: string, val: any) => void
  updateModelValue: (val: any) => void
}

export interface URenderCompProps extends Omit<UDynamicCompProps, 'modelValues' | 'namespace' | 'inject' | 'provide'> {
  uid: string
}

export interface UDynamicCompRoot extends ComponentCustomProperties {
  $modelValues: Record<string, any>
  __DC_ROOT_ID__: string
}