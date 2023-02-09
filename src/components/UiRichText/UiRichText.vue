<script setup lang="ts">
import { computed, ref } from 'vue';
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
    getClassName.value('RichText'),
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
    [`--${props.resize}-resize`],
]);


// Value Logic
const $emit = defineEmits<{
    (e: 'update:modelValue', value: ValueType): void
    (e: 'change', value: ValueType): void
}>();


const actualValue = ref<ValueType>('');

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
    <!--   todo: Все таки tiptap -->
    <textarea
        :value="actualValue"
        :class="classList"
        v-bind="$attrs"
        @input="onInput"
        @change="onChange"
    >
    </textarea>
</template>

<style lang="scss">
.UiRichText {
    display: block;
    outline: none;
    -webkit-appearance: none;

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
