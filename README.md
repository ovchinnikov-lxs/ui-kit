# Ui Kit Layer

Create Nuxt extendable layer with this GitHub template.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Working on your theme

Your theme is at the root of this repository, it is exactly like a regular Nuxt project, except you can publish it on NPM.

The `.playground` directory should help you on trying your theme during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your theme itself.

## Distributing your theme

Your Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, your users will only have to run:

```bash
npm install --save your-theme
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
    extends: 'your-theme',
});
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# UI-kit for my vue 3 projects

[![Versions](https://img.shields.io/npm/v/@ovchinnikov-lxs-frontend/ui-kit.svg)](https://www.npmjs.com/package/@ovchinnikov-lxs-frontend/ui-kit) [![Downloads](https://img.shields.io/npm/dt/@ovchinnikov-lxs-frontend/ui-kit.svg)](https://www.npmjs.com/package/@ovchinnikov-lxs-frontend/ui-kit)

## Install

```sh
pnpm i @ovchinnikov-lxs-frontend/ui-kit
```

### Example of usage:

1. ###### Import default ui-kit css styles
    `_bundle.sccs`
    ```scss
    @import '@ovchinnikov-lxs-frontend/ui-kit/dist/ui-kit.css';
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
            <UiButton
                size="large"
                color="red"
                >submit</UiButton
            >
        </form>
    </template>
    ```

### List of the components

🛠 - in progress  
🚧 - experimental

-   [`UiButton`](src%2Fcomponents%2FUiButton%2FUiButton.vue)
-   [`UiLink`](src%2Fcomponents%2FUiLink%2FUiLink.vue)
-   [`UiFormCell`](src%2Fcomponents%2FOFormCell%2FOFormCell.vue)
-   [`UiInput`](src%2Fcomponents%2FUiInput%2FUiInput.vue)
-   [`UiFileInput`](src%2Fcomponents%2FUiFileInput%2FUiFileInput.vue) - 🚧
-   [`UiRichText`](src%2Fcomponents%2FUiRichText%2FUiRichText.vue)
-   [`UiCheckbox`](src%2Fcomponents%2FUiCheckbox%2FUiCheckbox.vue)
-   [`UiToggle`](src%2Fcomponents%2FUiToggle%2FUiToggle.vue) - 🚧
-   [`UiRadio`](src%2Fcomponents%2FUiRadio%2FUiRadio.vue)
-   [`UiPopover`](src%2Fcomponents%2FUiPopover%2FUiPopover.vue)
-   [`UiSelect`](src%2Fcomponents%2FUiSelect%2FUiSelect.vue)
    -   [`UiSelectHeader`](src%2Fcomponents%2FUiSelect%2FUiSelectHeader.vue)
    -   [`UiSelectOption`](src%2Fcomponents%2FUiSelect%2FUiSelectOption.vue)
-   [`UiTooltip`](src%2Fcomponents%2FUiTooltip%2FUiTooltip.vue)
-   [`UiIcon`](src%2Fcomponents%2FUiIcon%2FUiIcon.vue)
-   [`UiSwiper`](src%2Fcomponents%2FUiSwiper%2FUiSwiper.vue) - 🚧
-   [`UiImage`](src%2Fcomponents%2FUiImage%2FUiImage.vue)
-   [`UiPlate`](src%2Fcomponents%2FUiPlate%2FUiPlate.vue)
-   [`UiCollapse`](src%2Fcomponents%2FUiCollapse%2FUiCollapse.vue)
-   [`UiPreloader`](src%2Fcomponents%2FUiPreloader%2FUiPreloader.vue)

> ## Develop
>
> #### Install dependencies
>
> ```sh
> pnpm install
> ```
>
> #### Storybook
>
> ```sh
> pnpm run storybook
> ```
>
> #### Lint
>
> _Check eslint and stylelint_
>
> ```sh
> pnpm run lint:check
> ```
>
> _Fix eslint and stylelint_
>
> ```sh
> pnpm run lint:fix
> ```
>
> #### Unit tests
>
> ```sh
> pnpm run test
> ```
