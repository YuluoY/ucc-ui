<template>
  <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <u-timeline style="width: 70%;" :data="data"></u-timeline>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
const data = Array.from({ length: 5 }, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph(),
  // YYYY-MM-DD
  date: faker.date.recent().toISOString().split('T')[0],
  type: faker.helpers.arrayElement(['primary', 'success', 'warning', 'danger', 'info']),
  size: faker.helpers.arrayElement(['normal', 'large']),
  position: faker.helpers.arrayElement(['top', 'bottom']),
  hollow: faker.helpers.arrayElement([true, false])
})) as any[]
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
