import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import UButton from "../src/Button.vue";
import { UButtonProps } from "../types";

describe('UButton 组件覆盖测试', () => {
  it('默认渲染正确', () => {
    const wrapper = mount(UButton);
    expect(wrapper.classes()).toContain('u-button'); // 检查默认样式类
    expect(wrapper.exists()).toBe(true);
  });

  it('根据类型渲染正确', () => {
    const wrapper = mount(UButton, {
      props: {
        type: 'primary'
      } as UButtonProps,
    });
    expect(wrapper.classes()).toContain('u-button--primary');
  });

  it('根据尺寸渲染正确', () => {
    const wrapper = mount(UButton, {
      props: {
        size: 'large'
      } as UButtonProps,
    });
    expect(wrapper.classes()).toContain('u-button--large');
  });

  it('图标渲染正确', () => {
    const wrapper = mount(UButton, {
      props: {
        icon: 'check'
      } as UButtonProps,
    });
    const icon = wrapper.find('svg');
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain('fa-check');
  });

  it('正确处理点击事件', async () => {
    const onClick = vi.fn();
    const wrapper = mount(UButton, {
      props: {
        onClick
      },
    });

    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('当 `disabled` 属性为 true 时禁用按钮', async () => {
    const wrapper = mount(UButton, {
      props: {
        disabled: true
      } as UButtonProps,
    });
    expect(wrapper.attributes('disabled')).toBe('');
    expect(wrapper.classes()).toContain('is-disabled');
  });

  it('加载状态渲染正确', () => {
    const wrapper = mount(UButton, {
      props: {
        icon: 'home',
        loading: true,
        loadingIcon: 'spinner',
      } as UButtonProps,
    });
    expect(wrapper.classes()).toContain('is-loading');
    expect(wrapper.find('.u-button__icon').exists()).toBe(true);
  });

  it('链接类型渲染正确', () => {
    const wrapper = mount(UButton, {
      props: {
        link: true
      } as UButtonProps,
    });
    expect(wrapper.classes()).toContain('is-link');
  });

  it('自定义背景颜色渲染正确', () => {
    const Color = 'rgb(255, 0, 0)'
    const wrapper = mount(UButton, {
      props: {
        color: Color,
      } as UButtonProps,
    });
    expect(wrapper.attributes('style')).toContain(`background-color: ${Color}`);
  });

  it('正确触发节流功能', async () => {
    const onClick = vi.fn();
    const wrapper = mount(UButton, {
      props: {
        onClick,
        useThrottle: true,
        throttleTime: 200
      } as UButtonProps,
    });

    await wrapper.trigger('click');
    await wrapper.trigger('click'); // 短时间内触发两次点击

    expect(onClick).toHaveBeenCalledTimes(1); // 节流应该只调用一次
  });

  it('正确触发防抖功能', async () => {
    vi.useFakeTimers();
    const onClick = vi.fn();
    const wrapper = mount(UButton, {
      props: {
        onClick,
        useDebounce: true,
        debounceTime: 200
      } as UButtonProps,
    });

    await wrapper.trigger('click');
    await wrapper.trigger('click'); // 短时间内触发两次点击

    vi.advanceTimersByTime(200); // 触发防抖计时器
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});