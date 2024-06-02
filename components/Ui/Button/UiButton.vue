<template>
    <div :class="[getClassName('Button'), classList]">
        <Component
            :is="componentTag"
            :class="getClassName('Button__wrapper')"
            v-bind="componentAttrs"
        >
            <slot v-bind="props"></slot>
        </Component>
    </div>
</template>

<script setup lang="ts">
import type { TUiClassList } from 'ui-layer/types';
import type { IUiButtonProps } from 'ui-layer/types/components/button';

const props = defineProps<IUiButtonProps>();

const { getClassName } = useUiClassName(props);
const { componentTag, routableClassList } = useUiRoutable(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList, stateAttrs } = useUiState(props);
const { styleClassList } = useUiStyle(props);

const classList = computed<TUiClassList>(() => [
    routableClassList.value,
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

const attrs = useAttrs();

const componentAttrs = computed(() => ({
    ...attrs,
    ...stateAttrs.value,
}));
</script>

<style lang="scss">
.UiButton {
    $button: &;

    &__wrapper {
        @include reset-button;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
        text-decoration: none;
        appearance: none;
        user-select: none;
        transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);
    }

    @include ui-state('disabled');
    @include ui-state('loading');

    @include ui-state('interactive') {
        #{$button} {
            &__wrapper {
                cursor: pointer;
            }
        }
    }
}
</style>
