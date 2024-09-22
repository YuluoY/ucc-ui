
<template>
  <div
    :class="[
    'u-tag',
    { 
      [`u-tag--${type}`]: type,
      [`u-tag--${size}`]: size,
      [`u-tag--${effect}`]: effect,
      'is-round': round,
      'is-border': border,
      'is-transition': transition
    },
  ]"
  :style="{backgroundColor: color}"
   @click="onClick"
  >
    <span 
      v-if="closable && isCloseIconLeft" 
      :class="[
        'u-tag__close',
        { [`u-tag__close--${closePosition}`]: closePosition }
      ]" 
    >
      <u-icon icon="close"></u-icon>
    </span>
    <span class="u-tag__content" v-if="$slots.default">
      <slot></slot>
    </span>
    <span 
      v-if="closable && !isCloseIconLeft" 
      :class="[
        'u-tag__close',
        { [`u-tag__close--${closePosition}`]: closePosition }
      ]" 
    >
      <u-icon icon="close"></u-icon>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { UTagEmits, UTagProps } from '../types';
import { CTagClosePosition, CTagEffect, CTagSize, CTagType } from '../types/const';
import { UIcon } from '../../icon'

  defineOptions({
    name: 'UTag'
  })
  const props = withDefaults(defineProps<UTagProps>(),{
    type: CTagType.PRIMARY,
    size: CTagSize.DEFAULT,
    effect: CTagEffect.PLAIN,
    transition: true,
    closePosition: 'default',
    triggerClick: false
  })
  const emits = defineEmits<UTagEmits>()

  const isCloseIconLeft = computed(() => props.closePosition === CTagClosePosition.LEFT)

  const onClick = (event: MouseEvent):void => {
    if ((event.target as HTMLElement).classList.contains('u-tag__close'))
    {
      emits('close', event)
      props.triggerClick && emits('click', event)
      return
    }
    emits('click', event)
  }
</script>

<style>
@import '../styles/index.css';
</style>