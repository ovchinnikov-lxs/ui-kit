<script setup lang="ts">
import { computed } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/vue-3';
// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    modelValue: {
        type: String,
        default: '',
    },
});


const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

const emits = defineEmits<{
    'update:modelValue': [value: string]
}>();

const editor = useEditor({
    extensions: [
        StarterKit,
    ],
    content: props.modelValue,
    onUpdate: () => {
        if (!editor.value) {
            return false;
        }

        emits('update:modelValue', editor.value.getHTML());
    },
});
</script>

<template>
    <EditorContent
        v-bind="$attrs"
        :editor="editor"
        :class="[getClassName('RichText'), classList]"
    />
</template>

<style lang="scss">
.UiRichText {
    display: block;
    transition: all .3s ease;

    .ProseMirror {
        outline: none;
        -webkit-appearance: none;
    }

    &:focus {
        outline: none;
    }

    &.--is-disabled {
        pointer-events: none;
        user-select: none;
    }
}
</style>
