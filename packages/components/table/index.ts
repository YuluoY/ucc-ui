import { withInstall, type SFCWithInstall } from '../../utils'
import Table from './src/Table.vue'


export const UTable: SFCWithInstall<typeof Table> = withInstall<typeof Table>(Table)
