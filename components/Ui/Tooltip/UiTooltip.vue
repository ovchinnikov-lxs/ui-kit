<template>
    <div
        ref="tooltipRef"
        :class="getClassName('Tooltip')"
    >
        <UiPopover
            v-bind="popoverAttrs"
            v-model="model"
            prevent-control
        >
            <template #top>
                <slot name="top"></slot>
            </template>

            <template #bottom>
                <slot name="bottom"></slot>
            </template>
        </UiPopover>
    </div>
</template>

<script setup lang="ts">
import type { IUiTooltipProps } from 'ui-layer/types/components/tooltip';

import { useElementHover } from '@vueuse/core';

const props = defineProps<IUiTooltipProps>();

const { getClassName } = useUiClassName(props);

const popoverAttrs = computed(() => ({
    ...props,
    classPrefix: `${props.classPrefix}Tooltip`,
}));

const model = defineModel<boolean>();

const tooltipRef = ref<HTMLDivElement>();
const isHovered = useElementHover(tooltipRef);

watch(isHovered, (val) => {
    model.value = val;
});
</script>

<style lang="scss">
.UiTooltip {
    width: fit-content;
    touch-action: none;
}
</style>
