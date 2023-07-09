<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import { TYPES_DICT } from '~/assets/utils/constants/input';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

type TypeValue = string | number | null;

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    /**
     *  Input value
     */
    modelValue: {
        type: [String, Number] as PropType<TypeValue>,
        default: '',
    },

    /**
     *  Type value for some validations
     */
    valueType: {
        type: String,
        default: TYPES_DICT.STRING,
        validator: (val: string) => Object
            .values(TYPES_DICT)
            .includes(val),
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
]);

// Value Logic
const actualValue = ref<TypeValue>('');

const $emit = defineEmits<{
    'update:modelValue': [value: TypeValue]
    change: [value: TypeValue]
    blur: [value: TypeValue]
    focus: [value: Event]
}>();

watch(() => props.modelValue, (val: TypeValue) => {
    actualValue.value = val !== null ? String(val) : val;
}, {
    immediate: true,
});

function setValue(value: TypeValue) {
    let newVal: TypeValue = value;

    switch (typeof newVal) {
        case 'object':
            newVal = null;
            break;
        case 'number':
            newVal = newVal.toString();
            break;
        default:
            newVal = !newVal.trim().length ? null : newVal;
            break;
    }

    if (props.valueType === TYPES_DICT.NUMERIC) {
        if (newVal) {
            newVal = Number(newVal);
        }
    }

    actualValue.value = newVal;
}

function onInput(event: Event) {
    const target = event.target as HTMLInputElement;

    setValue(target.value);

    setTimeout(() => {
        $emit('update:modelValue', actualValue.value);
    }, event.composed ? 1 : 0);
}

function onChange(event: Event) {
    const target = event.target as HTMLInputElement;

    setValue(target.value);

    $emit('change', actualValue.value);
    $emit('blur', actualValue.value);
}

function onEnter(e: Event) {
    const target = e.target as HTMLInputElement;

    setTimeout(() => {
        target.blur();
    }, 100);
}

function onBlur(e: Event) {
    const target = e.target as HTMLInputElement;

    setValue(target.value);
}

function onFocus(e: Event) {
    $emit('focus', e);
}
</script>
<!-- todo: Добавить внутрь этого компонента обработки всех типов данных: phone, custom mask, splitThousand -->

<template>
    <input
        v-bind="$attrs"
        :value="actualValue"
        :class="[getClassName('Input'), classList]"
        :disabled="disabled"
        @input="onInput"
        @paste="onInput"
        @change="onChange"
        @keydown.enter="onEnter"
        @blur="onBlur"
        @focus="onFocus"
    />
</template>

<style lang="scss">
.UiInput {
    outline: none;
    transition: all .3s ease;

    &:focus {
        outline: none;
    }

    &.--is-disabled {
        pointer-events: none;
        user-select: none;
    }
}
</style>
