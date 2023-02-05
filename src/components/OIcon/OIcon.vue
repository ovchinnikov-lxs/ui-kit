<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';
import type { IIconItem } from '~/components/OIcon/helpers';
import { iconList } from '~/components/OIcon/helpers';

// Composable
import { classNameProps, useClassName } from '~/composables/useClassName';
import { sizeProps, useSize } from '~/composables/useSize';

const props = defineProps({
    ...classNameProps,
    ...sizeProps,

    tag: {
        type: String,
        default: 'div',
    },

    viewBox: {
        type: String,
        default: '0 0 32 32',
    },

    name: {
        type: String,
        default: 'chevron',
    },

    icons: {
        type: Array as PropType<Array<IIconItem>>,
        default: () => [],
    },
});

const { getClassName } = useClassName(props);
const { sizeClassList } = useSize(props);

const classList = computed((): TypeClassList => [
    getClassName.value('Icon'),
    sizeClassList.value,
]);

const svgIcon = computed(() => {
    const actualIcons = iconList.reduce((acc: Array<IIconItem>, item: IIconItem) => {
        const externalIcon = props.icons?.find(i => i.id === item.id);

        if (externalIcon) {
            acc.push(externalIcon);
        } else {
            acc.push(item);
        }

        return acc;
    }, []);

    const actualIcon = actualIcons.find((i: IIconItem) => i.id === props.name);

    return actualIcon?.innerHTML || 'icon';
});

</script>

<template>
    <component :is="tag" :class="classList">
        <slot v-if="$slots['sprite-component']"
              name="sprite-component"
              :view-box="viewBox"
        >
        </slot>
        <svg v-else :viewBox="viewBox">
            <g v-if="svgIcon" v-html="svgIcon"/>
        </svg>
    </component>
</template>

<style lang="scss">
.OIcon {
    display: inline-block;

    svg {
        display: block;
        width: 100%;
        height: 100%;
        fill: currentColor;
    }
}
</style>
