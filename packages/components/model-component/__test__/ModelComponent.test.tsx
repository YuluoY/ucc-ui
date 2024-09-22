import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils';
import { UModelComponent } from "../index";

describe('UModelComponent 组件', () => {
  it('默认渲染正确', () => {
    const wrapper = mount(UModelComponent);
    expect(wrapper.exists()).toBe(true);
  });
})