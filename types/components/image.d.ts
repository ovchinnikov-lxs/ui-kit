import type { IUiBaseComponentProps } from 'ui-layer/types';
import type { IUiSizeProps } from 'ui-layer/types/composables/size';
import type { IUiStyleProps } from 'ui-layer/types/composables/style';
import type { IPXModifiers } from '@nuxt/image';

export interface IUiImageSrc {
    src: string;
    options?: Partial<IPXModifiers>;
}

export type TUiImageMediaKey = keyof typeof MEDIA_QUERIES;
export type TUiImageMediaValue = string | IUiImageSrc;

export type TUiImageSource = string | PartialRecord<TUiImageMediaKey, TUiImageMediaValue>;

export interface IUiImageSourceItem {
    dataMediaKey: string;
    media: string;
    srcset: string;
}

export interface IUiImageProps extends IUiBaseComponentProps, IUiSizeProps, IUiStyleProps {
    /**
     * Image Source
     */
    src: TUiImageSource;
    /**
     * Show preview loader
     */
    preview?: boolean;
    /**
     *  Alternate text for an image
     */
    alt?: string;
    /**
     * Lazy loading
     */
    lazy?: boolean | 'swiper';
    /**
     * Fallback image
     */
    fallback?: TUiImageSource;
    /**
     * Default modifiers for images
     */
    defaultModifiers?: Partial<IPXModifiers>;
    /**
     * Ratio for width and height params for auto upscale
     */
    ratio?: number;
}
