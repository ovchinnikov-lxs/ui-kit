<template>
    <div :class="[getClassName('Image'), classList]">
        <div :class="getClassName('Image__wrapper')">
            <picture>
                <source
                    v-for="(item, index) in imageSources"
                    :key="index"
                    :media="item.media"
                    :srcset="item.srcset"
                    :data-media-key="item.dataMediaKey"
                />

                <img
                    v-bind="originAttrs"
                    ref="imageRef"
                    :alt="alt"
                    :class="[getClassName('Image__origin'), originClassList]"
                    @error="onError"
                    @load="onLoad"
                />
            </picture>

            <div
                v-if="preview"
                :class="[getClassName('Image__preview'), previewClassList]"
            >
                <slot name="preview"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiImageProps, IUiImageSourceItem, TUiImageMediaKey, TUiImageMediaValue } from 'ui-layer/types/components/image';
import type { ResolvedImage } from '@nuxt/image';
import defu from 'defu';
// TODO: Актуализировать из коре

const props = withDefaults(defineProps<IUiImageProps>(), {
    defaultModifiers: () => ({
        quality: 90,
        format: 'webp',
    }),
    ratio: 1,
});

const emit = defineEmits<{
    error: [void];
    loaded: [void];
}>();

const ORDERED_MEDIA_LIST = [
    MEDIA_QUERIES_KEYS.RETINA,
    MEDIA_QUERIES_KEYS.RETINA_TABLET,
    MEDIA_QUERIES_KEYS.RETINA_LAPTOP,
    MEDIA_QUERIES_KEYS.RETINA_DESKTOP,
    MEDIA_QUERIES_KEYS.DESKTOP_LG,
    MEDIA_QUERIES_KEYS.DESKTOP,
    MEDIA_QUERIES_KEYS.DESKTOP_SM,
    MEDIA_QUERIES_KEYS.LAPTOP,
    MEDIA_QUERIES_KEYS.TABLET,
    MEDIA_QUERIES_KEYS.MOBILE,
];

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { styleClassList } = useUiStyle(props);

const img = useImage();

function generateUrl(value: TUiImageMediaValue): ResolvedImage['url'] {
    if (!value) {
        return '';
    }

    if (typeof value === 'string') {
        return img(value, props.defaultModifiers);
    }

    return img(
        value.src,
        defu({
            ...value.options,

            ...(value.options?.width && {
                width: Number((value.options?.width * props.ratio).toFixed()),
            }),

            ...(value.options?.height && {
                height: Number((value.options?.height * props.ratio).toFixed()),
            }),
        }),
        props.defaultModifiers,
    );
}

const imageSources = computed(() => {
    if (typeof props.src !== 'object') {
        return [];
    }

    return ORDERED_MEDIA_LIST.reduce<IUiImageSourceItem[]>((acc, mediaKey: TUiImageMediaKey) => {
        const curVal = props.src[mediaKey] as TUiImageMediaValue | undefined;

        if (!curVal) {
            return acc;
        }

        acc.push({
            dataMediaKey: String(mediaKey),
            media: MEDIA_QUERIES[mediaKey],
            srcset: generateUrl(curVal),
        });

        return acc;
    }, []);
});

function getImageSrc(value: TUiImageMediaValue) {
    if (!value) {
        return '';
    }

    if (typeof value === 'string') {
        return value;
    }

    const sortedKeys = Object.keys(value).toSorted((a, b) => {
        const indexA = ORDERED_MEDIA_LIST.indexOf(a);
        const indexB = ORDERED_MEDIA_LIST.indexOf(b);

        return indexA - indexB;
    });

    if (sortedKeys.length > 0) {
        return value[sortedKeys[0]];
    }

    return '';
}

const originSrc = computed(() => getImageSrc(props.src));
const fallbackSrc = computed(() => getImageSrc(props.fallback));
const isSwiperLazy = computed(() => props.lazy === 'swiper');

const originAttrs = computed(() => ({
    ...(process.server ? { onerror: "this.setAttribute('data-error', 1)" } : {}),
    ...(process.server ? { onload: "this.setAttribute('data-load', 1)" } : {}),

    ...(props.lazy && {
        loading: 'lazy',
    }),

    ...(originSrc.value && {
        src: generateUrl(originSrc.value),
    }),
}));

const originClassList = computed(() => [
    {
        'swiper-lazy': isSwiperLazy.value,
    },
]);

const previewClassList = computed(() => [
    { 'swiper-lazy-preloader': isSwiperLazy.value },
]);

const imageRef = ref<HTMLImageElement>();

function onError() {
    emit('error');

    if (!props.fallback || !imageRef.value || !imageRef.value.parentNode) {
        return false;
    }

    Array.from(imageRef.value.parentNode.children).forEach((value) => {
        if (!props.fallback) {
            return;
        }

        const element = value as HTMLImageElement | HTMLSourceElement;

        const elMediaKey = element.dataset.mediaKey as TUiImageMediaKey;

        if (!elMediaKey) {
            element.src = generateUrl(fallbackSrc.value);
        } else if (fallbackSrc.value) {
            element.srcset = generateUrl(fallbackSrc.value[elMediaKey] || fallbackSrc.value);
        }
    });
}

const isLoaded = ref(false);

function onLoad() {
    isLoaded.value = Boolean(imageRef.value?.currentSrc || imageRef.value?.src);
    emit('loaded');
}

const classList = computed(() => [
    ...sizeClassList.value,
    ...styleClassList.value,

    {
        '--is-loaded': isLoaded.value,
    },
]);

onMounted(() => {
    if (imageRef.value?.getAttribute('data-load')) {
        onLoad();
    }

    if (imageRef.value?.getAttribute('data-error')) {
        onError();
    }
});
</script>

<style lang="scss">
.UiImage {
    $image: &;

    &__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: translate3d(0, 0, 0);

        .swiper-lazy-preloader {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-top: 0;
            margin-left: 0;
            border: none;
            border-radius: 0;
        }
    }

    &__origin {
        position: absolute;
        inset: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        user-select: none;
        opacity: 0;
        transition: opacity var(--ui-transition-duration) var(--ui-transition-timing-function);
    }

    &__preview {
        position: absolute;
        inset: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        content: '';
        transform: translate3d(0, 0, 0);
    }

    &.--is-loaded {
        #{$image} {
            &__origin {
                opacity: 1;
            }
        }
    }
}
</style>
