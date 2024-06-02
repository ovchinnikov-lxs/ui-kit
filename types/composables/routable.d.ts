import type { Component } from 'vue';

export interface IUiRoutableProps {
    /**
     *  The type of routable components
     */
    tag?: 'button' | 'a' | 'NuxtLink' | 'span' | Component;
}
