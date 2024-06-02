<template>
    <div :class="[getClassName('Input'), classList]">
        <div :class="getClassName('Input__wrapper')">
            <input
                v-if="!mask"
                v-bind="componentAttrs"
                v-model="model"
                :type="type"
                :class="getClassName('Input__item')"
            />

            <input
                v-else
                v-model="model"
                v-maska
                v-bind="{ ...componentAttrs, ...maskaAttrs }"
                :class="getClassName('Input__item')"
            />

            <slot
                v-if="$slots.inner"
                name="inner"
            ></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IUiInputProps, TUiInputValue } from 'ui-layer/types/components/input';
import type { TUiClassList } from 'ui-layer/types';
import type { MaskaDetail } from 'maska';

const props = withDefaults(defineProps<IUiInputProps>(), {
    type: 'text',
});
const emit = defineEmits<{
    maska: [MaskaDetail];
}>();

const model = defineModel<TUiInputValue>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList, stateAttrs } = useUiState(props);
const { styleClassList } = useUiStyle(props);
const attrs = useAttrs();

const componentAttrs = computed(() => ({
    ...stateAttrs,
    ...attrs,

    placeholder: props.placeholder,
}));

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

const maskaAttrs = computed(() => ({
    type: props.type === 'number' ? 'text' : props.type,

    ...(props.type === 'number' && {
        inputmode: 'numeric',
    }),

    'data-maska': typeof props.mask === 'string' ? JSON.stringify(props.mask) : JSON.stringify(props.mask?.mask),

    ...(typeof props.mask !== 'string' &&
        props.mask?.tokens && {
            'data-maska-tokens': JSON.stringify(props.mask.tokens),
        }),

    ...(typeof props.mask !== 'string' &&
        props.mask?.tokensReplace && {
            'data-maska-tokens-replace': props.mask.tokensReplace,
        }),

    ...(typeof props.mask !== 'string' &&
        props.mask?.eager && {
            'data-maska-eager': props.mask.eager,
        }),

    ...(typeof props.mask !== 'string' &&
        props.mask?.reversed && {
            'data-maska-reversed': props.mask.reversed,
        }),

    onMaska: (event: CustomEvent<MaskaDetail>) => emit('maska', event.detail),
}));
</script>

<style lang="scss">
.UiInput {
    &__wrapper {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
    }

    &__item {
        width: 100%;
        height: 100%;
        outline: none;
        transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);

        &:focus {
            outline: none;
        }
    }

    @include ui-state('disabled');
    @include ui-state('loading');
}
</style>
