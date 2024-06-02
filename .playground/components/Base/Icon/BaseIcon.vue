<template>
    <UiIcon v-bind="componentAttrs" />
</template>

<script setup lang="ts">
import type { IUiIconProps } from 'ui-layer/types/components/icon';

const props = withDefaults(defineProps<IUiIconProps>(), {
    classPrefix: 'Base',
    size: 'medium',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseIcon {
    @include ui-size('medium') {
        width: 24px;
        height: 24px;
    }
}
</style>
