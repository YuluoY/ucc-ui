<template>
   <u-layout class="head-nav" mode="row" :max-span="maxSpan">
    <u-region :span="span" class="red"> header-logo </u-region>
    <u-region :span="span2" class="blue"> header-nav </u-region>
    <u-region class="green"> header-nav </u-region>
  </u-layout>
  <u-layout class="layout-base">
    <u-region region="top" class="layout-header">
      <u-layout>
        <u-region region="top">
        </u-region>
        <u-region region="center"> header </u-region>
      </u-layout>
    </u-region>
    <u-region region="center"> content </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import { ref, nextTick, getCurrentInstance } from 'vue';

const span = ref(2)
const span2 = ref(5)
const maxSpan = ref(24)

setTimeout(() => {
  maxSpan.value = 30
}, 3000);

const instance = getCurrentInstance()

instance?.proxy?.$dialog({
  title: '标题',
  content: '内容',
  showFooter: false
})
</script>

<style>
#app, body {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.head-nav {
  height: 3.4rem !important;
}
.red {
  background-color: red;
  color: white;
}
.blue {
  background-color: blue;
  color: white;
}
.green {
  background-color: green;
  color: white;
}
.yellow {
  background-color: yellow;
  color: white;
}
.purple {
  background-color: purple;
  color: white;
}
</style>
