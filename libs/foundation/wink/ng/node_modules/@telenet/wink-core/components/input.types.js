import { S as SIZES } from './sizes.types.js';

const INPUT_APPEARANCES = {
    default: 'default',
    search: 'search',
};
const INPUT_SIZES = {
    sm: SIZES.sm,
    md: SIZES.md,
};
const INPUT_TYPES = {
    text: 'text',
    password: 'password',
    number: 'number',
    tel: 'tel',
    url: 'url',
    date: 'date',
    time: 'time',
    email: 'email',
    hidden: 'hidden',
};
const INPUT_AUTOCOMPLETES = {
    on: 'on',
    off: 'off',
    name: 'name',
    address: 'address',
    email: 'email',
    username: 'username',
    newPassword: 'new-password',
    currentPassword: 'current-password',
};
const INPUT_MODES = {
    none: 'none',
    text: 'text',
    numeric: 'numeric',
    decimal: 'decimal',
    tel: 'tel',
    email: 'email',
    search: 'search',
    url: 'url',
};
const INPUT_ENTERKEYHINTS = {
    none: 'none',
    enter: 'enter',
    done: 'done',
    go: 'go',
    next: 'next',
    previous: 'previous',
    search: 'search',
    send: 'send',
};

export { INPUT_ENTERKEYHINTS as I, INPUT_APPEARANCES as a, INPUT_TYPES as b, INPUT_MODES as c, INPUT_AUTOCOMPLETES as d, INPUT_SIZES as e };

//# sourceMappingURL=input.types.js.map