import { computed } from 'vue';
import type { PropType } from 'vue';

import type { TypeClassList } from '~/models';

export const DEFAULT_PREFIX = 'O';

export const classNameProps = {
    classPrefix: {
        type: String as PropType<string>,
        required: true,
    },
};

export function useClassName(classPrefix: string | undefined) {
    const getClassName = computed(() => (className: string): TypeClassList => [
        {
            [`${DEFAULT_PREFIX}${className}`]: DEFAULT_PREFIX,
            [`${classPrefix}${className}`]: classPrefix,
        },
    ]);

    return { getClassName };
}
