
  declare module 'vue' {
    export interface GlobalComponents {
    UBadge: typeof import('ucc-ui')['UBadge'];
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UCard: typeof import('ucc-ui')['UCard'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UConfigProvider: typeof import('ucc-ui')['UConfigProvider'];
    UCodeEditor: typeof import('ucc-ui')['UCodeEditor'];
    UDialog: typeof import('ucc-ui')['UDialog'];
    UDropdown: typeof import('ucc-ui')['UDropdown'];
    UDropdownItem: typeof import('ucc-ui')['UDropdownItem'];
    UDropdownMenu: typeof import('ucc-ui')['UDropdownMenu'];
    UForm: typeof import('ucc-ui')['UForm'];
    UFormItem: typeof import('ucc-ui')['UFormItem'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    UMenu: typeof import('ucc-ui')['UMenu'];
    UMenuItem: typeof import('ucc-ui')['UMenuItem'];
    USubMenu: typeof import('ucc-ui')['USubMenu'];
    UPopconfirm: typeof import('ucc-ui')['UPopconfirm'];
    UReadProgress: typeof import('ucc-ui')['UReadProgress'];
    USlider: typeof import('ucc-ui')['USlider'];
    UTag: typeof import('ucc-ui')['UTag'];
    UTable: typeof import('ucc-ui')['UTable'];
    UText: typeof import('ucc-ui')['UText'];
    UTooltip: typeof import('ucc-ui')['UTooltip'];
    UTop: typeof import('ucc-ui')['UTop'];
}
  }
  declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
    $dialog: typeof import('ucc-ui')['UDialogFn'];
    $message: typeof import('ucc-ui')['UMessageFn'];
    $notification: typeof import('ucc-ui')['UNotificationFn'];
    $progress: typeof import('ucc-ui')['UReadProgressFn'];
}
  }
  export {}
  