<template>
  <u-button @click="openDialog">打开对话框</u-button>
  <u-top v-model="visible" :size="20" :offset="100">
    <div>🚀</div>
  </u-top>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, h, reactive, ref, resolveComponent } from 'vue';
import { UButton, UDialogFn } from 'ucc-ui';

const Btn = resolveComponent(String(UButton.name))
const comp = () => h(Btn, null, {default: () => '啊哈哈哈'})

const openDialog = () => {
  UDialogFn({ single: false, content: comp, modal: false })
}

const visible = ref(false)

</script>

<style>
body {
  height: 200vh;
}
</style>
