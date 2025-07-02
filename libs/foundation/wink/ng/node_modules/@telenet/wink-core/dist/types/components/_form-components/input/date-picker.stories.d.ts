import type { Meta } from '@storybook/web-components';
declare const _default: Meta;
export default _default;
export declare const Default: {};
export declare const Range: {
    argTypes: {
        endValue: {
            control: string;
            table: {
                category: "Component Properties - basic";
            };
            description: string;
        };
        endLabel: {
            control: string;
            table: {
                category: "Component Properties - basic";
            };
            description: string;
        };
    };
    args: {
        label: string;
        endLabel: string;
        helper: string;
        name: string;
        isRequired: boolean;
        isDisabled: boolean;
        isReadonly: boolean;
        inputId: string;
        error: string;
        value: string;
        endValue: string;
        minValue: string;
        maxValue: string;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const Time: {
    args: {
        label: string;
        helper: string;
        name: string;
        isRequired: boolean;
        type: "time";
        inputId: string;
        value: string;
        minValue: string;
        maxValue: string;
    };
};
