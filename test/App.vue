<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';

const colorSet = {
    light: {
        primary: '#689fef',
        secondary: '#9cc3de',
        additional: '#0046c9',
        white: '#ffffff',
        black: '#242e42',
    },
    dark: {
        primary: '#138a2f',
        secondary: '#4b5969',
        additional: '#e4ff00',
        white: '#242e42',
        black: '#c0c0c0',
    },
};

const theme = ref<'light' | 'dark'>('light');

function setTheme() {
    const palette = colorSet[theme.value];

    Object.keys(palette).forEach(color => {
        document.documentElement.style.setProperty(`--ui-${color}-color`, palette[color]);
    });
}

function initTheme() {
    theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    setTheme();

    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches }) => {
            theme.value = matches
                ? 'dark'
                : 'light';
            setTheme();
        });
}

onMounted(() => {
    initTheme();
});
</script>

<template>
    <main :class="$style.App">
        <header :class="$style.header">
            <h1>Ui-kit</h1>
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
