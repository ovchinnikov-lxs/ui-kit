<script setup lang="ts">
import { ref } from 'vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiFileInput from '../../../../src/components/UiFileInput/UiFileInput.vue';
import UiImage from '../../../../src/components/UiImage/UiImage.vue';
import UiButton from '../../../../src/components/UiButton/UiButton.vue';

const imageValue = ref<string | null | File>(null);
const fileValue = ref<string | null | File>(null);
const size = ref<TypeSize>('medium');

async function onInput(val) {
    console.log('onInput: ', val);
    // await nextTick();
    // Response from server
    // imageValue.value = 'https://plus.unsplash.com/premium_photo-1666788168266-8857d533a634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2621&q=80';
    // fileValue.value = 'https://plus.unsplash.com/premium_photo-1666788168266-8857d533a634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2621&q=80';
}

function onRemove(val) {
    console.log('onRemove: ', val);
    imageValue.value = null;
    fileValue.value = null;
    console.log('remove from server', val);
}
</script>

<template>
    <ComponentWrapper name="UiFileInput">
        <template #control>
            <div>
                imageValue: {{ imageValue }}
                <br/>
                fileValue: {{ fileValue }}
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
            <div class="FileInputStory__container">
                <div class="FileInputStory__item">
                    <h4>Image</h4>

                    <UiFileInput
                        v-model="imageValue"
                        class-prefix="UiImage"
                        :size="size"
                        :extensions="['png']"
                        @update:modelValue="onInput"
                        @remove="onRemove"
                    >
                        <template #data="props">
                            <div v-if="props.drop">Drop here</div>

                            <UiImage
                                v-if="props.urls && props.urls[0]"
                                :origin="props.urls[0]"
                                class="UiImageFileInput__image"
                            />
                        </template>

                        <template #input="props">
                            <UiButton color="primary"
                                      :size="size"
                                      @click="props.onClick"
                            >
                                {{ props.label }}
                            </UiButton>
                        </template>

                        <template #remove="props">
                            <UiButton color="primary"
                                      :size="size"
                                      @click="props.onClick"
                            >
                                {{ props.label }}
                            </UiButton>
                        </template>
                    </UiFileInput>
                </div>

                <div class="FileInputStory__item">
                    <h4>File</h4>

                    <UiFileInput
                        v-model="fileValue"
                        class-prefix="UiDocs"
                        multiple
                        :size="size"
                        @update:modelValue="onInput"
                        @remove="onRemove"
                    >
                        <template #data="props">
                            <div v-if="props.drop">Drop here</div>

                            <span v-if="!props.names.length">
                                {{ props.placeholder }}
                            </span>

                            <span v-else :title="props.names.join(',')">
                                {{ props.names.join(',') }}
                            </span>
                        </template>

                        <template #input="props">
                            <UiButton color="primary"
                                      :size="size"
                                      @click="props.onClick"
                            >
                                {{ props.label }}
                            </UiButton>
                        </template>

                        <template #remove="props">
                            <UiButton color="primary"
                                      :size="size"
                                      @click="props.onClick"
                            >
                                {{ props.label }}
                            </UiButton>
                        </template>

                    </UiFileInput>
                </div>
            </div>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.FileInputStory {
    &__container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        column-gap: 40px;
    }
}

.UiImageFileInput {
    $input: &;

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__inner {
        display: flex;
    }

    &__data {
        background-color: var(--ui-secondary-color);
    }

    &__control {
        display: flex;
        flex-direction: column;
    }

    &__image {
        width: 100%;
        height: 100%;
    }

    &.--medium-size {
        #{$input} {
            &__wrapper {
                row-gap: 8px;
            }

            &__inner {
                column-gap: 8px;
            }

            &__data {
                width: 100px;
                height: 100px;
            }

            &__control {
                row-gap: 8px;
            }
        }
    }

    &.--large-size {
        #{$input} {
            &__wrapper {
                row-gap: 16px;
            }

            &__inner {
                column-gap: 16px;
            }

            &__data {
                width: 200px;
                height: 200px;
            }

            &__control {
                row-gap: 16px;
            }
        }
    }

    &.--size-error {
        #{$input} {
            &__info-size {
                color: red;
            }
        }
    }
}

.UiDocsFileInput {
    $input: &;

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__inner {
        display: flex;
        flex-direction: column;
    }

    &__data {
        overflow: hidden;
        background-color: var(--ui-secondary-color);
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__control {
        display: flex;
        align-items: center;
        width: 100%;
    }

    &__input,
    &__remove {
        flex-grow: 1;

        .UiButton {
            width: 100%;
        }
    }

    &.--medium-size {
        #{$input} {
            &__wrapper {
                row-gap: 8px;
            }

            &__inner {
                row-gap: 8px;
            }

            &__data {
                width: 300px;
                padding: 12px 24px;
            }

            &__control {
                column-gap: 8px;
            }
        }
    }

    &.--large-size {
        #{$input} {
            &__wrapper {
                row-gap: 16px;
            }

            &__inner {
                row-gap: 16px;
            }

            &__data {
                width: 400px;
                padding: 16px 32px;
            }

            &__control {
                column-gap: 16px;
            }
        }
    }

    &.--size-error {
        #{$input} {
            &__info-size {
                color: red;
            }
        }
    }
}
</style>
