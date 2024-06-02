<template>
    <div :class="[getClassName('Popover'), classList]">
        <div :class="getClassName('Popover__wrapper')">
            <div
                ref="topRef"
                tabindex="0"
                :class="getClassName('Popover__top')"
                @click.prevent.stop="() => onToggle()"
                @keydown.enter="() => onToggle()"
                @keydown.esc="() => onToggle(false)"
            >
                <slot name="top"></slot>
            </div>

            <Teleport to="body">
                <Transition
                    :name="transitionName"
                    mode="out-in"
                >
                    <div
                        v-if="isInited && model"
                        ref="bottomRef"
                        :style="bottomStyleList"
                        :class="[getClassName('Popover__bottom'), classList]"
                    >
                        <div :class="getClassName('Popover__body')">
                            <slot name="bottom"> </slot>
                        </div>
                    </div>
                </Transition>
            </Teleport>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiPopoverProps } from 'ui-layer/types/components/popover';
import { isBoolean } from 'lodash';
import type { TUiPosition } from 'ui-layer/types';

const props = withDefaults(defineProps<IUiPopoverProps>(), {
    position: 'bottom',
    transitionName: 'popover',
});
const model = defineModel<boolean>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

function onToggle(value?: boolean) {
    if (props.preventControl || props.disabled) {
        return false;
    }

    if (isBoolean(value)) {
        model.value = value;
    } else {
        model.value = !model.value;
    }
}

const topRef = ref<HTMLDivElement>();
const bottomRef = ref<HTMLDivElement>();
const isInited = ref(false);

const topBound = useElementBounding(topRef);
const bottomBound = useElementBounding(bottomRef);

const bottomStyleList = computed(() => {
    const getCenter = (param: 'width' | 'height'): number => topBound[param].value / 2 - bottomBound[param].value / 2;

    const positionTopDiff: Record<TUiPosition, number> = {
        top: -1 * bottomBound.height.value,
        right: getCenter('height'),
        bottom: topBound.height.value,
        left: getCenter('height'),
        center: getCenter('height'),
    };

    const positionLeftDiff: Record<TUiPosition, number> = {
        top: getCenter('width'),
        right: topBound.width.value,
        bottom: getCenter('width'),
        left: -1 * bottomBound.width.value,
        center: getCenter('width'),
    };

    const bottomTop = `${topBound.top.value + positionTopDiff[props.position]}px`;
    const bottomLeft = `${topBound.left.value + positionLeftDiff[props.position]}px`;

    return {
        top: bottomTop,
        left: bottomLeft,
        ...(props.parentWidth && {
            width: `${topBound.width.value}px`,
        }),
    };
});

onClickOutside(
    bottomRef,
    () => {
        model.value = false;
    },
    {
        ignore: [topRef],
    },
);

onMounted(() => {
    isInited.value = true;
});

const alignClassList = computed(() => [
    [`--${props.position}-position`],
]);

const classList = computed(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
    alignClassList.value,

    {
        '--is-opened': model.value,
    },
]);
</script>

<style lang="scss">
.UiPopover {
    &__wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        user-select: none;
    }

    @include ui-state('disabled');

    &__top {
        display: flex;
        align-items: center;
        cursor: pointer;
        outline: none;
    }

    &__bottom {
        position: fixed;
        z-index: 999;

        &.popover-enter-active,
        &.popover-leave-active {
            opacity: 1;
            transition:
                transform var(--ui-transition-duration) var(--ui-transition-timing-function),
                opacity var(--ui-transition-duration) var(--ui-transition-timing-function);
            transform: translate3d(0, 0, 0);
        }

        &.popover-enter-from,
        &.popover-leave-to {
            opacity: 0;
            transition:
                transform var(--ui-transition-duration) var(--ui-transition-timing-function),
                opacity var(--ui-transition-duration) var(--ui-transition-timing-function);
            transform: translate3d(0, var(--ui-unit), 0);
        }
    }
}
</style>
