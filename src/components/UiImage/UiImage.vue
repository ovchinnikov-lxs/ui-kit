<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useSlots } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import type { IUiLazyObserver } from '../../../global';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { imageLoader } from '~/assets/utils/helpers/image-helpers';

const props = defineProps({
    ...classNameProps,

    /**
     *  URL for lazy preview
     */
    preview: {
        type: String,
        default: '',
    },

    /**
     *  URL for origin image
     */
    origin: {
        type: String,
        default: '',
    },

    /**
     *  Lazy loading
     */
    lazy: {
        type: Boolean,
        default: true,
    },

    /**
     *  Lazy loading from swiper
     */
    swiperLazy: {
        type: Boolean,
        default: false,
    },

    /**
     *  CSS object fit option
     */
    objectFit: {
        type: String,
        default: 'cover',
        validator: (v: string) => [
            'contain',
            'cover',
            'fill',
            'none',
            'scale-down',
        ].includes(v),
    },

    /**
     * transition image appear
     */
    transition: {
        type: String,
        default: 'fade',
        validator: (v: string) => [
            'fade',
            'zoom-in',
            'zoom-out',
        ].includes(v),
    },

    /**
     *  Alternate text for an image
     */
    alt: {
        type: String,
        default: '',
    },
});

const slots = useSlots();
const emit = defineEmits<{
    'origin-loaded': [void]
    'preview-loaded': [void]
}>();

let observer: IUiLazyObserver | null = null;
const imageRef = ref<HTMLDivElement>();
const id = ref(Math.floor(Math.random() * 1000000));

const loaded = ref(false);
const initialLoaded = ref(false);

function clearObserver() {
    if (!props.lazy || !observer || !imageRef.value) {
        return false;
    }

    delete observer.actions[id.value];
    observer.object.unobserve(imageRef.value);

    if (!Object.keys(observer.actions).length) {
        observer.object.disconnect();
        window.UiLazyObserver = null;
    }
}
function getObserver() {
    if (window.UiLazyObserver) {
        return window.UiLazyObserver;
    }

    const options = {
        rootMargin: '0px',
        threshold: 0.1,
    };

    const callback = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach(entry => {
            const { isIntersecting, target } = entry;

            if (isIntersecting && window.UiLazyObserver) {
                Object.values(window.UiLazyObserver.actions)
                    .forEach(action => {
                        action(target);
                    });
            }
        });
    };

    window.UiLazyObserver = {
        object: new IntersectionObserver(callback, options),
        actions: {},
    };

    return window.UiLazyObserver;
}

async function loadPreview() {
    try {
        if (!imageLoader.getImage(props.preview)) {
            await imageLoader.loadImage(props.preview);
        }

        emit('preview-loaded');
    } catch (e) {
        console.error('UI_IMAGE:LOAD_PREVIEW', e);
    }
}

async function loadImage(target: Element) {
    try {
        if (!imageRef.value) {
            return false;
        }

        const isEqual = target.isEqualNode(imageRef.value);

        if (loaded.value || !isEqual) {
            return false;
        }

        if (!imageLoader.getImage(props.origin)) {
            await imageLoader.loadImage(props.origin);
        }

        loaded.value = true;

        emit('origin-loaded');
    } catch (e) {
        console.error('UI_IMAGE:LOAD_IMAGE', e);
    }
}

function onInit() {
    initialLoaded.value = Boolean(imageLoader.getImage(props.origin));

    if (!props.lazy) {
        return false;
    }

    observer = getObserver();

    if (!observer) {
        return false;
    }

    observer.actions[id.value] = loadImage;

    if (imageRef.value) {
        observer.object.observe(imageRef.value);
    }

    if (props.preview) {
        loadPreview();
    }
}

onMounted(() => {
    onInit();
});

onBeforeUnmount(() => {
    clearObserver();
});

const { getClassName } = useClassName(props);
const classList = computed((): TypeClassList => [
    `--object-fit-${props.objectFit}`,
    `--transition-${props.transition}`,
    {
        '--has-preview': Boolean(props.preview) || Boolean(slots.preview),
        '--loaded': loaded.value,
    },
]);

const originAttrs = computed(() => ({
    ...!props.swiperLazy && { src: props.origin },
    ...props.swiperLazy && { 'data-src': props.origin },
}));
const originClassList = computed((): TypeClassList => [{
    'swiper-lazy': props.swiperLazy,
}]);
</script>

<template>
    <div ref="imageRef" :class="[getClassName('Image'), classList]">
        <div :class="getClassName('Image__wrapper')">

            <div v-if="$slots.preview" :class="getClassName('Image__preview')">
                <slot name="preview"></slot>
            </div>

            <img v-else-if="preview"
                 :src="preview"
                 draggable="false"
                 alt=""
                 :class="getClassName('Image__preview')"
            >

            <transition :name="initialLoaded ? 'none' : 'ui-image'" mode="out-in">
                <img
                    v-if="!lazy || (lazy && loaded) || initialLoaded"
                    v-bind="originAttrs"
                    :alt="alt"
                    draggable="false"
                    :class="[getClassName('Image__origin'), originClassList]"
                />
            </transition>
        </div>
    </div>
</template>

<style lang="scss">
$zoom-diff: 1.05;

.UiImage {
    $image: &;

    &__wrapper {
        position: relative;
        overflow: hidden;
        display: flex;
        width: 100%;
        height: 100%;
    }

    &__preview {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    &__origin {
        position: relative;
        z-index: 2;
        transition: all .3s ease;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-user-drag: none;
    }

    &.--object-fit-contain {
        img {
            object-fit: contain;
        }
    }

    &.--object-fit-cover {
        img {
            object-fit: cover;
        }
    }

    &.--object-fit-fill {
        img {
            object-fit: fill;
        }
    }

    &.--object-fit-scale-down {
        img {
            object-fit: scale-down;
        }
    }

    &.--has-preview {
        #{$image} {
            &__origin {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
        }
    }

    &.--transition-fade {
        #{$image} {
            opacity: 1;

            &__origin {
                &.ui-image-enter-from,
                &.ui-image-leave-to,
                &.swiper-lazy {
                    opacity: 0;
                }

                &.swiper-lazy-loaded {
                    opacity: 1;
                }
            }
        }
    }

    &.--transition-zoom-in {
        #{$image} {
            &__preview {
                transform: translate3d(0, 0, 0) scale($zoom-diff);
            }

            &__origin {
                opacity: 1;
                transform: translate3d(0, 0, 0) scale($zoom-diff);

                &.ui-image-enter-from,
                &.ui-image-leave-to,
                &.swiper-lazy {
                    opacity: 0;
                    transform: translate3d(0, 0, 0) scale(1);
                }

                &.swiper-lazy-loaded {
                    opacity: 1;
                    transform: translate3d(0, 0, 0) scale($zoom-diff);
                }
            }
        }
    }

    &.--transition-zoom-out {
        #{$image} {
            &__preview {
                transform: translate3d(0, 0, 0) scale($zoom-diff);
            }

            &__origin {
                opacity: 1;
                transform: translate3d(0, 0, 0) scale(1);

                &.ui-image-enter-from,
                &.ui-image-leave-to,
                &.swiper-lazy {
                    opacity: 0;
                    transform: translate3d(0, 0, 0) scale($zoom-diff);
                }

                &.swiper-lazy-loaded {
                    opacity: 1;
                    transform: translate3d(0, 0, 0) scale(1);
                }
            }
        }
    }
}
</style>
