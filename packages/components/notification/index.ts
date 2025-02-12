import { withInstallFunc } from "../../utils";
import NotificationFn from "./methods"
import { Global_Vars } from "../constants"

export const UNotificationFn = withInstallFunc(NotificationFn, Global_Vars.NOTIFICATION)