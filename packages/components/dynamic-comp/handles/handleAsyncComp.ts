import { isFunction } from 'lodash'
import { defineAsyncComponent, type ComponentInternalInstance } from 'vue'

export default function handleAsyncComponent(
  asyncCompFn: Function, 
  opts: {
    instance: ComponentInternalInstance | null
  }
)
{
  const {
    instance
  } = opts

  const DCMountedQue = [] as any[]
  const DCMounted = (fn: Function | Promise<any>) => DCMountedQue.push(fn)
  const promise = asyncCompFn()

  if (!promise.then || !isFunction(promise.then))
    throw new Error('handleAsyncComponent fn must be a promise')

  const AsyncComponent = defineAsyncComponent(() =>
  {
    // eslint-disable-next-line promise/param-names
    return new Promise((resolve, rejcet) =>
    {
      promise.then((res: any) =>
      {
        setTimeout(async() =>
        {
          while (DCMountedQue.length)
          {
            const fn = DCMountedQue.shift()
            await fn.call(instance)
          }
        }, 200)
        resolve(res.default)
      }).catch((err: Error) => rejcet(err))
    })
  })

  return {
    DCMounted,
    AsyncComponent
  }
}
