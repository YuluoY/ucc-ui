import { withInstall, withInstallFunc } from "@ucc-ui/utils";
import Dialog from "./methods";
import DialogVue from "./src/Dialog.vue";

withInstallFunc(Dialog, '$dialog')
export const UDialog = withInstall(DialogVue)