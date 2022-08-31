import type { PropType } from 'vue';
import { computed, useAttrs } from 'vue';
import type { TypeClassList } from '~/models';

export type TypeTag = 'button' | 'a' | 'n-link' | 'nuxt-link' | 'span';

export const routableProps = {
    tag: {
        type: String as PropType<TypeTag>,
        default: 'button',
        validator: (v: TypeTag): boolean => [
            'button',
            'a',
            'n-link',
            'nuxt-link',
            'span',
        ].includes(v),
    },
};

export function useRoutable(tag: TypeTag) {
    const attrs = useAttrs();

    const componentTag = computed((): TypeTag => {
        if (attrs.to) {
            return 'n-link';
        } else if (attrs.href) {
            return 'a';
        } else if (tag) {
            return tag;
        } else {
            return 'button';
        }
    });

    const routableClassList = computed((): TypeClassList => {
        const interactiveTags = [
            'nuxt-link',
            'n-link',
            'a',
            'button',
        ];

        return [{
            '--is-interactive': interactiveTags.includes(componentTag.value),
        }];
    });

    return {
        componentTag,
        routableClassList,
    };
}
