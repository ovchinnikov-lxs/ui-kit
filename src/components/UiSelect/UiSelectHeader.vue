<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList, TypeOptions } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,

    placeholder: {
        type: String,
        default: 'Выберите параметр',
    },

    activeOptions: {
        type: Array as PropType<TypeOptions>,
        default: () => [],
    },

    multiple: {
        type: Boolean,
        default: false,
    },

    isOpened: {
        type: Boolean,
        default: false,
    },
});

const countIsVisible = ref(false);
const valuesRef = ref<null | HTMLDivElement>(null);
const valuesInnerRef = ref<null | HTMLSpanElement>(null);

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);

const classList = computed((): TypeClassList => [
    getClassName.value('SelectHeader'),
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    {
        '--is-opened': props.isOpened,
        '--is-multiple': props.multiple,
        '--is-active': props.activeOptions.length,
    },
]);

function calculateValuesWidth() {
    if (typeof window === 'undefined' || !props.multiple) {
        return false;
    }

    if (!valuesRef.value || !valuesInnerRef.value) {
        return false;
    }

    const viClone = document.createElement('span');
    viClone.innerHTML = valuesInnerRef.value.innerHTML;

    const viCloneEl = document.body.appendChild(viClone);
    viCloneEl.style.opacity = '0';
    viCloneEl.style.position = 'absolute';

    const v_width = valuesRef.value.offsetWidth;
    const vi_width = viCloneEl.offsetWidth;

    document.body.removeChild(viCloneEl);

    countIsVisible.value = vi_width > v_width;
}

watch(() => props.activeOptions, async () => {
    await nextTick();
    calculateValuesWidth();
});

const label = computed(() => props.activeOptions.length
    ? props.activeOptions.reduce((arr, item) => arr + `, ${item?.name}`, '').substring(2)
    : props.placeholder);

const count = computed(() => props.activeOptions?.length);

</script>

<template>
    <div :class="classList">
        <div :class="getClassName('SelectHeader__wrapper')">
            <div ref="values" :class="getClassName('SelectHeader__values')">
                <span ref="valuesInner">
                    <slot>
                        {{ label }}
                    </slot>
                </span>
            </div>

            <div v-if="multiple" :class="getClassName('SelectHeader__count')">
                <template v-if="countIsVisible && count">
                    ({{ activeOptions.length }})
                </template>
            </div>


            <div :class="getClassName('SelectHeader__chevron')">
                <slot name="chevron">
                    &darr;
                </slot>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.UiSelectHeader {
    $header: &;

    position: relative;
    margin: 0;
    outline: none;
    vertical-align: middle;
    transition: all .3s ease;
    cursor: pointer;
    -webkit-appearance: none;

    &.--is-disabled {
        pointer-events: none;
    }

    &.--is-opened {
        #{$header} {
            &__chevron {
                transform: translate3d(0, 0, 0) rotate(180deg);
            }
        }
    }

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__values {
        overflow: hidden;
        margin-right: auto;

        span {
            overflow: hidden;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    &__count {
        flex-shrink: 0;
        width: 2.5em;
        text-align: center;
    }

    &__chevron {
        flex-shrink: 0;
        transition: all .3s ease;
    }
}
</style>
