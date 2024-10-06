import { computed, type Ref  } from "vue";

interface IUseOffsetOptions {
  offset: number;
  boxHeight: Ref<number>;
  getLastBottomOffset: () => number;
}

interface IUseOffsetResult {
  topOffset: Ref<number>;
  bottomOffset: Ref<number>;
}

export function useOffset(options: IUseOffsetOptions): IUseOffsetResult {
  const { offset, boxHeight, getLastBottomOffset } = options;

  const lastBottomOffset = computed(() => getLastBottomOffset());
  const topOffset = computed(() => offset + lastBottomOffset.value)
  const bottomOffset = computed(() => topOffset.value + boxHeight.value)
  
  return {
    topOffset,
    bottomOffset
  }
}

export default useOffset