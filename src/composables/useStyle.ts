import { computed } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

export interface IStyleProps {
    outline?: boolean;
    rounded?: boolean;
    icon?: boolean;
}

export const styleProps = {
    /**
     *  Outline state for stroke design of a component, or other custom css styles
     */
    outline: {
        type: Boolean,
        default: false,
    },

    /**
     *  Rounded state for design of component, or other custom css styles
     */
    rounded: {
        type: Boolean,
        default: false,
    },

    /**
     *  State if this component has an icon or its component, it's an icon
     */
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
