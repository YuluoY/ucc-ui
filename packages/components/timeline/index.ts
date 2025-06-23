import Timeline from "./src/Timeline.vue";
import { withInstall, type SFCWithInstall } from "@ucc-ui/utils";

export const UTimeline: SFCWithInstall<typeof Timeline> = withInstall<typeof Timeline>(Timeline);