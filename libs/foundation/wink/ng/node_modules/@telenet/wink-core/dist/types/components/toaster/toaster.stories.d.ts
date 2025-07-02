import { ToastType } from './_sub-comps/toast/models/toast.types';
import { Target } from '../../models/targets.types';
type Args = {
    exampleToasts: number;
    showCreateToast: boolean;
    isOpen: boolean;
    appearance: ToastType;
    appearanceFeedback: ToastType;
    text: string;
    duration: number;
    href: string;
    target: Target;
    linkText: string;
    brand: string;
};
declare const _default: {
    title: string;
    component: string;
    parameters: {
        badges: "new"[];
        layout: string;
        html: {
            transform: (code: string) => string;
        };
    };
    argTypes: {
        showCreateToast: {
            control: string;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                category: "Storybook Properties";
            };
        };
        exampleToasts: {
            control: {
                type: string;
                min: number;
                max: number;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                category: "Storybook Properties";
            };
        };
        text: {
            control: string;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            type: {
                name: string;
                required: boolean;
            };
        };
        appearance: {
            control: string;
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: "actionable";
                };
            };
        };
        appearanceFeedback: {
            if: {
                arg: string;
                eq: string;
            };
            control: string;
            options: ("negative" | "positive")[];
            description: string;
            table: {
                defaultValue: {
                    summary: "positive";
                };
            };
        };
        duration: {
            if: {
                arg: string;
                eq: string;
            };
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
        href: {
            if: {
                arg: string;
                eq: "actionable";
            };
            control: string;
            description: string;
            type: {
                name: string;
                required: boolean;
            };
        };
        target: {
            if: {
                arg: string;
                eq: "actionable";
            };
            control: string;
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        linkText: {
            if: {
                arg: string;
                eq: "actionable";
            };
            description: string;
        };
        isOpen: {
            control: string;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
    };
    args: {
        appearance: "actionable";
        appearanceFeedback: "positive";
        text: string;
        linkText: string;
        href: string;
        target: string;
        duration: string;
        exampleToasts: number;
        showCreateToast: boolean;
        isOpen: boolean;
    };
    render: (args: Args, { globals: { brand, theme } }: {
        globals: {
            brand: string;
            theme: string;
        };
    }) => import("lit-html").TemplateResult<1>;
};
export default _default;
export declare const Default: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
