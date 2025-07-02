import type { Meta } from '@storybook/web-components';
declare const _default: Meta;
export default _default;
export declare const Basic: {
    args: {
        label: string;
        helper: string;
        placeholder: string;
        inputId: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const Full: {
    args: {
        label: string;
        helper: string;
        placeholder: string;
    };
};
export declare const Text: {
    args: {
        label: string;
        helper: string;
        placeholder: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const Numerical: {
    args: {
        label: string;
        helper: string;
        isRequired: boolean;
        type: "number";
        placeholder: string;
        value: string;
        isReadonly: boolean;
        error: boolean;
        inputId: string;
        inputModType: "numeric";
        isAutofocused: boolean;
        enterkeyhintOption: string;
    };
};
export declare const Email: {
    args: {
        label: string;
        helper: string;
        isRequired: boolean;
        type: "email";
        placeholder: string;
        isReadonly: boolean;
        error: boolean;
        inputId: string;
        inputModeOption: "email";
        isAutofocused: boolean;
        enterkeyhintOption: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const Tel: {
    args: {
        label: string;
        isRequired: boolean;
        type: "tel";
        value: string;
        placeholder: string;
        isReadonly: boolean;
        inputId: string;
        isAutofocused: boolean;
        inputModeOption: "tel";
        enterkeyhintOption: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const Url: {
    args: {
        label: string;
        helper: string;
        isRequired: boolean;
        type: "url";
        placeholder: string;
        isReadonly: boolean;
        error: boolean;
        inputId: string;
        inputModeOption: "url";
        isAutofocused: boolean;
        enterkeyhintOption: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
