<template>
   <u-layout class="head-nav" mode="row" :max-span="maxSpan">
    <u-region :span="span" class="red"> header-logo </u-region>
    <u-region :span="span2" class="blue"> header-nav </u-region>
    <u-region class="green"> header-nav </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';

const span = ref(2)
const span2 = ref(5)
const maxSpan = ref(24)

setTimeout(() => {
  maxSpan.value = 30
}, 3000);
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
