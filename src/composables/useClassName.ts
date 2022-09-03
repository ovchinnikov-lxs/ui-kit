import { computed } from 'vue';
import type { PropType } from 'vue';

import type { TypeClassList } from '~/models';

export const DEFAULT_PREFIX = 'O';

export const classNameProps = {
    classPrefix: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
};

export function useClassName(classPrefix: string | null | undefined) {
    const getClassName = computed(() => (className: string): TypeClassList => [
        {
            [`${DEFAULT_PREFIX}${className}`]: DEFAULT_PREFIX,
            [`${classPrefix}${className}`]: Boolean(classPrefix),
        },
    ]);

    return { getClassName };
}
