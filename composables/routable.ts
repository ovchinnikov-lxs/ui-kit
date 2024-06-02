import type { IUiRoutableProps } from '../types/composables/routable';
import type { TUiClassList } from '../types';

export function useUiRoutable(props: IUiRoutableProps) {
    const attrs = useAttrs();

    const componentTag = computed(() => {
        if (props.tag && typeof props.tag !== 'string') {
            return props.tag;
        }

        if (attrs.to) {
            return 'NuxtLink';
        } else if (attrs.href) {
            return 'a';
        } else if (props.tag) {
            return props.tag;
        } else {
            return 'button';
        }
    });

    const routableClassList = computed((): TUiClassList => {
        const interactiveTags = [
            'NuxtLink',
            'a',
            'button',
        ];

        return [
            {
                '--is-interactive': interactiveTags.includes(componentTag.value),
            },
        ];
    });

    return {
        componentTag,
        routableClassList,
    };
}
