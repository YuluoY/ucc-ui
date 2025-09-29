<template>
  <main 
    :class="[
      'u-card',
      { [`u-card--${shadow}`]: shadow }
    ]">
    <header 
      v-if="$slots.header || header" 
      class="u-card-header" 
      :style="{ padding: _padding }"
    >
      <slot name="header">
        <span>{{ header }}</span>
        <UIcon v-if="collapse" :icon="['fas', isCollapse ? 'chevron-down' : 'chevron-up']" @click="isCollapse = !isCollapse" />
      </slot>
      <div v-show="isNotCollapse" class="u-card-header__divider"></div>
    </header>
    <section v-if="$slots.default" v-show="!isCollapse" :class="['u-card-body', bodyClass]" :style="_bodyStyle">
      <slot></slot>
    </section>
    <footer v-if="$slots.footer || footer" class="u-card-footer" :style="{ padding: _padding }">
      <slot name="footer">
        <span>{{ footer }}</span>
      </slot>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { UCardProps } from '../types';
import { pxToRem } from '../../../utils';
import { UIcon } from '../../icon';

  defineOptions({
    name: 'UCard'
  })
  const props = withDefaults(defineProps<UCardProps>(), {
    padding: 16,
    bodyStyle: () => ({})
  })
  const _padding = computed(() =>  pxToRem(props.padding))
  const _bodyStyle = computed(() => ({
    ...props.bodyStyle,
    padding: _padding.value
  }))
  
  const isCollapse = ref(false)
  const isNotCollapse = computed(() => !isCollapse.value)
</script>

<style>
@import '../styles/index.css';
</style>