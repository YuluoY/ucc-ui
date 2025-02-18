<template>
  <u-layout :mode="'column'">
    <u-region region="top" style="background-color: red;" :span="12">
      <u-button type='info'>top</u-button>
    </u-region>
    <u-region region="top" style="background-color: red;" :span="12">
      <u-button type='info'>top2</u-button>
    </u-region>
    <u-region region="center" style="background-color: blue;" :span="24">
      <u-button type='info'>center</u-button>
    </u-region>
    <u-region region="left" style="background-color: green;" :span="12"> 
      <u-button type='info'>left</u-button>
    </u-region>
    <u-region region="left" style="background-color: green;"> 
      <u-button type='info'>left2</u-button>
    </u-region>
    <u-region region="right" style="background-color: yellow;">
      <u-button type='info'>right</u-button>
    </u-region>
    <u-region region="bottom" style="background-color: purple;">
      <u-button type='info'>bottom</u-button>
    </u-region>
  </u-layout>
  <u-layout>
    <u-region region="center">
      <u-button type='info'>center</u-button>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
</script>

<style>
#app, body {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
</style>
