<template>
  <div
    class="u-timeline" 
    :class="`u-timeline--${direction}`"
    :style="styles"
    ref="timelineRef"
  >
    <div class="u-timeline-line"></div>
    <slot>
      <TimelineItem v-for="item in data" :key="item.date?.toString()" v-bind="item" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type { UTimelineItemProps, UTimelineProps } from '../types';
import TimelineItem from './TimelineItem.vue';
import { CTimelineDirection } from '../types/const';
import { pxToRem } from '@ucc-ui/utils';
import { computed, ref } from 'vue';

defineOptions({
  name: 'UTimeline'
})

const props = withDefaults(defineProps<UTimelineProps>(), {
  data: (() => [] as UTimelineItemProps[]),
  direction: CTimelineDirection.VERTICAL,
  gutter: 30,
  margin: 20,
  lineColor: ''
})


const gutter = computed(() => props.gutter ? pxToRem(props.gutter) : props.gutter);
const margin = computed(() => props.margin ? pxToRem(props.margin) : props.margin);
const timelineRef = ref<HTMLElement | null>(null)
const itemHeight = computed(() => timelineRef.value?.querySelector('.u-timeline-item')?.clientHeight ?? 0)
const styles = computed(() => ({
  '--timeline-gutter': gutter.value,
  '--timeline-margin': margin.value,
  '--timeline-line-color': props.lineColor || 'var(--uc-background-4)',
  '--timeline-item-height': `${itemHeight.value}px`
}))
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>