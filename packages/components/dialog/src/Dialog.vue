
<template>
  <Teleport :to="props.appendTo">
    <div
      v-if="v"
      class="u-dialog-overlay"
      :class="{ 'is-overlay': props.modal }"
    >
      <div 
        :style="dialogStyles"
        class="u-dialog"
        role="dialog" 
        :aria-describedby="uid" 
      >
        <div class="u-dialog-resize u-resize__top"></div>
        <div class="u-dialog-resize u-resize__right"></div>
        <div class="u-dialog-resize u-resize__bottom"></div>
        <div class="u-dialog-resize u-resize__left"></div>

        <div class="u-dialog-resize u-resize__top-left"></div>
        <div class="u-dialog-resize u-resize__top-right"></div>
        <div class="u-dialog-resize u-resize__bottom-left"></div>
        <div class="u-dialog-resize u-resize__bottom-right"></div>

        <div class="u-dialog__header">
          <span class="u-dialog__title">{{ props.title }}</span>
          <div class="u-dialog__header-actions">
            <u-icon 
              class="u-dialog__minimize" 
              :icon="['fas', 'chevron-up']" 
            />
            <u-icon 
              class="u-dialog__close" 
              icon="close" 
            />
          </div>
        </div>
        <div class="u-dialog__body">
          <p>Greetings, one and all!</p>
        </div>
        <div class="u-dialog__footer custom-scollbar">
          <u-button type="primary">确认</u-button>
          <u-button plain>取消</u-button>
        </div>
      </div>
    </div>
    <!-- <div style="position: absolute;z-index: 999999;pointer-events: all;">
      <button @click="openDebounce">打开</button>
      <button @click="closeDebounce">关闭</button>
    </div> -->
  </Teleport>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, ref, type CSSProperties } from 'vue';
import type { UDialogEmits, UDialogProps } from '../types';
import { debounce } from 'lodash-es';
import { useId } from '@ucc-ui/hooks';
import { UIcon } from '../../icon';
import { UButton } from '../../button';
import { isDecimal } from '@ucc-ui/utils';

defineOptions({
  name: 'UDialog',
  inheritAttrs: false
})

const uid = useId('u-dialog')
const instance = getCurrentInstance()
const props = withDefaults(defineProps<UDialogProps>(), {
  content: '',
  openDelay: 0,
  closeDelay: 0,
  appendTo: 'body',
  modal: false,
  width: 0.4,
  height: 0.2,
  title: '标题'
})
const emits = defineEmits<UDialogEmits>()

const v = ref<boolean>(props.modelValue || true)
const w = ref(props.width)
const h = ref(props.height)

const tW = document.documentElement.clientWidth
const tH = document.documentElement.clientHeight

const dialogStyles = computed<CSSProperties>(() => {
  if (isDecimal(w.value) || w.value === 1) {
    w.value = tW * w.value
  }
  if (isDecimal(h.value) || h.value === 1) {
    h.value = tH * h.value
  }
  return {
    width: `${w.value}px`,
    height: `${h.value}px`,
    top: `${(tH - h.value) / 3}px`,
    left: `${(tW - w.value) / 2}px`
  }
}) 

function open() {
  v.value = true
}
function close() {
  v.value = false
}

const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)


</script>

<style>
@import '../styles/index.css';
</style>