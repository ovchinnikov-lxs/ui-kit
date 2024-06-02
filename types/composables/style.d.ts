export interface IUiStyleProps {
    /**
     *  Outline state for stroke design of a component, or other custom css styles
     */
    outline?: boolean;
    /**
     *  Rounded state for design of component, or other custom css styles
     */
    rounded?: boolean;
    /**
     *  State if this component has an icon or its component, it's an icon or component have icon with name from props
     */
    icon?: boolean | string;
}
