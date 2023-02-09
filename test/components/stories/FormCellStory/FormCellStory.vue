<script setup lang="ts">
import { ref } from 'vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiFormCell from '../../../../src/components/UiFormCell/UiFormCell.vue';
import UiInput from '../../../../src/components/UiInput/UiInput.vue';

const size = ref<TypeSize>('medium');
const error = ref(false);

</script>
<template>
    <ComponentWrapper name="UiFormCell">
        <template #control>
            <div>
                <label>
                    <input type="checkbox" v-model="error">
                    Has Error
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
        </template>

        <template #component>
            <UiFormCell
                color="primary"
                :error="error ? 'This is Field error' : null"
                :size="size"
                class="form-cell"
            >
                <template #label>label</template>

                <template #default>
                    <UiInput/>
                </template>

                <template #info>info content</template>

                <template #error="props">Error custom: {{ props.error }}</template>
            </UiFormCell>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.form-cell {
    width: 100%;
}

.UiFormCell {
    $cell: &;

    &.--medium-size {
        #{$cell} {
            &__label,
            &__info,
            &__error {
                font-size: 16px;
            }
        }
    }

    &.--large-size {
        #{$cell} {
            &__label,
            &__info,
            &__error {
                font-size: 32px;
            }
        }
    }

    &.--is-error {
        #{$cell} {
            &__label {
                color: red;
            }
        }
    }

    &.--primary-color {
        #{$cell} {
            &__label,
            &__info {
                color: var(--ui-primary-color);
            }
        }
    }

    &__error {
        color: red;
    }
}
</style>
