<script setup lang="ts">
import _ from 'lodash';
import { computed, onMounted, ref, useSlots, watch } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList, TypeOptions } from '~/assets/utils/types';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';
import { colorProps, useColor } from '~/composables/useColor';
import { stateProps, useState } from '~/composables/useState';
import { styleProps, useStyle } from '~/composables/useStyle';
import type { IOptionItem } from '~/assets/utils/interfaces';

// Components
import UiPopover from '~/components/UiPopover/UiPopover.vue';
import UiSelectHeader from '~/components/UiSelect/UiSelectHeader.vue';
import UiSelectOptions from '~/components/UiSelect/UiSelectOptions.vue';

type TypeValue = string | number | boolean | Array<string> | null;

const props = defineProps({
    ...classNameProps,
    ...sizeProps,
    ...colorProps,
    ...stateProps,
    ...styleProps,

    modelValue: {
        type: [String, null, Number, Boolean, Array] as PropType<TypeValue>,
        default: null,
    },

    options: {
        type: Array as PropType<TypeOptions>,
        default: () => [],
    },

    placeholder: {
        type: String,
        default: 'Выберите параметр',
    },

    multiple: {
        type: Boolean,
        default: false,
    },

    allowEmpty: {
        type: Boolean,
        default: false,
    },

    emptyLabel: {
        type: String,
        default: 'Любой',
    },

    autoClose: {
        type: Boolean,
        default: true,
    },
});

const $slots = useSlots();

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);
const { colorClassList } = useColor(props);
const { stateClassList } = useState(props);
const { styleClassList } = useStyle(props);

const $emit = defineEmits<{
    (e: 'update:modelValue', value: TypeValue): void
    (e: 'update:error', value: string | null | boolean): void
}>();

const isOpened = ref(false);
const actualValue = ref<TypeValue>(props.modelValue);

const isDisabled = computed(() => props.disabled || !props.options.length && !$slots['body-header'] && !$slots['body-footer']);
const valueArray = computed(() => {
    switch (typeof actualValue.value) {
        case 'undefined':
            return [];
        case 'boolean':
            return [actualValue.value.toString()];
        case 'string':
            return actualValue.value.split(',');
        case 'number':
            return [actualValue.value.toString()];
        default:
            return !actualValue.value
                ? []
                : [...actualValue.value];
    }
});

function clearError() {
    $emit('update:error', null);
}

function emitInput() {
    let val = _.clone(valueArray.value);

    if (!props.multiple) {
        val = val[0] || null;
    }

    $emit('update:modelValue', val);
}

function onOptionClick(option: IOptionItem) {
    if (option.disabled) {
        return false;
    }

    const value = option.id.toString();
    let newVal = _.clone(valueArray.value);

    if (props.multiple) {
        newVal.includes(value)
            ? newVal = newVal.filter((i: string) => i !== value)
            : newVal.push(value);
    } else {
        newVal.toString() === value.toString()
            ? newVal = props.allowEmpty ? null : value
            : newVal = value;
    }

    actualValue.value = newVal;

    clearError();
    emitInput();
}

function openSelect() {
    isOpened.value = true;
}

function closeSelect() {
    isOpened.value = false;
}

function getSelectValues(select: { options: HTMLOptionsCollection }) {
    const result = [];
    const options = select && select.options;
    let opt;

    for (let i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }

    return result;
}

function onMobileChange(e: Event) {
    const target = e.target as HTMLSelectElement;

    let newVal: null | Array<string> = getSelectValues(target);

    if (props.allowEmpty && newVal.includes(props.emptyLabel)) {
        newVal = null;
    }

    actualValue.value = newVal;

    clearError();
    emitInput();
}

const optionsList = computed(() => {
    const options = _.cloneDeep(props.options);

    if (props.allowEmpty && !props.multiple) {
        options.unshift({
            id: '',
            name: props.emptyLabel,
        });
    }

    return options;
});
const activeOptions = computed(() => props.options.filter(item => valueArray.value.includes(item.id.toString())));
const activeOptionsValues = computed(() => activeOptions.value.map(i => i.id));

watch(() => props.options, () => {
    if (
        !props.allowEmpty &&
        !actualValue.value &&
        props.options.length
    ) {
        onOptionClick(props.options[0]);
    }
}, {
    immediate: true,
});
watch(() => props.modelValue, (val: TypeValue) => {
    actualValue.value = val;
}, {
    immediate: true,
});

