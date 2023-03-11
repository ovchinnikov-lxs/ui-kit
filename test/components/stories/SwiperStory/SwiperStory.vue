<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiSwiper from '../../../../src/components/UiSwiper/UiSwiper.vue';
import UiImage from '../../../../src/components/UiImage/UiImage.vue';
import UiButton from '../../../../src/components/UiButton/UiButton.vue';
import { computed, ref } from 'vue';

const slides = [
    'https://plus.unsplash.com/premium_photo-1666788168266-8857d533a634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2621&q=80',
    'https://plus.unsplash.com/premium_photo-1666788168220-c58a7f90a4a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2621&q=80',
    'https://plus.unsplash.com/premium_photo-1666788167999-c8a60357d8ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
];
const swiperPrev = ref<InstanceType<typeof UiButton> | null>(null);
const swiperNext = ref<InstanceType<typeof UiButton> | null>(null);

// Swiper Options is computed for dynamic options(like ref)
const swiperOptions = computed(() => ({
    spaceBetween: 100,
    loop: true,
    navigation: {
        nextEl: swiperNext.value?.$el || null,
        prevEl: swiperPrev.value?.$el || null,
    },
}));

</script>

<template>
    <ComponentWrapper name="UiSwiper">
        <template #component>
            <div :class="$style.container">
                <UiSwiper
                    :slides="slides"
                    :options="swiperOptions"
                    :class="$style.gallery"
                >
                    <template #slide="props">
                        <UiImage
                            :origin="props.slide"
                            :class="$style.image"
                        />
                    </template>
                </UiSwiper>

                <div>
                    <UiButton color="primary" ref="swiperPrev">
                        prev
                    </UiButton>
                    <UiButton color="primary" ref="swiperNext">
                        next
                    </UiButton>
                </div>
            </div>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss" module>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gallery {
    width: 800px;
    height: 400px;
}

.image {
    width: 100%;
    height: 100%;
}
</style>
