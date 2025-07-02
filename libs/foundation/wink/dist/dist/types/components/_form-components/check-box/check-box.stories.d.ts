import { Meta } from '@storybook/web-components';
declare const _default: Meta;
export default _default;
export declare const SingleCheckbox: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const MultipleCheckboxes: {
    args: {
        direction: "vertical";
        groupLabel: string;
        groupHelper: string;
        isRequired: boolean;
        checked: boolean;
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
