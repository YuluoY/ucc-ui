import { capitalize, defineComponent, getCurrentInstance, h, isVNode, resolveComponent, type CSSProperties } from 'vue'
import type { URenderCompProps } from '../types'
import handleAsyncComponent from '../handles/handleAsyncComp'
import { has, isArray, isEmpty, isFunction, isPlainObject, isString } from 'lodash-es'
import { isVueComponent } from '@ucc-ui/utils'
import { CDirectives } from '../types/const'
const Native = ['div', 'span', 'pre', 'i', 'main', 'section']
export default defineComponent({
  name: 'URenderComp',
  setup(_, ctx)
  {
    const props = withDefaults(defineProps<URenderCompProps>(), {})

    const instance = getCurrentInstance()

    const {
      AsyncComponent: UDynamicComp
    } = handleAsyncComponent(() => import('./DynamicComp'), { instance })

    return {
      UDynamicComp,
      ...props
    }
  },
  methods: {
    getChildren()
    {
      if (isArray(this.children) && this.children.length)
      
        return this.children.map(v => this.toVNode(v))
      
      return [this.toVNode(this.children)]
    },

    toVNode(val: any)
    {
      if (isFunction(val))
      
        return val()
      
      else if (isVNode(val))
      
        return val
      
      else if (isVueComponent(val))
      
        return h(val)
      
      else if (isPlainObject(val) && !isEmpty(val))
      
        return h(this.UDynamicComp, {...val, onChange: this.$emit('change')})
      
      else if (isString(val))
      
        return h('span', { innerHTML: val })
      
      return null
    },

    /**
     * 处理插槽
     */
    getSlots()
    {
      return Object.keys(this.slots).reduce((acc: {
        [key: string]: any
      }, slotName) =>
      {
        const slotVal = this.slots[slotName] as any
        let vnode = null
        if (isVueComponent(slotVal) || isVNode(slotVal))
          vnode = (data: any) => h(slotVal, { onChange: this.$emit('change'), ...data })
        else if (isPlainObject(slotVal) && !isEmpty(slotVal))
          vnode = () => h(this.UDynamicComp, { ...slotVal, onChange: this.$emit('change') })
        else if (isFunction(slotVal))
          vnode = (data: any) => slotVal.call(null, data)
        else if (isString(slotVal))
          vnode = () => h('span', { innerHTML: slotVal })
        acc[slotName] = vnode
        return acc
      }, {})
    },

    /**
     * 添加事件前缀 on
     */
    addEventPrefix(events: any)
    {
      if (!events)
        return {}
      return Object.keys(events).reduce((acc: {
        [key: string]: any
      }, key) =>
      {
        acc[`on${capitalize(key)}`] = events[key]
        return acc
      }, {})
    }
  },
  render()
  {
    let isNative = false, component = this.type
    if (isString(this.type))
    {
      if (!Native.includes(this.type))
      
        component = resolveComponent(this.type)
      
    }

    const params = {
      default: () => this.getChildren(),
      ...this.getSlots()
    }

    const on = { onChange: this.$emit('change'), ...this.addEventPrefix(this.events) }

    const props = {
      style: {} as CSSProperties,
      ...this.$props,
      ...this.$attrs,
      ...on,
    }

    if (has(this.directives, CDirectives.V_SHOW))
    
      props.style.display = this.directives[CDirectives.V_SHOW] ? 'block' : 'none'
    

    return h(component as any, props, params)

  }
})