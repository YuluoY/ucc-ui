import { inject, provide, type ComponentInternalInstance } from 'vue'
import type { UDynamicCompExposes, UDynamicCompProps } from '../types'
import { DC_ROOT_KEY } from '../types/const'
import { isEmpty, isNil, isPlainObject } from 'lodash-es'

interface HandleDeepTransferOpts {
  instance?: ComponentInternalInstance | null
}

export default function handleDeepTransfer(
  this: UDynamicCompProps,
  opts: HandleDeepTransferOpts
): Pick<UDynamicCompExposes, 'injectData' | '$root'>
{
  const {
    instance
  } = opts

  let injectData = {}
  let $root = inject(DC_ROOT_KEY, null)
  
  if (this.provide && isPlainObject(this.provide) && !isEmpty(this.provide))
  {
    if (isNil(this.provide.key) || this.provide.key === '')
    
      throw new Error('provide key is required')
    
    provide(this.provide.key, this.provide.value)
  }
  if (this.inject)
    injectData = inject(this.inject, {})

  if (!$root)
  {
    $root = (instance?.appContext.config.globalProperties as any) || {}
    $root!.__DC_ROOT_ID__ = instance?.uid + ''
    $root!.$modelValues = $root?.$modelValues || {}
    provide(DC_ROOT_KEY, $root)
  }

  return {
    injectData,
    $root
  }

}