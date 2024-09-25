import type { Ref } from "vue"
import type { UTooltipEffect, UTooltipTrigger } from "./const"
import type { Placement, Options } from '@popperjs/core'

export interface UTooltipProps {
  appendTo?: string | HTMLElement      // 指定Tooltip挂载的DOM节点
  effect?: UTooltipEffect              // 提示框主题
  content?: string                     // 提示内容
  rawContent?: boolean                 // 是否使用原生html
  placement?: Placement                // 弹出位置
  visible: boolean                     // 是否显示
  disabled?: boolean                   // 是否禁用
  offset?: number                      // 偏移量
  showTimeout?: number                 // 延迟显示，单位为毫秒
  hideTimeout?: number                 // 延迟关闭，单位为毫秒
  showArrow?: boolean                  // 是否显示箭头
  autoCloseTimeout?: number            // 自动关闭时间，单位为毫秒
  popperClass?: string                 // 给Tooltip的popper添加类名
  popperOptions?: Partial<Options>     // popper.js的配置项
  trigger?: UTooltipTrigger            // 触发方式
  virtualTriggering?: boolean          // 是否使用虚拟触发器
  virtualRef?: Ref<HTMLElement> | HTMLElement | null        // 虚拟触发器
  triggerKeys?: string[]               // 触发器键值
  persistent?: boolean                 // 是否持久显示，当组件长时间不被触发且为false时，popconfirm会被删除
  ariaLabel?: string                   // 提示框的aria-label属性
  transition?: string                  // 过渡动画
  manual?: boolean                     // 是否手动控制显示状态
}

export interface UTooltipEmits {
  (e: 'visible-change', value: boolean): void  // 显示状态改变时触发
  (e: 'click-outside'): void  // 点击外部时触发
  (e: 'update:visible', value: boolean): void  // 显示状态改变时触发
}

export interface UTooltipExposes {
  popperRef: Ref   // el-popper 组件实例
  contentRef: Ref  // el-tooltip-content 组件实例
  isFocusInsideContent: () => boolean | undefined // 当前焦点事件是否在tooltip-content中触发
  updatePopper: () => void // 更新popper位置
  onOpen: (evt?: Event | undefined) => void // 打开tooltip
  onClose: (evt?: Event | undefined) => void // 关闭tooltip
  hide: (evt?: Event | undefined) => void // 隐藏tooltip
}