
<template>
  <i 
    class="u-icon"
    :class="{
      [`u-icon--${type}`]: type
    }"
    :style="iconStyles"
    v-bind="$attrs"
  >
    <!-- @vue-ignore -->
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { UIconProps } from '../types';
import { omit } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  defineOptions({
    name: 'UIcon',
    inheritAttrs: false
  })

  const props = withDefaults(defineProps<UIconProps>(), {})
  const filterProps = computed(() => omit(props, ['type', 'color']))
  const iconStyles = computed(() => ({ color: props.color ?? void 0 }))
</script>

<style>
@import '../styles/index.css';
</style>