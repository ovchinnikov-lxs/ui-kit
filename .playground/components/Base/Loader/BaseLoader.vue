<template>
    <UiLoader v-bind="componentAttrs">
        <template #default>
            <slot name="default"></slot>
        </template>
    </UiLoader>
</template>

<script setup lang="ts">
import type { IUiLoaderProps } from 'ui-layer/types/components/preloader';

const props = withDefaults(defineProps<IUiLoaderProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'secondary',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseLoader {
    $loader: &;

    @include ui-size('medium') {
        width: 64px;
        height: 64px;
    }

    @include ui-color('secondary') {
        color: var(--color-secondary);
    }
}
</style>
