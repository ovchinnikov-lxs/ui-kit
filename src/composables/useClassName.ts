import { computed } from 'vue';
import type { PropType } from 'vue';

import type { TypeClassList } from '~/assets/utils/types';

export interface IClassNameProps {
    classPrefix?: string | null | undefined;
}

export const DEFAULT_PREFIX = 'Ui';

export const classNameProps = {
    /**
     *  The class prefix for custom settings
     */
    classPrefix: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
};

export function useClassName(classNameProps: IClassNameProps) {
    const getClassName = computed(() => (componentName: string): TypeClassList => [
        {
            [`${DEFAULT_PREFIX}${componentName}`]: DEFAULT_PREFIX,
            [`${classNameProps.classPrefix}${componentName}`]: Boolean(classNameProps.classPrefix),
        },
    ]);

    return { getClassName };
}
