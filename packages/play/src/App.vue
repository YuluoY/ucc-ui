<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false)

const def = ref(['1'])

</script>

<style>

</style>
