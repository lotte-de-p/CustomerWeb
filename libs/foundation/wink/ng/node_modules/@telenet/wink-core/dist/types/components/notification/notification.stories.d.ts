declare const _default: {
    title: string;
    component: string;
    parameters: {
        badges: "ready"[];
    };
    argTypes: {
        appearance: {
            control: string;
            options: ("information" | "success" | "error" | "warning")[];
            description: string;
            table: {
                category: "Component Properties";
            };
        };
        hasCloseIcon: {
            control: string;
            description: string;
            table: {
                category: "Component Properties";
            };
        };
        heading: {
            control: string;
            description: string;
            table: {
                category: "Storybook Properties";
            };
        };
        content: {
            control: string;
            description: string;
            table: {
                category: "Storybook Properties";
            };
        };
    };
    args: {
        appearance: "information";
        hasCloseIcon: boolean;
        heading: string;
        content: string;
    };
    render: (args: Args) => import("lit-html").TemplateResult<1>;
};
export default _default;
type Args = {
    appearance: string;
    hasCloseIcon: string;
    heading: string;
    content: string;
};
export declare const Information: {};
export declare const Success: {
    args: {
        appearance: "success";
    };
};
export declare const Error: {
    args: {
        appearance: "error";
    };
};
export declare const Warning: {
    args: {
        appearance: "warning";
    };
};
