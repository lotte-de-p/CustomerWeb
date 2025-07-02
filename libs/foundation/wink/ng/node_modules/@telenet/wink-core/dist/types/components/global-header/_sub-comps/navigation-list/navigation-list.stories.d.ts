declare const _default: {
    title: string;
    component: string;
    tags: string[];
    argTypes: {
        listTitle: {
            description: string;
            control: {
                type: string;
            };
        };
        hasBoldLinks: {
            description: string;
            control: {
                type: string;
            };
        };
        links: {
            description: string;
            control: {
                type: string;
            };
        };
    };
    args: {
        listTitle: string;
        hasBoldLinks: boolean;
        links: {
            text: string;
            href: string;
        }[];
    };
    parameters: {
        badges: "inProgress"[];
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export default _default;
export declare const Default: {};
export declare const withBoldLinks: {
    args: {
        listTitle: string;
        hasBoldLinks: boolean;
        links: ({
            text: string;
            href: string;
            target?: undefined;
        } | {
            text: string;
            href: string;
            target: string;
        })[];
    };
};
