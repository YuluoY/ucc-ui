<template>
  <section
    :class="['u-region', `u-region__${region}`, 'u-region-container']"
    :style="[
      padding ? `padding: ${pxToRem(padding)}rem;` : '',
      span ? `--flex-size: ${span}` : '',
    ]"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { pxToRem } from "@ucc-ui/utils";
import type { URegionProps } from "../types";
import { CComponentName } from "../types/const";

defineOptions({
  name: CComponentName.REGION,
});
withDefaults(defineProps<URegionProps>(), {
  region: "center",
  padding: 0
});

</script>

<style lang="scss" scoped>

</style>
