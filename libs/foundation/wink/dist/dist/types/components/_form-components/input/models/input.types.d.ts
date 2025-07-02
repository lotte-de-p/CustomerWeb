export declare const INPUT_APPEARANCES: {
    readonly default: "default";
    readonly search: "search";
};
export type InputAppearance = (typeof INPUT_APPEARANCES)[keyof typeof INPUT_APPEARANCES];
export declare const INPUT_SIZES: {
    readonly sm: string;
    readonly md: string;
};
export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
export declare const INPUT_TYPES: {
    readonly text: "text";
    readonly password: "password";
    readonly number: "number";
    readonly tel: "tel";
    readonly url: "url";
    readonly date: "date";
    readonly time: "time";
    readonly email: "email";
    readonly hidden: "hidden";
};
export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
export declare const INPUT_AUTOCOMPLETES: {
    readonly on: "on";
    readonly off: "off";
    readonly name: "name";
    readonly address: "address";
    readonly email: "email";
    readonly username: "username";
    readonly newPassword: "new-password";
    readonly currentPassword: "current-password";
};
export type InputAutocomplete = (typeof INPUT_AUTOCOMPLETES)[keyof typeof INPUT_AUTOCOMPLETES];
export declare const INPUT_MODES: {
    readonly none: "none";
    readonly text: "text";
    readonly numeric: "numeric";
    readonly decimal: "decimal";
    readonly tel: "tel";
    readonly email: "email";
    readonly search: "search";
    readonly url: "url";
};
export type InputMode = (typeof INPUT_MODES)[keyof typeof INPUT_MODES];
export declare const INPUT_ENTERKEYHINTS: {
    readonly none: "none";
    readonly enter: "enter";
    readonly done: "done";
    readonly go: "go";
    readonly next: "next";
    readonly previous: "previous";
    readonly search: "search";
    readonly send: "send";
};
export type InputEnterkeyhint = (typeof INPUT_ENTERKEYHINTS)[keyof typeof INPUT_ENTERKEYHINTS];
