import type { IUiStateProps } from '../types/composables/state';
import type { TUiClassList } from '../types';

export function useUiState(props: IUiStateProps) {
    const stateClassList = computed<TUiClassList>(() => [
        {
            '--is-active': props.active,
            '--is-interesting': props.interesting,
            '--is-disabled': props.disabled,
            '--is-error': props.error,
            '--is-required': props.required,
            '--is-loading': props.loading,
        },
    ]);

    const stateAttrs = computed(() => ({
        ...(Boolean(props.error) && { 'data-error': Boolean(props.error) }),
        ...(props.disabled && { 'data-disabled': props.disabled }),
        ...(props.required && { required: props.required }),
        ...(props.disabled && { disabled: props.disabled }),
    }));

    return {
        stateClassList,
        stateAttrs,
    };
}
