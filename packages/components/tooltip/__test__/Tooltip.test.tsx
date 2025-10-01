import { describe, expect, it, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { UTooltip } from '..'
import { beforeEach } from 'node:test'

vi.mock('@popperjs/core')

const onVisibleChange = vi.fn()

describe('UTooltip 组件', () =>
{
  it('正确应用withInstall', () =>
  {
    expect(typeof UTooltip.install).toBeDefined()
    expect(UTooltip).toHaveProperty('install')
  })

  it('正确导出组件', () =>
  {
    expect(typeof UTooltip).toBe('object')
  })
})