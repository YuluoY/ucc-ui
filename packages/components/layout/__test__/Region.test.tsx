import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { URegion } from '..'; // 请根据实际路径更新
import type { URegionProps } from '../types'; // 请根据实际路径更新

describe('URegion 组件测试', () => {
  it('默认渲染正确', () => {
    const wrapper = mount(URegion);
    expect(wrapper.exists()).toBe(true);
  });

  it('支持区域类型', () => {
    const wrapper = mount(URegion, {
      props: {
        region: 'center', // 替换为实际的区域类型
      } as URegionProps,
    });
    expect(wrapper.classes()).toContain('u-region__center'); // 假设根据区域类型添加的类
  });

  it('支持宽度', () => {
    const width = '100%';
    const wrapper = mount(URegion, {
      props: {
        width,
      } as URegionProps,
    });
    expect(wrapper.attributes('style')).toContain(`width: ${width}`); // 检查宽度样式
  });

  it('支持默认插槽内容', () => {
    const wrapper = mount(URegion, {
      slots: {
        default: '区域内容',
      },
    });
    expect(wrapper.text()).toContain('区域内容'); // 检查插槽内容是否渲染
  });
});
