import { withInstall, type SFCWithInstall } from '../../utils'
import Slider from './src/Slider.vue'

export * from './types'

export const USlider: SFCWithInstall<typeof Slider> = withInstall<typeof Slider>(Slider)