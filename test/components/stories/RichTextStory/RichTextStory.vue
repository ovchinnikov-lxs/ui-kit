<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import ORichText from '../../../../src/components/ORichText/ORichText.vue';

</script>
<template>
    <ComponentWrapper name="ORichText">
        <template #control>
            Control
        </template>
        <template #component>
            <ORichText class-prefix="Ui"/>
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
