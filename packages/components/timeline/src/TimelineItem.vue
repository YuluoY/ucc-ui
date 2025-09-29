<template>
  <div class="u-timeline-item">
    <template v-if="isVueComponent(icon)">
      <component :is="icon" />
    </template>
    <template v-else-if="icon">
      <u-icon :icon="icon" />
    </template>
    <div 
      v-else
      class="u-timeline-item-dot"
      :class="[
        `u-timeline-item-dot--${type}`,
        `u-timeline-item-dot--${size}`,
        `u-timeline-item-dot--${position}`,
        { 'u-timeline-item-dot--hollow': hollow }
      ]"
    >
    </div>
    <div class="u-timeline-item__inner">
      <div v-if="position === CTimelinePosition.TOP" class="u-timeline-item-date">
        <slot name="date">{{ date }}</slot>
      </div>
      <div class="u-timeline-item-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="u-timeline-item-content">
        <slot name="content">{{ content }}</slot>
      </div>
      <div v-if="position === CTimelinePosition.BOTTOM" class="u-timeline-item-date">
        <slot name="date">{{ date }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UIcon } from '../../icon';
import { isVueComponent } from '@ucc-ui/utils';
import type { UTimelineItemProps } from '../types';
import { CTimelinePosition, CTimelineSize, CTimelineType, CTimelinePlacement } from '../types/const';

const props = withDefaults(defineProps<UTimelineItemProps>(), {
  placement: CTimelinePlacement.TOP,
  type: CTimelineType.PRIMARY,
  size: CTimelineSize.NORMAL,
  position: CTimelinePosition.TOP,
  hollow: false
})

</script>