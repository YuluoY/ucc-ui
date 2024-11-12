import { withInstallFunc } from "@ucc-ui/utils"
import NotificationFn from "./methods"
import { NOTIFICATION_VAR } from "../constants"

export const UNotificationFn = withInstallFunc(NotificationFn, NOTIFICATION_VAR)