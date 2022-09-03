<script setup lang="ts">
// Components
import OButton from '~/components/OButton/OButton.vue';

</script>

<template>
    <OButton
        class-prefix="Ui"
        v-bind="$attrs"
    >
        <slot></slot>
    </OButton>
</template>

<style lang="scss">
.UiButton {
    background: red;
}
</style>
