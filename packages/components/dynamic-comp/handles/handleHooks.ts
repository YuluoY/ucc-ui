import { getCurrentInstance, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, type ComponentInternalInstance } from 'vue'
import type { UDynamicCompProps } from '../types'
import { isFunction } from 'lodash-es'

interface HandleHooksOpts {
  uid?: string
  instance?: ComponentInternalInstance | null
}

export default function handleHooks(
  this: UDynamicCompProps,
  opts: HandleHooksOpts
)
{
  const {
    uid,
    instance = getCurrentInstance()
  } = opts

  const bindHooks = (hook: Function, fn: Function) =>
    isFunction(fn) && hook(() => fn.call(instance))

  // 生命周期钩子绑定
  bindHooks(onBeforeMount, this.hooks?.beforeMount)
  bindHooks(onMounted, this.hooks?.mounted)
  bindHooks(onBeforeUnmount, this.hooks?.beforeUnmount)
  bindHooks(onUnmounted, this.hooks?.unmounted)

  bindHooks(onBeforeUpdate, this.hooks?.beforeUpdate)
  bindHooks(onUpdated, this.hooks?.updated)

  // keepAlive
  bindHooks(onActivated, this.hooks?.activated)
  bindHooks(onDeactivated, this.hooks?.deactivated)

  // 渲染跟踪
  bindHooks(onRenderTracked, this.hooks?.renderTracked)
  bindHooks(onRenderTriggered, this.hooks?.renderTriggered)

  // 捕获错误并调用钩子中的错误处理函数
  onErrorCaptured((err, vm, info) =>
  {
    console.error(`${this.type}-${uid}：`, err, vm, info)
    if (this.hooks?.errorCaptured && isFunction(this.hooks?.errorCaptured))
      this.hooks?.errorCaptured.call(instance, err, vm, info)
    return false // 阻止错误向上传播
  })
}