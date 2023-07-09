const DEFAULT_TEMPLATE = `
    <UiCheckbox v-bind="args">
        <template #checkbox><div>✓</div></template>
        <template #default>label</template>
    </UiCheckbox>
`;

export {
    DEFAULT_TEMPLATE,
};
