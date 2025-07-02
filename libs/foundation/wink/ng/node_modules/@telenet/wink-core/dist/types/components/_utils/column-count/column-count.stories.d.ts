import { Meta } from '@storybook/web-components';
declare const _default: {
    title: string;
    component: string;
    tags: string[];
    parameters: {
        badges: "new"[];
    };
    argTypes: {
        colsCount: {
            control: {
                type: string;
                min: number;
                max: number;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
        items: {
            description: string;
            control: {
                type: string;
            };
            type: {
                name: string;
                required: boolean;
            };
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
    };
    args: Meta;
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export default _default;
export declare const Default: {};
