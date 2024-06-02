<template>
    <Component
        :is="tag"
        :class="[getClassName('Icon'), classList]"
    >
        <LazySvgIcon
            v-if="!isExternal && icon"
            :name="icon"
            :view-box="viewBox"
            :class="getClassName('Icon__el')"
        />

        <span
            v-else
            ref="externalRef"
            :class="[getClassName('Icon__el'), externalClassList]"
            v-html="externalData"
        >
        </span>
    </Component>
</template>

<script setup lang="ts">
import type { IUiIconProps } from 'ui-layer/types/components/icon';
import type { TUiClassList } from 'ui-layer/types';

const props = withDefaults(defineProps<IUiIconProps>(), {
    tag: 'span',
    viewBox: '0 0 32 32',
});

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
]);

function useExternalIcon() {
    const externalRef = ref<HTMLSpanElement>();
    const showExternal = ref(false);
    const externalData = ref<string | null>(null);

    const isExternal = computed(() => isValidUrl(props.icon));
    const isLoaded = ref(true);

    const externalClassList = computed(() => [
        '--is-external',
        {
            '--is-loaded': isLoaded.value,
        },
    ]);

    const fetchExternalIcon = async (url: string) => {
        try {
            return await $fetch<string>(url, { responseType: 'text' });
        } catch (e) {
            console.error('UI_ICON:FETCH_EXTERNAL_ICON', e);
            return null;
        }
    };

    const initExternalIcon = async () => {
        if (!props.icon.includes('svg')) {
            return;
        }

        externalData.value = await fetchExternalIcon(props.icon);
        await nextTick();

        if (!externalRef.value) {
            return;
        }

        Array.from(externalRef.value.children).forEach((child) => {
            child.removeAttribute('width');
            child.removeAttribute('height');
        });
    };

    onMounted(async () => {
        if (!props.icon || !isExternal.value) {
            return;
        }

        await initExternalIcon();
        await nextTick();

        isLoaded.value = true;
    });

    return {
        isExternal,
        externalData,
        externalRef,
        showExternal,
        externalClassList,
    };
}

const { isExternal, externalData, externalRef, externalClassList } = useExternalIcon();
</script>

<style lang="scss">
.UiIcon {
    display: inline-block;
    fill: currentcolor;

    &__el {
        display: block;
        width: 100%;
        height: 100%;

        &.--is-external {
            opacity: 0;

            &.--is-loaded {
                opacity: 1;
            }
        }
    }
}
</style>
