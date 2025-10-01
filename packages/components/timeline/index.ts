import Timeline from './src/Timeline.vue'
import TimelineItem from './src/TimelineItem.vue'
import { withInstall, type SFCWithInstall } from '@ucc-ui/utils'

export * from './types'

export const UTimeline: SFCWithInstall<typeof Timeline> = withInstall<typeof Timeline>(Timeline)
export const UTimelineItem: SFCWithInstall<typeof TimelineItem> = withInstall<typeof TimelineItem>(TimelineItem)