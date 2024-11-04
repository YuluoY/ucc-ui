import type { VNode, Component } from 'vue';

export interface UDialogProps {
  /**
   * @description 是否显示
   * @type {boolean}
   * @default false
   */
  modelValue: boolean

  /**
   * @description 标题
   * @type {string}
   * @default ''
   */
  title?: string

  /**
   * @description 内容
   * @type {VNode | Component | string | Function }
   * @default ''
   */
  content?: VNode | Component | string | Function

  /**
   * @description 宽度
   * @type {number}
   * @default ''
   */
  width?: number

  /**
   * @description 高度
   * @type {number}
   * @default ''
   */
  height?: number

  /**
   * @description 是否需要遮罩层
   * @type {boolean}
   * @default true
   */
  modal?: boolean

  /**
   * @description 遮罩层自定义类名
   * @type {string}
   * @default ''
   */
  modalClass?: string

  /**
   * @description 关闭图标
   * @type {string}
   * @default ''
   */
  closeIcon?: string

  /**
   * @description 折叠图标
   * @type {string}
   * @default ''
   */
  collapseIcon?: string

  /**
   * @description 容器元素
   * @type {string | HTMLElement}
   * @default 'body'
   */
  appendTo?: string | HTMLElement

  /**
   * @description 打开延时
   * @type {number}
   * @default 0
   */
  openDelay?: number

  /**
   * @description 关闭延时
   * @type {number}
   * @default 0
   */
  closeDelay?: number

  /**
   * @description 是否可以点击遮罩层关闭
   * @type {boolean}
   * @default true
   */
  closeOnClickModal?: boolean

  /**
   * @description 是否可以使用ESC按键关闭
   * @type {boolean}
   * @default true
   */
  closeOnPressEscape?: boolean

  /**
   * @description 是否显示折叠按钮
   * @type {boolean}
   * @default false
   */
  showCollapseIcon?: boolean

  /**
   * @description 是否显示关闭按钮
   * @type {boolean}
   * @default true
   */
  showCloseIcon?: boolean
}

export interface UDialogEmits {
  /**
   * @description 显示/隐藏状态改变时触发
   * @param   {boolean} value
   * @returns {void}
   */
  (e: 'update:modelValue', value: boolean): void

  /**
   * @description 打开/关闭时触发
   * @param {boolean} value
   * @returns {void}
   */
  (e: 'open', value: boolean): void

  /**
   * @description 关闭时触发
   * @param {boolean} value
   * @returns {void}
   */
  (e: 'close', value: boolean): void
}