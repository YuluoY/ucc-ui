import { withInstall, type SFCWithInstall } from "../../utils";
import ConfigProvider from "./src/ConfigProvider.vue";

export const UConfigProvider: SFCWithInstall<typeof ConfigProvider> = withInstall<typeof ConfigProvider>(ConfigProvider);
