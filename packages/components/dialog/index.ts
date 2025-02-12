import { withInstall, withInstallFunc } from "../../utils";
import Dialog from "./src/Dialog.vue";
import { Global_Vars } from "../constants.ts";
import DialogFn from "./methods";

export const UDialog = withInstall(Dialog)
export const UDialogFn = withInstallFunc(DialogFn, Global_Vars.DIALOG)