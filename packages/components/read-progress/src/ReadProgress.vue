
<template>
  <div class="u-read-progress" v-show="showProgress" :style="progressStyle">
    <div 
      class="u-read-progress__bar"
      :class="`u-read-progress__bar--${type}`"
      :style="{
        width: `${progress}%`,
        backgroundColor: props.color,
        willChange: 'width'
      }"
    >
    </div>
    <div
      v-if="showText && progress"
      class="u-read-progress__text"
    >
      <slot>
        <u-text 
          :size="textSize"
          :type="textType || type"
        >
          {{ _content }}
        </u-text>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type CSSProperties } from 'vue';
import type { UReadProgressEmits, UReadProgressProps } from '../types';
import { pxToRem } from '@ucc-ui/utils';
import { useEventListener } from '@ucc-ui/hooks';
import { UText } from '../../text'
import { CReadProgress } from '../types/const';

defineOptions({
  name: 'UReadProgress'
})

const props = withDefaults(defineProps<UReadProgressProps>(), {
  type: CReadProgress.PRIMARY,
  height: 4,
  show: true,
  backgroundColor: 'transparent',
  showText: false,
  content: '',
  textSize: 'default'
})
const emits = defineEmits<UReadProgressEmits>()

const progress = ref(props.modelValue || 0)
const showProgress = ref(props.show)

const progressStyle = computed<CSSProperties>(() => ({
  height: pxToRem(props.height as number),
  backgroundColor: props.backgroundColor,
}))

const _content = computed(() => props.content ? props.content : `${Math.round(progress.value)}%`)

useEventListener(document, 'scroll', () => {
  window.requestAnimationFrame(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    progress.value = (scrollTop / (scrollHeight - clientHeight)) * 100
    emits('update:modelValue', progress.value)
    emits('change')
  })
})

function hide() {
  showProgress.value = false
}

function show() {
  showProgress.value = true
}

defineExpose({
  progress,
  hide,
  show
})

</script>

<style>
@import '../styles/index.css';
</style>