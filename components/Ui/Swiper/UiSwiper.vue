<template>
    <div :class="[getClassName('Swiper'), classList]">
        <div
            ref="swiperRef"
            class="swiper"
            :class="getClassName('Swiper__container')"
        >
            <div
                class="swiper-wrapper"
                :class="getClassName('Swiper__wrapper')"
            >
                <div
                    v-for="(item, index) in slides"
                    :key="index"
                    class="swiper-slide"
                    :class="getClassName('Swiper__slider')"
                >
                    <slot
                        name="slide"
                        :slide="item"
                    >
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" generic="T">
import type { Swiper as ISwiper } from 'swiper';
import type { IUiSwiperProps } from 'ui-layer/types/components/swiper';
import type { TUiClassList } from 'ui-layer/types';

import defu from 'defu';
import Swiper from 'swiper/bundle';

const props = defineProps<IUiSwiperProps<T>>();

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

const swiperRef = ref<HTMLDivElement>();
let swiper: ISwiper;

const swiperOptions = computed<IUiSwiperProps<T>['options']>(() =>
    defu(props.options, {
        navigation: {
            disabledClass: '--is-disabled',
        },
    }),
);

function onInit() {
    if (!swiperRef.value) {
        return false;
    }

    swiper = new Swiper(swiperRef.value, swiperOptions.value);
}

function onDestroy() {
    if (swiper) {
        swiper.destroy();
    }
}

function onUpdate() {
    if (swiper) {
        swiper.update();
    }
}

onMounted(() => {
    onInit();
});

onUnmounted(() => {
    onDestroy();
});

watch(
    () => props.options,
    async () => {
        onDestroy();
        await nextTick();
        onInit();
    },
    {
        deep: true,
    },
);
watch(() => props.slides, onUpdate);
</script>

<style lang="scss">
.UiSwiper {
    &__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .swiper-slide {
        width: initial;
    }
}
</style>
