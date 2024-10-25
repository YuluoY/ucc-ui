import type { InjectionKey } from "vue";
import type { UDynamicCompRoot } from ".";

export const CLifecycleHooks = {
  BEFORE_CREATE: 'beforeCreate',
  CREATED: 'created',
  BEFORE_MOUNT: 'beforeMount',
  MOUNTED: 'mounted',
  BEFORE_UPDATE: 'beforeUpdate',
  UPDATED: 'updated',
  BEFORE_UNMOUNT: 'beforeUnmount',
  UNMOUNTED: 'unmounted',
  ERROR_CAPTURED: 'errorCaptured',
  ACTIVATED: 'activated',
  DEACTIVATED: 'deactivated',
  RENDER_TRACKED: 'renderTracked',
  RENDER_TRIGGERED: 'renderTriggered',
} as const;

export const CDirectives = {
  V_BIND: 'v-bind',          // 动态绑定属性
  V_ON: 'v-on',              // 事件监听
  V_IF: 'v-if',              // 条件渲染
  V_ELSE: 'v-else',          // 条件渲染的 else 部分
  V_ELSE_IF: 'v-else-if',    // 条件渲染的 else if 部分
  V_FOR: 'v-for',            // 列表渲染
  V_SHOW: 'v-show',          // 根据条件显示或隐藏元素
  V_MODEL: 'v-model',        // 双向数据绑定
  V_SLOT: 'v-slot',          // 具名插槽
  V_PRE: 'v-pre',            // 跳过该节点及其子节点的编译
  V_CLOAK: 'v-cloak',        // 在 Vue 实例激活之前保持元素的显示
  V_ONCE: 'v-once',          // 仅渲染一次的内容
  V_HTML: 'v-html',          // DOM渲染
} as const;

export const DC_ROOT_KEY: InjectionKey<UDynamicCompRoot | null> = Symbol('DC_ROOT_KEY')
export const DC_RENDER_BACK_KEY: InjectionKey<boolean | null> = Symbol('DC_RENDER_BACK_KEY')
export const DC_MODELVALUES_KEY: InjectionKey<Record<string, any> | null> = Symbol('DC_MODELVALUES_KEY')