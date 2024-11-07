import { isRef, onBeforeUnmount, onMounted, unref, watch, type MaybeRef, type WatchStopHandle } from "vue";

export default function useEventListener (
  target: MaybeRef<EventTarget | HTMLElement | null | void>,
  event: string,
  handler: (e: any) => any
){

  if (!target) {
    return;
  }

  let targetWatcher: WatchStopHandle | void;

  if (isRef(target)) {
    targetWatcher = watch(target, (newVal, oldVal) => {
      oldVal?.removeEventListener(event, handler);
      newVal?.addEventListener(event, handler);
    })
  } else {
    onMounted(() => target?.addEventListener(event, handler))
  }

  onBeforeUnmount(() => {
    targetWatcher && targetWatcher();
    unref(target)?.removeEventListener(event, handler);
  })
}