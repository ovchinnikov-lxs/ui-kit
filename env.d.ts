// / <reference types="vite/client" />
declare module '*.vue';

declare namespace NodeJS {
    interface Process {
        browser: boolean;
    }
}
