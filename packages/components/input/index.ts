import { withInstall, type SFCWithInstall } from "../../utils";
import Input from "./src/Input.vue";

export const UInput: SFCWithInstall<typeof Input> = withInstall<typeof Input>(Input);