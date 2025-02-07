import { withInstall } from '../../utils'
import Form from './src/Form.vue'
import FormItem from './src/FormItem.vue'

export const UForm = withInstall(Form)
export const UFormItem = withInstall(FormItem)

export * from './types'
