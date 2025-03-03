<template>
  <main :class="[
    'u-code-editor',
    `is-shadow--${shadow}`
  ]" :style="{ height: Height }">
    <section ref="editorRef" class="u-code-editor__inner"></section>
    <slot></slot>
    <slot name="toolbox">
      <code-editor-toolbox></code-editor-toolbox>
    </slot>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref, shallowRef, toRaw } from 'vue';
import monaco from './monaco';
import type { UCodeEditor, UCodeEditorChangeEvent, UCodeEditorEmits, UCodeEditorMinimap, UCodeEditorModel, UCodeEditorProps } from '../types';
import { pxToRem, rootFontSize } from '../../../utils';
import { cloneDeep, debounce } from 'lodash-es';
import CodeEditorToolbox from '../components/CodeEditorToolbox.vue';
import { CCodeEditorCtx } from '../types/const';

defineOptions({
  name: 'UCodeEditor'
})

const props = withDefaults(defineProps<UCodeEditorProps>(), {
  value: `function hello() {\n\tconsole.log('Hello, world!');\n}`,
  language: 'javascript',
  theme: 'vs-dark',
  fontSize: rootFontSize,
  minimap: { enabled: true } as UCodeEditorMinimap | any,
  readOnly: false,
  tabSize: 2,
  automaticLayout: false,

  shadow: 'hover',
  showToolbox: true,
  height: 400
})
const emits = defineEmits<UCodeEditorEmits>()

const CodeEditorOptions = cloneDeep(toRaw(props)) as UCodeEditorProps
const Height = computed(() => pxToRem(props.height, { unit: 'rem'}))

const resizeObserver = ref<ResizeObserver | null>(null)

const editor = ref<UCodeEditor>(null)
const editorRef = ref(null)
const editorModel = shallowRef<UCodeEditorModel>(null)

provide(CCodeEditorCtx, {
  editor, 
  options: CodeEditorOptions
})

onBeforeUnmount(() => {
  if (editor.value)
    editor.value.dispose()
  if (resizeObserver.value)
    resizeObserver.value.disconnect()
})

onMounted(() => {
  init()
})

function init() {
  if (!editorRef.value)
    return console.error('UCodeEditor：editorRef is null');
  editor.value = monaco.editor.create(editorRef.value, toRaw(props));
  editorModel.value = editor.value.getModel()

  // 宽高变化
  handleMonitorResize()

  // 内容变化
  editor.value.onDidChangeModelContent((evt: UCodeEditorChangeEvent) => {
    emits('update:value', toRaw(editorModel.value)?.getValue())
    emits('change', evt)
  })
}

function handleMonitorResize() {
  if (editorRef.value) {
    resizeObserver.value = new ResizeObserver(debounce(() => onReLayout()))
    resizeObserver.value.observe(editorRef.value)
  }
}

function onReLayout() {
  toRaw(editor.value)?.layout()
}

</script>

<style>
@import '../styles/index.css';
</style>