
  declare module 'vue' {
    export interface GlobalComponents {
    UBadge: typeof import('ucc-ui')['UBadge'];
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UCard: typeof import('ucc-ui')['UCard'];
    UCodeEditor: typeof import('ucc-ui')['UCodeEditor'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UDialog: typeof import('ucc-ui')['UDialog'];
    UConfigProvider: typeof import('ucc-ui')['UConfigProvider'];
    UDropdown: typeof import('ucc-ui')['UDropdown'];
    UDropdownItem: typeof import('ucc-ui')['UDropdownItem'];
    UDropdownMenu: typeof import('ucc-ui')['UDropdownMenu'];
    UForm: typeof import('ucc-ui')['UForm'];
    UFormItem: typeof import('ucc-ui')['UFormItem'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    UMenu: typeof import('ucc-ui')['UMenu'];
    UMenuItem: typeof import('ucc-ui')['UMenuItem'];
    USubMenu: typeof import('ucc-ui')['USubMenu'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
    UPopconfirm: typeof import('ucc-ui')['UPopconfirm'];
    USlider: typeof import('ucc-ui')['USlider'];
    UReadProgress: typeof import('ucc-ui')['UReadProgress'];
    UTable: typeof import('ucc-ui')['UTable'];
    UTag: typeof import('ucc-ui')['UTag'];
    UText: typeof import('ucc-ui')['UText'];
    UTop: typeof import('ucc-ui')['UTop'];
    UTooltip: typeof import('ucc-ui')['UTooltip'];
}
  }
  declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
    $dialog: typeof import('ucc-ui')['UDialogFn'];
    $notification: typeof import('ucc-ui')['UNotificationFn'];
    $message: typeof import('ucc-ui')['UMessageFn'];
    $progress: typeof import('ucc-ui')['UReadProgressFn'];
}
  }
  export {}
  