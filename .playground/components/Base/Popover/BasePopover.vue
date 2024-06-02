<template>
    <UiPopover v-bind="componentAttrs">
        <template #top>
            <slot name="top"></slot>
        </template>

        <template #bottom>
            <slot name="bottom"></slot>
        </template>
    </UiPopover>
</template>

<script setup lang="ts">
import type { IUiPopoverProps } from 'ui-layer/types/components/popover';

const props = withDefaults(defineProps<IUiPopoverProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BasePopover {
    $popover: &;

    @include ui-size('medium') {
        #{$popover} {
            &__top {
                padding: 14px;
                font-size: 20px;
            }
        }
    }

    &__bottom {
        @include ui-size('medium') {
            #{$popover} {
                &__body {
                    padding: 14px;
                    margin: 4px;
                    font-size: 20px;
                }
            }
        }

        @include ui-color('primary') {
            #{$popover} {
                &__body {
                    background: var(--color-primary-light);
                }
            }
        }
    }

    @include ui-color('primary') {
        #{$popover} {
            &__top {
                background: var(--color-primary-dark);
            }
        }
    }
}
</style>
