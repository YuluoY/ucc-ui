import Layout from './src/Layout.vue'
import Region from './src/Region.vue'
import { withInstall, type SFCWithInstall } from '../../utils/index'
export * from './types'

export const ULayout: SFCWithInstall<typeof Layout> = withInstall<typeof Layout>(Layout)
export const URegion: SFCWithInstall<typeof Region> = withInstall<typeof Region>(Region)