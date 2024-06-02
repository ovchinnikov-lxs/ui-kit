<template>
    <UiCheckbox v-bind="componentAttrs">
        <template
            v-if="$slots.checkbox"
            #checkbox
        >
            <slot name="checkbox"></slot>
        </template>

        <template
            v-if="$slots.default"
            #default
        >
            <slot name="default"></slot>
        </template>
    </UiCheckbox>
</template>

<script setup lang="ts">
import type { IUiCheckboxProps } from 'ui-layer/types/components/checkbox';

const props = withDefaults(defineProps<IUiCheckboxProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
});
const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseCheckbox {
    $checkbox: &;

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
            opacity: 0;
        }
    }

    @include ui-size('medium') {
        #{$checkbox} {
            &__button {
                width: 16px;
                height: 16px;
                background-color: white;
            }

            &__wrapper {
                column-gap: 12px;
            }
        }
    }

    @include ui-color('primary') {
        #{$checkbox} {
            &__label {
                color: var(--color-primary);
            }

            &__button {
                border: 1px solid var(--color-primary);
            }
        }

        &.--is-checked {
            #{$checkbox} {
                &__button {
                    color: var(--color-background);
                    background-color: var(--color-primary);

                    & > * {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @include ui-state('disabled') {
        opacity: 0.32;
    }
}
</style>
