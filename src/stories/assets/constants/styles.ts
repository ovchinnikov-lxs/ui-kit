const STYLES_DESCRIPTION = `
This is a some styles props
`;

const OUTLINE_ARGS = {
    outline: {
        description: 'Outline state at component',
        control: 'boolean',
    },
};

const ROUNDED_ARGS = {
    rounded: {
        description: 'Rounded state at component',
        control: 'boolean',
    },
};

const ICON_ARGS = {
    icon: {
        description: 'Icon state at component',
        control: 'boolean',
    },
};

const STYLES_ARGS = {
    ...OUTLINE_ARGS,
    ...ROUNDED_ARGS,
    ...ICON_ARGS,
};


export {
    STYLES_DESCRIPTION,
    STYLES_ARGS,
    OUTLINE_ARGS,
    ROUNDED_ARGS,
    ICON_ARGS,
};
