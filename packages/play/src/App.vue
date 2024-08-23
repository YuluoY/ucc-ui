<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  const handleChangeTheme = () =>
  {
    document.documentElement.classList.toggle('dark')
  }
</script>

<template>
  <u-button type='primary' size='default' @click="handleChangeTheme">切换主题</u-button>
  <u-button type='primary' size='default'>Primary</u-button>
  <u-button type='success' size='default'>Success</u-button>
  <u-button type='warning' size='default'>Warning</u-button>
  <u-button type='danger' size='default'>Danger</u-button>
  <u-button type='info' size='default'>Info</u-button>
  <u-button type='primary' link size='default'>Link</u-button>
  <br><br>
  <u-button type='primary' size='default' disabled>disabled</u-button>
  <u-button type='primary' size='default' loading>loading</u-button>
  <br><br>
  <u-button type='success' size='default' disabled>disabled</u-button>
  <u-button type='success' size='default' loading>loading</u-button>
  <br><br>
  <u-button type='warning' size='default' disabled>disabled</u-button>
  <u-button type='warning' size='default' loading>loading</u-button>
  <br><br>
  <u-button type="info" disabled>disabled</u-button>
  <u-button type="info" loading>loading</u-button>
  <br><br>
  <u-button type='danger' size='default' disabled>disabled</u-button>
  <u-button type='danger' size='default' loading>loading</u-button>
  <br><br>
  <u-button type='primary' plain>Primary</u-button>
  <u-button plain>Primary</u-button>

  <u-button type='success' plain>Success</u-button>
  <u-button type='warning' plain>Warning</u-button>
  <u-button type='danger' plain>Danger</u-button>
  <u-button type='info' plain>Info</u-button>
  <u-button type='primary' link>Linkyq</u-button>
  <br><br>
  <u-button  icon="phone" :iconProps="{
    fade: true,
    spin: true
  }">default</u-button>
  <u-button round>Round</u-button>
  <u-button circle size='default' type="primary">circle</u-button>

  <u-icon type="primary" icon="phone"></u-icon>


  <u-layout mode='vertical' :col="4" fit :gap="10">
    <u-region region="right">right</u-region>
    <u-region region="bottom">bottom</u-region>
    <u-region region="top">top</u-region>
    <u-region region="right">right</u-region>
    <u-region region="bottom">bottom</u-region>
    <u-region region="center">center</u-region>
    <u-region region="left">left</u-region>
  </u-layout>
</template>

<style>

</style>
