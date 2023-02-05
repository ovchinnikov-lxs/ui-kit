import type { IOptionItem } from '~/assets/utils/interfaces';

type TypeClassList = Array<string | object>;
type TypeSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'custom';
type TypeOptions = Array<IOptionItem>

export type {
    TypeClassList,
    TypeSize,
    TypeOptions,
};
