const DEFAULT_TEMPLATE = `
<UiRadio
    v-bind="args"
    v-model="args.modelValue"
    :options="[
        {
            id: null,
            name: 'Не задано',
        },
        {
            id: true,
            name: 'Дом',
        },
        {
            id: false,
            name: 'квартира',
        },
        {
            id: 'lol',
            name: 'Улица',
        },
    ]"
/>
`;

export {
    DEFAULT_TEMPLATE,
};
