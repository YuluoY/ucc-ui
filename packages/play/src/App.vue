<script setup lang="ts">
import { ref } from 'vue';

  const isSP = ref(false)
</script>

<template>
  <u-button-group class="mt-20">
    <u-button type='primary' size='default' icon="phone">Primary</u-button>
    <u-button type='success' size='default' icon='home' iconPosition="right">
      
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
  <u-layout mode='horizontal' :col="4" :gap="20">
    <u-card shadow='never'>
      <template #header>
        header
      </template>
      never
      <template #footer>
        footer
      </template>
    </u-card>
    <u-card shadow='hover'>
      <template #header>
        header
      </template>
      hover
      <template #footer>
        footer
      </template>
    </u-card>
    <u-card shadow='always'>
      <template #header>
        header
      </template>
      always
      <template #footer>
        footer
      </template>
    </u-card>
    <u-card shadow="active">
      <template #header>
        header
      </template>
      active
      <template #footer>
        footer
      </template>
    </u-card>
  </u-layout>
</template>

<style>

</style>
