export interface UCollapseProps {
  modelValue: string | Array<string>
  accordion?: boolean // 是否手风琴模式
}

export interface UCollapseEmits {
  (e: 'update:modelValue', value: string | Array<string>): void
  (e: 'change', value: string | Array<string>): void
}

export interface UCollapseItemProps {
  name: string | number // 唯一标识
  title: string         // 标题
  disabled?: boolean    // 是否禁用
}