<template>
    <UiSelect v-bind="componentAttrs">
        <template #header-chevron="chevronAttrs">
            <BaseIcon
                v-bind="chevronAttrs"
                icon="eye"
            />
        </template>

        <template #option-icon>
            <BaseIcon icon="eye" />
        </template>
    </UiSelect>
</template>

<script setup lang="ts">
import type { IUiSelectProps } from 'ui-layer/composables/select';

const props = withDefaults(defineProps<IUiSelectProps>(), {
    classPrefix: 'Base',
    size: 'medium',
    color: 'primary',
    autoClose: true,
});
const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseSelect {
    $select: &;

    &__bottom {
        overflow: hidden;

        @include ui-size('medium') {
            margin-top: 8px;
            border-radius: 8px;
        }

        @include ui-color('primary') {
            background-color: var(--color-secondary);
            box-shadow: rgb(36 46 66 / 9%) 0 7px 29px 0;
        }
    }
}

.BaseSelectHeader {
    $header: &;

    border-style: solid;

    @include ui-size('medium') {
        padding: 8px 12px;
        border-width: 1px;
        border-radius: 8px;
    }

    @include ui-color('primary') {
        border-color: var(--color-primary);
    }
}

.BaseSelectOption {
    padding: 8px 12px;

    &.--primary-color {
        &.--is-active {
            color: var(--color-primary);
        }

        @include hover {
            background-color: var(--color-primary-dark);
        }
    }
}
</style>
