const DEFAULT_TEMPLATE = `
<UiPopover v-bind="args" v-model="args.modelValue">
    <template #top>TOP SIDE ELEMENT</template>

    <template #bottom>
        BOTTOM SIDE ELEMENT
    </template>
</UiPopover>
`;

export {
    DEFAULT_TEMPLATE,
};
