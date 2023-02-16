<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiCheckbox from '../../../../src/components/UiCheckbox/UiCheckbox.vue';

const value = ref(false);
</script>

<template>
    <ComponentWrapper name="UiCheckbox">
        <template #control>value: {{value}} </template>

        <template #component>
            <UiCheckbox v-model="value">
                <template #checkbox>&darr;</template>
                <template #default>label</template>
            </UiCheckbox>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiCheckbox {
    $checkbox: &;

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &.--medium-size {
        #{$checkbox} {
            &__button {
                width: 12px;
                height: 12px;
                background-color: white;
            }

            &__wrapper {
                column-gap: 12px;
            }
        }
    }

    &.--is-checked {
        #{$checkbox} {
            &__button {
                background-color: red;
            }
        }
    }
}
</style>
