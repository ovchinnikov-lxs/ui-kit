import { computed } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

export interface IColorProps {
    color?: string | undefined | null;
}

export const colorProps = {
    color: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
};

export function useColor(colorProps: IColorProps) {
    const colorClassList = computed((): TypeClassList => [{
        [`--${colorProps.color}-color`]: colorProps.color,
    }]);

    return {
        colorClassList,
    };
}
