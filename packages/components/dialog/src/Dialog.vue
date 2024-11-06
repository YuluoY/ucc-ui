
<template>
  <Teleport :to="props.appendTo">
    <div
      v-if="visible"
      class="u-dialog-overlay"
      :class="{ 'is-overlay': props.modal }"
      :style="{zIndex: zIndex}"
    >
      <div 
        ref="dialogRef"
        class="u-dialog"
        role="dialog" 
        :aria-describedby="uid" 
      >
        <div ref="dialogHeaderRef" class="u-dialog__header">
          <div class="u-dialog__title" :title="props.title">
            <span>{{ props.title }}</span>
          </div>
          <div class="u-dialog__header-actions">
            <u-icon 
              class="u-dialog__minimize" 
              :icon="['fas', isCollapsed ? 'chevron-up' : 'chevron-down']" 
              @click="onCollapse"
            />
            <u-icon 
              class="u-dialog__close" 
              icon="close" 
              @click="close"
            />
          </div>
        </div>
        <div class="u-dialog__body">
          <span v-html="content" v-if="isString(content)"></span>
          <component v-else :is="content"></component>
        </div>
        <div class="u-dialog__footer custom-scollbar">
          <u-button type="primary">确认</u-button>
          <u-button plain @click="close">取消</u-button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue';
import type { UDialogEmits, UDialogProps } from '../types';
import { useId } from '@ucc-ui/hooks';
import { UIcon } from '../../icon';
import { UButton } from '../../button';
import useResize from '@ucc-ui/hooks/useResize';
import useDraggle from '@ucc-ui/hooks/useDraggle';
import { isFunction, isString } from 'lodash-es';

defineOptions({
  name: 'UDialog',
  inheritAttrs: false
})

const uid = useId('u-dialog')
const props = withDefaults(defineProps<UDialogProps>(), {
  content: 'Greetings, one and all!',
  openDelay: 0,
  closeDelay: 0,
  appendTo: 'body',
  modal: false,
  width: 0.4,
  height: 0.2,
  title: '标题',
  zIndex: 2000
})

const emits = defineEmits<UDialogEmits>()
const dialogRef = ref<HTMLDivElement | null>(null)
const dialogHeaderRef = ref<HTMLDivElement | null>(null)

const isCollapsed = ref(false)
const visible = ref<boolean>(props.modelValue || true)
const w = ref(props.width)
const h = ref(props.height)

const tW = document.documentElement.clientWidth
const tH = document.documentElement.clientHeight

const attrs = useAttrs()

const open = () => {
  attrs.open && isFunction(attrs.open) && attrs.open()
  visible.value = true
}

const close = () => {
  attrs.close && isFunction(attrs.close) && attrs.close()
  visible.value = false
}

onMounted(() => {
  const rect = dialogHeaderRef.value?.getBoundingClientRect()
  initDialogPos()
  useResize({
    el: dialogRef,
    minWidth: 100,
    minHeight: rect?.height,
    resizing: (width, height) => {
      w.value = width
      h.value = height
      isCollapsed.value = false
    }
  })
  useDraggle({
    el: dialogRef,
    dragEl: dialogHeaderRef
  })
})

function initDialogPos() {
  if (w.value <= 1)
    w.value = tW * w.value
  if (h.value <= 1)
    h.value = tH * h.value
  const top = tH - h.value < 0 ? 0 : (tH - h.value) / 3
  const left = tW - w.value < 0 ? 0 : (tW - w.value) / 2
  window.requestAnimationFrame(() => {
    dialogRef.value?.style.setProperty('top', `${top}px`)
    dialogRef.value?.style.setProperty('left', `${left}px`)
    dialogRef.value?.style.setProperty('width', `${w.value}px`)
    dialogRef.value?.style.setProperty('height', `${h.value}px`)
  })
}

function onCollapse() {
  isCollapsed.value = !isCollapsed.value
  const height = isCollapsed.value ? (dialogHeaderRef.value?.getBoundingClientRect().height || 0) + 10 : h.value
  window.requestAnimationFrame(() => {
    dialogRef.value?.style.setProperty('height', `${height}px`)
  })
}

defineExpose({
  open,
  close
})

</script>

<style>
@import '../styles/index.css';
</style>