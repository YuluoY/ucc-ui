
export interface UMdEDitorProps {
  /**
   * @description 纯文本内容
   */
  modelValue?: string

  /**
   * @description 是否禁用编辑器
   */
  disabled?: boolean

  /**
   * @description 是否禁用预览
   */
  preview?: boolean
}

export interface UMdEDitorEmits {
  /**
   * @description 文本内容发生变化
   */
  (e: 'change', value: string): void
}



export interface UMdEDitorExposes {
  /**
   * @description 获取文本内容
   */
  getText: () => string

  /**
   * @description 获取markdown格式文本内容
   */
  getSource: () => string

  /**
   * @description 获取html格式文本内容
   */
  getHtml: () => string

  /**
   * @description 获取编辑器实例
   */
  getInstance: () => InstanceType<typeof import('md-editor-v3')['MdEditor']>
}


