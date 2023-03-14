<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiToggle from '../../../../src/components/UiToggle/UiToggle.vue';

const value = ref(false);
</script>
<template>
    <ComponentWrapper name="UiToggle">
        <template #control>value: {{ value }}</template>

        <template #component>
            <UiToggle v-model="value" color="primary">
                <template #false-label>Скрыть пароль</template>
                <template #true-label>Показать пароль</template>
            </UiToggle>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiToggle {
    $toggle: &;

    &__button {
        &:after {
            content: '';
            transition: all .3s ease;
        }
    }

    &.--medium-size {
        column-gap: 12px;

        #{$toggle} {
            &__label {
                font-size: 12px;
                cursor: pointer;
            }

            &__button {
                width: 24px;
                height: 12px;
                padding: 1px;
                border-radius: 6px;

                &:after {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
            }
        }
    }

    &.--primary-color {
        #{$toggle} {
            &__button {
                background-color: var(--ui-primary-color);

                &:after {
                    background-color: var(--ui-secondary-color);
                }
            }
        }
    }

    &.--is-toggled {
        #{$toggle} {
            &__button {
                &:after {
                    transform: translateX(12px);
                }
            }
        }
    }
}
</style>
