<template>
    <div :class="[getClassName('RadioItem'), classList]">
        <div :class="getClassName('RadioItem__wrapper')">
            <div
                :class="getClassName('RadioItem__icon')"
                @click="onClick"
            >
                <input
                    :id="String(`${elId}-${id}`)"
                    ref="inputRef"
                    v-model="model"
                    type="radio"
                    :value="id"
                    :class="getClassName('RadioItem__input')"
                />
            </div>

            <label
                :for="String(`${elId}-${id}`)"
                :class="getClassName('RadioItem__label')"
            >
                <slot>{{ name }}</slot>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUIRadioItemProps } from 'ui-layer/types/components/radio';
import type { IUiOptionItem, TUiClassList } from 'ui-layer/types';

const props = defineProps<IUIRadioItemProps>();

const model = defineModel<IUiOptionItem['id']>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

const elId = useId();
const inputRef = ref<HTMLInputElement>();

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

function onClick() {
    inputRef.value?.click();
}
</script>

<style lang="scss">
.UiRadioItem {
    $item: &;

    &__wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    &__icon {
        position: relative;
        flex-shrink: 0;
        cursor: pointer;
    }

    &__input {
        position: absolute;
        inset: 0;
        opacity: 0;
    }

    &__label {
        flex-grow: 1;
        cursor: pointer;
        user-select: none;
    }

    @include ui-state('disabled');
}
</style>
