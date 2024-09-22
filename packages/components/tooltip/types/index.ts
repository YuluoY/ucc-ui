import type { Ref } from "vue"
import type { UTooltipEffect, UTooltipPlacement, UTooltipTrigger } from "./const"

export interface UTooltipProps {
  appendTo: string | HTMLElement      // 指定Tooltip挂载的DOM节点
  effect: UTooltipEffect              // 提示框主题
  content: string                     // 提示内容
  rawContent: boolean                 // 是否使用原生html
  placement: UTooltipPlacement        // 弹出位置
  visible: boolean                    // 是否显示
  disabled: boolean                   // 是否禁用
  offset: number                      // 偏移量
  showAfter: number                   // 延迟显示，单位为毫秒
  showArrow: boolean                  // 是否显示箭头
  hideAfter: number                   // 延迟关闭，单位为毫秒
  autoClose: number                   // 自动关闭时间，单位为毫秒
  popperClass: string                 // 给Tooltip的popper添加类名
  trigger: UTooltipTrigger            // 触发方式
  virtualTriggering: boolean          // 是否使用虚拟触发器
  triggerKeys: string[]               // 触发器键值
  persistent: boolean                 // 是否持久显示，当组件长时间不被触发且为false时，popconfirm会被删除
  ariaLabel: string                   // 提示框的aria-label属性
}

export interface UTooltipExposes {
  popperRef: Ref   // el-popper 组件实例
  contentRef: Ref  // el-tooltip-content 组件实例
  isFocusInsideContent: () => boolean | undefined // 当前焦点事件是否在tooltip-content中触发
  updatePopper: () => void // 更新popper位置
  onOpen: (evt: Event | undefined) => void // 打开tooltip
  onClose: (evt: Event | undefined) => void // 关闭tooltip
  hide: (evt: Event | undefined) => void // 隐藏tooltip
}