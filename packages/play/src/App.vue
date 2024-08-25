<script setup lang="ts">

</script>

<template>
  <div class="mt-20 gap-20 flex">
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
</template>

<style>

</style>
