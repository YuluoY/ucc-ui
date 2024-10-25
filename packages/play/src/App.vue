<template>
  <u-dynamic-comp v-bind="a"></u-dynamic-comp>
  <u-layout mode='vertical'>
    <u-region region="center" class="flex ai-center jc-center">
      <u-dropdown :data="dropdownData">
        <u-button>测试下拉菜单</u-button>
      </u-dropdown>
    </u-region>
    <u-region>
      <u-slider v-model="sliderVal"></u-slider>
    </u-region>
  </u-layout>
  <u-button @click="openMessage('success')">success</u-button>
  <u-button @click="openMessage('info')">info</u-button>
  <u-button @click="openMessage('warning')">warning</u-button>
  <u-button @click="openMessage('error')">error</u-button>
  <u-button @click="openMessage('primary')">primary</u-button>

  <u-collapse v-model="def" accordion>
    <u-collapse-item name="1" title="标题1">
      <template #title>
        <span>自定义标题</span>
      </template>
      asdasdasd
    </u-collapse-item>
    <u-collapse-item name="2" title="标题2" disabled>
      asdasdsd
    </u-collapse-item>
    <u-collapse-item name="3" title="标题3">
      asdasdsd
    </u-collapse-item>
  </u-collapse>  
  <u-icon icon="home" transform="shrink-4 right-1" title="sss"></u-icon>
  <u-button disabled icon="check">asds</u-button>
  <u-input prefix-icon="home" suffix-icon="check"></u-input>
  <div class="flex ai-center jc-center">
    <u-tooltip v-model:visible="visible" placement="top-start" effect='light'>
      <template #content>
        <div>asdasdasd暗杀是看老大暗色打算<br>asdasdasd</div>
      </template>
      <u-button>123</u-button>
    </u-tooltip>
  </div>
  <div class="flex ai-center jc-center">
    <u-popconfirm title="Are you sure to delete this?">
      <template #reference>
        <u-button>测试弹出确认</u-button>
      </template>
    </u-popconfirm>
  </div>
  <u-code-editor v-model:value="code" @change="onChange"></u-code-editor>
</template>

<script setup lang="ts">
import { h, reactive, ref } from 'vue';
import type { UDropdownItemProps } from '../../components/dropdown/types';
// import { UMessage } from 'ucc-ui';
import {UMessage} from '../../components/message';

const visible = ref(false)
const def = ref(['1'])
const code = ref('')
const onChange = (evt: any) => {
  // console.log(code.value);
}

const a = {
  type: 'UButton',
  props: {
    icon: 'home'
  },
  children: '123'
}

const dropdownData = reactive<UDropdownItemProps[]>([
  { label: 'Action 1', command: 'command1' },
  { label: 'Action 2', command: 'command2' },
  { label: 'Action 3', command: 'command3' },
  { label: 'Action 4', command: 'command4' },
  { label: 'Action 5', command: 'command5' },
  { label: 'Action 6', command: 'command6' },
  { label: 'Action 7', command: 'command7' },
  { label: 'Action 8', command: 'command8' },
  { label: 'Action 9', command: 'command9' },
  { label: 'Action 10', command: 'command10' },
])

let index = 0
const openMessage = (type: any) => {
  UMessage({
    message: 'asdasdasd' + index++,
    type
  })
}

const sliderVal = ref(0)

</script>

<style>

</style>
