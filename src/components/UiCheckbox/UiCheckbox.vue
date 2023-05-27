<script setup lang="ts">
// Common
import { computed, ref, watch } from 'vue';

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

    modelValue: {
        type: Boolean,
        default: false,
    },
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const actualValue = ref(false);
watch(() => props.modelValue, val => actualValue.value = val);

const $emit = defineEmits<{
    'update:modelValue': [value: boolean]
}>();

function onClick() {
    actualValue.value = !actualValue.value;
    $emit('update:modelValue', actualValue.value);
}

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,

    {
        '--is-checked': actualValue.value,
    },
]);
</script>

<template>
    <div :class="[getClassName('Checkbox'), classList]">
        <div :class="getClassName('Checkbox__wrapper')">
            <button
                type="button"
                :class="getClassName('Checkbox__button')"
                @click.stop="onClick"
            >
                <slot name="checkbox"></slot>
            </button>

            <div v-if="$slots.default"
                 :class="getClassName('Checkbox__label')"
                 @click.stop="onClick"
            >
                <slot name="default"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.UiCheckbox {
    &__wrapper {
        display: flex;
    }

    &__button {
        @include reset-button;

        cursor: pointer;
    }

    &__label {
        cursor: pointer;
        user-select: none;
    }

    &.--is-disabled {
        pointer-events: none;
    }
}
</style>
