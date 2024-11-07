import { h, render } from 'vue'
import DialogSFC from './src/Dialog.vue'
import type { UDialogProps } from './types'
import { debounce, isString } from 'lodash-es'

interface UDialogFnProps {
  single?: boolean
}

interface UDialogFnReturn {
  close: () => void
}

let zIndex = 2006
const UDialog = (props: UDialogProps & UDialogFnProps = {}): UDialogFnReturn => {
  const isSingle = props?.single ?? true

  let container = (isString(props?.appendTo) ? document.querySelector(props.appendTo) : props?.appendTo) || document.body

  if (!isSingle) {
    const div = document.createElement('div')
    container.appendChild(div)
    container = div
  }

  const openDebounce = debounce(open, props?.openDelay || 100)
  const closeDebounce = debounce(close, props?.closeDelay || 100)

  const _props = { 
    ...props, 
    zIndex: zIndex++,
    open: openDebounce,
    close: closeDebounce
  } as any

  function open() {
    render(h(DialogSFC, _props), container)
    !isSingle && container.remove()
  }

  function close() {
    render(null, container)
  }

  isSingle && close()
  open()

  return {
    close
  }
}

export default UDialog