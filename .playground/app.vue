<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
* {
    font-family: monospace;
}

:root {
    --color-primary: #3498db; /* Primary blue */
    --color-secondary: #2ecc71; /* Secondary green */
    --color-accent: #e74c3c; /* Accent red */
    --color-background: #ecf0f1; /* Background light grey */
    --color-text: #2c3e50; /* Text dark grey */
    --color-border: #bdc3c7; /* Border grey */

    /* Shades */
    --color-primary-light: #5dade2;
    --color-primary-dark: #2a80b9;
    --color-secondary-light: #58d68d;
    --color-secondary-dark: #28b463;
    --color-accent-light: #f1948a;
    --color-accent-dark: #c0392b;

    /* Additional colors */
    --color-warning: #f39c12; /* Warning orange */
    --color-success: #27ae60; /* Success green */
    --color-info: #3498db; /* Info blue */
    --color-danger: #e74c3c; /* Danger red */
}
</style>
