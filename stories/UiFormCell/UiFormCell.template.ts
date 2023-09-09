const DEFAULT_TEMPLATE = `
<UiFormCell v-bind="args">
    <template #label>label slot</template>
    <template #default>default slot</template>
    <template #info>info slot</template>
    <template #error="props">Error: {{ props.error }}</template>
</UiFormCell>
`;

export {
    DEFAULT_TEMPLATE,
};
