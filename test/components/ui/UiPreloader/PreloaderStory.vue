<script setup lang="ts">
import { defineProps, ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiPreloader from './UiPreloader.vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
});

const size= ref('medium');

</script>

<template>
    <ComponentWrapper :name="name"  class="PreloaderStory">
        <template #control>
            <div>
                sizes

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
            <UiPreloader :size="size"/>
        </template>
    </ComponentWrapper>
</template>
