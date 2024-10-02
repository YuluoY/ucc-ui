
<template>
  <div 
    :class="['u-tooltip', `u-tooltip--${effect}`]" 
    ref="containerRef" 
    v-on="outerEvents"
  >
    <div
      :data-popper-id="instance?.uid"
      v-if="!virtualTriggering"
      class="u-tooltip__trigger"
      ref="_triggerRef"
      v-on="events"
    >
      <slot></slot>
    </div>
    <slot name="default" v-else></slot>

    <transition :name="transition" @after-leave="destoryPopperInstance">
      <div
        v-if="visible"
        :class="['u-tooltip__popper', `u-tooltip__popper--${placement}`, `u-id-${instance?.uid}`]"
        ref="popperRef"
        :style="{ minWidth }"
        v-on="dropdownEvents"
      >
        <slot name="content">
          <span v-if="rawContent" v-html="content" />
          <template v-else>{{ content }}</template>
        </slot>
        <div class="u-tooltip__popper--arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, isRef, onBeforeUnmount, ref, watch, watchEffect, type Ref } from 'vue';
import type { UTooltipEmits, UTooltipExposes, UTooltipProps } from '../types';
import { type Options, type Instance, createPopper } from '@popperjs/core';
import { debounce, type DebouncedFunc, bind, isNil } from 'lodash-es'
import { useClickOutside } from '../../../hooks';
import { pxToRem } from '../../../utils';

  defineOptions({
    name: 'UTooltip'
  })

  const instance = getCurrentInstance()

  const props = withDefaults(defineProps<UTooltipProps>(), {
    width: 200,
    placement: 'bottom',
    trigger: 'hover',
    effect: 'dark',
    transition: 'fade',
    showTimeout: 0,
    hideTimeout: 300,
    popperOptions: () => ({})
  })
  const emits = defineEmits<UTooltipEmits>()
  
  const minWidth = computed(() => pxToRem<string>(props.width))
  const visible = ref<boolean>(!!props.visible) // 是否显示

  const containerRef = ref<HTMLDivElement | null>(null)
  const _triggerRef = ref<HTMLDivElement | null>(null)
  const popperRef = ref<HTMLDivElement | null>(null)

  const triggerRef = computed(() => {
    if (props.virtualTriggering)
      return (isRef(props.virtualRef) ? props.virtualRef.value : props.virtualRef) ?? triggerRef.value
    return _triggerRef.value as HTMLElement
  }) as Ref<HTMLElement | null>

  type IEvent = Ref<Record<string, EventListener>>
  const events: IEvent = ref({})
  const outerEvents: IEvent = ref({})
  const dropdownEvents: IEvent = ref({})

  const popperOptions = computed(() => ({
    placement: props.placement,
    modifiers: {
      name: 'offset',
      options:{ offset: [0, 9] }
    },
    ...props.popperOptions
  } as Partial<Options>))
 
  let onOpenDebounce: DebouncedFunc<() => void> | void
  let onCloseDebounce: DebouncedFunc<() => void> | void

  const openDelay = computed(() => props.trigger === 'hover' ? props.showTimeout : 0)
  const closeDelay = computed(() => props.trigger === 'hover' ? props.hideTimeout : 0)

  function onOpen() {
    onCloseDebounce?.cancel()
    onOpenDebounce?.()
  }

  function onClose() {
    onOpenDebounce?.cancel()
    onCloseDebounce?.()
  }

  function onHide() {
    onOpenDebounce?.cancel()
    setVisible(false)
  }

  function onTogglePopper() {
    visible.value ? onClose() : onOpen()
  }

  function setVisible(val: boolean) {
    if (props.disabled) return
    visible.value = val
    emits('visible-change', val)
    emits('update:visible', val)
  }

  let popperInstance: Instance | null = null
  function destoryPopperInstance () {
    if (isNil(popperInstance)) return
    popperInstance.destroy()
    popperInstance = null
  }

  function onAttachEvents () {
    if (props.disabled || props.manual) return
    if (props.trigger === 'hover') {
      events.value['mouseenter'] = onOpen
      outerEvents.value['mouseleave'] = onClose
      dropdownEvents.value['mouseenter'] = onOpen
      return
    }
    if (props.trigger === 'click') {
      events.value['click'] = onTogglePopper
      return
    }
    if (props.trigger === 'contextmenu') {
      events.value['contextmenu'] = (e: Event) => {
        e.preventDefault()
        onOpen()
      }
    }
  }

  function resetEvents () {
    events.value = {}
    outerEvents.value = {}
    dropdownEvents.value = {}
  
    onAttachEvents()
  }

  useClickOutside(containerRef, () => {
    if (props.trigger === 'hover' || props.manual) return
    visible.value && onClose()
  })

  const visibleWatch = watch(visible, val => {
    if (!val) return
    if (triggerRef.value && popperRef.value) {
      popperInstance = createPopper(
        triggerRef.value, 
        popperRef.value, 
        popperOptions.value
      )
    }
  }, { flush: 'post' })

  const manualWatch = watch(() => props.manual, val => {
    val ? resetEvents() : onAttachEvents()
  })

  const triggerWatch = watch(() => props.trigger, (newVal, oldVal) => {
    if (newVal === oldVal) return
    onOpenDebounce?.cancel()
    setVisible(false)
    emits('visible-change', false)
    resetEvents()
  })

  const tooltipWatchEffect = watchEffect(() => {
    if (!props.manual) {
      onAttachEvents()
    }
    onOpenDebounce = debounce(bind(setVisible, null, true), openDelay.value)
    onCloseDebounce = debounce(bind(setVisible, null, false), closeDelay.value)
  
  })

  onBeforeUnmount(() => {
    visibleWatch()
    manualWatch()
    triggerWatch()
    tooltipWatchEffect()
    destoryPopperInstance()
  })

  defineExpose<Partial<UTooltipExposes>>({
    onOpen,
    onClose,
    hide: onHide
  })

</script>

<style lang="scss">
@import '../styles/index.css';
</style>