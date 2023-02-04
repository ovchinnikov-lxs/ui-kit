<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import { typesDict } from '~/assets/utils/constants/input';

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

    modelValue: {
        type: [String, Number] as PropType<TypeValue>,
        default: '',
    },

    valueType: {
        type: String,
        default: typesDict.STRING,
        validator: (val: string) => Object
            .values(typesDict)
            .includes(val),
    },
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const classList = computed((): TypeClassList => [
    getClassName.value('Input'),
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

// Value Logic
const actualValue = ref<TypeValue>('');

const $emit = defineEmits<{
    (e: 'update:modelValue', value: TypeValue): void
    (e: 'change', value: TypeValue): void
    (e: 'blur', value: TypeValue): void
    (e: 'focus', value: Event): void
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

    if (props.valueType === typesDict.NUMERIC) {
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
        :class="classList"
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
.OInput {
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
