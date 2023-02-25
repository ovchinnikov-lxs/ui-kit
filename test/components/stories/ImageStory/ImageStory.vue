<script setup lang="ts">
// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiImage from '../../../../src/components/UiImage/UiImage.vue';

</script>

<template>
    <ComponentWrapper name="UiImage">
        <template #component>
            <UiImage
                class="ImageStory__image"
                origin="https://images.unsplash.com/photo-1675446340536-46f629dcb858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
            >
                <template #preview>
                    <div class="preview">
                    </div>
                </template>
            </UiImage>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.ImageStory {
    &__image {
        width: 500px;
        height: 500px;
    }
}

.preview {
    $base-color: #ddd;
    $shine-color: #e8e8e8;
    $animation-duration: 1.6s;
    $avatar-offset: 52 + 16;

    width: 100%;
    height: 100%;
    background-color: #ccc;
    background-image: linear-gradient(90deg, $base-color 0, $shine-color 40px, $base-color 80px);
    background-size: 600px;
    animation: shine-avatar $animation-duration infinite linear;

    @keyframes shine-avatar {
        0% {
            background-position: -100px + $avatar-offset;
        }

        40%,
        100% {
            background-position: 600px + $avatar-offset;
        }
    }
}
</style>
