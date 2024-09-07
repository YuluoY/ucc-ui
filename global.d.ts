import { App } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UCard: typeof import('ucc-ui')['UCard'];
    UDropDown: typeof import('ucc-ui')['UDropDown'];
    UDropDownItem: typeof import('ucc-ui')['UDropDownItem'];
    UDropDownMenu: typeof import('ucc-ui')['UDropDownMenu'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    UDynamicComponent: typeof import('ucc-ui')['UDynamicComponent'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
    UMessage: typeof import('ucc-ui')['UMessage'];
    USlider: typeof import('ucc-ui')['USlider'];
    UTag: typeof import('ucc-ui')['UTag'];
    UText: typeof import('ucc-ui')['UText'];
    UTooltip: typeof import('ucc-ui')['UTooltip'];
	}
}

export {}
