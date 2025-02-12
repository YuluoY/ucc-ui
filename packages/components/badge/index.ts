import { withInstall, type SFCWithInstall } from "../../utils"
import Badge from "./src/Badge.vue"

export const UBadge: SFCWithInstall<typeof Badge> = withInstall<typeof Badge>(Badge);