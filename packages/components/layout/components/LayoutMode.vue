<template>
  <template v-if="ctx.mode === CLayoutMode.DEFAULT">
    <template v-if="!ctx.extend">
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

    <template v-else-if="ctx.extend === CLayoutExtend.LEFT_TOP">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

    <template v-else-if="ctx.extend === CLayoutExtend.RIGHT_TOP">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

    <template v-else-if="ctx.extend === CLayoutExtend.LEFT_BOTTOM">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

    <template v-else-if="ctx.extend === CLayoutExtend.RIGHT_BOTTOM">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

    <template v-else-if="ctx.extend === CLayoutExtend.LEFT">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

    <template v-else-if="ctx.extend === CLayoutExtend.RIGHT">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

    <template v-else-if="ctx.extend === CLayoutExtend.BOTH">
      <div class="u-layout-mode" :class="`u-layout-mode__extend ${ctx.extend}`">
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

  <template v-else-if="ctx.mode === CLayoutMode.ROW || ctx.mode === CLayoutMode.COLUMN">
    <div class="u-layout-mode" :class="`u-layout-mode__${ctx.mode}`">
      <component v-for="region in regions" :is="region" :key="region.scopeId" />
    </div>
  </template>
  
</template>

<script setup lang="ts">
import { inject, shallowRef, type VNode } from "vue";
import {
  CLayoutContext,
  CLayoutExtend,
  CLayoutMode,
  CRegion,
  CComponentName,
} from "../types/const";
import type { ULayoutContext } from "../types";

defineOptions({
  name: CComponentName.LAYOUT_MODE,
});

const ctx = inject<ULayoutContext>(CLayoutContext, {
  mode: CLayoutMode.DEFAULT,
});

const topRegions = shallowRef<VNode[]>([]);
const leftRegions = shallowRef<VNode[]>([]);
const centerRegions = shallowRef<VNode[]>([]);
const rightRegions = shallowRef<VNode[]>([]);
const bottomRegions = shallowRef<VNode[]>([]);
const regions = shallowRef<VNode[]>([]);

for (const slot of ctx.regions?.value || []) {
  const type = slot.type as any;
  if (type?.name === CComponentName.REGION && slot.props?.region) {
    regions.value.push(slot);
    switch (slot.props.region) {
      case CRegion.TOP:
        topRegions.value.push(slot);
        break;
      case CRegion.LEFT:
        leftRegions.value.push(slot);
        break;
      case CRegion.CENTER:
        centerRegions.value.push(slot);
        break;
      case CRegion.RIGHT:
        rightRegions.value.push(slot);
        break;
      case CRegion.BOTTOM:
        bottomRegions.value.push(slot);
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped></style>
