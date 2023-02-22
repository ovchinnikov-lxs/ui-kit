<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiRadio from '../../../../src/components/UiRadio/UiRadio.vue';

const value = ref(null);
const size = ref('medium');
const options = [
    {
        id: null,
        name: 'Не задано',
    },
    {
        id: true,
        name: 'Дом',
    },
    {
        id: false,
        name: 'квартира',
    },
    {
        id: 'lol',
        name: 'Улица',
    },
];
</script>

<template>
    <ComponentWrapper name="UiRadio">
        <template #control>
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

            value: {{ value }}
        </template>

        <template #component>
            <UiRadio
                v-model="value"
                :size="size"
                color="primary"
                :options="options"
            />
        </template>

    </ComponentWrapper>
</template>

<style lang="scss">
.UiRadio {
    $radio: &;

    &.--medium-size {
        #{$radio} {
            &__wrapper {
                row-gap: 14px;
            }
        }

        .UiRadioItem {
            &__wrapper {
                column-gap: 8px;
            }

            &__icon {
                position: relative;
                width: 12px;
                height: 12px;
                border-radius: 50%;

                &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    opacity: 0;
                    transform: translate3d(-50%, -50%, 0) scale(.8);
                    transition: opacity .3s ease, transform .3s ease;
                }
            }
        }
    }

    &.--primary-color {
        .UiRadioItem {
            $item: &;

            &__icon {
                border: 1px solid var(--ui-primary-color);

                &:after {
                    background-color: var(--ui-primary-color);
                }
            }

            &.--is-active {
                .UiRadioItem__icon {
                    &:after {
                        opacity: 1;
                        transform: translate3d(-50%, -50%, 0) scale(1);
                    }
                }
            }
        }
    }
}
</style>
