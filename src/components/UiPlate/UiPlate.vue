<script setup lang="ts">
// Common
import { computed } from 'vue';

// Types
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

const props = defineProps({
    /**
     * Root tag of a component
     */
    tag: {
        type: String,
        default: 'div',
    },
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);
</script>

<template>
    <component
        :is="tag"
        v-bind="$attrs"
        :class="[getClassName('Plate'), classList]"
    >
        <div :class="getClassName('Plate__wrapper')">
            <slot></slot>
        </div>
    </component>
</template>

<style lang="scss">
.UiPlate {
    @include reset-button;

    &__wrapper {
        width: 100%;
        height: 100%;
        transition: all .3s ease;
    }

    &.--is-interactive {
        text-decoration: none;
        cursor: pointer;
    }

    &.--is-disabled {
        pointer-events: none;
    }
}
</style>
