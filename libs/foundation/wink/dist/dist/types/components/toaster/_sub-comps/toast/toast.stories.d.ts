import { ToastType } from './models/toast.types';
import { Target } from '../../../../models/targets.types';
declare const _default: {
    title: string;
    component: string;
    tags: string[];
    parameters: {
        badges: "new"[];
        layout: string;
    };
    argTypes: {
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
            control: string;
            options: ("negative" | "positive")[];
            description: string;
            if: {
                arg: string;
                eq: string;
            };
            table: {
                defaultValue: {
                    summary: "positive";
                };
            };
        };
        duration: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            if: {
                arg: string;
                eq: string;
            };
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
        isOpen: boolean;
        appearance: "actionable";
        text: string;
        linkText: string;
        href: string;
        target: string;
        duration: string;
    };
    render: (args: Args, { globals: { brand, theme } }: {
        globals: {
            brand: string;
            theme: string;
        };
    }) => import("lit-html").TemplateResult<1>;
};
export default _default;
type Args = {
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
export declare const Default: {
    args: {
        isOpen: boolean;
        appearance: "actionable";
        appearanceFeedback: "positive";
        text: string;
        href: string;
        duration: string;
        linkText: string;
    };
};
export declare const positive: {
    args: {
        isOpen: boolean;
        appearance: string;
        appearanceFeedback: "positive";
        text: string;
        href: string;
        duration: number;
        linkText: string;
    };
};
export declare const negative: {
    args: {
        isOpen: boolean;
        appearance: string;
        appearanceFeedback: "positive";
        text: string;
        href: string;
        duration: number;
        linkText: string;
    };
};
