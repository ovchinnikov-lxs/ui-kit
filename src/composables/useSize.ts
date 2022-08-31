import type { PropType } from 'vue';
import { computed } from 'vue';

import type { TypeClassList, TypeSize } from '~/models';

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
        ].includes(v),
    },
};

export function useSize(size: TypeSize) {
    const sizeClassList = computed((): TypeClassList => [{
        [`--${size}-size`]: size,
    }]);

    return {
        sizeClassList,
    };
}
