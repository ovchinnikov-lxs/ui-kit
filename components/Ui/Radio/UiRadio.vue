<template>
    <div :class="[getClassName('Radio'), classList]">
        <div :class="getClassName('Radio__wrapper')">
            <UiRadioItem
                v-for="(item, index) in options"
                :id="item.id"
                :key="index"
                v-model="model"
                :name="item.name"
                :active="item.id === model"
                :disabled="item.disabled || disabled"
                :class-prefix="props.classPrefix"
                :class="getClassName('Radio__item')"
            >
                <slot
                    name="item-label"
                    :item="item"
                ></slot>
            </UiRadioItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiRadioProps } from 'ui-layer/types/components/radio';
import type { IUiOptionItem, TUiClassList } from 'ui-layer/types';

const props = withDefaults(defineProps<IUiRadioProps>(), {
    options: () => [],
    axis: 'x',
});

const model = defineModel<IUiOptionItem['id']>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,

    [`--${props.axis}-axis`],
]);
</script>

<style lang="scss">
.UiRadio {
    $radio: &;

    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 100%;

        .UiRadioItem {
            width: 100%;
            height: 100%;
        }
    }

    &.--x-axis {
        #{$radio} {
            &__wrapper {
                flex-direction: row;
            }
        }
    }

    &.--y-axis {
        #{$radio} {
            &__wrapper {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }

    @include ui-state('disabled');
    @include ui-state('loading');
}
</style>
