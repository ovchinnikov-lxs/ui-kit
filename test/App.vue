<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <main :class="$style.App">
        <header :class="$style.header">
            <h1>O-COMPONENTS</h1>
        </header>

        <main :class="$style.container">
            <RouterView></RouterView>
        </main>

        <footer :class="$style.footer">
            {{ new Date().getFullYear() }}&nbsp;&copy; @ovchinnikov-lxs/o-components
        </footer>
    </main>
</template>

<style lang="scss" module>
body {
    margin: 0;
}

:root {
    --ui-primary-color: #689fef;
    --ui-secondary-color: #9cc3de;
    --ui-additional-color: #0046c9;
    --ui-white-color: #ffff;
    --ui-black-color: #242e42;
}

.App {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    font-family: Verdana, sans-serif;
}

.header {
    padding: 0 32px;
    background-color: var(--ui-black-color);
    color: var(--ui-primary-color);
}

.container {
    flex-grow: 1;
    padding: 32px;
}

.footer {
    display: flex;
    justify-content: center;
    padding: 32px;
    background-color: var(--ui-black-color);
    color: var(--ui-white-color);
}
</style>
