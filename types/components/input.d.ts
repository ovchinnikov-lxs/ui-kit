import type { IUiBaseComponentProps } from 'ui-layer/types';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';
import type { IUiColorProps } from 'ui-layer/types/composables/color';
import type { IUiStateProps } from 'ui-layer/types/composables/state';
import type { IUiStyleProps } from 'ui-layer/types/composables/style';
import type { MaskOptions } from 'maska';

export type TUiInputValue = string | number | null;

export interface IUiInputProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Input id
     */
    id: string;
    /**
     * Input type
     */
    type: 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /**
     * vMaska options
     */
    mask?: string | MaskOptions;
    /**
     * Input placeholder
     */
    placeholder?: string;
}
