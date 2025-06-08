<template>
   <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

  <u-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <u-menu-item index="1">Processing Center</u-menu-item>
    <u-sub-menu index="2">
      <template #title>Workspace</template>
      <u-menu-item index="2-1">item one</u-menu-item>
      <u-menu-item index="2-2">item two</u-menu-item>
      <u-menu-item index="2-3">item three</u-menu-item>
      <u-sub-menu index="2-4">
        <template #title>item four</template>
        <u-menu-item index="2-4-1">item one</u-menu-item>
        <u-menu-item index="2-4-2">item two</u-menu-item>
        <u-menu-item index="2-4-3">item three</u-menu-item>
      </u-sub-menu>
    </u-sub-menu>
    <u-menu-item index="3" disabled>Info</u-menu-item>
    <u-menu-item index="4">Orders</u-menu-item>
  </u-menu>
  <div style="display: flex;">
    <u-tag 
    v-for="item in [
      'large',
      'default',
      'small',
    ] as any" 
    :key="item"
    :size="item"
  >
    {{ item }}
  </u-tag>
  </div>

  <div :style="{
    margin: '10px',
  }">
    <u-card :collapse="true" shadow='always' header="标题">
    <template #default>
      <span>内容</span>
    </template>
  </u-card>
  
  <u-layout>
    <u-region region="top" :style="topStyles">
      AAAAAA {{ topStyles }}
    </u-region>
    <u-region region="center">
      BBBBBB
    </u-region>
    <u-region region="bottom">
      <u-button @click="state = !state">切换状态</u-button>
    </u-region>
  </u-layout>

  <u-layout mode="row" :max-span="maxSpan">
    <u-region :span="6">区域1</u-region>
    <u-region :span="dynSpan">区域2</u-region>
    <u-region :span="6">区域3</u-region>
    <u-region :span="6">区域4</u-region>
  </u-layout>
  <u-button @click="dynSpan += 1">span + 1</u-button>
  <u-input v-model.number="maxSpan"></u-input>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { UCard } from '@ucc-ui/components'
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const state = ref(true)
  const topStyles = computed(() => {
    return {
      height: state.value ? '200px' : '100px',
      color: state.value? 'red' : 'blue',
      backgroundColor: state.value?'blue' : 'red',
    }
  })
  const dynSpan = ref(6)
  const maxSpan = ref(24)
</script>

<style>
#app, body {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
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
