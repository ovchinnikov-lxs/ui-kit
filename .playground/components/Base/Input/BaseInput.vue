<template>
    <UiInput v-bind="componentAttrs" />
</template>

<script setup lang="ts">
import type { IUiInputProps } from 'ui-layer/types/components/input';

const props = withDefaults(defineProps<IUiInputProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
    placeholder: 'Enter value',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseInput {
    $input: &;

    @include ui-size('medium') {
        #{$input} {
            &__item {
                padding: 8px 16px;
                font-size: 16px;
                border-radius: 4px;
            }
        }
    }

    @include ui-color('primary') {
        #{$input} {
            &__item {
                border: 1px solid var(--color-primary);

                &:focus {
                    border-color: var(--color-primary-dark);
                }
            }
        }
    }

    @include ui-state('disabled') {
        #{$input} {
            &__item {
                opacity: 0.32;
            }
        }
    }

    @include ui-state('error') {
        #{$input} {
            &__item {
                border-color: red;
            }
        }
    }
}
</style>
