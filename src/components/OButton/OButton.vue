<script setup lang="ts">
// Common
import { computed } from 'vue';

// Types
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { routableProps, useRoutable } from '~/composables/useRoutable';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

const props = defineProps({
    ...routableProps,
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,
});

const { getClassName } = useClassName(props);
const { componentTag, routableClassList } = useRoutable(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const classList = computed((): TypeClassList => [
    getClassName.value('Button'),
    routableClassList.value,
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);
</script>

<template>
    <component
        :is="componentTag"
        v-bind="$attrs"
        :class="classList"
    >
        <slot v-bind="props"></slot>
    </component>
</template>

<style lang="scss">
@import "src/assets/style/shared/mixins";

.OButton {
    @include reset-button;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-appearance: none;
    transition: all .3s ease;

    &.--is-disabled,
    &.--is-loading {
        pointer-events: none;
    }

    &.--is-interactive {
        cursor: pointer;
    }
}
</style>
