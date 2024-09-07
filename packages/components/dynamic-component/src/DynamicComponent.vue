<template>
  <template
    v-if="directiveMap.isExist"
    v-show="directiveMap.isShow"
  >
    <component
      v-if="props.modelValue"
      :class="[be('component')]" 
      :is="type" 
      v-bind="Vbind"
      v-on="events"
      v-model="modelValue"
    >
      <template v-if="isEffectArray(children)">
        <u-dynamic-component :class="[be('children')]" v-bind="child" v-for="(child, index) in children" :key="`${uid}-children-${index}`" />
      </template>
      <template v-else-if="isEffectObject(children)">
        <u-dynamic-component :class="[be('children')]" v-bind="(children as object)" />
      </template>
      <template v-else-if="isString(children)">
        {{ children }}
      </template>

      <template #[slotName]="data" v-for="(val, slotName, index) in slots" :key="`${uid}-${slotName}-${index}`">
        <u-dynamic-component :class="[be('slots')]" v-if="isFunction(val)" v-bind="val(data)" />
        <u-dynamic-component :class="[be('slots')]" v-else v-bind="val" />
      </template>
    </component>

    <component 
      v-else
      :class="[be('component')]" 
      :is="type" 
      v-bind="Vbind" 
      v-on="events"
    >
      <template v-if="isEffectArray(children)">
        <u-dynamic-component :class="[be('children')]" v-bind="child" v-for="(child, index) in children" :key="`${uid}-children-${index}`" />
      </template>
      <template v-else-if="isEffectObject(children)">
        <u-dynamic-component :class="[be('children')]" v-bind="(children as object)" />
      </template>
      <template v-else-if="isString(children)">
        {{ children }}
      </template>

      <template #[name]="data" v-for="(val, name, index) in slots" :key="`${uid}-${name}-${index}`">
        <u-dynamic-component :class="[be('slots')]" v-if="isFunction(val)" v-bind="val(data)" />
        <u-dynamic-component :class="[be('slots')]" v-else v-bind="val" />
      </template>
    </component>
  </template>
</template>

<script lang="ts" setup>
import type { UDynamicComponentEmits, UDynamicComponentExpose, UDynamicComponentProps } from '../types'
import type { ComponentInternalInstance, Reactive, Ref, WatchStopHandle } from 'vue';

import { isEffectArray, isEffectObject, isFunction, isString, parseJson, setObjByPath } from '@ucc-ui/utils';
import { watch, inject, onBeforeUnmount, provide, reactive, ref, getCurrentInstance, readonly, markRaw, useAttrs, computed } from 'vue';
import useDVueDirectives from '../hooks/useDVueDirectives';

  defineOptions({
    inheritAttrs: false,
    name: 'UDynamicComponent'
  })

  const emits = defineEmits<UDynamicComponentEmits>()
  const instance = getCurrentInstance()
  const uid = instance?.uid
  const _props = withDefaults(defineProps<UDynamicComponentProps>(), {
    type: 'div',
    props: () => ({}),
    events: () => ({}),
    slots: () => ({})
  })

  const {
    extraProps = {},
    directiveMap = {
      isExist: true,
      isShow: true
    }
  } = useDVueDirectives({
    instance, 
    key: _props.__D_V_KEY__ || uid,
    directives: _props.directives
  })

  const Vbind = computed(() => ({ ..._props.props, ...extraProps, ...useAttrs() }))

  // 处理events this指向
  Object.keys(_props.events).forEach(key => (_props.events[key] = _props.events[key].bind(instance)))

  // root不存在说明是顶层组件
  let root = inject<ComponentInternalInstance | null>('root', null)
  if (!root)
  {
    root = instance
    provide('root', root)
  }

  let modelValueSplit = _props.props.modelValueSplit || '-',
      modelValue = null as Ref<any> | null,
      modelValues = null as Reactive<any> | null, 
      modelValueWatcher = null as WatchStopHandle | null,
      modelValuesWatcher = null as WatchStopHandle | null
  if (_props.modelValues)
  {
    const reactiveModelValues = reactive({ ..._props.modelValues })
    provide('modelValues', reactiveModelValues)
    modelValuesWatcher = watch(reactiveModelValues, (val: any) => emits('update:modelValues', val), { deep: true })
  }
  else
  {
    modelValues = inject<Reactive<any>>('modelValues', null)
    // 如果顶层组件没有提供 modelValues，则创建一个, 并提供到全局
    if (!modelValues)
    {
      modelValues = reactive({})
      provide('modelValues', modelValues)
    }
    if (_props.props.modelValue)
    {
      let path = _props.props.modelValue, defaultValue = ''

      // 处理默认值
      if (~path.indexOf(modelValueSplit))
      {
        // 默认 元素1: 属性名称/路径, 元素2: 默认值
        [path, defaultValue] = _props.props.modelValue.split(modelValueSplit)
        modelValue = ref(parseJson(defaultValue, ''))
      } else {
        modelValue = ref('')
      }

      // 设置全局的响应式
      if (root?.appContext)
      {
        if (!root.appContext.config.globalProperties?.$modelValues)
          root.appContext.config.globalProperties.$modelValues = {}
        if (!root.appContext.config.globalProperties?.$modelValues[_props.props.modelValue])
          root.appContext.config.globalProperties.$modelValues[_props.props.modelValue] = modelValue
      }
      
      // 监听 modelValue
      modelValueWatcher = watch(modelValue, (val: any) => setObjByPath(modelValues, path, val), { immediate: true })
    }
  }

  onBeforeUnmount(() => {
    modelValuesWatcher && modelValuesWatcher()
    modelValueWatcher && modelValueWatcher()
  })

  const be = (str: string): string => 'h-dynamic-' + str
  
  defineExpose<UDynamicComponentExpose>({
    root,
    uid,
    instance,
    modelValue,
    modelValues: readonly(modelValues || {}),
    directiveMap: readonly(directiveMap as any)
  })

</script>
