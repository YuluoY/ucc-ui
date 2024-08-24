import { ULayout, URegion } from "ucc-ui";
import { container } from "./utils";
import type { Meta } from "@storybook/vue3";
import type { URegionProps, UlayoutProps } from "../../../components/layout/types";
import type { Story } from "./types";
import { CLayoutMode, CRegion } from "../../../components/layout/types/const";

const meta: Meta<typeof ULayout> = {
 title: 'Components/Layout',
 component: ULayout,
 argTypes: {
 }
}

export const Default: Story<typeof ULayout & typeof URegion > = {
  argTypes: {
    mode: {
      control: 'select',
      description: '布局模式',
      options: Object.values(CLayoutMode),
    },
    col: {
      control: 'number',
      description: '列数',
    },
    fit: {
      control: 'boolean',
      description: `是否自适应宽度（只有在mode为${CLayoutMode.VERTICAL}时生效）`,
    },
    padding: {
      control: 'number',
      description: '容器间距'
    },
    gap: {
      control: 'number',
      description: '子元素间距'
    }
  },
  args: {
    mode: "vertical",
    col: 3,
    padding: 10,
    gap: 10,
    fit: false,
  },
  render: (args: UlayoutProps & URegionProps) => ({
    components: { ULayout, URegion },
    setup() {
      const regions = Object.values(CRegion);
      return { args, regions }
    },
    template: container(`
      <u-layout v-bind="args">
        <u-region v-for="region in regions" :region="region" :key="region">
          {{ region }}
        </u-region
      </u-layout>
    `),
  })
}

export default meta