import { App } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UCard: typeof import('ucc-ui')['UCard'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UCollapseTransition: typeof import('ucc-ui')['UCollapseTransition'];
    UCodeEditor: typeof import('ucc-ui')['UCodeEditor'];
    UCodeEditorToolbox: typeof import('ucc-ui')['UCodeEditorToolbox'];
    UDropdown: typeof import('ucc-ui')['UDropdown'];
    UDropdownItem: typeof import('ucc-ui')['UDropdownItem'];
    UDropdownMenu: typeof import('ucc-ui')['UDropdownMenu'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
    UPopconfirm: typeof import('ucc-ui')['UPopconfirm'];
    UMessage: typeof import('ucc-ui')['UMessage'];
    USlider: typeof import('ucc-ui')['USlider'];
    UText: typeof import('ucc-ui')['UText'];
    UModelComponent: typeof import('ucc-ui')['UModelComponent'];
    UStructComponent: typeof import('ucc-ui')['UStructComponent'];
    UTag: typeof import('ucc-ui')['UTag'];
    UTooltip: typeof import('ucc-ui')['UTooltip'];
	}
}

export {}
