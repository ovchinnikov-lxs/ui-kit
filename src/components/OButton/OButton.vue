<script setup lang="ts">
// Common
import { computed } from 'vue';

// Types
import type { TypeClassList } from '~/models';

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

const { getClassName } = useClassName(props.classPrefix);
const { componentTag, routableClassList } = useRoutable(props.tag);
const { sizeClassList } = useSize(props.size);
const { colorClassList } = useColor(props.color);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const classList = computed((): TypeClassList => [
    ...getClassName.value('Button'),
    ...routableClassList.value,
    ...sizeClassList.value,
    ...colorClassList.value,
    ...stateClassList.value,
    ...styleClassList.value,
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
