import { withInstall, type SFCWithInstall } from '../../utils'
import DynamicComp from './src/DynamicComp'

export const UDynamicComp: SFCWithInstall<typeof DynamicComp> = withInstall<typeof DynamicComp>(DynamicComp)