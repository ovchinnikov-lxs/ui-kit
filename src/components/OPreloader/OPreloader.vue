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
    ...getClassName.value('Preloader'),
    ...sizeClassList.value,
    ...colorClassList.value,
    ...stateClassList.value,
    ...styleClassList.value,
]);
</script>

<template>
    <div :class="classList">
        <div :class="getClassName('Preloader__wrapper')">

            <div :class="getClassName('Preloader__el')">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.OPreloader {
    &__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    &__el {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
}
</style>
