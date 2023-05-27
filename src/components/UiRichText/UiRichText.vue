<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

type ValueType = string;

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    modelValue: {
        type: String as PropType<ValueType>,
        default: '',
    },

    resize: {
        type: String,
        default: 'none',
        validator: (v: string) => [
            'none',
            'vertical',
            'horizontal',
        ].includes(v),
    },
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
    [`--${props.resize}-resize`],
]);


// Value Logic
const $emit = defineEmits<{
    'update:modelValue': [value: ValueType]
    change: [value: ValueType]
}>();


const actualValue = ref<ValueType>('');
watch(() => props.modelValue, (val: ValueType) => {
    actualValue.value = val;
}, { immediate: true });

function onInput(event: Event) {
    const target = event.target as HTMLInputElement;

    actualValue.value = target.value;

    $emit('update:modelValue', actualValue.value);
}

function onChange(event: Event) {
    const target = event.target as HTMLInputElement;

    actualValue.value = target.value;

    $emit('change', actualValue.value);
}
</script>

<template>
    <textarea
        v-bind="$attrs"
        :value="actualValue"
        :class="[getClassName('RichText'), classList]"
        @input="onInput"
        @change="onChange"
    />
</template>

<style lang="scss">
.UiRichText {
    display: block;
    outline: none;
    -webkit-appearance: none;
    transition: all .3s ease;

    &:focus {
        outline: none;
    }

    &.--is-disabled {
        pointer-events: none;
        user-select: none;
    }

    &.--none-resize {
        resize: none;
    }

    &.--vertical-resize {
        resize: vertical;
    }

    &.--horizontal-resize {
        resize: horizontal;
    }
}
</style>
