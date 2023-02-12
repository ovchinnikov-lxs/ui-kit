<script setup lang="ts">
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import { computed, ref, watch } from 'vue';

// Components
import UiRadioItem from '~/components/UiRadio/UiRadioItem.vue';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

type ValueType = null | boolean | string;

interface IOptionItem {
    id: ValueType;
    name: string;
    disabled?: null | boolean
}

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    options: {
        type: Array as PropType<Array<IOptionItem>>,
        default: () => [
            { id: null, name: 'Не задано' },
            { id: true, name: 'Да' },
            { id: false, name: 'Нет' },
        ],
    },

    axis: {
        type: String,
        default: 'y',
        validator: (v: string) => [
            'x',
            'y',
        ].includes(v),
    },

    modelValue: {
        type: [Boolean, null, String] as PropType<ValueType>,
        default: null,
    },
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const actualValue = ref<ValueType>(null);

const $emit = defineEmits<{
    (e: 'update:modelValue', value: ValueType): void
}>();

watch(() => props.modelValue, val => actualValue.value = val, { immediate: true });


const classList = computed((): TypeClassList => [
    getClassName.value('Radio'),
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
    [`--${props.axis}-axis`],
]);

function onClick(id: ValueType) {
    actualValue.value = id;
    $emit('update:modelValue', actualValue.value);
}
</script>

<template>
    <div :class="classList">
        <ul :class="getClassName('Radio__wrapper')">
            <li v-for="(item, index) in options"
                :key="index"
                :class="getClassName('Radio__item')"
            >
                <UiRadioItem
                    :title="item.name"
                    :active="modelValue === item.id"
                    :disabled="item.disabled || disabled"
                    :class-prefix="props.classPrefix"
                    @click="onClick(item.id)"
                >
                    {{ item.name }}
                </UiRadioItem>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.UiRadio {
    $radio: &;

    &__wrapper {
        @include reset-list;

        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;

        .UiRadioItem {
            width: 100%;
            height: 100%;
        }
    }

    &.--x-axis {
        #{$radio} {
            &__wrapper {
                flex-direction: row;
            }
        }
    }

    &.--y-axis {
        #{$radio} {
            &__wrapper {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
}
</style>
