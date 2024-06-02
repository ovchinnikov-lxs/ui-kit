<template>
    <UiRichText v-bind="componentAttrs" />
</template>

<script setup lang="ts">
import type { IUiRichTextProps } from 'ui-layer/types/components/richtext';

const props = withDefaults(defineProps<IUiRichTextProps>(), {
    classPrefix: 'Base',
    color: 'secondary',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseRichText {
    @include ui-color('secondary') {
        border: 1px solid var(--color-secondary);
    }
}
</style>
