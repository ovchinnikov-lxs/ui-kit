<template>
    <div :class="[getClassName('Checkbox'), classList]">
        <div :class="getClassName('Checkbox__wrapper')">
            <button
                type="button"
                :class="getClassName('Checkbox__button')"
                @click.stop="onClick"
            >
                <slot name="checkbox"></slot>
            </button>

            <div
                v-if="$slots.default"
                :class="getClassName('Checkbox__label')"
                @click.stop="onClick"
            >
                <slot name="default"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiCheckboxProps } from 'ui-layer/types/components/checkbox';
import type { TUiClassList } from 'ui-layer/types';

const props = defineProps<IUiCheckboxProps>();
const model = defineModel<boolean>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

function onClick() {
    model.value = !model.value;
}

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,

    {
        '--is-checked': model.value,
    },
]);
</script>

<style lang="scss">
.UiCheckbox {
    &__wrapper {
        display: flex;
    }

    &__button {
        @include reset-button;

        cursor: pointer;
    }

    &__label {
        cursor: pointer;
        user-select: none;
    }

    @include ui-state('disabled');
    @include ui-state('loading');
}
</style>
