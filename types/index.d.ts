import type { IUiClassNameProps } from 'ui-layer/types/composables/className';

export interface IUiOptionItem {
    id: string | number | null | boolean;
    name: string;
    disabled?: boolean;
}

export type TUiClassList = Array<string | object>;
export type TUiSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'custom' | string;
export type TUiOptions = Array<IUiOptionItem>;

export interface IUiLazyObserver {
    object: IntersectionObserver;
    actions: {
        [key: string | number]: (e: Element) => void;
    };
}

export type TUiPosition = 'top' | 'right' | 'bottom' | 'left' | 'center';

export interface IUiBaseComponentProps extends IUiClassNameProps {}

declare global {
    interface Window {
        UiLazyObserver: IUiLazyObserver | null;
    }
}
