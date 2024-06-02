import type { IUiBaseComponentProps } from 'ui-layer/types';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';
import type { IUiColorProps } from 'ui-layer/types/composables/color';
import type { IUiStateProps } from 'ui-layer/types/composables/state';
import type { IUiStyleProps } from 'ui-layer/types/composables/style';
import type { SwiperOptions } from 'swiper';

export interface IUiSwiperProps<T> extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Slides
     */
    slides: Array<T>;
    /**
     * Swiper options
     */
    options?: SwiperOptions;
}
