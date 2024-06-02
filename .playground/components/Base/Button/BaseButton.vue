<template>
    <UiButton v-bind="componentAttrs">
        <slot></slot>
    </UiButton>
</template>

<script setup lang="ts">
import type { IUiButtonProps } from 'ui-layer/types/components/button';

const props = withDefaults(defineProps<IUiButtonProps>(), {
    classPrefix: 'Base',
    color: 'primary',
    size: 'medium',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseButton {
    $button: &;

    @include ui-style('outline') {
        #{$button} {
            &__wrapper {
                border-style: solid;
            }
        }
    }

    @include ui-color('primary') {
        #{$button} {
            &__wrapper {
                color: var(--color-text);
                background: var(--color-primary);

                @include hover {
                    background: var(--color-primary-dark);
                }
            }
        }

        @include ui-state('disabled') {
            #{$button} {
                &__wrapper {
                    background: var(--color-secondary-dark);
                }
            }
        }

        @include ui-style('outline') {
            #{$button} {
                &__wrapper {
                    background: transparent;
                    border-color: var(--color-primary);

                    @include hover {
                        background: var(--color-primary-dark);
                    }
                }
            }
        }
    }

    @include ui-size('medium') {
        #{$button} {
            &__wrapper {
                padding: 12px;
                font-size: 16px;
                line-height: 1.2;
                border-radius: var(--ui-col);
            }
        }

        @include ui-style('outline') {
            #{$button} {
                &__wrapper {
                    border-width: 4px;
                }
            }
        }
    }
}
</style>
