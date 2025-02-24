<template>
  <template v-if="mode === CLayoutMode.DEFAULT">
    <template v-if="!extend">
      <component
        v-for="region in topRegions"
        :is="region"
        :key="region.scopeId"
      />
      <div class="u-layout__body">
        <component
          v-for="region in [...leftRegions, ...centerRegions, ...rightRegions]"
          :is="region"
          :key="region.scopeId"
        />
      </div>
      <component
        v-for="region in bottomRegions"
        :is="region"
        :key="region.scopeId"
      />
    </template>

    <template v-else-if="extend === CLayoutExtend.LEFT_TOP">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <component
          v-for="region in leftRegions"
          :is="region"
          :key="region.scopeId"
        />
        <div class="u-layout__body">
          <component
            v-for="region in topRegions"
            :is="region"
            :key="region.scopeId"
          />
          <div class="u-layout__body-center">
            <component
              v-for="region in [...centerRegions, ...rightRegions]"
              :is="region"
              :key="region.scopeId"
            />
          </div>
        </div>
      </div>
      <component
        v-for="region in bottomRegions"
        :is="region"
        :key="region.scopeId"
      />
    </template>

    <template v-else-if="extend === CLayoutExtend.RIGHT_TOP">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <div class="u-layout__body">
          <component
            v-for="region in topRegions"
            :is="region"
            :key="region.scopeId"
          />
          <div class="u-layout__body-center">
            <component
              v-for="region in [...leftRegions, ...centerRegions]"
              :is="region"
              :key="region.scopeId"
            />
          </div>
        </div>
        <component
          v-for="region in rightRegions"
          :is="region"
          :key="region.scopeId"
        />
      </div>
      <component
        v-for="region in bottomRegions"
        :is="region"
        :key="region.scopeId"
      />
    </template>

    <template v-else-if="extend === CLayoutExtend.LEFT_BOTTOM">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <component
          v-for="region in topRegions"
          :is="region"
          :key="region.scopeId"
        />
        <div class="u-layout__body">
          <component
            v-for="region in leftRegions"
            :is="region"
            :key="region.scopeId"
          />
          <div class="u-layout__body-center">
            <div class="u-layout__body-center-content">
              <component
                v-for="region in [...centerRegions, ...rightRegions]"
                :is="region"
                :key="region.scopeId"
              />
            </div>
            <component
              v-for="region in bottomRegions"
              :is="region"
              :key="region.scopeId"
            />
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="extend === CLayoutExtend.RIGHT_BOTTOM">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <component
          v-for="region in topRegions"
          :is="region"
          :key="region.scopeId"
        />
        <div class="u-layout__body">
          <div class="u-layout__body-center">
            <div class="u-layout__body-center-content">
              <component
                v-for="region in [...leftRegions, ...centerRegions]"
                :is="region"
                :key="region.scopeId"
              />
            </div>
            <component
              v-for="region in bottomRegions"
              :is="region"
              :key="region.scopeId"
            />
          </div>
          <component
            v-for="region in rightRegions"
            :is="region"
            :key="region.scopeId"
          />
        </div>
      </div>
    </template>

    <template v-else-if="extend === CLayoutExtend.LEFT">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <component
          v-for="region in leftRegions"
          :is="region"
          :key="region.scopeId"
        />
        <div class="u-layout__body">
          <component
            v-for="region in topRegions"
            :is="region"
            :key="region.scopeId"
          />
          <div class="u-layout__body-center">
            <div class="u-layout__body-center-content">
              <component
                v-for="region in [...centerRegions, ...rightRegions]"
                :is="region"
                :key="region.scopeId"
              />
            </div>
            <component
              v-for="region in bottomRegions"
              :is="region"
              :key="region.scopeId"
            />
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="extend === CLayoutExtend.RIGHT">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <div class="u-layout__body">
          <component
            v-for="region in topRegions"
            :is="region"
            :key="region.scopeId"
          />
          <div class="u-layout__body-center">
            <div class="u-layout__body-center-content">
              <component
                v-for="region in [...leftRegions, ...centerRegions]"
                :is="region"
                :key="region.scopeId"
              />
            </div>
            <component
              v-for="region in bottomRegions"
              :is="region"
              :key="region.scopeId"
            />
          </div>
        </div>
        <component
          v-for="region in rightRegions"
          :is="region"
          :key="region.scopeId"
        />
      </div>
    </template>

    <template v-else-if="extend === CLayoutExtend.BOTH">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${extend}`">
        <component
          v-for="region in leftRegions"
          :is="region"
          :key="region.scopeId"
        />
        <div class="u-layout__body">
          <component
            v-for="region in [
              ...topRegions,
              ...centerRegions,
              ...bottomRegions,
            ]"
            :is="region"
            :key="region.scopeId"
          />
        </div>
        <component
          v-for="region in rightRegions"
          :is="region"
          :key="region.scopeId"
        />
      </div>
    </template>
  </template>
  
</template>

<script setup lang="ts">
import { computed, inject, type VNode } from "vue";
import {
  CLayoutContext,
  CLayoutExtend,
  CLayoutMode,
  CRegion,
  CComponentName,
} from "../types/const";
import type { ULayoutContext } from "../types";
import { isNil } from "lodash-es";

defineOptions({
  name: CComponentName.LAYOUT_MODE,
});

const ctx = inject<ULayoutContext>(CLayoutContext);

const topRegions: VNode[] = [];
const leftRegions: VNode[] = [];
const centerRegions: VNode[] = [];
const rightRegions: VNode[] = [];
const bottomRegions: VNode[] = [];

/**
 * region属性有值的u-region组件
 */
const regions: VNode[] = [];

/**
 * 布局模式
 */
const mode = computed(() => ctx?.mode.value);
/**
 * 扩展模式
 */
const extend = computed(() => ctx?.extend?.value);

/**
 * 遍历u-region组件
 */
for (const slot of ctx?.regions?.value || []) {
  if (!isNil(slot.props?.region)) {
    regions.push(slot);
    switch (slot.props.region) {
      case CRegion.TOP:
        topRegions.push(slot);
        break;
      case CRegion.LEFT:
        leftRegions.push(slot);
        break;
      case CRegion.CENTER:
        centerRegions.push(slot);
        break;
      case CRegion.RIGHT:
        rightRegions.push(slot);
        break;
      case CRegion.BOTTOM:
        bottomRegions.push(slot);
        break;
      default:
        break;
    }
  }
}
</script>
