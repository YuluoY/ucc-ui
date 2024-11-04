import { withInstall, withInstallFunc } from "@ucc-ui/utils";
// import Dialog from "./methods";
import Dialog from "./src/Dialog.vue";

export const UDialog2 = withInstallFunc(Dialog, '$dialog')
export const UDialog = withInstall(Dialog)