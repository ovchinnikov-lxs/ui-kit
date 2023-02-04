<script setup lang="ts">
// Components
import OButton from '~/components/OButton/OButton.vue';

</script>

<template>
    <OButton class-prefix="Ui" v-bind="$attrs">
        <slot></slot>
    </OButton>
</template>

<style lang="scss">
.UiButton {
    &.--medium-size {
        padding: 12px 32px;

        &.--is-rounded {
            border-radius: 8px;

            &.--is-icon {
                border-radius: 50%;
            }
        }
    }

    &.--large-size {
        padding: 24px 48px;

        &.--is-rounded {
            border-radius: 24px;

            &.--is-icon {
                border-radius: 50%;
            }
        }
    }

    &.--primary-color {
        background-color: var(--ui-primary-color);
        color: var(--ui-white-color);

        @include hover {
            opacity: .8;
        }
    }

    &.--secondary-color {
        background-color: var(--ui-secondary-color);
        color: var(--ui-black-color);

        @include hover {
            background-color: var(--ui-primary-color);
        }
    }
}
</style>
