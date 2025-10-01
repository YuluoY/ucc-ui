import { withInstall, type SFCWithInstall } from '../../utils'
import Card from './src/Card.vue'

export * from './types'

export const UCard: SFCWithInstall<typeof Card> = withInstall<typeof Card>(Card)