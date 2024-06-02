<template>
    <UiSwiper v-bind="componentAttrs">
        <template #slide="slideProps">
            <slot
                name="slide"
                v-bind="slideProps"
            ></slot>
        </template>
    </UiSwiper>
</template>

<script setup lang="ts" generic="T">
import type { IUiSwiperProps } from 'ui-layer/types/components/swiper';

const props = withDefaults(defineProps<IUiSwiperProps<T>>(), {
    classPrefix: 'Base',
});

const { componentAttrs } = useUiCommon(props);
</script>
