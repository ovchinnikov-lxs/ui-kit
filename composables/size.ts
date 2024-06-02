import type { IUiSizeProps } from '../types/composables/size';
import type { TUiClassList } from '../types';

export function useUiSize(props: IUiSizeProps) {
    const sizeClassList = computed<TUiClassList>(() => [
        {
            [`--${props.size}-size`]: props.size,
        },
    ]);

    return {
        sizeClassList,
    };
}
