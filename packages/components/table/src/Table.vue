<template>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>张三</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useId } from '@ucc-ui/hooks'
import type { UTableProps } from '../types'

defineOptions({
  name: 'UTable'
})

const uid = useId('u-table')

const props = withDefaults(defineProps<UTableProps>(), {
})

</script>

<style>
@import '../styles/index.css';
</style>
