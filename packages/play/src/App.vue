<script setup lang="ts">
import { ref } from 'vue';

  const isSP = ref(false)
</script>

<template>
  <u-button-group>
    <u-button type='primary' size='default' plain icon="phone" :iconProps="{
      spin:true,
      spinReverse: isSP
    }">Primary</u-button>
    <u-button type='success' size='default' plain icon='home' iconPosition="right">
      
    </u-button>
  </u-button-group>
  <u-icon icon="home" spin spinReverse></u-icon>
  <u-button type='warning' size='default' @click="() =>
    {
      isSP = !isSP
    }">Warning</u-button>
  <u-button type='danger' size='default' icon="home"></u-button>
  <u-button type='info' size='default'>Info</u-button>
  <u-button type='primary' link size='default'>Link</u-button>
</template>

<style>

</style>
