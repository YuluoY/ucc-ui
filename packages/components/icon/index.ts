import { withInstall, type SFCWithInstall } from '../../utils'
import Icon from './src/Icon.vue'

export const UIcon: SFCWithInstall<typeof Icon> = withInstall<typeof Icon>(Icon)
