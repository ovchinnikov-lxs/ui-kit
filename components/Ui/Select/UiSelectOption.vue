<template>
    <div
        :class="[getClassName('SelectOption'), classList]"
        @click="onClick"
    >
        <slot>
            <span :class="getClassName('SelectOption__label')">
                {{ name }}
            </span>

            <div
                v-if="multiple"
                :class="getClassName('SelectOption__icon')"
            >
                <slot
                    name="icon"
                    :active="active"
                >
                    {{ '&check;' }}
                </slot>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { IUiSelectOption } from 'ui-layer/composables/select';
import type { TUiClassList } from 'ui-layer/types';

const props = defineProps<IUiSelectOption>();

const emit = defineEmits<{
    click: [value: IUiSelectOption['id']];
}>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
]);

function onClick() {
    if (props.disabled) {
        return false;
    }

    emit('click', props.id);
}
</script>

<style lang="scss">
.UiSelectOption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    appearance: none;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);

    &__label {
        display: block;
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__icon {
        flex-shrink: 0;
    }

    @include ui-state('disabled');
}
</style>
