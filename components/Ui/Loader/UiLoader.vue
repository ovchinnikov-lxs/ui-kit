<template>
    <div :class="[getClassName('Loader'), classList]">
        <div :class="getClassName('Loader__wrapper')">
            <div :class="getClassName('Loader__el')">
                <slot>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                            opacity=".25"
                        ></path>

                        <path
                            fill="currentColor"
                            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                        >
                            <animateTransform
                                attributeName="transform"
                                dur="0.75s"
                                repeatCount="indefinite"
                                type="rotate"
                                values="0 12 12;360 12 12"
                            ></animateTransform>
                        </path>
                    </svg>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiLoaderProps } from 'ui-layer/types/components/preloader';
import type { TUiClassList } from 'ui-layer/types';

const props = defineProps<IUiLoaderProps>();

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
]);
</script>

<style lang="scss">
.UiLoader {
    &__wrapper {
        width: 100%;
        height: 100%;
    }
}
</style>
