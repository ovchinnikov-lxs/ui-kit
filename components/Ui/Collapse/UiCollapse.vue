<template>
    <Transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
    >
        <div
            v-if="model"
            :class="getClassName('Collapse')"
        >
            <slot name="default"> </slot>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import type { IUiCollapseProps } from 'ui-layer/types/components/collapse';
import anime from 'animejs';

const props = defineProps<IUiCollapseProps>();
const model = defineModel<boolean>();

const { getClassName } = useUiClassName(props);
let animation: null | { pause: () => void } = null;

function onBeforeEnter(el: Element) {
    const method = props.axis === AXIS_TYPE.Y ? onBeforeEnterY : onBeforeEnterX;

    const element = el as HTMLElement;
    method(element);
}

function onEnter(el: Element, done: () => void) {
    stopAnimation();

    const method = props.axis === AXIS_TYPE.Y ? onEnterY : onEnterX;

    const element = el as HTMLElement;
    method(element, done);
}

function onBeforeLeave(el: Element) {
    const method = props.axis === AXIS_TYPE.Y ? onBeforeLeaveY : onBeforeLeaveX;

    const element = el as HTMLElement;
    method(element);
}

function onLeave(el: Element, done: () => void) {
    stopAnimation();

    const method = props.axis === AXIS_TYPE.Y ? onLeaveY : onLeaveX;

    const element = el as HTMLElement;
    method(element, done);
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
