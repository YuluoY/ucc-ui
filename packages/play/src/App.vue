<template>
  <div class="mt-20 gap-20 flex f-wrap">
    <u-button type="primary" size="small">default</u-button>
    <u-button type="primary" size="default">default</u-button>
    <u-button type="primary" size="large">default</u-button>

    <u-tag 
      type="primary" 
      effect="light" 
      size="small" 
      closable 
      closePosition="left" 
      @click="console.log('click')"
      @close="console.log('close')"
    >
    文学
  </u-tag>
    
    <u-tag type="success" effect="light" size="default" closable>success</u-tag>
    <u-tag type="danger" effect="light" size="large" >danger</u-tag>
    <u-tag type="warning" effect="light" round>warning</u-tag>
    <u-tag type="info" effect="light" round>info</u-tag>
  </div>
  <u-text class="w-100" ellipsis type="primary" size="small" :maxLine="2">
    asdasdasd黑暗时代贺卡上看见安徽山东库哈斯抠脚大汉阿克苏回答奥斯卡黑暗圣经回答按时间打卡萨啊实打实打算
    啊实打实大苏打
  </u-text>
  <u-text class="w-100" ellipsis type="success" size="default">
    success测试textasdasdasdasdasdasdasdasdasd
  </u-text>
  <u-text class="w-100" ellipsis type="warning" size="large">
    warning测试textasdasdasdasdasdasdasdasdasd
  </u-text>
  <u-text class="w-100" ellipsis type="danger">
    danger测试textasdasdasdasdasdasdasdasdasd
  </u-text>
  <u-text class="w-100" ellipsis type="info" @click="count++">
    info测试textasdasdasdasdasdasdasdasdasd
  </u-text>

  <div class="flex f-wrap gap-20">
    <u-input type="text" disabled prefix-icon="home" clearable suffix-icon="phone" v-model="count2"  size='small' ></u-input>
    <u-input type="number" disabled prefix-icon="home" clearable suffix-icon="phone" v-model="count" size="default"></u-input>
    <u-input type="password" showPassword v-model="count" clearable size="large"></u-input>
    <u-input type="textarea" v-model="count" maxLength="90" :rows="2" showWordLimit size="large"></u-input>
  </div>
  <!-- <u-dynamic-component v-bind="_structTabs" /> -->
  <!-- <u-dynamic-component v-bind="activeStruct" /> -->
  <u-model-component v-bind="activeStruct" />
  
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, reactive, ref, watchEffect } from 'vue'
import { ElTabPane, ElTable, ElTabs } from 'element-plus';
import tableStruct from './test_3/tableStruct';
import formStruct from './test_3/formStruct';

const count = ref(0)
const count2 = ref('啊实打实')


const tabpanes = [tableStruct._name, formStruct._name]
const active = ref(tabpanes.at(-1))

const struct = reactive({
  [tableStruct._name]: tableStruct,
  [formStruct._name]: formStruct
})

const activeStruct = ref(struct[active.value as string] || {}) as any

watchEffect(() => {
  activeStruct.value = struct[active.value as string] || {}
})

const _structTabs = {
  type: ElTabs.name,
  props: {
    modelValue: active.value,
    type: 'card'
  },
  events: {
    tabClick:(e: any) => {
      active.value = e.paneName
    }
  },
  children: tabpanes.map((name) => {
    return {
      type: ElTabPane.name,
      props: { label: name, name }
    }
  })
} as any


</script>

<style>

</style>
