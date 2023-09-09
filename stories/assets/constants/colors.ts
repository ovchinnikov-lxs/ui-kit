const COLOR_DICT = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
};

const COLOR_ARGS = {
    color: {
        description: 'Color of the component',
        control: 'select',
        options: ['primary', 'secondary'],
    },
};


const COLOR_DESCRIPTION = `
This is props for color modification, just set color what if you want

For example, I'm created only two colors - <b>primary</b> and <b>secondary</b>
`;

export {
    COLOR_DESCRIPTION,
    COLOR_DICT,
    COLOR_ARGS,
};
