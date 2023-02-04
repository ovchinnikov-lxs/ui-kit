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

### Список компонентов
✅ - готов  
🛠 - в разработке
 - ✅ `OButton` 
 - ✅ `OLink`
 - ✅ `OFormCell`
 - 🛠 `OInput`
 - 🛠 `ORichText`
 - 🛠 `OSelect`
 - 🛠 `OTabs`
 - 🛠 `OCheckbox`
 - 🛠 `OIcon`
 - ✅ `OImage`
 - 🛠 `OPlate`
 - 🛠 `OTooltip`
 - ✅ `OCollapse`
 - ✅ `OPreloader`
