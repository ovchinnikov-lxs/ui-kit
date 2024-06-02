<template>
    <UiTooltip v-bind="componentAttrs">
        <template #top>
            <slot name="top"></slot>
        </template>

        <template #bottom>
            <slot name="bottom"></slot>
        </template>
    </UiTooltip>
</template>

<script setup lang="ts">
import type { IUiTooltipProps } from 'ui-layer/types/components/tooltip';

const props = withDefaults(defineProps<IUiTooltipProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
});
const { componentAttrs } = useUiCommon(props);
</script>
