<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import OImage from '../../../../src/components/OImage/OImage.vue';

</script>

<template>
    <ComponentWrapper name="OImage">
        <template #component>
            <OImage
                class-prefix="Ui"
                origin="https://images.unsplash.com/photo-1675446340536-46f629dcb858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
                preview="test/static/favicon.svg"
            />
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiImage {
    width: 500px;
}
</style>
