import { withInstall, type SFCWithInstall } from "@ucc-ui/utils";
import Tag from "./src/Tag.vue";

export const UTag: SFCWithInstall<typeof Tag> = withInstall<typeof Tag>(Tag);