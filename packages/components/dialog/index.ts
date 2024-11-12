import { withInstall, withInstallFunc } from "@ucc-ui/utils";
import Dialog from "./methods";
import DialogSFC from "./src/Dialog.vue";
import { DIALOG_VAR } from "../constants";

export const UDialogFn = withInstallFunc(Dialog, DIALOG_VAR)
export const UDialog = withInstall(DialogSFC)