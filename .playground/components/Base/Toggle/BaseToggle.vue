<template>
    <UiToggle v-bind="componentAttrs">
        <template
            v-if="$slots['false-label']"
            #false-label
        >
            <slot name="false-label"></slot>
        </template>

        <template
            v-if="$slots['true-label']"
            #true-label
        >
            <slot name="true-label"></slot>
        </template>
    </UiToggle>
</template>

<script setup lang="ts">
import type { IUiToggleProps } from 'ui-layer/types/components/toggle';

const props = withDefaults(defineProps<IUiToggleProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseToggle {
    $toggle: &;

    &__input {
        &::after {
            content: '';
            transition: all 0.3s ease;
        }
    }

    @include ui-size('medium') {
        column-gap: 12px;

        #{$toggle} {
            &__label {
                font-size: 12px;
                cursor: pointer;
            }

            &__input {
                width: 24px;
                height: 12px;
                padding: 1px;
                border-radius: 8px;

                &::after {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
            }
        }
    }

    @include ui-color('primary') {
        #{$toggle} {
            &__input {
                background-color: var(--color-primary-dark);

                &::after {
                    background-color: var(--color-primary);
                }
            }
        }
    }

    &.--is-true-value {
        #{$toggle} {
            &__input {
                &::after {
                    transform: translateX(12px);
                }
            }
        }
    }
}
</style>
