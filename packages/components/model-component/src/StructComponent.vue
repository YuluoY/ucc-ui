<template>
  <component
   :is="type" 
   v-bind="{...props, ...$attrs}"
   v-on="events"
 >

   <template v-if="isEffectArray(children)">
      <u-model-component v-bind="child" v-for="(child, index) in children" :key="`${String(instance?.uid)}-${index}`" />
   </template>
   <u-model-component v-else-if="isEffectObject(children)" v-bind="(children as unknown as object)" />
   <span v-else-if="isString(children)">{{ children }}</span>

   <template #[slotName]="data" v-for="(val, slotName, index) in slots" :key="`${instance?.uid}-${slotName}-${index}`">
     <u-model-component v-if="isEffectObject(val)" v-bind="(val as unknown as object)" />
     <u-model-component v-else-if="isFunction(val)" v-bind="val(data)" />
   </template>

 </component>
</template>

<script setup lang="ts">
import { isEffectArray, isEffectObject, isFunction, isString } from '@ucc-ui/utils';
import { defineAsyncComponent, getCurrentInstance, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onUpdated } from 'vue';
import type { UStructComponentProps } from '../types';

  defineOptions({
    name: 'UStructComponent'
  })

  const UModelComponent = defineAsyncComponent(() => import('./ModelComponent.vue'))
  const instance = getCurrentInstance()
  const _props = withDefaults(defineProps<UStructComponentProps>(), {
    type: 'div',
    props: () => ({}),
    events: () => ({}),
    slots: () => ({}),
    hooks: () => ({})
  })

  // 处理hooks this指向
  onBeforeMount(() => isFunction(_props.hooks.beforeMount) && _props.hooks.beforeMount.call(instance))
  onMounted(() => isFunction(_props.hooks.mounted) && _props.hooks.mounted.call(instance) || console.log(instance?.proxy?.$refs))
  onBeforeUnmount(() => isFunction(_props.hooks.beforeUnmount) && _props.hooks.beforeUnmount.call(instance))
  onBeforeUpdate(() => isFunction(_props.hooks.beforeUpdate) && _props.hooks.beforeUpdate.call(instance))
  onUpdated(() => isFunction(_props.hooks.updated) && _props.hooks.updated.call(instance))

  onErrorCaptured((err, vm, info) => {
    console.error(`${_props.type}-${instance?.uid}：`, err, vm, info)
    isFunction(_props.hooks.errorCaptured) && _props.hooks.errorCaptured.call(instance, err, vm, info)
    return false
  })

</script>