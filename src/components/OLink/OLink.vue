<script setup lang="ts">
import { computed } from 'vue';

// Types
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { routableProps, useRoutable } from '~/composables/useRoutable';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';

const props = defineProps({
    ...routableProps,
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
});

const { getClassName } = useClassName(props);
const { componentTag, routableClassList } = useRoutable(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);

const classList = computed((): TypeClassList => [
    ...getClassName.value('Link'),
    ...routableClassList.value,
    ...sizeClassList.value,
    ...colorClassList.value,
    ...stateClassList.value,
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

.OLink {
    @include reset-button;

    display: inline-flex;
    align-items: center;
    padding: 0;
    text-decoration: none;
    transition: all .3s ease;
    cursor: pointer;
    user-select: none;
    -webkit-appearance: none;

    &.--is-disabled,
    &.--is-loading {
        pointer-events: none;
    }

    &.--is-interactive {
        cursor: pointer;
    }
}
</style>
