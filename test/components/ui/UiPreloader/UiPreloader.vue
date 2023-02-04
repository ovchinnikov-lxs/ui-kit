<script setup lang="ts">
// Components
import OPreloader from '../../../../src/components/OPreloader/OPreloader.vue';
</script>

<template>
    <OPreloader class-prefix="Ui" v-bind="$attrs">
        <slot>
            <img src="test/static/favicon.svg" alt="fav">
        </slot>
    </OPreloader>
</template>

<style lang="scss">
.UiPreloader {
    $preloader: &;

    &.--medium-size {
        #{$preloader} {
            &__el {
                width: 24px;
                height: 24px;
            }
        }
    }

    &.--large-size {
        #{$preloader} {
            &__el {
                width: 56px;
                height: 56px;
            }
        }
    }

    &__el {
        animation: scale 1s infinite;

        & > * {
            width: 100%;
            height: 100%;
        }
    }

    @keyframes scale {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
}
</style>
