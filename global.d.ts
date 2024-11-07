import { App } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UCard: typeof import('ucc-ui')['UCard'];
    UCodeEditor: typeof import('ucc-ui')['UCodeEditor'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UDialog: typeof import('ucc-ui')['UDialog'];
    UDropdown: typeof import('ucc-ui')['UDropdown'];
    UDropdownItem: typeof import('ucc-ui')['UDropdownItem'];
    UDropdownMenu: typeof import('ucc-ui')['UDropdownMenu'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
    USlider: typeof import('ucc-ui')['USlider'];
    UPopconfirm: typeof import('ucc-ui')['UPopconfirm'];
    UTag: typeof import('ucc-ui')['UTag'];
    UTooltip: typeof import('ucc-ui')['UTooltip'];
    UText: typeof import('ucc-ui')['UText'];
	}
}

export {}
