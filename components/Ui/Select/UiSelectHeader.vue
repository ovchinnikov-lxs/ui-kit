<template>
    <div :class="[getClassName('SelectHeader'), classList]">
        <div :class="getClassName('SelectHeader__wrapper')">
            <div :class="getClassName('SelectHeader__values')">
                <slot>
                    <template v-if="!hasActiveValues">
                        {{ placeholder }}
                    </template>

                    <template v-else>
                        {{ activeOptions.reduce((arr, item) => `${arr}, ${item?.name}`, '').substring(2) }}
                    </template>
                </slot>
            </div>

            <div
                v-if="multiple && hasActiveValues"
                :class="getClassName('SelectHeader__count')"
            >
                ({{ activeOptions.length }})
            </div>

            <slot
                name="chevron"
                v-bind="chevronAttrs"
            >
                <div v-bind="chevronAttrs">{{ '->' }}</div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUiSelectHeaderProps } from 'ui-layer/composables/select';
import type { TUiClassList } from 'ui-layer/types';

const props = withDefaults(defineProps<IUiSelectHeaderProps>(), {
    activeOptions: () => [],
});

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

const hasActiveValues = computed(() => props.activeOptions?.length);

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,

    {
        '--is-opened': props.isOpened,
        '--is-multiple': props.multiple,
        '--is-active': hasActiveValues.value,
    },
]);

const chevronAttrs = computed(() => ({
    class: getClassName.value('SelectHeader__chevron'),
}));
</script>

<style lang="scss">
.UiSelectHeader {
    $header: &;

    position: relative;
    margin: 0;
    vertical-align: middle;
    appearance: none;
    cursor: pointer;
    outline: none;
    transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);

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
        margin-right: auto;
        overflow: hidden;

        span {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    &__count {
        flex-shrink: 0;
        text-align: center;
    }

    &__chevron {
        flex-shrink: 0;
        transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);
    }

    @include ui-state('disabled');
}
</style>
