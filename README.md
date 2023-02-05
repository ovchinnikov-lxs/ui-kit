# o-components

#### VUE3 ONLY библиотека компонентов

Develop Test
<img src="https://github.com/ovchinnikov-lxs/o-components/workflows/Testing/badge.svg?branch=develop"/><br/>
Master Publish
<img src="https://github.com/ovchinnikov-lxs/o-components/workflows/Publish/badge.svg?branch=master"/><br/>

## Использование

### Добавить в `.npmrc` токен, и установить зависимости

```sh
npm install @ovchinnikov-lxs/o-components
```
#### Для создания собственного компонента, добавляем пропс `class-prefix` и задаем стилистику компонента
Пример: 
```vue
<script setup lang="ts">
// Components
import { OButton } from '@ovchinnikov-lxs/o-components';

</script>

<template>
    <OButton
        class-prefix="Ui"
        v-bind="$attrs"
    >
        <slot></slot>
    </OButton>
</template>

<style lang="scss">
.UiButton {
    background: red;
}
</style>

```

 👨‍🔧🛠 - в разработке
### Список компонентов
 - [`OButton`](src%2Fcomponents%2FOButton%2FOButton.vue)
 - [`OLink`](src%2Fcomponents%2FOLink%2FOLink.vue)
 - [`OFormCell`](src%2Fcomponents%2FOFormCell%2FOFormCell.vue)
 - [`OInput`](src%2Fcomponents%2FOInput%2FOInput.vue)
 - `OFileInput` - 👨‍🔧🛠
 - `OImageInput` - 👨‍🔧🛠
 - [`ORichText`](src%2Fcomponents%2FORichText%2FORichText.vue)
 - `OCheckbox` - 👨‍🔧🛠
 - `ORadio` - 👨‍🔧🛠
 - [`OPopover`](src%2Fcomponents%2FOPopover%2FOPopover.vue)
 - [`OSelect`](src%2Fcomponents%2FOSelect%2FOSelect.vue)
   - [`OSelectHeader`](src%2Fcomponents%2FOSelect%2FOSelectHeader.vue)
   - [`OSelectOption`](src%2Fcomponents%2FOSelect%2FOSelectOption.vue)
 - `OTooltip` - 👨‍🔧🛠
 - [`OIcon`](src%2Fcomponents%2FOIcon%2FOIcon.vue)
 - `OTabs` - 👨‍🔧🛠
 - [`OImage`](src%2Fcomponents%2FOImage%2FOImage.vue)
 - `OPlate` - 👨‍🔧🛠
 - [`OCollapse`](src%2Fcomponents%2FOCollapse%2FOCollapse.vue)
 - [`OPreloader`](src%2Fcomponents%2FOPreloader%2FOPreloader.vue)

### Возможность использовать на проектах Composables 
- [useClassName](src%2Fcomposables%2FuseClassName.ts) - 👨‍🔧🛠
- [useColor](src%2Fcomposables%2FuseColor.ts) - 👨‍🔧🛠
- [useRoutable](src%2Fcomposables%2FuseRoutable.ts) - 👨‍🔧🛠
- [useSize](src%2Fcomposables%2FuseSize.ts) - 👨‍🔧🛠
- [useState](src%2Fcomposables%2FuseState.ts) - 👨‍🔧🛠
- [useStyle](src%2Fcomposables%2FuseStyle.ts) - 👨‍🔧🛠


### Так же есть @types/o-components
