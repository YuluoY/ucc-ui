import { isRef, onBeforeUnmount, onMounted, unref, watch, type MaybeRef, type WatchStopHandle } from "vue";

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