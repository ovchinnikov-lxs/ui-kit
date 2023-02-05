import { computed } from 'vue';
import type { PropType } from 'vue';

import type { TypeClassList } from '~/assets/utils/types';

console.log('test11');
export interface IClassNameProps {
    classPrefix?: string | null | undefined;
}

export const DEFAULT_PREFIX = 'O';

export const classNameProps = {
    classPrefix: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
};

export function useClassName(classNameProps: IClassNameProps) {
    const getClassName = computed(() => (className: string): TypeClassList => [
        {
            [`${DEFAULT_PREFIX}${className}`]: DEFAULT_PREFIX,
            [`${classNameProps.classPrefix}${className}`]: Boolean(classNameProps.classPrefix),
        },
    ]);

    return { getClassName };
}
