import { withInstall, type SFCWithInstall } from '../../utils'
import Badge from './src/Badge.vue'

export * from './types'

export const UBadge: SFCWithInstall<typeof Badge> = withInstall<typeof Badge>(Badge)