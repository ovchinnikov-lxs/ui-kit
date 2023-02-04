<script setup lang="ts">
import { defineProps, ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiButton from './UiButton.vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
});

const color = ref('primary');
const rounded = ref(false);
const size = ref('medium');
</script>

<template>
    <ComponentWrapper :name="name"  class="ButtonStory">
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

            <div>...и многое другое, чекай код</div>

        </template>

        <template #component>
            <UiButton
                :color="color"
                :size="size"
                :rounded="rounded"
            >
                Button
            </UiButton>
        </template>
    </ComponentWrapper>
</template>
