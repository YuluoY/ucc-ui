import { withInstall, withInstallFunc, type SFCWithInstall } from '../../utils'
import Dialog from './src/Dialog.vue'
import { Global_Vars } from '../constants.ts'
import DialogFn from './methods'
export * from './types'

export const UDialog: SFCWithInstall<typeof Dialog> = withInstall<typeof Dialog>(Dialog)
export const UDialogFn = withInstallFunc(DialogFn, Global_Vars.DIALOG)