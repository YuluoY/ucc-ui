import { isFunction } from "lodash-es";
import { onBeforeUnmount, ref, watch, type Ref, type WatchOptions } from "vue";

export default function useWatchRef<T = any>(
  val: T, 
  watchFn: () => any,
  change?: () => void,
  watchOpts: WatchOptions  = {}
): Ref<T> {
  const valRef = ref(val) as Ref<T>
  const isChangeFn = change && isFunction(change)
  const watchHandle = watch(watchFn, (newVal: T) => {
    valRef.value = newVal
    isChangeFn && change()
  }, watchOpts)

  onBeforeUnmount(() => {
    watchHandle()
  })

  return valRef
}