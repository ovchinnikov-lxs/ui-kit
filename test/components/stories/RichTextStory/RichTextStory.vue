<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiRichText from '../../../../src/components/UiRichText/UiRichText.vue';
import { ref } from 'vue';

const value = ref('lol');
</script>
<template>
    <ComponentWrapper name="UiRichText">
        <template #control>
            <div v-html="value"></div>
        </template>
        <template #component>
            <UiRichText v-model="value"/>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiRichText {
    $text: &;

    width: 100%;

    &.--medium-size {
        #{$text} {
            &__wrapper {
                min-height: 500px;
            }
        }
    }
}
</style>
