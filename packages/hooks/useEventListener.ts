import { isRef, onBeforeUnmount, onMounted, unref, watch, type MaybeRef, type WatchStopHandle } from "vue";

/**
 * 
 * @param target 需要监听的元素
 * @param event 事件类型
 * @param handler 事件处理函数
 * @description 用于监听元素的事件
 * @example
 * ```ts
 * useEventListener(document, 'click', (e) => {
 *   console.log(e)
 * })
 * ```
 */
export default function useEventListener (
  target: MaybeRef<EventTarget | HTMLElement | null | void>,
  event: string,
  handler: (e: any) => any
){

  if (!target) {
    return;
  }
  console.log(target, 'target')
  let targetWatchHandle: WatchStopHandle | void;

  if (isRef(target)) {
    targetWatchHandle = watch(target, (newVal, oldVal) => {
      oldVal?.removeEventListener(event, handler);
      newVal?.addEventListener(event, handler);
    }, { immediate: true })
  } else {
    onMounted(() => target?.addEventListener(event, handler))
  }

  onBeforeUnmount(() => {
    targetWatchHandle && targetWatchHandle();
    unref(target)?.removeEventListener(event, handler);
  })
}