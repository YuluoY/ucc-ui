import type { Ref } from 'vue';
import useEventListener from './useEventListener';
export default function useClickOutside(
  eleRef: Ref<HTMLElement | null>,
  callback: (e: MouseEvent) => void
) {
  useEventListener(document, 'click', (e: Event) => {
    if (eleRef.value && e.target) {
      if (!eleRef.value.contains(e.target as HTMLElement))
        callback(e as MouseEvent)
    }
  })
}