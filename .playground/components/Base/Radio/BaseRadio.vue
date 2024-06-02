<template>
    <UiRadio v-bind="componentAttrs">
        <template
            v-if="$slots['item-label']"
            #item-label="itemLabelProps"
        >
            <slot
                name="item-label"
                v-bind="itemLabelProps"
            ></slot>
        </template>
    </UiRadio>
</template>

<script setup lang="ts">
import type { IUiRadioProps } from 'ui-layer/types/components/radio';

const props = withDefaults(defineProps<IUiRadioProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'secondary',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseRadio {
    $radio: &;

    @include ui-size('medium') {
        #{$radio} {
            &__wrapper {
                row-gap: 4px;
                column-gap: 4px;
            }
        }

        .BaseRadioItem__wrapper {
            column-gap: 8px;
        }

        .BaseRadioItem__icon {
            width: 24px;
            height: 24px;
            border: 1px solid;
        }
    }

    @include ui-color('secondary') {
        .BaseRadioItem__icon {
            border: 1px solid;
        }

        .BaseRadioItem {
            &.--is-active {
                .BaseRadioItem__icon {
                    background: var(--color-secondary);
                }
            }
        }
    }
}
</style>
