import { isEmpty, isFunction, isPlainObject } from 'lodash'
import type { UDynamicCompProps } from '../types'

export default function handleEvents(
  this: UDynamicCompProps
)
{
  const newEvents = {} as Record<string, any>
  if (isPlainObject(this.events) && !isEmpty(this.events))
  {
    for (const key in this.events)
    {
      // eslint-disable-next-line no-prototype-builtins
      if (!this.events.hasOwnProperty(key))
        continue
      const event = this.events[key]
      newEvents[key] = isFunction(event) ? event.bind(this) : event
    }
  }

  return {
    newEvents
  }
}
