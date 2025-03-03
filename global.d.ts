
  declare module 'vue' {
    export interface GlobalComponents {
    UBadge: typeof import('ucc-ui')['UBadge'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UConfigProvider: typeof import('ucc-ui')['UConfigProvider'];
    UDialog: typeof import('ucc-ui')['UDialog'];
    UDropdown: typeof import('ucc-ui')['UDropdown'];
    UDropdownItem: typeof import('ucc-ui')['UDropdownItem'];
    UDropdownMenu: typeof import('ucc-ui')['UDropdownMenu'];
    UForm: typeof import('ucc-ui')['UForm'];
    UFormItem: typeof import('ucc-ui')['UFormItem'];
    UCard: typeof import('ucc-ui')['UCard'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    UCodeEditor: typeof import('ucc-ui')['UCodeEditor'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
    UMenu: typeof import('ucc-ui')['UMenu'];
    UMenuItem: typeof import('ucc-ui')['UMenuItem'];
    USubMenu: typeof import('ucc-ui')['USubMenu'];
    UPopconfirm: typeof import('ucc-ui')['UPopconfirm'];
    UReadProgress: typeof import('ucc-ui')['UReadProgress'];
    UTable: typeof import('ucc-ui')['UTable'];
    USlider: typeof import('ucc-ui')['USlider'];
    UText: typeof import('ucc-ui')['UText'];
    UTag: typeof import('ucc-ui')['UTag'];
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
  