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

const actualValue = ref(false);
watch(() => props.modelValue, val => actualValue.value = val);

const $emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

function onClick(value: boolean | Event) {
    if (typeof value === 'boolean') {
        actualValue.value = value;
    } else {
        actualValue.value = !actualValue.value;
    }
    $emit('update:modelValue', actualValue.value);
}


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

    {
        '--is-toggled': actualValue.value,
    },
]);
</script>

<template>
    <div :class="[getClassName('Toggle'), classList]">
        <div v-if="$slots['false-label']"
             @click.prevent.stop="onClick(false)"
             class="--is-false"
             :class="getClassName('Toggle__label')"
        >
            <slot name="false-label">
            </slot>
        </div>

        <button
            type="button"
            :class="getClassName('Toggle__button')"
            @click.prevent.stop="onClick"
        >
        </button>

        <div v-if="$slots['true-label']"
             @click.prevent.stop="onClick(true)"
             class="--is-true"
             :class="getClassName('Toggle__label')"
        >
            <slot name="true-label"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.UiToggle {
    display: flex;
    align-items: center;

    &__label {
        cursor: pointer;
        user-select: none;
    }

    &__button {
        @include reset-button;

        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 0;
        cursor: pointer;
    }
}
</style>
