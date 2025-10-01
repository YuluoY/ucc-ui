
<template>
  <slot :config="config" />
</template>

<script setup lang="ts">
import { provideGlobalConfig } from '../hooks'
import type { UConfigProviderProps } from '../types'

defineOptions({
  name: 'UConfigProvider'
})

const props = withDefaults(defineProps<UConfigProviderProps>(), {})
const config = provideGlobalConfig(props)

</script>