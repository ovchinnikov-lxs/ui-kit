import { computed } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/models';

export const colorProps = {
    color: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
};

export function useColor(color: string | undefined | null) {
    const colorClassList = computed((): TypeClassList => [{
        [`--${color}--color`]: color,
    }]);

    return {
        colorClassList,
    };
}
