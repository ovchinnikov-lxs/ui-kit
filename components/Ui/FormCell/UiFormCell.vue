<template>
    <div
        v-bind="stateAttrs"
        :class="[getClassName('FormCell'), classList]"
    >
        <div :class="getClassName('FormCell__wrapper')">
            <label
                v-if="$slots.label"
                :for="forId"
                :class="getClassName('FormCell__label')"
            >
                <slot name="label"></slot>
            </label>

            <div :class="getClassName('FormCell__body')">
                <slot></slot>
            </div>

            <div
                v-if="$slots.info"
                :class="getClassName('FormCell__info')"
            >
                <slot name="info"></slot>
            </div>

            <Transition name="error">
                <div
                    v-if="error"
                    :class="getClassName('FormCell__error')"
                >
                    <slot
                        name="error"
                        :error="error"
                    >
                        {{ error }}
                    </slot>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiFromCellProps } from 'ui-layer/types/components/fromCell';
import type { TUiClassList } from 'ui-layer/types';

const props = defineProps<IUiFromCellProps>();

const { getClassName } = useUiClassName(props);
const { stateClassList, stateAttrs } = useUiState(props);
const { colorClassList } = useUiColor(props);
const { sizeClassList } = useUiSize(props);

const classList = computed<TUiClassList>(() => [
    stateClassList.value,
    colorClassList.value,
    sizeClassList.value,
]);
</script>

<style lang="scss">
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
        transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);
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
        top: calc(100% + var(--ui-unit));
        left: 0;
        z-index: 1;
        transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);

        &.error-enter-active,
        &.error-leave-active {
            opacity: 1;
            transform: translate(0, 0);
        }

        &.error-enter-from,
        &.error-leave-to {
            opacity: 0;
            transform: translate(0, var(--ui-unit));
        }
    }
}
</style>
