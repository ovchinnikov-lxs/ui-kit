<template>
    <UiFormCell v-bind="componentAttrs">
        <template
            v-if="$slots.label"
            #label
        >
            <slot name="label"></slot>
        </template>

        <template
            v-if="$slots.default"
            #default
        >
            <slot name="default"></slot>
        </template>

        <template
            v-if="$slots.info"
            #info
        >
            <slot name="info"></slot>
        </template>

        <template
            v-if="$slots.error"
            #error
        >
            <slot name="error"></slot>
        </template>
    </UiFormCell>
</template>

<script setup lang="ts">
import type { IUiFromCellProps } from 'ui-layer/types/components/fromCell';

const props = withDefaults(defineProps<IUiFromCellProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseFormCell {
    $cell: &;

    @include ui-size('medium') {
        #{$cell} {
            &__label,
            &__info,
            &__error {
                font-size: 16px;
            }
        }
    }

    @include ui-state('error') {
        #{$cell} {
            &__label {
                color: red;
            }
        }
    }

    @include ui-state('required') {
        #{$cell} {
            &__label {
                column-gap: 8px;

                &::after {
                    content: '*';
                }
            }
        }
    }

    @include ui-color('primary') {
        #{$cell} {
            &__label,
            &__info {
                color: var(--color-primary);
            }
        }

        @include ui-state('required') {
            #{$cell} {
                &__label {
                    &::after {
                        color: red;
                    }
                }
            }
        }
    }

    &__error {
        color: red;
    }
}
</style>
