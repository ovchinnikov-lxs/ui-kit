<script setup lang="ts">
// Common
import { computed, defineAsyncComponent } from 'vue';

function onRouterClick(id) {
    const el = document.querySelector(`#${id}`);

    window.scrollTo({
        top: el.getBoundingClientRect().top,
        behavior: 'smooth',
    });
}

const components = [
    'Button',
    'Link',
    'FormCell',
    'Collapse',
    'Image',
    'Preloader',
];

const getComponent = computed(() => key => defineAsyncComponent(() => import(`../components/stories/${key}Story/${key}Story.vue`)));

</script>

<template>
    <div class="DefaultView">
        <div :class="$style.wrapper">

            <aside :class="$style.aside">
                <h5>Components List</h5>

                <ul>
                    <li v-for="item in components" :key="item">
                        <div  @click="onRouterClick(item)">
                            O{{ item }}
                        </div>
                    </li>
                </ul>
            </aside>

            <section :class="$style.section">
                <component
                    v-for="(value) in components"
                    :key="value"
                    :id="value"
                    :is="getComponent(value)"
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

    ul {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }

    li > * {
        cursor: pointer;
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
