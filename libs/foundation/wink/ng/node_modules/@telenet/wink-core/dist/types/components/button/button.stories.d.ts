import type { Meta } from '@storybook/web-components';
declare const _default: Meta;
export default _default;
export declare const Primary: {
    args: {
        text: string;
        appearance: "primary";
    };
};
export declare const Secondary: {
    args: {};
};
export declare const Tertiary: {
    args: {
        text: string;
        appearance: "tertiary";
    };
};
export declare const IconButton: {
    args: {
        text: string;
        appearance: "primary";
        size: string;
        icon: string;
        iconPosition: "left";
        status: "none";
        element: "button";
    };
};
export declare const ButtonWithoutIcon: {
    args: {
        text: string;
        appearance: "primary";
        size: string;
        icon: string;
        iconPosition: "left";
        status: "none";
        element: "button";
    };
};
export declare const InputButton: {
    args: {
        text: string;
        appearance: "primary";
        size: string;
        status: "none";
        element: "input";
        type: "button";
    };
};
export declare const LinkButton: {
    args: {
        text: string;
        appearance: "primary";
        size: string;
        status: "none";
        element: "a";
        href: string;
        target: string;
    };
};
export declare const LoadingButton: {
    args: {
        text: string;
        appearance: "primary";
        size: string;
        iconButtonAriaLabel: string;
        status: "loading";
        loadingText: string;
        element: "a";
        href: string;
        target: string;
    };
};
export declare const FullWidthButton: {
    args: {
        text: string;
        appearance: "primary";
        size: string;
        width: string;
        icon: string;
        iconPosition: "left";
        status: "none";
        element: "button";
    };
};
