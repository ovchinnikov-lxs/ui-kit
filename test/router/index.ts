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
    async scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            setTimeout(() => {
                const el = window.location.href.split('#')[1];
                if (el.length) {
                    document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else if (savedPosition) {
            return savedPosition;
        } else {
            document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
        }
    },
});

export default router;
