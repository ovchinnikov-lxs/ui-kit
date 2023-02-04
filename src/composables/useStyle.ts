import { computed } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

export interface IStyleProps {
    outline?: boolean;
    rounded?: boolean;
    icon?: boolean;
}

export const styleProps = {
    outline: {
        type: Boolean,
        default: false,
    },

    rounded: {
        type: Boolean,
        default: false,
    },

    icon: {
        type: Boolean,
        default: false,
    },
};

export function useStyle(styleProps: IStyleProps) {
    const styleClassList = computed((): TypeClassList => [{
        '--is-solid': !styleProps.outline,
        '--is-outline': styleProps.outline,
        '--is-rounded': styleProps.rounded,
        '--is-icon': styleProps.icon,
    }]);

    return {
        styleClassList,
    };
}
