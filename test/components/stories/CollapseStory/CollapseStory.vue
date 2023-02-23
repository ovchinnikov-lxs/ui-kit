<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiCollapse from '../../../../src/components/UiCollapse/UiCollapse.vue';

const isOpened = ref(true);
</script>
<template>
    <ComponentWrapper name="UiCollapse">
        <template #control>
            <label>
                <input type="checkbox" v-model="isOpened">
                isOpened
            </label>
        </template>

        <template #component>
            <UiCollapse :is-opened="isOpened">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi cumque, cupiditate debitis
                dignissimos dolorum eligendi laboriosam laudantium minima non odio officiis quaerat quam qui sint sit,
                ullam voluptas voluptate?
            </UiCollapse>
        </template>
    </ComponentWrapper>
</template>
