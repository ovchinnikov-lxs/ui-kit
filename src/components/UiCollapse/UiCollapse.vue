<script setup lang="ts">
// Dependencies
import anime from 'animejs';

import { AXIS_TYPE } from '~/assets/utils/constants/collapse';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';

const props = defineProps({
    ...classNameProps,

    isOpened: {
        type: Boolean,
        default: false,
    },

    axis: {
        type: String,
        default: AXIS_TYPE.Y,
        validator: (v: string) => Object.values(AXIS_TYPE).includes(v),
    },
});

const { getClassName } = useClassName(props);
let animation: null | { pause: () => void } = null;

function onBeforeEnter(el: HTMLElement) {
    const method = props.axis === AXIS_TYPE.Y
        ? onBeforeEnterY
        : onBeforeEnterX;

    method(el);
}

function onEnter(el: HTMLElement, done: () => void) {
    stopAnimation();

    const method = props.axis === AXIS_TYPE.Y
        ? onEnterY
        : onEnterX;

    method(el, done);
}

function onBeforeLeave(el: HTMLElement) {
    const method = props.axis === AXIS_TYPE.Y
        ? onBeforeLeaveY
        : onBeforeLeaveX;

    method(el);
}

function onLeave(el: HTMLElement, done: () => void) {
    stopAnimation();


    const method = props.axis === AXIS_TYPE.Y
        ? onLeaveY
        : onLeaveX;

    method(el, done);
}

// Y
function onBeforeEnterY(el: HTMLElement) {
    el.style.height = '0';
    el.style.opacity = '0';
    el.style.overflow = 'hidden';
}

function onEnterY(el: HTMLElement, done: () => void) {
    setTimeout(() => {
        animation = anime({
            targets: el,
            height: el.scrollHeight,
            opacity: 1,
            easing: 'linear',
            duration: 200,
            complete: () => {
                el.style.height = '';
                el.style.opacity = '';
                el.style.overflow = '';

                done();
            },
        });
    }, 100);
}

function onBeforeLeaveY(el: HTMLElement) {
    el.style.overflow = 'hidden';
}

function onLeaveY(el: HTMLElement, done: () => void) {
    animation = anime({
        targets: el,
        height: 0,
        opacity: 0,
        easing: 'linear',
        duration: 200,
        complete: () => {
            done();
        },
    });
}

// X
function onBeforeEnterX(el: HTMLElement) {
    el.style.width = '0';
    el.style.opacity = '0';
    el.style.overflow = 'hidden';
}

function onEnterX(el: HTMLElement, done: () => void) {
    setTimeout(() => {
        animation = anime({
            targets: el,
            width: el.scrollWidth,
            opacity: 1,
            easing: 'linear',
            duration: 200,
            complete: () => {
                el.style.height = '';
                el.style.opacity = '';
                el.style.overflow = '';

                done();
            },
        });
    }, 100);
}

function onBeforeLeaveX(el: HTMLElement) {
    el.style.overflow = 'hidden';
}

function onLeaveX(el: HTMLElement, done: () => void) {
    animation = anime({
        targets: el,
        width: 0,
        opacity: 0,
        easing: 'linear',
        duration: 200,
        complete: () => {
            done();
        },
    });
}

function stopAnimation() {
    if (animation) {
        animation.pause();
    }
}
</script>

<template>
    <transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
    >
        <div v-if="isOpened" :class="getClassName('Collapse')">
            <slot name="default">
            </slot>
        </div>
    </transition>
</template>
