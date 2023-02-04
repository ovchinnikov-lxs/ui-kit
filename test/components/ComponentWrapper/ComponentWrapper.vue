<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div :id="name" class="ComponentWrapper">
        <div :class="$style.wrapper">

            <h3 :class="$style.title">
                {{ name }}
            </h3>

            <div :class="$style.control">
                <slot name="control"></slot>
            </div>

            <main :class="$style.container">

                <section :class="$style.section">
                    <slot name="component">

                    </slot>
                </section>

            </main>

        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
}

.container {
    display: flex;
    padding: 32px;
}

.section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}
</style>
