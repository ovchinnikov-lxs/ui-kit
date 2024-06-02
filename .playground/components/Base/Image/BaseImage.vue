<template>
    <UiImage v-bind="componentAttrs" />
</template>

<script setup lang="ts">
import type { IUiImageProps } from 'ui-layer/types/components/image';

const props = withDefaults(defineProps<IUiImageProps>(), {
    classPrefix: 'Base',
    preview: true,
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.swiper {
    &:not(.swiper-watch-progress) {
        .BaseImage {
            .swiper-lazy-preloader {
                animation: base-image-gradient 3s var(--ui-transition-timing-function) infinite;
            }
        }
    }
}

.BaseImage {
    $image: &;

    #{$image} {
        &__preview {
            background: linear-gradient(135deg, var(--color-primary) 47%, var(--color-primary-dark) 50%, var(--color-primary-light) 53%);
            background-size: 400% 400%;
            transition: all 0.2s ease-out;
            animation: base-image-gradient 3s ease infinite;
        }
    }

    @keyframes base-image-gradient {
        0% {
            background-position: 100% 50%;
        }

        50% {
            background-position: 0 50%;
        }

        100% {
            background-position: 100% 50%;
        }
    }
}
</style>
