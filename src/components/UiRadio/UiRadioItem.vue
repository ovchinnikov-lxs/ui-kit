<script setup lang="ts">
import { computed } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { stateProps, useState } from '~/composables/useState';

const props = defineProps({
    ...classNameProps,
    ...stateProps,
});

const { getClassName } = useClassName(props);
const { stateClassList } = useState(props);

const classList = computed((): TypeClassList => [
    stateClassList.value,
]);

defineEmits<{
    click: [void]
}>();

</script>

<template>
    <div :class="[getClassName('RadioItem'), classList]" @click="$emit('click')">
        <div :class="getClassName('RadioItem__wrapper')">
            <div :class="getClassName('RadioItem__icon')"></div>

            <div :class="getClassName('RadioItem__label')">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.UiRadioItem {
    $item: &;

    cursor: pointer;

    &__wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    &__icon {
        flex-shrink: 0;
    }

    &__label {
        user-select: none;
    }

    &.--is-disabled {
        pointer-events: none;
    }
}
</style>
