<script setup lang="ts">
// Common
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

// Swiper
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Swiper from 'swiper/bundle';

import type { SwiperOptions, Swiper as SwiperClass } from 'swiper';
import 'swiper/css/bundle';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    slides: {
        type: Array,
        default: () => [],
    },

    options: {
        type: Object,
        default: () => ({}),
    },
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

const swiperRef = ref<HTMLElement | null>(null);
let swiper: SwiperClass;

const swiperOptions = computed<SwiperOptions>(() => ({
    ...props.options,

    navigation: {
        disabledClass: '--is-disabled',
        ...props.options.navigation && props.options.navigation,
    },
}));

function onInit() {
    if (!swiperRef.value) {
        return false;
    }

    console.log('onInit');
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

watch(() => props.options, async () => {
    onDestroy();
    await nextTick();
    onInit();
}, {
    deep: true,
});
watch(() => props.slides, onUpdate);

</script>

<template>
    <div :class="[getClassName('Swiper'), classList]">
        <div ref="swiperRef"
             class="swiper"
             :class="getClassName('Swiper__container')"
        >
            <div class="swiper-wrapper" :class="getClassName('Swiper__wrapper')">
                <div v-for="(item, index) in slides"
                     :key="index"
                     class="swiper-slide"
                     :class="getClassName('Swiper__slider')"
                >
                    <slot name="slide" :slide="item">
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.UiSwiper {
    &__container {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
}
</style>
