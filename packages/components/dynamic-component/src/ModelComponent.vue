
<template>
  
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

  defineOptions({
    inheritAttrs: false,
    name: 'UModelComponent'
  })

  const be = (str: string): string => 'h-dynamic-' + str
  const instance = getCurrentInstance()
  const uid = instance?.uid

</script>

<style scoped lang="scss">

</style>