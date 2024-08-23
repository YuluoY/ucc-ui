<template>
  <component
    :is="tag"
    ref="_ref"
    class="u-button"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`u-button--${type}`]: type,
      [`u-button--${size}`]: size,
      'is-plain': plain,
      'is-link': link,
      'is-disabled': disabled,
      'is-round': round,
      'is-loading': loading,
      'is-circle': circle
    }"
    @click="(e: MouseEvent) => (
      useThrottle ? handleThrottleClick(e) : 
      useDebounce ? handleDebounceClick(e) :
      handleClick(e)
    )"
  >
    <template v-if="loading">
      <slot name="loading">
        <u-icon 
          class="u-button__loading" 
          :icon="loadingIcon ?? 'spinner'"
          :pull="iconPosition ?? 'left'"
          :style="iconStyle ?? {}"
          size='sm'
          spin
          v-bind="iconProps"
        />
      </slot>
    </template>
    <u-icon
      v-if="icon && !loading"
      class="u-button__icon"
      :icon="icon"
      :style="iconStyle ?? {}"
      size='sm'
      v-bind="iconProps"
    />
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UButtonEmits, UButtonInstance, UButtonProps } from '../types';
import { throttle, debounce } from 'lodash-es'

  defineOptions({
    name: 'UButton'
  })

  const emits = defineEmits<UButtonEmits>();
  const props = withDefaults(defineProps<UButtonProps>(), {
    tag: 'button',
    size: 'default',
    nativeType: 'button',
    useThrottle: false,
    throttleTime: 400,
    useDebounce: false,
    debounceTime: 400,
    autofocus: false,
    iconProps: void 0
  })
  console.log(props, 'props');
  
  const slots = defineSlots()
  const _ref = ref<HTMLButtonElement>()

  const handleClick = (e: MouseEvent) => emits('click', e)
  const handleThrottleClick = throttle(handleClick, props.throttleTime)
  const handleDebounceClick = debounce(handleClick, props.debounceTime)

  defineExpose<UButtonInstance>({
    ref: _ref
  })
</script>

<style>
@import '../styles/index.css';
</style>