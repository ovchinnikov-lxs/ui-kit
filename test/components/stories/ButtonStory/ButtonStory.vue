<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import OButton from '../../../../src/components/OButton/OButton.vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

const color = ref('primary');
const rounded = ref(false);
const size = ref<TypeSize>('medium');
</script>

<template>
    <ComponentWrapper name="OButton">
        <template #control>
            <div>
                <label>
                    <input type="checkbox" v-model="rounded">
                    rounded
                </label>
            </div>

            <div>
                <b> current Size: {{ size }}</b>
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

            <div>
                <b>current color: {{ color }}</b>

                <label>
                    <input type="radio"
                           id="primary"
                           value="primary"
                           v-model="color"
                    >
                    primary
                </label>

                <label>
                    <input type="radio"
                           id="secondary"
                           value="secondary"
                           v-model="color"
                    >
                    secondary
                </label>

            </div>

        </template>

        <template #component>
            <OButton
                class-prefix="Ui"
                :color="color"
                :size="size"
                :rounded="rounded"
            >
                Button
            </OButton>
        </template>
    </ComponentWrapper>
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
