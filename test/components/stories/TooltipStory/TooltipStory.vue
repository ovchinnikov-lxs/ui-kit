<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiTooltip from '../../../../src/components/UiTooltip/UiTooltip.vue';

const isOpened = ref(false);
const position = ref('top');
</script>
<template>
    <ComponentWrapper name="UiTooltip">
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
            <UiTooltip class-prefix="Ui"
                       v-model="isOpened"
                       interactive
                       :position="position"
            >
                <template #header>TOP SIDE ELEMENT</template>

                <template #bottom>
                    <div class="plate">
                        BOTTOM SIDE ELEMENT
                    </div>
                </template>
            </UiTooltip>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
}

.plate {
    padding: 16px 24px;
    background-color: var(--ui-white-color);
    box-shadow: rgba(36, 46, 66, .09) 0 7px 29px 0;
}
</style>
