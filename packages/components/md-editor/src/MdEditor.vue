<template>
  <div class="u-md-editor">
    <MdEditor class="u-md-editor__inner" ref="editorRef" v-model="value"/>
  </div>
</template>


<script setup lang="ts">
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import type { UMdEDitorProps } from '../types';
import { ref } from 'vue';

defineOptions({
  name: 'UMdEditor'
})

const props = withDefaults(defineProps<UMdEDitorProps>(), {
  modelValue: ''
})

const editorRef = ref<InstanceType<typeof MdEditor>>()
const value = ref(props.modelValue ?? '')

</script>

<style lang="scss" scoped>

</style>
