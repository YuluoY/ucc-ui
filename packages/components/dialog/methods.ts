import { h, render } from 'vue'
import Dialog from './src/Dialog.vue'
import type { UDialogProps } from './types'
import { debounce, isString } from 'lodash-es'

interface UDialogPropsExtra {
  mode: 'multi' | 'single'   // single: 只有一个dialog，multi: 多个dialog
}

let zIndex = 2006
const UDialog = (props?: UDialogProps & UDialogPropsExtra) => {

  const width = Math.random() * 200 + 200
  const height = Math.random() * 200 + 200

  const isMulti = props?.mode === 'multi'
  let container = (isString(props?.appendTo) ? document.querySelector(props.appendTo) : props?.appendTo) || document.body

  if (isMulti) {
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
    close: closeDebounce,
    width,
    height
  } as any

   function open() {
    render(h(Dialog, _props), container)
    isMulti && container.remove()
  }

  function close() {
    render(null, container)
  }

  !isMulti && close()
  open()

  return {
    open,
    close
  }
}

export default UDialog




