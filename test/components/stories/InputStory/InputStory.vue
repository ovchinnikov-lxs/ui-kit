<script setup lang="ts">
import { ref } from 'vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiInput from '../../../../src/components/UiInput/UiInput.vue';

const value = ref('hello world');
const size = ref<TypeSize>('medium');
</script>

<template>
    <ComponentWrapper name="UiInput">
        <template #control>
            <div>
                value: {{ value }}
            </div>

            <div>
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
            <UiInput
                v-model="value"
                color="primary"
                placeholder="Enter the text"
                :size="size"
            />
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiInput {
    &.--medium-size {
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
    }

    &.--large-size {
        padding: 20px 32px;
        border-radius: 8px;
        font-size: 20px;
    }

    &.--primary-color {
        border: 1px solid var(--ui-black-color);

        &:focus {
            border-color: var(--ui-primary-color);
        }
    }
}
</style>
