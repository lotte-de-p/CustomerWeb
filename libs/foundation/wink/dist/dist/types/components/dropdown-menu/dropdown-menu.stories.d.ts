declare const _default: {
    title: string;
    component: string;
    parameters: {
        badges: "ready"[];
    };
    argTypes: {
        itemSelected: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        isExpanded: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        heading: {
            description: string;
            type: {
                name: string;
                required: boolean;
            };
        };
        listPosition: {
            control: string;
            description: string;
            options: ("top-left" | "top-right" | "bottom-left" | "bottom-right")[];
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        avatar: {
            control: string;
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
    args: {
        isExpanded: boolean;
        heading: string;
        avatar: boolean;
        itemSelected: string;
        listPosition: "top-left";
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export default _default;
export declare const Default: {};
export declare const LanguageDropdown: {
    args: {
        heading: string;
        itemSelected: string;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
