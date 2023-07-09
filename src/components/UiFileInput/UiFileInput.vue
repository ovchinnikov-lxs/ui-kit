<script setup lang="ts">
// Common
import type { PropType } from 'vue';
import { computed, reactive, ref, watch } from 'vue';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';

// Helpers
import { formatBytes } from '~/assets/utils/helpers/file-helpers';

// Types
import type { TypeClassList } from '~/assets/utils/types';

type TypeValue = File | File[] | null | string | string[];

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    /**
     *  Value - file or url to file or array
     */
    modelValue: {
        type: [Array, File, String, null] as PropType<TypeValue>,
        default: null,
    },

    /**
     *  Max size file in bytes
     */
    maxSize: {
        type: Number,
        default: 1024,
    },

    /**
     *  Extensions of file
     */
    extensions: {
        type: Array as PropType<string[]>,
        default: () => [],
    },

    /**
     * Multiple select files
     */
    multiple: {
        type: Boolean,
        default: false,
    },

    /**
     * Placeholder text for CTA
     */
    placeholder: {
        type: String,
        default: 'Choice a files',
    },
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const $emit = defineEmits<{
    'update:modelValue': [value: TypeValue]
    remove: [value: TypeValue]
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const actualValue = ref<TypeValue>(null);
watch(() => props.modelValue, (val: TypeValue) => {
    actualValue.value = val;
}, {
    immediate: true,
});

const filesUrls = computed(() => {
    const files: Array<File | string> = [];

    if (!actualValue.value) {
        return files;
    }

    if (!Array.isArray(actualValue.value)) {
        files.push(actualValue.value);
    }

    files.concat(actualValue.value);

    return files.map((file: File | string) => {
        if (typeof file === 'string') {
            return file;
        }

        return URL.createObjectURL(file);
    });
});

const filesNames = computed(() => {
    if (!actualValue.value) {
        return [];
    }

    const getFileName = (file: File | string) => {
        if (typeof file === 'string') {
            return file;
        }

        return file.name;
    };

    if (!Array.isArray(actualValue.value)) {
        return [getFileName(actualValue.value)];
    }

    return actualValue.value.map(f => getFileName(f));
});

// Errors Logic
const innerErrors = reactive({
    extension: false,
    size: false,
});
const acceptExtensions = computed(() => props.extensions.reduce((sum, current) => sum + `, .${current}`, '').substring(1));
const displayMaxSize = computed(() => formatBytes(props.maxSize * 1024));

function validateExtension(file: File) {
    const ex = file.name.match(/.[a-zA-Z0-9]+$/g);

    if (!ex) {
        innerErrors.extension = true;
        return false;
    } else {
        const ext = ex[0].substring(1).toLowerCase();

        if (props.extensions?.length && !acceptExtensions.value.includes(ext)) {
            innerErrors.extension = true;
            actualValue.value = null;

            return false;
        }
    }

    return true;
}

function validateSize(file: File) {
    if (props.maxSize * 1024 <= file.size) {
        innerErrors.size = true;
        return false;
    } else {
        return true;
    }
}

function resetErrors() {
    innerErrors.size = false;
    innerErrors.extension = false;
}

function addFiles(files: FileList | null) {
    if (!files?.length) {
        return false;
    }

    const validFiles = Array
        .from(files)
        .filter(f => validateExtension(f) && validateSize(f));

    if (props.multiple) {
        actualValue.value = validFiles;
    } else {
        actualValue.value = validFiles[0];
    }

    $emit('update:modelValue', actualValue.value);
}

// Buttons
function onInputClick() {
    if (!inputRef.value) {
        return false;
    }

    inputRef.value.click();
}

function onRemoveClick() {
    if (!inputRef.value) {
        return false;
    }

    inputRef.value.value = '';
    actualValue.value = null;
    $emit('update:modelValue', actualValue.value);
}

const inputLabel = computed(() => {
    if (!actualValue.value) {
        return 'Загрузить';
    }

    return 'Заменить';
});
const removeLabel = computed(() => 'Удалить');

// Drag&Drop
const dropInit = ref(false);

function onDrop(e: DragEvent) {
    resetErrors();
    dropInit.value = false;

    if (e.dataTransfer) {
        addFiles(e.dataTransfer.files);
    }
}

// Input
function onInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    resetErrors();

    addFiles(target.files);
}

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,

    {
        '--size-error': innerErrors.size,
    },
]);
</script>

<template>
    <div :class="[getClassName('FileInput'), classList]">
        <div :class="getClassName('FileInput__wrapper')">
            <div :class="getClassName('FileInput__inner')">
                <div v-if="$slots.data"
                     :class="getClassName('FileInput__data')"
                     @click="onInputClick"
                     @dragover.prevent="dropInit = true"
                     @dragleave.prevent="dropInit = false"
                     @drop.prevent="onDrop"
                >
                    <slot
                        name="data"
                        :urls="filesUrls"
                        :names="filesNames"
                        :placeholder="placeholder"
                        :drop="dropInit"
                    >
                    </slot>
                </div>

                <div v-if="$slots.input || $slots.remove" :class="getClassName('FileInput__control')">
                    <div v-if="$slots.input" :class="getClassName('FileInput__input')">
                        <slot
                            name="input"
                            :label="inputLabel"
                            :on-click="onInputClick"
                        >
                        </slot>
                    </div>

                    <div v-if="$slots.remove" :class="getClassName('FileInput__remove')">
                        <slot
                            name="remove"
                            :label="removeLabel"
                            :on-click="onRemoveClick"
                        >
                        </slot>
                    </div>
                </div>
            </div>

            <div :class="getClassName('FileInput__info')">
                <div v-if="acceptExtensions" :class="getClassName('FileInput__info-ext')">
                    Допустимые расширения файла: {{ acceptExtensions }}
                </div>

                <div :class="getClassName('FileInput__info-size')">
                    Максимальный размер файла {{ displayMaxSize }}.
                </div>
            </div>

            <input ref="inputRef"
                   name="file"
                   type="file"
                   hidden
                   :accept="acceptExtensions"
                   :multiple="multiple"
                   @change="onInputChange"
            />
        </div>
    </div>
</template>

<style lang="scss">
.UiFileInput {
    $input: &;

    &__wrapper {
        width: 100%;
        height: 100%;
    }

    &__data {
        cursor: pointer;
    }
}
</style>
