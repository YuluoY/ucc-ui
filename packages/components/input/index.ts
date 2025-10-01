import { withInstall, type SFCWithInstall } from '../../utils'
import Input from './src/Input.vue'
export * from './types'

export const UInput: SFCWithInstall<typeof Input> = withInstall<typeof Input>(Input)