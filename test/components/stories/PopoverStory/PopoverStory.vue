<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiPopover from '../../../../src/components/UiPopover/UiPopover.vue';

const isOpened = ref(true);
const position = ref('top');
</script>

<template>
    <ComponentWrapper name="UiPopover">
        <template #control>
            <label>
                <input type="checkbox" v-model="isOpened">
                isOpened
            </label>

            <div>
                position:
                <label>
                    <input type="radio"
                           value="top"
                           v-model="position"
                    >
                    top
                </label>

                <label>
                    <input type="radio"
                           value="right"
                           v-model="position"
                    >
                    right
                </label>

                <label>
                    <input type="radio"
                           value="bottom"
                           v-model="position"
                    >
                    bottom
                </label>

                <label>
                    <input type="radio"
                           value="left"
                           v-model="position"
                    >
                    left
                </label>

                <label>
                    <input type="radio"
                           value="center"
                           v-model="position"
                    >
                    center
                </label>
            </div>

        </template>
        <template #component>
            <UiPopover v-model="isOpened" :position="position">
                <template #top>TOP SIDE ELEMENT</template>

                <template #bottom>
                    <div class="plate">
                        BOTTOM SIDE ELEMENT
                    </div>
                </template>
            </UiPopover>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiPopover {
    &__body {
        margin: 24px;
    }
}

.plate {
    padding: 16px 24px;
    background-color: var(--ui-white-color);
    box-shadow: rgba(36, 46, 66, .09) 0 7px 29px 0;
}
</style>
