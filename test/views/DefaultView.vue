<script setup lang="ts">
// Common
import { RouterLink } from 'vue-router';
// Components
import ComponentWrapper from '/test/components/ComponentWrapper/ComponentWrapper.vue';

// Library Components
import OButton from '~/components/OButton/OButton.vue';
import OPreloader from '~/components/OPreloader/OPreloader.vue';

// UiComponents
import UiButton from '/test/components/ui/UiButton/UiButton.vue';
import UiPreloader from '/test/components/ui/UiPreloader/UiPreloader.vue';

const components = [
    'OButton',
    'OPreloader',
];

function onRouterClick(e) {
    const el = document.querySelector(e.target.hash);
    window.scrollTo({
        top: el.getBoundingClientRect().top - 56,
        behavior: 'smooth',
    });
}

</script>

<template>
    <div class="DefaultView">
        <div :class="$style.wrapper">

            <aside :class="$style.aside">
                <h5>Components List</h5>

                <ul>
                    <li v-for="item in components" :key="item">
                        <RouterLink
                            :to="{ hash: `#${item}` }"
                            @click="onRouterClick"
                        >
                            {{ item }}
                        </RouterLink>
                    </li>
                </ul>
            </aside>

            <section :class="$style.section">
                <ComponentWrapper name="OButton">
                    <template #instance>
                        <OButton>Submit</OButton>
                    </template>

                    <template #secondary>
                        <UiButton>Submit</UiButton>
                    </template>
                </ComponentWrapper>

                <ComponentWrapper name="OPreloader">
                    <template #instance>
                        <OPreloader>Submit</OPreloader>
                    </template>

                    <template #secondary>
                        <UiPreloader></UiPreloader>
                    </template>
                </ComponentWrapper>

            </section>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    column-gap: 64px;
}

.aside {
    position: sticky;
    top: 56px;
    height: fit-content;
}

.section {
    display: flex;
    flex-direction: column;
    width: 1000px;
    row-gap: 56px;
    margin-left: auto;
}
</style>
