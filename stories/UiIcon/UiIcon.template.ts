const DEFAULT_TEMPLATE = `
<UiIcon v-bind="args"/>
`;
const CUSTOM_TEMPLATE = `
<UiIcon v-bind="args">
    <template #sprite-component="props">
        <svg :viewBox="props.viewBox">
            <path
                d="M13.75 20.8615L26.389 8.22112L28.3346 10.1654L13.75 24.75L4.9995 15.9995L6.94375 14.0552L13.75 20.8615Z"
            />
        </svg>
    </template>
</UiIcon>
`;

export {
    CUSTOM_TEMPLATE,
    DEFAULT_TEMPLATE,
};
