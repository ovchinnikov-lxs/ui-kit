<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <main :class="$style.App">
        <header :class="$style.header">
            <h1>Ui-kit</h1>

            (Потихоньку переношу в storybook)
        </header>

        <main :class="$style.container">
            <RouterView></RouterView>
        </main>

        <footer :class="$style.footer">
            {{ new Date().getFullYear() }}&nbsp;&copy; @ovchinnikov-lxs-frontend/ui-kit
        </footer>
    </main>
</template>

<style lang="scss" module>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Verdana, sans-serif;
}

:root {
    --ui-primary-color: #689fef;
    --ui-secondary-color: #9cc3de;
    --ui-additional-color: #0046c9;
    --ui-white-color: #fff;
    --ui-black-color: #242e42;

    @media (prefers-color-scheme: dark) {
        --ui-primary-color: #138a2f;
        --ui-secondary-color: #4b5969;
        --ui-additional-color: #e4ff00;
        --ui-white-color: #242e42;
        --ui-black-color: #c0c0c0;
    }
}

.App {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--ui-white-color);
    color: var(--ui-black-color);
}

.header {
    display: flex;
    align-items: center;
    column-gap: 32px;
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
