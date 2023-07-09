import { computed } from 'vue';
import type { PropType } from 'vue';
import type { TypeClassList } from '~/assets/utils/types';

export interface IStateProps {
    active?: boolean;
    interesting?: boolean;
    required?: boolean;
    disabled?: boolean;
    error?: string | number | null | undefined | boolean;
    loading?: boolean;
}

export const stateProps = {
    /**
     *  Active state for a component
     */
    active: {
        type: Boolean,
        default: false,
    },

    /**
     *  Interesting state for a component
     */
    interesting: {
        type: Boolean,
        default: false,
    },

    /**
     *  Required state for form components or others if you need
     */
    required: {
        type: Boolean,
        default: false,
    },

    /**
     *  Disabled state for a component
     */
    disabled: {
        type: Boolean,
        default: false,
    },

    /**
     *  Error state for a display error message or just state
     */
    error: {
        type: [String, Number, null, Boolean] as PropType<string | number | null | boolean>,
        default: null,
    },

    /**
     *  State of loading component or some actions
     */
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
