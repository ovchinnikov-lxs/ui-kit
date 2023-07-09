import { SIZES_DICT } from '~/assets/utils/constants/sizes';

const SIZE_ARGS = {
    size: {
        table: { defaultValue: { summary: 'medium' } },
        description: 'Size of the component',
        control: 'select',
        options: Object.values(SIZES_DICT),
    },
};

const SIZE_DESCRIPTION = `
This is props for size modification, you should be adaptive to your design system for these props options—${Object.values(SIZES_DICT).map(i => `<b>${i}</b>`)
        .join(', ')}

For example, I'm created only two sizes - <b>medium</b> and <b>large</b>
`;

export {
    SIZE_ARGS,
    SIZE_DESCRIPTION,
};
