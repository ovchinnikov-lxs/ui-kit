<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import OPreloader from '../../../../src/components/OPreloader/OPreloader.vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

const size= ref<TypeSize>('medium');

</script>

<template>
    <ComponentWrapper name="OPreloader">
        <template #control>
            <div>
                sizes

                <label>
                    <input type="radio"
                           id="medium"
                           value="medium"
                           v-model="size"
                    >
                    medium
                </label>

                <label>
                    <input type="radio"
                           id="large"
                           value="large"
                           v-model="size"
                    >
                    large
                </label>
            </div>
        </template>
        <template #component>
            <OPreloader class-prefix="Ui" :size="size">
                <img src="test/static/favicon.svg" alt="fav">
            </OPreloader>
        </template>
    </ComponentWrapper>
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
