import type { IUiBaseComponentProps, TUiPosition } from 'ui-layer/types';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';
import type { IUiColorProps } from 'ui-layer/types/composables/color';
import type { IUiStateProps } from 'ui-layer/types/composables/state';
import type { IUiStyleProps } from 'ui-layer/types/composables/style';

export interface IUiPopoverProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Dropdown position
     */
    position?: TUiPosition;
    /**
     * Dropdown inherits top width
     */
    parentWidth?: boolean;
    /**
     * Prevent open control
     */
    preventControl?: boolean;
    /**
     * Auto closing after clicks outside or clicks inside
     */
    autoClose?: boolean;
    /**
     * Transition name for bottom
     */
    transitionName?: string;
}
