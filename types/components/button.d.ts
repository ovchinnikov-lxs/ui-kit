import type { IUiBaseComponentProps } from 'ui-layer/types';
import type { IUiRoutableProps } from 'ui-layer/types/composables/routable';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';
import type { IUiColorProps } from 'ui-layer/types/composables/color';
import type { IUiStateProps } from 'ui-layer/types/composables/state';
import type { IUiStyleProps } from 'ui-layer/types/composables/style';

export interface IUiButtonProps extends IUiBaseComponentProps, IUiRoutableProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {}
