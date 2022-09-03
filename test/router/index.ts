// Common
import { createRouter, createWebHistory } from 'vue-router';

import DefaultView from '../views/DefaultView.vue';

const router = createRouter({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'DefaultView',
            component: DefaultView,
        },
    ],
});

export default router;
