import type { IUiBaseComponentProps } from 'ui-layer/types';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';

export interface IUiIconProps extends IUiBaseComponentProps, IUiSizeProps {
    /**
     * HTML tag for icon
     */
    tag?: string;
    /**
     *  Icon view box
     */
    viewBox?: string;
    /**
     * Icon name from assets/sprite/svg/** or external svg source
     */
    icon: string;
}
