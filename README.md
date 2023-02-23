## UI-kit for vue 3 projects
[![Versions](https://img.shields.io/npm/v/@ovchinnikov-lxs-frontend/ui-kit.svg)](https://www.npmjs.com/package/@ovchinnikov-lxs-frontend/ui-kit)
[![Downloads](https://img.shields.io/npm/dt/@ovchinnikov-lxs-frontend/ui-kit.svg)](https://www.npmjs.com/package/@ovchinnikov-lxs-frontend/ui-kit)
#### Install

```sh
npm i @ovchinnikov-lxs-frontend/ui-kit
```

#### Example of usage:
1. ###### Import default ui-kit css styles
    `_bundle.sccs`
    ```scss
    @import "@ovchinnikov-lxs-frontend/ui-kit/dist/ui-kit.css";
    ```
    or `main.ts`
    ```typescript
    import '@ovchinnikov-lxs-frontend/ui-kit/dist/ui-kit.css';
   ```
2. ###### Create a component in your project and add styles from your style guide based on the component props  
    `components/ui/UiButton/UiButton.vue`
    ```vue
    <script setup lang="ts">
    // Components
    import { UiButton } from '@ovchinnikov-lxs-frontend/ui-kit';
    </script>
    
    <template>
        <UiButton v-bind="$attrs">
            <slot></slot>
        </UiButton>
    </template>
    
    <style lang="scss">
    .UiButton {
        &.--large-size {
            padding: 16px 32px;
            font-size: 24px;
        }
        
        &.--red-color {
            background: red;
            color: white;
        }
    }
    </style>
    
    ```
3. ###### Use in project
    `components/YourComponent.vue`
    
    ```vue
    
    <script setup lang="ts">
    import UiButton from '~/components/ui/UiButton/UiButton.vue';
    </script>
    
    <template>
        <form>
            ....
            <UiButton size="large" color="red">submit</UiButton>
        </form>
    </template>
    ```

 🛠 - in progress
#### List of the components
 - [`UiButton`](src%2Fcomponents%2FUiButton%2FUiButton.vue)
 - [`UiLink`](src%2Fcomponents%2FUiLink%2FUiLink.vue)
 - [`UiFormCell`](src%2Fcomponents%2FOFormCell%2FOFormCell.vue)
 - [`UiInput`](src%2Fcomponents%2FUiInput%2FUiInput.vue)
 - `UiFileInput` - 🛠
 - `UIImageInput` - 🛠
 - [`UiRichText`](src%2Fcomponents%2FUiRichText%2FUiRichText.vue)
 - [`UiCheckbox`](src%2Fcomponents%2FUiCheckbox%2FUiCheckbox.vue)
 - [`UiRadio`](src%2Fcomponents%2FUiRadio%2FUiRadio.vue)
 - [`UiPopover`](src%2Fcomponents%2FUiPopover%2FUiPopover.vue)
 - [`UiSelect`](src%2Fcomponents%2FUiSelect%2FUiSelect.vue)
   - [`UiSelectHeader`](src%2Fcomponents%2FUiSelect%2FUiSelectHeader.vue)
   - [`UiSelectOption`](src%2Fcomponents%2FUiSelect%2FUiSelectOption.vue)
 - [`UiTooltip`](src%2Fcomponents%2FUiTooltip%2FUiTooltip.vue)
 - [`UiIcon`](src%2Fcomponents%2FUiIcon%2FUiIcon.vue)
 - `UiTabs` - 🛠
 - [`UiImage`](src%2Fcomponents%2FUiImage%2FUiImage.vue)
 - [`UiPlate`](src%2Fcomponents%2FUiPlate%2FUiPlate.vue)
 - [`UiCollapse`](src%2Fcomponents%2FUiCollapse%2FUiCollapse.vue)
 - [`UiPreloader`](src%2Fcomponents%2FUiPreloader%2FUiPreloader.vue)
