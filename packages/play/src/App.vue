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
  <u-button>按钮</u-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
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
