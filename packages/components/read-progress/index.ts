import { withInstall, withInstallFunc } from "@ucc-ui/utils"
import ReadProgress from "./src/ReadProgress.vue"
import { PROGRESS_VAR } from "../constants"
import ReadProgressFn from './methods'

export const UReadProgress = withInstall(ReadProgress)
export const UReadProgressFn = withInstallFunc(ReadProgressFn, PROGRESS_VAR)