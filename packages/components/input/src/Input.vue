
<template>
  <div 
    class="u-input"
    :class="{
      'u-input--suffix': $slots.suffix,
      'u-input--prefix': $slots.prefix,
      'u-input--disabled': disabled,
      'u-input--readonly': readonly,
      [`u-input--${size}`]: size
    }"    
  >
    <div class="u-input__wapper">
      <div class="u-input__prefix-wrapper" v-if="!isTextArea">
        <div v-if="$slots.prepend" class="u-input__prepend">
          <slot name="prepend"></slot>
        </div>
        <div v-if="$slots.prefix || prefixIcon" class="u-input__prefix">
          <slot name="prefix">
            <u-icon :icon="prefixIcon ?? ''" />
          </slot>
        </div>
      </div>
      <input 
        v-if="!isTextArea"
        :value="value"
        class="u-input__inner"
        v-bind="props"
        :type="inputType"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
      />
      <div class="u-input__suffix-wrapper" v-if="!isTextArea">
        <div v-if="$slots.suffix || suffixIcon" class="u-input__suffix">
          <slot name="suffix">
            <u-icon :icon="suffixIcon ?? ''" />
          </slot>
        </div>
        <div v-if="$slots.append" class="u-input__append">
          <slot name="append"></slot>
        </div>
        <u-icon 
          v-if="value" 
          class="u-input__password" 
          :icon="eyeIcon"
          @click="passwordVisible = !passwordVisible"
        />
        <u-icon 
          v-if="clearable && value" 
          class="u-input__clear" 
          icon="close"
          @click="onClear"
        />
      </div>
      
      
      <textarea 
        v-if="isTextArea" 
        class="u-input__inner u-textarea"
        :value="value" 
        v-bind="props"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
      >
      </textarea>
      <span v-if="isTextArea" class="u-textarea__count">
        {{ (value +'').length }} / {{ maxLength }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { UInputEmits, UInputProps } from '../types';
import { CInputType } from '../types/const';

  defineOptions({
    name: 'UInput'
  })
  
  const props = withDefaults(defineProps<UInputProps>(), {
    type: CInputType.TEXT,
    min: 0,
    showPassword: false
  })

  const emits = defineEmits<UInputEmits>()
  const value = computed(() => props.modelValue)
  const isTextArea = computed(() => props.type === CInputType.TEXTAREA)

  const passwordVisible = ref(false)
  const eyeIcon = computed(() => passwordVisible.value ? 'eye' : 'eye-slash')
  const inputType = computed(() => passwordVisible.value ? 'text' : props.type)
  
  
  const onInput = (evt: Event) => {
    let v = (evt.target as HTMLInputElement).value as any
    v = handleBoundaryValue(v)
    emits('update:modelValue', v)
    emits('input', evt)
  }
  const onFocus = (evt: Event) => {
    emits('focus', evt)
  }
  const onBlur = (evt: Event) => {
    emits('blur', evt)
  }
  const onChange = (evt: Event) => {
    emits('change', (evt.target as HTMLInputElement).value as any)
  }
  const onClear = (evt: Event) => {
    emits('update:modelValue', '')
    emits('clear', evt)
  }
 
  /**
   * 处理边界值
   */
  function handleBoundaryValue(v: string | number): string | number {
    if (props.type === CInputType.NUMBER) {
      props.max && (v = Math.min(+v!, +props.max))
      props.min && (v = Math.max(+v!, +props.min))
    }
    return v
  }

</script>

<style>
@import '../styles/index.css';
</style>