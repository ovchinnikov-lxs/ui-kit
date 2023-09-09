const IMAGE_TEMPLATE = `
<UiFileInput v-bind="args" class-prefix="UiImage">
    <template #data="props">
        <div v-if="props.drop">Drop here</div>

        <UiImage
            v-if="props.urls && props.urls[0]"
            :origin="props.urls[0]"
            class="UiImageFileInput__image"
        />
    </template>

    <template #input="props">
        <UiButton :color="args.color"
                  :size="args.size"
                  @click="props.onClick"
        >
            {{ props.label }}
        </UiButton>
    </template>

    <template #remove="props">
        <UiButton :color="args.color"
                  :size="args.size"
                  @click="props.onClick"
        >
            {{ props.label }}
        </UiButton>
    </template>
</UiFileInput>
`;

const DOCS_TEMPLATE = `
<UiFileInput
    v-bind="args"
    class-prefix="UiDocs"
>
    <template #data="props">
        <div v-if="props.drop">Drop here</div>

        <span v-if="!props.names.length">
            {{ props.placeholder }}
        </span>

        <span v-else :title="props.names.join(',')">
            {{ props.names.join(',') }}
        </span>
    </template>

    <template #input="props">
        <UiButton :color="args.color"
                  :size="args.size"
                  @click="props.onClick"
        >
            {{ props.label }}
        </UiButton>
    </template>

    <template #remove="props">
        <UiButton :color="args.color"
                  :size="args.size"
                  @click="props.onClick"
        >
            {{ props.label }}
        </UiButton>
    </template>
</UiFileInput>
`;

export {
    IMAGE_TEMPLATE,
    DOCS_TEMPLATE,
};
