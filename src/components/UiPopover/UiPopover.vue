<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import { POSITION_OPTIONS } from '~/assets/utils/constants/position';
import type { TypePosition } from '~/assets/utils/constants/position';

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

    modelValue: {
        type: Boolean,
        default: false,
    },

    position: {
        type: String as PropType<TypePosition>,
        default: POSITION_OPTIONS.BOTTOM,
        validator: (v: string) => Object
            .values(POSITION_OPTIONS)
            .includes(v),
    },

    containerClass: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },

    parentWidth: {
        type: Boolean,
        default: false,
    },

    preventControl: {
        type: Boolean,
        default: false,
    },

    autoClose: {
        type: Boolean,
        default: false,
    },
});

const $emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

interface IBottomInstance {
    domEl: null | HTMLDivElement
    observer: null | IntersectionObserver
    raf: null | number
    width: number,
    top: number,
    left: number,
}


const isOpened = ref(false);
const bottomInstance = reactive<IBottomInstance>({
    domEl: null,
    observer: null,
    raf: null,
    width: 0,
    top: 0,
    left: 0,
});

const containerEl = ref<null | HTMLDivElement>(null);
const bottomEl = ref<null | HTMLDivElement>(null);
const topEl = ref<null | HTMLDivElement>(null);
const wrapperEl = ref<null | HTMLDivElement>(null);
const bodyEl = ref<null | HTMLDivElement>(null);

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const alignClassList = computed((): TypeClassList => [
    [`--${props.position}-position`],
]);

const classList = computed((): TypeClassList => [
    getClassName.value('Popover'),
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
    alignClassList,

    {
        '--is-opened': isOpened,
    },
]);

const bodyStyleList = computed(() => ({
    ...props.parentWidth && {
        width: `${bottomInstance.width}px`,
    },
}));

const wrapperStyleList = computed(() => ({
    top: `${bottomInstance.top}px`,
    left: `${bottomInstance.left}px`,
}));

function addObserver() {
    if (!containerEl.value) {
        return false;
    }

    const callback = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach(entry => {
            if (isOpened.value && !entry.isIntersecting) {
                isOpened.value = false;
                $emit('update:modelValue', isOpened.value);
            }
        });
    };

    bottomInstance.observer = new IntersectionObserver(callback);
    bottomInstance.observer.observe(containerEl.value);
}

function initBottom() {
    if (!bottomEl.value) {
        return false;
    }

    bottomInstance.domEl = bottomEl.value;
    bottomEl.value.remove();
}

function startListenPosition() {
    const spyPosition = () => {
        if (!topEl.value) {
            return false;
        }

        const topBound = topEl.value.getBoundingClientRect();

        let top = topBound.top;
        let left = topBound.top + topBound.height;

        switch (props.position) {
            case 'top':
                top = topBound.top;
                left = topBound.left + topBound.width / 2;
                break;
            case 'right':
                top = topBound.top + topBound.height / 2;
                left = topBound.right;
                break;
            case 'bottom':
                top = topBound.bottom;
                left = topBound.left + topBound.width / 2;
                break;
            case 'left':
                top = topBound.top + topBound.height / 2;
                left = topBound.left;
                break;
            case 'center':
                top = topBound.top + topBound.height / 2;
                left = topBound.left + topBound.width / 2;
                break;
        }

        bottomInstance.top = top;
        bottomInstance.left = left;


        bottomInstance.raf = requestAnimationFrame(spyPosition);
    };

    spyPosition();
}

function stopListenPosition() {
    if (bottomInstance.raf) {
        cancelAnimationFrame(bottomInstance.raf);
    }
}

function moveToBody() {
    if (!containerEl.value) {
        return false;
    }

    bottomInstance.width = containerEl.value.offsetWidth;

    if (bottomInstance.domEl) {
        document.body.appendChild(bottomInstance.domEl);
    }
}

function removeFromBody() {
    if (!bottomInstance.domEl) {
        return false;
    }

    bottomInstance.domEl.remove();
}

function onOutsideClick(event: Event) {
    if (!containerEl.value || !bodyEl.value) {
        return false;
    }

    const target = event.target as Document;

    let value = isOpened.value;

    const isClickInside = containerEl.value.contains(target) || bodyEl.value && bodyEl.value.contains(target);

    if (!isClickInside) {
        value = false;
    } else if (isClickInside && props.autoClose) {
        value = false;
    }

    if (!props.preventControl) {
        isOpened.value = value;
    }

    $emit('update:modelValue', value);
}

function onOpen() {
    moveToBody();

    if (typeof window !== 'undefined') {
        document.addEventListener('click', onOutsideClick, false);
    }

    if (!props.preventControl) {
        isOpened.value = true;
    }

    $emit('update:modelValue', true);
}

function onClose() {
    if (typeof window !== 'undefined') {
        document.removeEventListener('click', onOutsideClick, false);
    }

    if (!props.preventControl) {
        isOpened.value = false;
    }

    $emit('update:modelValue', false);
}

function onToggle() {
    if (props.preventControl || props.disabled) {
        return false;
    }

    !isOpened.value
        ? onOpen()
        : onClose();
}

watch(isOpened, val => {
    val
        ? startListenPosition()
        : stopListenPosition();
}, {
    immediate: true,
});

watch(() => props.modelValue, val => {
    isOpened.value = val;

    val
        ? onOpen()
        : onClose();
}, {
    immediate: true,
});

function onInit() {
    addObserver();
    initBottom();
}

function onDestroy() {
    stopListenPosition();

    if (containerEl.value && bottomInstance.observer) {
        bottomInstance.observer.unobserve(containerEl.value);
    }
    removeFromBody();
}

onMounted(() => {
    onInit();
});

onBeforeUnmount(() => {
    onDestroy();
});
</script>

<template>
    <div ref="containerEl" :class="classList">
        <div ref="topEl"
             :class="getClassName('Popover__top')"
             @click.prevent.stop="onToggle"
        >
            <slot name="top"></slot>
        </div>

        <div ref="bottomEl" :class="getClassName('Popover__bottom')">
            <div ref="wrapperEl"
                 :style="wrapperStyleList"
                 :class="[getClassName('Popover__wrapper'), alignClassList]"
            >
                <transition name="popover" @after-leave="removeFromBody">
                    <div v-if="isOpened"
                         ref="bodyEl"
                         :style="bodyStyleList"
                         :class="[getClassName('Popover__body'), alignClassList]"
                    >
                        <slot name="bottom"></slot>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.UiPopover {
    display: inline-block;
    user-select: none;

    &.--is-disabled {
        pointer-events: none;
    }

    &__top {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    &__bottom {
        position: absolute;
        z-index: 999;

        &:before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            cursor: default;
        }
    }

    &__wrapper {
        position: fixed;
        z-index: 2;

        &.--top-position {
            transform: translate3d(-50%, -100%, 0);
        }

        &.--right-position {
            transform: translate3d(0, -50%, 0);
        }

        &.--bottom-position {
            transform: translate3d(-50%, 0, 0);
        }

        &.--left-position {
            transform: translate3d(-100%, -50%, 0);
        }

        &.--center-position {
            transform: translate3d(-50%, -50%, 0);
        }
    }

    &__body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;

        /* Animation */
        &.popover-enter-active,
        &.popover-leave-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: transform .3s ease, opacity .3s ease;
        }

        &.popover-enter-from,
        &.popover-leave-to {
            opacity: 0;
            transform: translate3d(0, 8px, 0);
            transition: transform .3s ease, opacity .3s ease;
        }
    }
}
</style>
