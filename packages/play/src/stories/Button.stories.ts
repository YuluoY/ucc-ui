import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { UButton } from 'ucc-ui'

type Story = StoryObj<typeof UButton> & { argTypes: ArgTypes }

const meta: Meta<typeof UButton> = {
  title: 'Components/Button',
  component: UButton,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    }
  },
}

export default meta
export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
  },
  render: (args: any) => ({
    components: { UButton },
    setup() {
      return { args }
    },
    template: '<UButton v-bind="args">Primary</UButton>',
  }),
}