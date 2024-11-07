import { withInstall, withInstallFunc } from "@ucc-ui/utils";
import Dialog from "./methods";
import DialogSFC from "./src/Dialog.vue";

export const UDialogFn = withInstallFunc(Dialog, '$dialog')
export const UDialog = withInstall(DialogSFC)