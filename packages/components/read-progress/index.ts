import { withInstall, withInstallFunc, type SFCWithInstall } from '../../utils'
import ReadProgress from './src/ReadProgress.vue'
import { Global_Vars } from '../constants'
import ReadProgressFn from './methods'

export * from './types'

export const UReadProgress: SFCWithInstall<typeof ReadProgress> = withInstall<typeof ReadProgress>(ReadProgress)
export const UReadProgressFn = withInstallFunc(ReadProgressFn, Global_Vars.PROGRESS)