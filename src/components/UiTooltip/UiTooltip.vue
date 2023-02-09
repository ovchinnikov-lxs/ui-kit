<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
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

interface IBottom {
    raf: null | number;
    top: number;
    left: number;
}

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

    interactive: {
        type: Boolean,
        default: false,
    },

});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const $emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();


const isOpened = ref(false);
watch(() => props.modelValue, val => {
    isOpened.value = val;
}, {
    immediate: true,
});

const topRef = ref<null | HTMLDivElement>(null);
const bottomRef = ref<null | HTMLDivElement>(null);
const timeout = ref<ReturnType<typeof setTimeout>>();

const bottom = reactive<IBottom>({
    raf: null,
    top: 0,
    left: 0,
});
const bottomStyleList = computed(() => ({
    top: `${bottom.top}px`,
    left: `${bottom.left}px`,
}));

function onToggle(isOpenedValue: boolean) {
    clearTimeout(timeout.value);

    timeout.value = setTimeout(() => {
        if (!props.disabled) {
            isOpened.value = isOpenedValue;
            $emit('update:modelValue', isOpened.value);
        }
    }, 150);
}

function moveToBody() {
    if (!bottomRef.value) {
        return false;
    }

    document.body.appendChild(bottomRef.value);
}

function removeFromBody() {
    if (!bottomRef.value) {
        return false;
    }

    bottomRef.value.remove();
}

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,

    {
        '--is-opened': isOpened.value,
        '--is-interactive': props.interactive,
        [`--${props.position}-position`]: props.position,
    },
]);

function addListener() {
    if (typeof window === 'undefined') {
        return false;
    }

    const calcVerticalCenter = (topRect: DOMRect, bottomRect: DOMRect) => topRect.top + topRect.height / 2 - bottomRect.height / 2;
    const calcHorizontalCenter = (topRect: DOMRect, bottomRect: DOMRect) => topRect.left + topRect.width / 2 - bottomRect.width / 2;

    const calcTopPosition = (position: number, rect: DOMRect) => {
        if (position < 0) {
            return 0;
        }

        if (position + rect.height > window.innerHeight) {
            return window.innerHeight - rect.height;
        }

        return position;
    };

    const calcLeftPosition = (position: number, rect: DOMRect) => {
        if (position < 0) {
            return 0;
        }

        if (position + rect.width > window.innerWidth) {
            return window.innerWidth - rect.width;
        }

        return position;
    };

    const setTopPosition = (topRect: DOMRect, bottomRect: DOMRect) => {
        const posTop = topRect.top - bottomRect.height;
        const posLeft = calcHorizontalCenter(topRect, bottomRect);

        bottom.top = calcTopPosition(posTop, bottomRect);
        bottom.left = calcLeftPosition(posLeft, bottomRect);
    };

    const setRightPosition = (topRect: DOMRect, bottomRect: DOMRect) => {
        bottom.top = calcTopPosition(calcVerticalCenter(topRect, bottomRect), bottomRect);
        bottom.left = calcLeftPosition(topRect.right, bottomRect);
    };

    const setBottomPosition = (topRect: DOMRect, bottomRect: DOMRect) => {
        const posTop = topRect.bottom;
        const posLeft = calcHorizontalCenter(topRect, bottomRect);

        bottom.top = calcTopPosition(posTop, bottomRect);
        bottom.left = calcLeftPosition(posLeft, bottomRect);
    };

    const setLeftPosition = (topRect: DOMRect, bottomRect: DOMRect) => {
        const posLeft = topRect.left - bottomRect.width;
        const postTop = calcVerticalCenter(topRect, bottomRect);

        bottom.top = calcTopPosition(postTop, bottomRect);
        bottom.left = calcLeftPosition(posLeft, bottomRect);
    };

    const bottomListener = () => {
        if (!topRef.value || !bottomRef.value) {
            return false;
        }

        const topRect = topRef.value.getBoundingClientRect();
        const bottomRect = bottomRef.value.getBoundingClientRect();

        switch (props.position) {
            case 'top':
                setTopPosition(topRect, bottomRect);
                break;
            case 'right':
                setRightPosition(topRect, bottomRect);
                break;
            case 'bottom':
                setBottomPosition(topRect, bottomRect);
                break;
            case 'left':
                setLeftPosition(topRect, bottomRect);
                break;
            case 'center':
                setTopPosition(topRect, bottomRect);
                break;
        }

        bottom.raf = requestAnimationFrame(bottomListener);
    };

    bottomListener();
}

function removeListener() {
    if (bottom.raf) {
        cancelAnimationFrame(bottom.raf);
    }
}

watch(isOpened, val => {
    val
        ? addListener()
        : removeListener();
}, {
    immediate: true,
});
</script>

<template>
    <div :class="[getClassName('Tooltip') ,classList]"
         @mouseenter="onToggle(true)"
         @mouseleave="onToggle(false)"
    >
        <div ref="topRef" :class="getClassName('Tooltip__top')">
            <slot name="header"></slot>
        </div>

        <div ref="bottomRef"
             :style="bottomStyleList"
             :class="[getClassName('Tooltip__bottom'), classList]"
             @mouseenter="onToggle(true)"
             @mouseleave="onToggle(false)"
        >
            <transition
                name="tooltip"
                mode="out-in"
                @enter="moveToBody"
                @after-leave="removeFromBody"
            >
                <div v-if="isOpened && !disabled" :class="getClassName('Tooltip__wrapper')">
                    <slot name="bottom"></slot>
                </div>
            </transition>
        </div>
    </div>
</template>

<style lang="scss">
.UiTooltip {
    width: fit-content;
    pointer-events: none;
    touch-action: none;

    &.--is-interactive {
        pointer-events: auto;
    }

    &__top {
        pointer-events: auto;
    }

    &__bottom {
        position: fixed;
        z-index: 999999;
        pointer-events: none;
        touch-action: none;

        &.--is-interactive {
            pointer-events: auto;
        }
    }
}
</style>
