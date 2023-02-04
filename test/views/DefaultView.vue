<script setup lang="ts">
// Common
import { RouterLink } from 'vue-router';

import ButtonStory from '../components/ui/UiButton/ButtonStory.vue';
import PreloaderStory from '../components/ui/UiPreloader/PreloaderStory.vue';

function onRouterClick(e) {
    const el = document.querySelector(e.target.hash);
    window.scrollTo({
        top: el.getBoundingClientRect().top - 56,
        behavior: 'smooth',
    });
}

const components = {
    BUTTON: 'OButton',
    PRELOADER: 'OPreloader',
};

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
                <ButtonStory :name="components.BUTTON"/>
                <PreloaderStory :name="components.PRELOADER"/>
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
