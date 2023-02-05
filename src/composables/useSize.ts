import type { PropType } from 'vue';
import { computed } from 'vue';

import type { TypeClassList, TypeSize } from '~/assets/utils/types';

export interface ISizeProps {
    size?: TypeSize;
}

export const sizeProps = {
    size: {
        type: String as PropType<TypeSize>,
        default: 'medium',
        validator: (v: TypeSize): boolean => [
            'x-small',
            'small',
            'medium',
            'large',
            'x-large',
            'xx-large',
            'custom',
        ].includes(v),
    },
};

export function useSize(sizeProps: ISizeProps) {
    const sizeClassList = computed((): TypeClassList => [{
        [`--${sizeProps.size}-size`]: sizeProps.size,
    }]);

    return {
        sizeClassList,
    };
}
