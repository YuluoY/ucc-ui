import { withInstall, type SFCWithInstall } from "../../utils";
import Tag from "./src/Tag.vue";

export const UTag: SFCWithInstall<typeof Tag> = withInstall<typeof Tag>(Tag);