<template>
    <div :class="[getClassName('Toggle'), classList]">
        <label
            v-if="$slots['false-label']"
            :for="elId"
            class="--is-false"
            :class="getClassName('Toggle__label')"
        >
            <slot name="false-label"> </slot>
        </label>

        <div
            :class="getClassName('Toggle__input')"
            @click="onToggleClick"
        >
            <input
                :id="elId"
                ref="inputRef"
                v-model="model"
                type="checkbox"
                hidden
            />
        </div>

        <label
            v-if="$slots['true-label']"
            :for="elId"
            class="--is-true"
            :class="getClassName('Toggle__label')"
        >
            <slot name="true-label"></slot>
        </label>
    </div>
</template>

<script setup lang="ts">
import type { IUiToggleProps } from 'ui-layer/types/components/toggle';
import type { TUiClassList } from 'ui-layer/types';

const props = defineProps<IUiToggleProps>();
const model = defineModel<boolean>();

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
    [`--is-${model.value}-value`],
]);

const elId = useId();
const inputRef = ref<HTMLInputElement>();

function onToggleClick() {
    if (!inputRef.value) {
        return;
    }

    inputRef.value.click();
}
</script>

<style lang="scss">
.UiToggle {
    display: flex;
    align-items: center;

    &__label {
        cursor: pointer;
        user-select: none;
    }

    &__input {
        @include reset-button;

        display: flex;
        flex-shrink: 0;
        align-items: center;
        padding: 0;
        cursor: pointer;
    }

    @include ui-state('disabled');
    @include ui-state('loading');
}
</style>
