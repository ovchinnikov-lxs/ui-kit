<script setup lang="ts">
import { computed } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { stateProps, useState } from '~/composables/useState';
import { colorProps, useColor } from '~/composables/useColor';
import { sizeProps, useSize } from '~/composables/useSize';

const props = defineProps({
    ...classNameProps,
    ...stateProps,
    ...colorProps,
    ...sizeProps,

    /**
     *  Name for label clicks
     */
    name: {
        type: String,
        default: '',
    },
});

const { getClassName } = useClassName(props);
const { stateClassList } = useState(props);
const { colorClassList } = useColor(props);
const { sizeClassList } = useSize(props);

const classList = computed((): TypeClassList => [
    stateClassList.value,
    colorClassList.value,
    sizeClassList.value,
]);

</script>

<template>
    <div :class="[getClassName('FormCell'), classList]">
        <div :class="getClassName('FormCell__wrapper')">

            <label
                v-if="$slots.label"
                :for="name"
                :class="getClassName('FormCell__label')"
            >
                <slot name="label"></slot>
            </label>

            <div :class="getClassName('FormCell__body')">
                <slot></slot>
            </div>

            <div v-if="$slots.info" :class="getClassName('FormCell__info')">
                <slot name="info"></slot>
            </div>

            <!--        todo: Сделать вычисление высоты при появлении ошибки            -->
            <transition name="error">
                <div v-if="error" :class="getClassName('FormCell__error')">
                    <slot name="error" :error="error">
                        {{ error }}
                    </slot>
                </div>
            </transition>

        </div>
    </div>
</template>

<style lang="scss">
@import "src/assets/style/shared/mixins";

.UiFormCell {
    $cell: &;

    &:not(.--custom-size) {
        #{$cell} {
            &__body {
                & > * {
                    width: 100%;
                }
            }
        }
    }

    &__wrapper {
        position: relative;
        display: block;
        flex-direction: column;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
    }

    &__label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    &__body {
        position: relative;
        z-index: 2;
        width: 100%;
    }

    &__error {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        z-index: 1;
        transition: all .3s ease;

        &.error-enter-active,
        &.error-leave-active {
            opacity: 1;
            transform: translate(0, 0);
        }

        &.error-enter-from,
        &.error-leave-to {
            opacity: 0;
            transform: translate(0, 4px);
        }
    }
}
</style>
