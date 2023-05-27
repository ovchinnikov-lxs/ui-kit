<script setup lang="ts">
import { computed } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,

    optionId: {
        type: [Number, String],
        default: '',
        required: true,
    },

    optionName: {
        type: [Number, String],
        default: '',
        required: true,
    },

    multiple: {
        type: Boolean,
        default: false,
    },
});

const $emit = defineEmits<{
    click: [value: number | string]
}>();

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
]);

function onClick() {
    if (props.disabled) {
        return false;
    }

    $emit('click', props.optionId);
}
</script>

<template>
    <div :class="[getClassName('SelectOption'), classList]" @click="onClick">
        <slot>
            <span :class="getClassName('SelectOption__label')">
                {{ optionName }}
            </span>

            <div v-if="multiple" :class="getClassName('SelectOption__icon')">
                <slot name="multiple-icon">&check;</slot>
            </div>
        </slot>
    </div>
</template>

<style lang="scss">
.UiSelectOption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    outline: none;
    -webkit-appearance: none;
    transition: all .3s ease;
    cursor: pointer;

    &__label {
        overflow: hidden;
        display: block;
        max-width: 240px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__icon {
        flex-shrink: 0;
    }

    &.--is-disabled {
        pointer-events: none;
    }
}
</style>
