import type { Component } from 'vue'
import type { UButtonProps } from '../../button/types'
import type { UTooltipProps } from '../../tooltip/types'

export interface UPopconfirmProps {
  title: string
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonType?: UButtonProps['type']
  cancelButtonType?: UButtonProps['type']
  confirmButtonProps?: UButtonProps
  cancelButtonProps?: UButtonProps
  icon?: string | Component
  iconColor?: string
  hideIcon?: boolean
  hideTimeout?: number
  teleported?: boolean
  persistent?: boolean
  width?: number
  tooltipProps?: Partial<Omit<UTooltipProps, 'visible'>>
}

export interface UPopconfirmEmits {
  (e: 'confirm', evt: MouseEvent): void
  (e: 'cancel', evt: MouseEvent): void
}