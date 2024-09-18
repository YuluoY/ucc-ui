<template>
  <u-collapse v-model="def">
    <u-collapse-item name="1" title="标题1">
      asdasdsd
    </u-collapse-item>
    <u-collapse-item name="2" title="标题2">
      asdasdsd
    </u-collapse-item>
    <u-collapse-item name="3" title="标题3">
      asdasdsd
    </u-collapse-item>
  </u-collapse>  
</template>

<script setup lang="ts">
import { ref } from 'vue';


const def = ref(['1'])

</script>

<style>

</style>
