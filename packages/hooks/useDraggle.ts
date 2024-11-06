import { isFunction, isString } from "lodash-es";
import { computed, isRef, onBeforeUnmount, ref, type Ref } from "vue";

interface UseDraggleOptions {
  el: string | HTMLElement | Ref<HTMLElement | null>
  dragEl: string | HTMLElement | Ref<HTMLElement | null>
  moving?: (moveX: number, moveY: number) => void
  end?: (endX: number, endY: number) => void
}

interface UseDraggleReturn {
  isDraggle: Ref<boolean>,
  moveX: Readonly<Ref<number>>,
  moveY: Readonly<Ref<number>>,
  startX: Readonly<Ref<number>>,
  startY: Readonly<Ref<number>>,
  endX: Readonly<Ref<number>>,
  endY: Readonly<Ref<number>>,
  left: Readonly<Ref<number>>,
  top: Readonly<Ref<number>>
}

export default function useDraggle(opts: UseDraggleOptions): UseDraggleReturn {
  
  const {
    el,
    dragEl
  } = opts

  const target = getDOM(el)
  const draggleTarget = getDOM(dragEl) || target

  if (!target) 
    throw new Error('el is not found')

  window.requestAnimationFrame(() => {
    target.style.position = 'relative'
    target.style.userSelect = 'none'
    target.style.touchAction = 'none'
    draggleTarget!.style.cursor = 'move'
    const willChangeArr = target.style.willChange.split(',')
    if (!willChangeArr.includes('left'))
      target.style.willChange = willChangeArr.concat('left').join(',')
    if (!willChangeArr.includes('top'))
      target.style.willChange = willChangeArr.concat('top').join(',')
  })

  const startX = ref(0)
  const startY = ref(0)

  const endX = ref(0)
  const endY = ref(0)

  const moveX = ref(0)
  const moveY = ref(0)

  const left = ref(0)
  const top = ref(0)

  const isDraggle = ref(false)

  const handleMouseDown = (e: MouseEvent) => {
    startX.value = e.clientX
    startY.value = e.clientY
    isDraggle.value = true
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggle.value) 
      return
    e.preventDefault()
    const rect = target.getBoundingClientRect()
    left.value = rect.left + e.movementX
    top.value = rect.top + e.movementY
    if (left.value < 0 || top.value < 0)
      return
    window.requestAnimationFrame(() => {
      opts.moving?.(moveX.value, moveY.value)
      target.style.left = `${left.value}px`
      target.style.top = `${top.value}px`
    })
  }

  const handleMouseUp = (e: MouseEvent) => {
    isDraggle.value = false
    endX.value = e.clientX
    endY.value = e.clientY
    moveX.value = endX.value - startX.value
    moveY.value = endY.value - startY.value
    opts.end?.(endX.value, endY.value)
  }

  draggleTarget?.addEventListener('mousedown', handleMouseDown, { passive: true })
  document.addEventListener('mousemove', handleMouseMove, { passive:false })
  document.addEventListener('mouseup', handleMouseUp, { passive: true })

  onBeforeUnmount(() => {
    draggleTarget?.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  })

  return {
    isDraggle,
    moveX: computed(() => moveX.value),
    moveY: computed(() => moveY.value),
    startX: computed(() => startX.value),
    startY: computed(() => startY.value),
    endX: computed(() => endX.value),
    endY: computed(() => endY.value),
    left: computed(() => left.value),
    top: computed(() => top.value)
  }
}

function getDOM(el: UseDraggleOptions['el']): HTMLElement | null {
  if (isString(el))
    return document.querySelector(el)
  else if (el instanceof HTMLElement)
    return el
  else if (isRef(el))
    return el.value
  return null
}