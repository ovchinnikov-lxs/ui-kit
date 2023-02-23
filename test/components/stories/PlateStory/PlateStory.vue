<script setup lang="ts">
import { ref } from 'vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiPlate from '../../../../src/components/UiPlate/UiPlate.vue';

const color = ref('primary');
const rounded = ref(false);
const size = ref<TypeSize>('medium');
</script>

<template>
    <ComponentWrapper name="UiPlate">
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
            <UiPlate
                :color="color"
                :size="size"
                :rounded="rounded"
            >
                <h2> this is plate title</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad aliquam autem consectetur consequuntur cum distinctio earum facilis fuga hic illo inventore ipsam,
                    labore minus natus officia, porro possimus. Pariatur, repellendus?
                </p>
            </UiPlate>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiPlate {
    $plate: &;

    &.--medium-size {
        #{$plate} {
            &__wrapper {
                padding: 16px 24px;
            }
        }

        &.--is-rounded {
            #{$plate} {
                &__wrapper {
                    border-radius: 24px;
                }
            }
        }
    }

    &.--large-size {
        #{$plate} {
            &__wrapper {
                padding: 32px 48px;
            }
        }

        &.--is-rounded {
            #{$plate} {
                &__wrapper {
                    border-radius: 80px;
                }
            }
        }
    }

    &.--primary-color {
        #{$plate} {
            &__wrapper {
                background-color: var(--ui-primary-color);
            }
        }
    }

    &.--secondary-color {
        #{$plate} {
            &__wrapper {
                background-color: var(--ui-secondary-color);
            }
        }
    }
}
</style>
