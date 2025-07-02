type Args = {
    appearance: string;
    size: string;
    icon: string;
    iconSize: string;
    iconPosition: string;
    iconAppearance: string;
    isDisabled: boolean;
    href: string;
    target: string;
    slot: string;
};
declare const _default: {
    title: string;
    component: string;
    parameters: {
        badges: "inProgress"[];
    };
    argTypes: {
        appearance: {
            control: string;
            options: ("default" | "subtle" | "area")[];
            description: string;
        };
        size: {
            control: string;
            options: ("inherit" | "body-regular")[];
            description: string;
        };
        icon: {
            control: string;
            options: string[];
            description: string;
        };
        iconPosition: {
            control: string;
            options: ("left" | "right")[];
            description: string;
        };
        iconAppearance: {
            control: string;
            options: ("default" | "primary" | "secondary")[];
            description: string;
        };
        isDisabled: {
            control: string;
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        href: {
            control: string;
            description: string;
            type: {
                name: string;
                required: boolean;
            };
        };
        target: {
            control: string;
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        slot: {
            description: string;
        };
    };
    args: {
        appearance: "default";
        slot: string;
        size: "inherit";
        href: string;
        target: string;
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "default";
        isDisabled: boolean;
    };
    render: (args: Args) => import("lit-html").TemplateResult<1>;
};
export default _default;
export declare const Inline: {
    args: {
        appearance: "default";
        slot: string;
        size: "inherit";
        href: string;
        target: string;
        icon: string;
        isDisabled: boolean;
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
};
export declare const Standalone: {
    args: {
        appearance: "default";
        slot: string;
        size: "body-regular";
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "default";
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
};
export declare const StandaloneSubtle: {
    args: {
        appearance: "subtle";
        slot: string;
        size: "body-regular";
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "default";
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
};
export declare const Highlight: {
    args: {
        appearance: "subtle";
        slot: string;
        size: "body-regular";
        href: string;
        target: string;
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "primary";
        isDisabled: boolean;
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
};
export declare const Back: {
    args: {
        appearance: "subtle";
        slot: string;
        size: "body-regular";
        href: string;
        target: string;
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "secondary";
        isDisabled: boolean;
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
};
export declare const Area: {
    args: {
        appearance: "area";
        slot: string;
        size: "inherit";
        href: string;
        target: string;
        icon: string;
        isDisabled: boolean;
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
};
export declare const dropdownMenuLink: {
    tags: string[];
    args: {
        appearance: "dropdown-menu-link";
        slot: string;
        size: "inherit";
        href: string;
        target: string;
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "secondary";
        isDisabled: boolean;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const LinkMenuSecondary: {
    tags: string[];
    args: {
        appearance: "menu-secondary";
        slot: string;
        size: "body-regular";
        href: string;
        target: string;
        icon: string;
        iconPosition: "left";
        iconAppearance: "default";
    };
};
export declare const LinkMenuBack: {
    tags: string[];
    args: {
        appearance: "menu-back";
        slot: string;
        href: string;
        target: string;
        size: string;
        icon: string;
        iconSize: string;
        iconPosition: "left";
        iconAppearance: "default";
    };
};
