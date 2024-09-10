
<template>
  <template v-if="vif">
    <u-struct-component
      v-if="isValue(props.modelValue)"
      :data-uid="instance?.uid"
      v-bind="VBinds"
      v-model="modelValue"
    />
    <u-struct-component
      v-else
      :data-uid="instance?.uid"
      v-bind="VBinds"
    />
  </template>
</template>

<script setup lang="ts">
import { isBoolean, isEffectObject, isFunction, isString, isValue, parseJson, setDeepValue } from '@ucc-ui/utils';
import { computed, defineAsyncComponent, getCurrentInstance, inject, onBeforeUnmount, provide, reactive, readonly, ref, useAttrs, watch, type ComponentInternalInstance, type Reactive, type WatchStopHandle } from 'vue';
import type { UModelComponentEmits, UModelComponentExpose, UModelComponentProps, UStructComponentProps } from '../types';

  defineOptions({
    name: 'UModelComponent'
  })

  const UStructComponent = defineAsyncComponent(() => import('./StructComponent.vue'))
  const instance = getCurrentInstance()
  const emits = defineEmits<UModelComponentEmits>()
  const _props = withDefaults(defineProps<UModelComponentProps>(), {
    type: 'div',
    props: () => ({}),
    events: () => ({}),
    children: () => ([]),
    slots: () => ({}),
    hooks: () => ({}),
    directives: () => ({})
  })

  // 处理events this指向 
  const newEvents = {} as any
  Object.keys(_props.events).forEach(key => (newEvents[key] = isFunction(_props.events[key]) ? _props.events[key].bind(instance) : _props.events[key]))

  // v-bind
  const VBinds = computed<UStructComponentProps>(() => ({
    type: _props.type,
    props: _props.props,
    children: _props.children,
    slots: _props.slots,
    hooks: _props.hooks,
    directives: _props.directives,
    events: newEvents,
    ...useAttrs()
  }))
  
  // $modelValues 全局响应式变量
  let root = inject<ComponentInternalInstance | null>('root', null)
  let modelValues = null as Reactive<any> | null
  let modelValuesWatcher = null as WatchStopHandle | null
  if (!root)
  {
    root = instance
    provide('root', root)
  }
  if (_props.modelValues) {
    if (isString(_props.modelValues)) {
      modelValues = reactive({})
      addModelValues(_props.modelValues, modelValues)
    } else if (isEffectObject(_props.modelValues)) {
      modelValues = reactive({ ...(_props.modelValues as object) })
      addModelValues(instance?.uid, modelValues)
    }
    modelValuesWatcher = watch(modelValues, (val: any) => emits('update:modelValues', val), { deep: true })
  } else {
    modelValues = inject<Reactive<any>>('modelValues', null)
    // 如果顶层组件没有modelValues，则创建一个
    if (!modelValues) {
      modelValues = reactive({})
      addModelValues(instance?.uid, modelValues)
    }
  }
  provide('modelValues', modelValues)
  
  // v-model
  const modelValue = ref<any>(null)
  let path = _props.props.modelValue || ''
  let modelValueWatcher = null as WatchStopHandle | null
  if (_props.props.modelValue) {
    modelValue.value = ''
    const splitter = _props.props.modelValueSplitter || '-'
    if (~_props.props.modelValue.indexOf(splitter)) {
      // 默认以'-'分割，元素一：属性，元素二：值
      const [key, val] = _props.props.modelValue.split(splitter)
      modelValue.value = parseJson(val, '') as any
      path = key
    }
    setDeepValue(modelValues, path, modelValue)
    modelValueWatcher = watch(modelValue, (val: any) => path && setDeepValue(modelValues, path, val) && emits('change', val))
  }

  // directives
  const vif = ref(true), vShow = ref(true)
  if (isFunction(_props.directives['v-if']))
    vif.value = (_props.directives['v-if'] as Function).call(instance)
  else if (isBoolean(_props.directives['v-if']))
    vif.value = _props.directives['v-if']

  const onRefresh = (val: boolean, time: number = 0) => {
    setTimeout(() => vif.value = val ?? !vif.value, time);
  }

  let preDisplay = ''
  const onChangeShow = (val: boolean) => {
    vShow.value = val ?? !vShow.value
    const el = document.querySelector(`[data-uid="${instance?.uid}"]`) as HTMLElement
    if (!el) return
    if (vShow.value) {
      el.style.display = preDisplay
    } else {
      preDisplay = el.style.display
      el.style.display = 'none'
    }
  }

  const setModelValue = (val: any) => {
    if (modelValue.value === val) return
    modelValue.value = val
  }

  const setModelValues = (key: string | string[], val: any) => {
    setDeepValue(modelValues, key, val)
  }
  
  onBeforeUnmount(() => {
    modelValuesWatcher && modelValuesWatcher()
    modelValueWatcher && modelValueWatcher()
  })

  function addModelValues (key: any, val: any) {
    if (root?.appContext) {
      const glob = root.appContext.config.globalProperties
      glob.$modelValues = glob.$modelValues || {}
      glob.$modelValues[key] = val
    }
  }

  defineExpose<UModelComponentExpose>({
    root,
    instance,
    modelValue: readonly(modelValue),
    modelValues: readonly(modelValues),

    onRefresh,
    onChangeShow,
    setModelValue,
    setModelValues
  })
</script>