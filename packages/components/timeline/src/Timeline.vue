<template>
  <div class="u-timeline">

  </div>
</template>

<script lang="ts" setup>
import type { UTimelineItemProps, UTimelineProps } from '../types';

defineOptions({
  name: 'UTimeline'
})

const props = withDefaults(defineProps<UTimelineProps>(), {
  items: (() => [] as UTimelineItemProps[]),
})
</script>