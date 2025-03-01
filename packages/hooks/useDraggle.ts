import { isString } from "lodash-es";
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
  top: Readonly<Ref<number>>,
  initialLeft: Readonly<Ref<number>>,
  initialTop: Readonly<Ref<number>>
}

/**
 * 
 * @param opts 
 * @param opts.el 需要拖拽的元素
 * @param opts.dragEl 拖拽的元素
 * @param opts.moving 拖拽时触发的事件
 * @param opts.end 拖拽结束时触发的事件
 * @description 用于拖拽元素
 * @example
 * ```ts
 * const { isDraggle, moveX, moveY, startX, startY, endX, endY, left, top, initialLeft, initialTop } = useDraggle({
 *   el: '#app',
 *   dragEl: '#dragEl',
 * })
 * ```
 */
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

  // 记录元素的初始位置
  const initialLeft = ref(0)
  const initialTop = ref(0)

  const isDraggle = ref(false)

  const handleMouseDown = (e: MouseEvent) => {
    startX.value = e.clientX
    startY.value = e.clientY
    
    // 记录元素开始拖拽时的位置
    const rect = target.getBoundingClientRect()
    initialLeft.value = rect.left
    initialTop.value = rect.top
    
    isDraggle.value = true
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggle.value) 
      return
    e.preventDefault()
    
    // 计算鼠标移动的距离
    moveX.value = e.clientX - startX.value
    moveY.value = e.clientY - startY.value
    
    // 基于初始位置计算新位置
    left.value = initialLeft.value + moveX.value
    top.value = initialTop.value + moveY.value
    
    if (left.value < 0 || top.value < 0)
      return
      
    window.requestAnimationFrame(() => {
      opts.moving?.(moveX.value, moveY.value)
      target.style.left = `${left.value}px`
      target.style.top = `${top.value}px`
    })
  }

  const handleMouseUp = (e: MouseEvent) => {
    if (!isDraggle.value) return
    
    isDraggle.value = false
    endX.value = e.clientX
    endY.value = e.clientY
    moveX.value = endX.value - startX.value
    moveY.value = endY.value - startY.value
    
    // 确保最终位置是正确的
    left.value = initialLeft.value + moveX.value
    top.value = initialTop.value + moveY.value
    
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
    top: computed(() => top.value),
    initialLeft: computed(() => initialLeft.value),
    initialTop: computed(() => initialTop.value)
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