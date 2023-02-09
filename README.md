# UI-kit

#### Vue 3 required

<img src="https://github.com/ovchinnikov-lxs/ui-kit/workflows/Testing/badge.svg?branch=develop"/><br/>
<img src="https://github.com/ovchinnikov-lxs/ui-kit/workflows/Publish/badge.svg?branch=master"/><br/>

## Использование

### Добавить в `.npmrc` токен, и установить зависимости

```sh
npm install @ovchinnikov-lxs/ui-kit
```

Пример: 
```vue
<script setup lang="ts">
// Components
import { UiButton } from '@ovchinnikov-lxs/ui-kit';

</script>

<template>
    <UiButton v-bind="$attrs">
        <slot></slot>
    </UiButton>
</template>

<style lang="scss">
.UiButton {
    background: red;
}
</style>

```

 👨‍🔧🛠 - в разработке
### Список компонентов
 - [`UiButton`](src%2Fcomponents%2FUiButton%2FUiButton.vue)
 - [`UiLink`](src%2Fcomponents%2FUiLink%2FUiLink.vue)
 - [`UiFormCell`](src%2Fcomponents%2FOFormCell%2FOFormCell.vue)
 - [`UiInput`](src%2Fcomponents%2FUiInput%2FUiInput.vue)
 - `UiFileInput` - 👨‍🔧🛠
 - `UIImageInput` - 👨‍🔧🛠
 - [`UiRichText`](src%2Fcomponents%2FUiRichText%2FUiRichText.vue)
 - `UiCheckbox` - 👨‍🔧🛠
 - `UiRadio` - 👨‍🔧🛠
 - [`UiPopover`](src%2Fcomponents%2FUiPopover%2FUiPopover.vue)
 - [`UiSelect`](src%2Fcomponents%2FUiSelect%2FUiSelect.vue)
   - [`UiSelectHeader`](src%2Fcomponents%2FUiSelect%2FUiSelectHeader.vue)
   - [`UiSelectOption`](src%2Fcomponents%2FUiSelect%2FUiSelectOption.vue)
 - [`UiTooltip`](src%2Fcomponents%2FUiTooltip%2FUiTooltip.vue)
 - [`UiIcon`](src%2Fcomponents%2FUiIcon%2FUiIcon.vue)
 - `UiTabs` - 👨‍🔧🛠
 - [`UiImage`](src%2Fcomponents%2FUiImage%2FUiImage.vue)
 - `UiPlate` - 👨‍🔧🛠
 - [`UiCollapse`](src%2Fcomponents%2FUiCollapse%2FUiCollapse.vue)
 - [`UiPreloader`](src%2Fcomponents%2FUiPreloader%2FUiPreloader.vue)

### Возможность использовать на проектах Composables 
- [useClassName](src%2Fcomposables%2FuseClassName.ts) - 👨‍🔧🛠
- [useColor](src%2Fcomposables%2FuseColor.ts) - 👨‍🔧🛠
- [useRoutable](src%2Fcomposables%2FuseRoutable.ts) - 👨‍🔧🛠
- [useSize](src%2Fcomposables%2FuseSize.ts) - 👨‍🔧🛠
- [useState](src%2Fcomposables%2FuseState.ts) - 👨‍🔧🛠
- [useStyle](src%2Fcomposables%2FuseStyle.ts) - 👨‍🔧🛠
