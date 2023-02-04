<script setup lang="ts">
import { ref } from 'vue';
import type { TypeSize } from '../../../../src/assets/utils/types';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import OLink from '../../../../src/components/OLink/OLink.vue';

const color = ref('primary');
const size = ref<TypeSize>('medium');
</script>
<template>
    <ComponentWrapper name="OLink"  class="ButtonStory">
        <template #control>
            <div>
                <b> current Size: {{ size }}</b>
                <label>
                    <input type="radio"
                           id="medium"
                           value="medium"
                           v-model="size"
                    >
                    medium
                </label>

                <label>
                    <input type="radio"
                           id="large"
                           value="large"
                           v-model="size"
                    >
                    large
                </label>
            </div>

            <div>
                <b>current color: {{ color }}</b>

                <label>
                    <input type="radio"
                           id="primary"
                           value="primary"
                           v-model="color"
                    >
                    primary
                </label>

                <label>
                    <input type="radio"
                           id="secondary"
                           value="secondary"
                           v-model="color"
                    >
                    secondary
                </label>

            </div>
        </template>

        <template #component>
            <OLink
                class-prefix="Ui"
                :color="color"
                :size="size"
                to="/"
            >
                Link
            </OLink>
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiLink {
    &.--medium-size {
        font-size: 16px;
        line-height: 125%;
    }

    &.--large-size {
        font-size: 32px;
        line-height: 1;
    }

    &.--primary-color {
        color: var(--ui-primary-color);

        @include hover {
            opacity: .8;
        }
    }

    &.--secondary-color {
        color: var(--ui-secondary-color);

        @include hover {
            color: var(--ui-primary-color);
        }
    }
}
</style>
