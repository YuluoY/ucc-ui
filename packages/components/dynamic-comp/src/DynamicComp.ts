import { capitalize, computed, defineComponent, getCurrentInstance, h, isVNode, readonly, ref, useAttrs } from "vue";
import type { UDynamicCompExposes, UDynamicCompProps } from "../types";
import { bind, has, isArray, isEmpty, isFunction, isNil, isPlainObject, isString, merge, pick } from "lodash-es";
import handleHooks from "../handles/handleHooks";
import handleEvents from "../handles/handleEvents";
import handleParameter from "../handles/handleParameter";
import handleDeepTransfer from "../handles/handleDeepTransfer";
import handleModelValue from "../handles/handleModelValue";
import handleDirectives from "../handles/handleDirectives";
import handleAsyncComponent from "../handles/handleAsyncComp";

export default defineComponent({
  name: 'UDynamicComp',
  emits: ['update:modelValue', 'change'],

  render() {
    if (has(this.binds.directives, 'v-if') && !this.binds.directives['v-if']) {
      return null
    }

    if (!isNil(this.$props.props?.modelValue)) {
      this.binds['data-model'] = true
      this.binds['modelValue'] = this.modelValue

      if (this.isInitialized) {
        this.binds['update:modelValue'] = bind(this.setModelValue, this)
      }
    }
    return h(this.URenderComp, this.binds)
  },

  setup(_, ctx) {
    const props = withDefaults(defineProps<UDynamicCompProps>(), {})

    const isInitialized = ref(false)
    const instance = getCurrentInstance()
    const uid = (instance?.uid ? instance.uid + '' : '') || Math.random().toString(36).substr(2, 9)
    const namespace = isString(props.modelValues) ? props.modelValues : (props.namespace ?? uid)

    const {
      DCMounted,
      AsyncComponent: URenderComp
    } = handleAsyncComponent(() => import('./RenderComp'), { instance })

    const {
      props: _props,
      children,
      innerProps
    } = handleParameter.call(props)

    handleHooks.call(props, { instance, uid })

    const { 
      newEvents 
    } = handleEvents.call(props)
 
    const {
      injectData,
      $root
    } = handleDeepTransfer.call(props, { instance })

    const {
      modelValue,
      modelValues,
      setModelValue,
      setModelValues,
      updateModelValue
    } = handleModelValue.call(props, { ctx, namespace, $root })

    const {
      directives,
      setDirective,
      onShow,
      onRefresh
    } = handleDirectives.call(props, { uid, instance })

    const onChange = (e: Event | any) => ctx.emit('change', e)

    const setProps = (fn: (props: UDynamicCompProps) => void) => {
      if (isFunction(fn)) {
        fn(_props)
      }
    }

    const setInnerProps = (props: UDynamicCompProps['props']) => {
      innerProps.value = merge(innerProps.value, props)
    }

    const binds = computed<{
      [key: string]: any
    }>(() => ({
      type: _props.type,
      slots: _props.slots,
      props: innerProps,
      events: newEvents,
      directives,
      children,
      uid,
      onChange,
      'data-uid': uid,
      ...useAttrs()
    }))

    DCMounted(() => {
      isInitialized.value = true
    })

    defineExpose<UDynamicCompExposes>({
      uid,
      $root,
      instance,

      injectData: readonly(injectData),
      modelValue: readonly(modelValue),
      modelValues: readonly(modelValues),
      directives: readonly(directives),

      onShow,
      onRefresh,
      setModelValue,
      setDirective,
      setModelValues,
      updateModelValue,
      setProps,
      setInnerProps
    })
    
    return {
      binds,
      instance,
      URenderComp,
      isInitialized,
      $props: props,
      modelValue,
      setModelValue
    }
  },
})