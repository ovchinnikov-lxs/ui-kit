<script setup lang="ts">
// Dependencies
import Quill from 'quill';

import { computed, onMounted, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

type ValueType = string;

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    modelValue: {
        type: String as PropType<ValueType>,
        default: '',
    },

    options: {
        type: Object,
        default: () => ({}),
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


const $emit = defineEmits<{
    'update:modelValue': [value: ValueType]
    change: [value: ValueType]
}>();

const editorRef = ref<HTMLDivElement | null>(null);

let editor: typeof Quill = null;
function onInit() {
    editor = new Quill(editorRef.value, {
        ...props.options,
        theme: 'snow',
    });
    editor.clipboard.dangerouslyPasteHTML(props.modelValue);

    editor.on('text-change', () => {
        $emit('update:modelValue', editor.root.innerHTML);
    });
}

watch(() => props.modelValue, (val: ValueType) => {
    if (val !== editor.root.innerHTML) {
        editor.clipboard.dangerouslyPasteHTML(val);
    }
});

onMounted(() => {
    onInit();
});
</script>

<template>
    <div v-bind="$attrs" :class="[getClassName('RichText'), classList]">
        <!--        <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet" />-->

        <div ref="editorRef" :class="getClassName('RichText__editor')"></div>
    </div>
</template>

<style lang="scss">
@import 'quill/dist/quill.core.css';
@import 'quill/dist/quill.bubble.css';
@import 'quill/dist/quill.snow.css';

.UiRichText {
    display: block;
    outline: none;
    -webkit-appearance: none;
    transition: all .3s ease;

    &:focus {
        outline: none;
    }

    &.--is-disabled {
        pointer-events: none;
        user-select: none;
    }
}
</style>
