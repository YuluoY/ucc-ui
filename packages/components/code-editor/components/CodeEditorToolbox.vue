
<template>
  <section class="u-code-editor__toolbox">
    <div class="u-code-editor__toolbox-item" v-for="(item, index) in toolbox" :key="index"
      @click="_ => isFunction(item.onClick) && item.onClick(item)">
      <u-tooltip class="content" v-if="!item.showLabel" :visible="false" placement="top" :content="item.tooltip ?? item.label"
        effect="light" :width="50" v-bind="item.tooltipProps ?? void 0">
        <u-icon :icon="item.icon" :v-bind="item.iconProps ?? void 0" />
      </u-tooltip>
      <div class="content" v-else>
        <u-icon :icon="item.icon" :v-bind="item.iconProps ?? void 0" />
        <span class="u-code-editor__toolbox-item-label" v-show="item.showLabel ?? false">{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue';
import { isFunction, rootFontSize } from '../../../utils';
import { UIcon } from '../../icon'
import { UTooltip } from '../../tooltip'
import type { UCodeEditorCtx, UCodeEditorToolbarItem } from '../types';
import { CCodeEditorToolbox as Toolbox, CCodeEditorCtx } from '../types/const';

const {
  editor,
  options
} = inject(CCodeEditorCtx) as UCodeEditorCtx

const toolbox = reactive<UCodeEditorToolbarItem[]>([
  { name: Toolbox.IncrementFontSize, label: '增加字号', icon: 'fa-plus', onClick: onIncrementFontSize },
  { name: Toolbox.DecrementFontSize, label: '减小字号', icon: 'fa-minus', onClick: onDecrementFontSize },
  { name: Toolbox.ResetFontSize, label: '重置字号', icon: 'fa-undo', onClick: onResetFontSize },
  { name: Toolbox.Fomatter, label: '格式化', icon: 'fa-code', onClick: onFormatter },
  { name: Toolbox.ToggleMinimap, label: '缩略图', icon: 'fa-compress', onClick: onToggleMinimap }
])

function onIncrementFontSize() {
  options.fontSize! += 1
  editor.value?.updateOptions({ fontSize: options.fontSize })
}

function onDecrementFontSize() {
  options.fontSize! -= 1
  editor.value?.updateOptions({ fontSize: options.fontSize })
}

function onResetFontSize() {
  options.fontSize = rootFontSize
  editor.value?.updateOptions({ fontSize: options.fontSize })
}

function onFormatter() {
  editor.value?.getAction('editor.action.formatDocument')?.run()
}

function onToggleMinimap() {
  (options.minimap!).enabled = !((options.minimap!).enabled)
  editor.value?.updateOptions({ minimap: options.minimap })
}

function onToggleReadOnly() {
  options.readOnly = !options.readOnly
  editor.value?.updateOptions({ readOnly: options.readOnly })
}

function onToggleWordWrap() {
  options.wordWrap = options.wordWrap === 'off' ? 'on' : 'off'
}

</script>

<style scoped lang="scss">

</style>