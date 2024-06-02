export interface IUiStateProps {
    /**
     *  Active state for a component
     */
    active?: boolean;
    /**
     *  Interesting state for a component
     */
    interesting?: boolean;
    /**
     *  Required state for form components or others if you need
     */
    required?: boolean;
    /**
     *  Disabled state for a component
     */
    disabled?: boolean;
    /**
     *  Error state for a display error message or just state
     */
    error?: string | number | null | boolean;
    /**
     *  State of loading component or some actions
     */
    loading?: boolean;
}
