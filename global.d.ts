
  declare module 'vue' {
    export interface GlobalComponents {
    UBadge: typeof import('ucc-ui')['UBadge'];
    UButton: typeof import('ucc-ui')['UButton'];
    UButtonGroup: typeof import('ucc-ui')['UButtonGroup'];
    UCodeEditor: typeof import('ucc-ui')['UCodeEditor'];
    UCard: typeof import('ucc-ui')['UCard'];
    UCollapse: typeof import('ucc-ui')['UCollapse'];
    UCollapseItem: typeof import('ucc-ui')['UCollapseItem'];
    UConfigProvider: typeof import('ucc-ui')['UConfigProvider'];
    UDropdown: typeof import('ucc-ui')['UDropdown'];
    UDropdownItem: typeof import('ucc-ui')['UDropdownItem'];
    UDropdownMenu: typeof import('ucc-ui')['UDropdownMenu'];
    UDialog: typeof import('ucc-ui')['UDialog'];
    UForm: typeof import('ucc-ui')['UForm'];
    UFormItem: typeof import('ucc-ui')['UFormItem'];
    UIcon: typeof import('ucc-ui')['UIcon'];
    UInput: typeof import('ucc-ui')['UInput'];
    UInputNumber: typeof import('ucc-ui')['UInputNumber'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    ULayoutMode: typeof import('ucc-ui')['ULayoutMode'];
    URegion: typeof import('ucc-ui')['URegion'];
    UPopconfirm: typeof import('ucc-ui')['UPopconfirm'];
    UReadProgress: typeof import('ucc-ui')['UReadProgress'];
    USlider: typeof import('ucc-ui')['USlider'];
    UTag: typeof import('ucc-ui')['UTag'];
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
  