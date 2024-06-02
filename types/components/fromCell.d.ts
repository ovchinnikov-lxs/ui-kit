import type { IUiBaseComponentProps } from 'ui-layer/types';
import type { IUiStateProps } from 'ui-layer/types/composables/state';
import type { IUiColorProps } from 'ui-layer/types/composables/color';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';

export interface IUiFromCellProps extends IUiBaseComponentProps, IUiStateProps, IUiColorProps, IUiSizeProps {
    /**
     *  Name for label clicks
     */
    forId: string;
}
