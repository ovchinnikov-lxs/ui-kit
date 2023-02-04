import { computed } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

export interface IStateProps {
    active?: boolean;
    interesting?: boolean;
    required?: boolean;
    disabled?: boolean;
    error?: string | number | null | undefined;
    loading?: boolean;
}

export const stateProps = {
    active: {
        type: Boolean,
        default: false,
    },

    interesting: {
        type: Boolean,
        default: false,
    },

    required: {
        type: Boolean,
        default: false,
    },

    disabled: {
        type: Boolean,
        default: false,
    },

    error: {
        type: [String, Number, null] as PropType<string | number | null>,
        default: null,
    },

    loading: {
        type: Boolean,
        default: false,
    },
};

export function useState(stateProps: IStateProps) {
    const stateClassList = computed((): TypeClassList => [{
        '--is-active': stateProps.active,
        '--is-interesting': stateProps.interesting,
        '--is-disabled': stateProps.disabled,
        '--is-error': stateProps.error,
        '--is-required': stateProps.required,
        '--is-loading': stateProps.loading,
    }]);

    return {
        stateClassList,
    };
}
