const STATES_DESCRIPTION = `
This is a some states of components, you can use haw you want

Inside useState, you can watch more props, i'm show only short list
`;

const ACTIVE_ARGS = {
    active: {
        description: 'Active state at component',
        control: 'boolean',
    },
};

const INTERESTING_ARGS = {
    interesting: {
        description: 'Interesting state at component',
        control: 'boolean',
    },
};

const DISABLED_ARGS = {
    disabled: {
        description: 'Disabled state at component',
        control: 'boolean',
    },
};

const REQUIRED_ARGS = {
    required: {
        description: 'Required state at component',
        control: 'boolean',
    },
};

const ERROR_ARGS = {
    error: {
        description: 'Error state or message at component',
    },
};

const STATE_ARGS = {
    ...ACTIVE_ARGS,
    ...INTERESTING_ARGS,
    ...DISABLED_ARGS,
};

export {
    STATES_DESCRIPTION,
    STATE_ARGS,
    ACTIVE_ARGS,
    INTERESTING_ARGS,
    DISABLED_ARGS,
    REQUIRED_ARGS,
    ERROR_ARGS,
};
