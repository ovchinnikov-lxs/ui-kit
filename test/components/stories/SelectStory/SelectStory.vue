<script setup lang="ts">
import { ref } from 'vue';

// Components
import ComponentWrapper from '../../ComponentWrapper/ComponentWrapper.vue';
import UiSelect from '../../../../src/components/UiSelect/UiSelect.vue';

const value = ref(null);

const options: Array<{id: string, name: string}> =[{ id: 'a86c465a-1ccb-460f-be64-75f56c6cfe93', path: '/', name: 'Главная' }, { id: '10e93888-9e3b-4a85-ba1c-71695c1bd7f2', path: '/kalk', name: 'кальк' }, { id: '81206b4a-cf23-44ae-b744-0414a6cc7cfb', path: '/flats', name: 'Выбор квартир' }, { id: 'b498dd1a-93e2-4e58-a971-1a8129e89f65', path: '/favourites', name: 'Избранное' }, { id: '94addaa4-ba58-4359-8169-6fe1d44a7e08', path: '/hod-stroitelstva', name: 'ход строительства' }, { id: 'd7143725-0a47-4629-a667-9c7699d81505', path: '/planshet', name: 'планшет' }, { id: '2d4e84ba-4153-46d3-a178-75b7c51584df', path: '/reliz-novyz-blokov', name: 'Релиз новыз блоков' }, { id: '450541af-1b35-4bbf-8531-63183273661c', path: '/wat', name: 'wat' }, { id: 'bfcb2f32-16bb-4c4b-8b8f-56ab18ddb734', path: '/infra', name: 'infra' }, { id: '4bd6a73e-1f70-40b2-8d5e-8b20e58b54f1', path: '/sites-api', name: 'sites-api' }, { id: '8f8a102d-e753-4d1e-aca6-a5bbd3380f15', path: '/32', name: '32' }, { id: 'a9a70a9a-2eb6-4c06-9c3e-89cb2a13203b', path: '/object-gallery', name: 'Object-gallery' }];

function onInput(v) {
    console.log(v);
}
</script>

<template>
    <ComponentWrapper name="UiSelect">
        <template #control>
            <component v-for="item in options"
                       :key="item.id"
                       :is="value === item.id ? 'b' : 'span'"
            >
                &nbsp;{{ item.name }}&nbsp;
            </component>
        </template>

        <template #component>
            <UiSelect
                v-model="value"
                :options="options"
                color="primary"
                allow-empty
                empty-label="Любая валюта"
                @update:modelValue="onInput"
            />
        </template>
    </ComponentWrapper>
</template>

<style lang="scss">
.UiSelect {
    $select: &;

    width: 400px;

    &__bottom {
        &.--medium-size {
            margin-top: 8px;
            border-radius: 8px;
        }

        &.--primary-color {
            background-color: var(--ui-white-color);
            box-shadow: rgba(36, 46, 66, .09) 0 7px 29px 0;
        }
    }
}

.UiSelectHeader {
    border-style: solid;

    &.--medium-size {
        padding: 8px 12px;
        border-radius: 8px;
        border-width: 1px;
    }

    &.--primary-color {
        border-color: var(--ui-primary-color);
    }
}

.UiSelectOption {
    padding: 8px 12px;

    &.--primary-color {
        &.--is-active {
            color: var(--ui-secondary-color);
        }

        @include hover {
            background-color: var(--ui-primary-color);
        }
    }
}
</style>
