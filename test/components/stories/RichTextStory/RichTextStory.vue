<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiRichText from '../../../../src/components/UiRichText/UiRichText.vue';

</script>
<template>
    <ComponentWrapper name="UiRichText">
        <template #control>
            Control
        </template>
        <template #component>
            <UiRichText/>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss" >
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
