import { withInstall, type SFCWithInstall } from "../../utils";
import Popconfirm from "./src/Popconfirm.vue";

export const UPopconfirm: SFCWithInstall<typeof Popconfirm> = withInstall<typeof Popconfirm>(Popconfirm);