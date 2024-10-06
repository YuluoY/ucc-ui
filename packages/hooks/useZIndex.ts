import { computed, ref } from "vue";

const zIndex = ref(0)

export default function useZIndex(initVal = 1100) {
  const _initVal = ref(initVal)
  const curZIndex = computed(() => zIndex.value + _initVal.value)

  const nextZIndex = () => {
    zIndex.value++
    return curZIndex.value
  }
  
  return {
    initVal,
    curZIndex,
    nextZIndex
  }
}