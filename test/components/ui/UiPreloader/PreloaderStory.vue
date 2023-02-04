<script setup lang="ts">
import { defineProps } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiPreloader from './UiPreloader.vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <ComponentWrapper :name="name"  class="PreloaderStory">
        <template #control>Control</template>
        <template #component>
            <UiPreloader/>
        </template>
    </ComponentWrapper>
</template>
