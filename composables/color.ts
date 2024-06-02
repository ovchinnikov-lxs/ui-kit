import type { TUiClassList } from '../types';
import type { IUiColorProps } from '../types/composables/color';

export function useUiColor(props: IUiColorProps) {
    const colorClassList = computed<TUiClassList>(() => [
        {
            [`--${props.color}-color`]: props.color,
        },
    ]);

    return {
        colorClassList,
    };
}
