import type { IUiBaseComponentProps, IUiOptionItem } from 'ui-layer/types';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';
import type { IUiColorProps } from 'ui-layer/types/composables/color';
import type { IUiStateProps } from 'ui-layer/types/composables/state';
import type { IUiStyleProps } from 'ui-layer/types/composables/style';

export type IUiSelectValue = IUiOptionItem['id'] | Array<IUiOptionItem['id']>;

export interface IUiSelectProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Select options
     */
    options: IUiOptionItem[];
    /**
     * Select placeholder
     */
    placeholder?: string;
    /**
     * Multiple select state
     */
    multiple?: boolean;
    /**
     * Auto closing after clicks outside or clicks inside
     */
    autoClose?: boolean;
}

export interface IUiSelectHeaderProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * multiple select state
     */
    placeholder: string;
    /**
     * Array active options
     */
    activeOptions?: IUiOptionItem[];
    /**
     * multiple select state
     */
    multiple?: boolean;
    /**
     * Dropdown select is opened
     */
    isOpened?: boolean;
}

export interface IUiSelectOption extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiOptionItem {
    /**
     * multiple select state
     */
    multiple?: boolean;
    /**
     * Is active option
     */
    active: boolean;
}
