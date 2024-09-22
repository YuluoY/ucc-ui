import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ULayout } from '..'; // 请根据实际路径更新
import type { ULayoutProps } from '../types'; // 请根据实际路径更新
import { pxToRem } from '../../../utils';

describe('ULayout 组件测试', () => {
  it('默认渲染正确', () => {
    const wrapper = mount(ULayout);
    expect(wrapper.exists()).toBe(true);
  });

  it('支持布局模式', () => {
    const wrapper = mount(ULayout, {
      props: {
        mode: 'horizontal', // 替换为实际的布局模式
      } as ULayoutProps,
    });
    expect(wrapper.classes()).toContain('u-layout__horizontal'); // 假设根据模式添加的类
  });

  it('支持内边距', () => {
    const padding = 20;
    const wrapper = mount(ULayout, {
      props: {
        padding,
      } as ULayoutProps,
    });
    expect(wrapper.attributes('style')).toContain(`padding: ${pxToRem(padding)}`); // 检查内边距样式
  });

  it('支持间距', () => {
    const gap = 10;
    const wrapper = mount(ULayout, {
      props: {
        gap,
      } as ULayoutProps,
    });
    expect(wrapper.attributes('style')).toContain(`gap: ${pxToRem(gap)}`); // 检查间距样式
  });

  it('支持列数', () => {
    const col = 3;
    const wrapper = mount(ULayout, {
      props: {
        col,
      } as ULayoutProps,
    });
    expect(wrapper.classes()).toContain('u-layout--3-col'); // 假设根据列数添加的类
  });

  it('支持自适应属性', () => {
    const wrapper = mount(ULayout, {
      props: {
        fit: true,
      } as ULayoutProps,
    });
    expect(wrapper.classes()).toContain('is-fit'); // 假设根据 fit 属性添加的类
  });
});
