<script setup lang="ts">
// Common
import { defineAsyncComponent } from 'vue';

const components = [
    'Button',
    'Link',
    'FormCell',
    'Input',
    'RichText',
    'Collapse',
    'Image',
    'Preloader',
].map(name => ({
    name,
    component: defineAsyncComponent(() => import(`../components/stories/${name}Story/${name}Story.vue`)),
}));
</script>

<template>
    <div class="DefaultView">
        <div :class="$style.wrapper">

            <aside :class="$style.aside">
                <h5>Components List</h5>

                <ul :class="$style.nav">
                    <li v-for="item in components" :key="item">
                        <RouterLink :to="{ hash: `#${item.name}` }" :class="[$style.button, { [$style['--is-active']]: $route.hash === `#${item.name}` }]">
                            O{{ item.name }}
                        </RouterLink>
                    </li>
                </ul>
            </aside>

            <section :class="$style.section">
                <component
                    v-for="item in components"
                    :key="item.name"
                    :id="item.name"
                    :is="item.component"
                />
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
    top: 112px;
    height: fit-content;
}

.nav {
    @include reset-list;

    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.button {
    color: var(--ui-primary-color);
    cursor: pointer;

    &.--is-active {
        color: var(--ui-additional-color);
    }

    @include hover {
        opacity: .8;
    }
}

.section {
    display: flex;
    flex-direction: column;
    width: 1000px;
    row-gap: 56px;
    margin-left: auto;
}
</style>