const classList = computed((): TypeClassList => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
    {
        '--is-disabled': isDisabled,
    },
]);

onMounted(() => {
    if (
        !props.allowEmpty &&
        props.options.length &&
        !props.modelValue
    ) {
        onOptionClick(props.options[0]);
    }
});
</script>
<template>
    <UiPopover
        v-model="isOpened"
        :auto-close="!multiple && autoClose"
        :disabled="isDisabled"
        parent-width
    >
        <template #top>
            <div ref="container" :class="[getClassName('Select'), classList]">
                <div :class="getClassName('Select__top')">
                    <slot name="header-component"
                          :placeholder="placeholder"
                          :active-options="activeOptions"
                          :size="size"
                          :multiple="multiple"
                          :is-opened="isOpened"
                          :disabled="isDisabled"
                          :error="error"
                    >
                        <UiSelectHeader
                            :class-prefix="classPrefix"
                            :placeholder="placeholder"
                            :active-options="activeOptions"
                            :size="size"
                            :color="color"
                            :multiple="multiple"
                            :is-opened="isOpened"
                            :disabled="isDisabled"
                            :error="error"
                        >
                            <slot name="header-inner"
                                  :placeholder="placeholder"
                                  :active-options="activeOptions"
                                  :size="size"
                                  :is-opened="isOpened"
                                  :error="error"
                            />
                        </UiSelectHeader>
                    </slot>
                </div>

                <input type="text"
                       style="display: block; width: 0; height: 0; padding: 0; border: none;"
                       @focus="openSelect"
                       @blur="closeSelect"
                />

                <select v-bind="$attrs"
                        :multiple="multiple"
                        :class="getClassName('Select__native')"
                        @focus="openSelect"
                        @change="onMobileChange"
                >
                    <option v-for="option in optionsList"
                            :key="option.id"
                            :value="option.id"
                            :selected="activeOptionsValues.includes(option.id)"
                    >
                        {{ option.name }}
                    </option>

                </select>
            </div>
        </template>

        <template #bottom>
            <div :class="[getClassName('Select__bottom'), classList]">
                <div v-if="$slots['body-header']" :class="getClassName('Select__body-header')">
                    <slot name="body-header"></slot>
                </div>

                <ul :class="getClassName('Select__body')">
                    <li v-for="option in optionsList"
                        :key="option.value"
                        :class="getClassName('Select__option')"
                        @click="onOptionClick(option)"
                    >
                        <slot name="option-component"
                              :option="option"
                              :option-id="option.id"
                              :option-name="option.name"
                              :active="activeOptionsValues.includes(option.id)"
                              :disabled="option.disabled"
                              :multiple="multiple"
                              :size="size"
                              :color="color"
                        >
                            <UiSelectOptions
                                :key="option.id"
                                :class-prefix="classPrefix"
                                :option-id="option.id"
                                :option-name="option.name"
                                :active="activeOptionsValues.includes(option.id)"
                                :disabled="option.disabled"
                                :multiple="multiple"
                                :size="size"
                                :color="color"
                            >
                                <template #default>
                                    <slot name="option-inner"
                                          :option="option"
                                          :option-name="option.name"
                                          :option-id="option.id"
                                          :active="activeOptionsValues.includes(option.id)"
                                          :disabled="option.disabled"
                                          :size="size"
                                          :color="color"
                                    />
                                </template>
                            </UiSelectOptions>
                        </slot>
                    </li>
                </ul>

                <div v-if="$slots['body-footer']" :class="getClassName('Select__body-footer')">
                    <slot name="body-footer"></slot>
                </div>
            </div>
        </template>
    </UiPopover>
</template>

<style lang="scss">
.UiSelect {
    position: relative;
    display: block;
    width: 100%;
    user-select: none;

    &.--is-disabled {
        pointer-events: none;
    }

    &__bottom {
        overflow: hidden;
    }

    &__body {
        @include reset-list;

        overflow: scroll;
        max-height: 220px;
    }

    &__native {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        width: 100%;
        height: 100%;
        opacity: 0;

        @media only screen and (max-width: 800px) {
            visibility: visible;
        }
    }
}
</style>
