<template>
  <u-menu>
    <u-menu-item>
      asdsad
    </u-menu-item>
  </u-menu>
  <u-dropdown :data="dropdownItems">
    <u-button>下拉菜单</u-button>
  </u-dropdown>
</template>

<script setup lang="ts">
const dropdownItems = [
  { label: '选项1', command: 'option1' },
  { label: '选项2', command: 'option2' },
  { label: '选项22222222222223', disabled: true },
  { divided: true },
  { label: '选项4', command: 'option4' }
]
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
