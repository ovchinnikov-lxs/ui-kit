import { computed } from 'vue';
import type { TypeClassList } from '~/models';

export interface IStyleProps {
    outline?: boolean;
    rounded?: boolean;
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
};

export function useStyle(styleProps: IStyleProps) {
    const styleClassList = computed((): TypeClassList => [{
        '--is-solid': !styleProps.outline,
        '--is-outline': styleProps.outline,
        '--is-rounded': styleProps.rounded,
    }]);

    return {
        styleClassList,
    };
}
