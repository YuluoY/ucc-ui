import { withInstall, type SFCWithInstall } from "../../utils";
import Top from "./src/Top.vue"

export const UTop: SFCWithInstall<typeof Top> = withInstall<typeof Top>(Top);