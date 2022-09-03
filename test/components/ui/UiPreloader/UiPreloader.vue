<script setup lang="ts">
// Components
import OPreloader from '~/components/OPreloader/OPreloader.vue';
</script>


<template>
    <OPreloader
        class-prefix="Ui"
        v-bind="$attrs"
    >
        <slot>
            <img src="test/static/favicon.svg" alt="fav">
        </slot>
    </OPreloader>
</template>

<style lang="scss">
.UiPreloader {
    &__el {
        animation: scale 1s infinite;
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
