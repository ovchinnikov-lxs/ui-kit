import type { PropType } from 'vue';
import { computed } from 'vue';

import type { TypeClassList, TypeSize } from '~/assets/utils/types';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';

export interface ISizeProps {
    size?: TypeSize;
}

export const sizeProps = {
    /**
     *  Size of the component
     */
    size: {
        type: String as PropType<TypeSize>,
        default: 'medium',
        validator: (v: TypeSize): boolean => Object.values(SIZES_DICT).includes(v),
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
