<template>
    <UiCollapse v-bind="componentAttrs">
        <template
            v-if="$slots.default"
            #default
        >
            <slot name="default"></slot>
        </template>
    </UiCollapse>
</template>

<script setup lang="ts">
import type { IUiCollapseProps } from 'ui-layer/types/components/collapse';

const props = withDefaults(defineProps<IUiCollapseProps>(), {
    classPrefix: 'Base',
    axis: 'y',
});

const { componentAttrs } = useUiCommon(props);
</script>
