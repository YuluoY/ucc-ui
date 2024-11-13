import { withInstall, withInstallFunc } from "@ucc-ui/utils"
import ReadProgress from "./src/ReadProgress.vue"
import { Global_Vars } from "../constants"
import ReadProgressFn from './methods'

export const UReadProgress = withInstall(ReadProgress)
export const UReadProgressFn = withInstallFunc(ReadProgressFn, Global_Vars.PROGRESS)