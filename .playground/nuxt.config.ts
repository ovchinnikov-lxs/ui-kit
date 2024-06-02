export default defineNuxtConfig({
    extends: ['..'],

    image: {
        domains: [
            'placehold.co',
        ],
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
});
