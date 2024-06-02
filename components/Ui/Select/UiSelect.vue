<template>
    <UiPopover
        v-model="isOpened"
        :auto-close="!multiple && autoClose"
        :disabled="isDisabled"
        parent-width
    >
        <template #top>
            <div :class="[getClassName('Select'), classList]">
                <div :class="getClassName('Select__top')">
                    <slot
                        name="header-component"
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
                            <template
                                v-if="$slots['header-inner']"
                                #default
                            >
                                <slot
                                    name="header-inner"
                                    :placeholder="placeholder"
                                    :active-options="activeOptions"
                                    :size="size"
                                    :is-opened="isOpened"
                                    :error="error"
                                />
                            </template>

                            <template
                                v-if="$slots['header-chevron']"
                                #chevron="chevronAttrs"
                            >
                                <slot
                                    name="header-chevron"
                                    v-bind="chevronAttrs"
                                ></slot>
                            </template>
                        </UiSelectHeader>
                    </slot>
                </div>
            </div>
        </template>

        <template #bottom>
            <div :class="[getClassName('Select__bottom'), classList]">
                <div
                    v-if="$slots['body-header']"
                    :class="getClassName('Select__body-header')"
                >
                    <slot name="body-header"></slot>
                </div>

                <div
                    v-if="options.length"
                    :class="getClassName('Select__body')"
                >
                    <div
                        v-for="option in options"
                        :key="`select-item-${option.id}`"
                        :class="getClassName('Select__option')"
                        @click="onOptionClick(option)"
                    >
                        <slot
                            name="option-component"
                            :option="option"
                            :option-id="option.id"
                            :option-name="option.name"
                            :active="isActiveOption(option.id)"
                            :disabled="option.disabled"
                            :multiple="multiple"
                            :size="size"
                            :color="color"
                        >
                            <LazyUiSelectOption
                                :id="option.id"
                                :class-prefix="classPrefix"
                                :name="option.name"
                                :active="isActiveOption(option.id)"
                                :disabled="option.disabled"
                                :multiple="multiple"
                                :size="size"
                                :color="color"
                            >
                                <template #default>
                                    <slot
                                        name="option-inner"
                                        :option="option"
                                        :option-name="option.name"
                                        :option-id="option.id"
                                        :active="isActiveOption(option.id)"
                                        :disabled="option.disabled"
                                        :size="size"
                                        :color="color"
                                    />
                                </template>

                                <template
                                    v-if="$slots['option-icon']"
                                    #icon="optionIconProps"
                                >
                                    <slot
                                        name="option-icon"
                                        v-bind="optionIconProps"
                                    ></slot>
                                </template>
                            </LazyUiSelectOption>
                        </slot>
                    </div>
                </div>

                <div
                    v-if="$slots['body-footer']"
                    :class="getClassName('Select__body-footer')"
                >
                    <slot name="body-footer"></slot>
                </div>
            </div>
        </template>
    </UiPopover>
</template>
<script setup lang="ts">
import type { IUiSelectProps, IUiSelectValue } from 'ui-layer/composables/select';
import type { IUiOptionItem, TUiClassList } from 'ui-layer/types';

const props = withDefaults(defineProps<IUiSelectProps>(), {
    options: () => [],
    placeholder: 'Select item',
    autoClose: true,
});

const model = defineModel<IUiSelectValue>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

const isOpened = ref(false);

const isDisabled = computed(() => props.disabled || !props.options?.length);

const activeOptions = computed(() =>
    props.options.filter((item) => {
        if (Array.isArray(model.value)) {
            return model.value.includes(item.id);
        }

        return model.value === item.id;
    }),
);

function onOptionClick(option: IUiOptionItem) {
    if (option.disabled) {
        return false;
    }

    let modelValue = model.value;

    if (props.multiple && !Array.isArray(modelValue)) {
        modelValue = modelValue !== '' && typeof modelValue !== 'undefined' ? [modelValue] : [];
    }

    if (Array.isArray(modelValue)) {
        if (modelValue.includes(option.id)) {
            modelValue = modelValue.filter((item) => item !== option.id);
        } else {
            modelValue.push(option.id);
        }
    } else {
        if (modelValue === option.id) {
            modelValue = '';
        } else {
            modelValue = option.id;
        }
    }

    model.value = modelValue;
}

const isActiveOption = computed(() => (id: IUiOptionItem['id']) => {
    if (Array.isArray(model.value)) {
        return model.value.includes(id);
    }

    return model.value === id;
});

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
    {
        '--is-disabled': isDisabled.value,
    },
]);
</script>

<style lang="scss">
.UiSelect {
    position: relative;
    display: block;
    width: 100%;
    user-select: none;

    @include ui-state('disabled');

    &__bottom {
        @include ui-state('disabled');
    }

    &__body {
        max-height: 220px;
        overflow: auto;
    }
}
</style>
