import { Meta } from '@storybook/web-components';
declare const _default: Meta;
export default _default;
export declare const SingleRadioButton: {};
export declare const MultipleRadioButtons: {
    args: {
        direction: "vertical";
        groupLabel: string;
        groupHelper: string;
        isRequired: boolean;
        amount: number;
        errorText: string;
        label: string;
        helper: string;
        disabled: boolean;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
