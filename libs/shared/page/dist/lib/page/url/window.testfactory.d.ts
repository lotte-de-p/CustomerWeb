export interface WindowInterface {
    location: {
        href: string;
        hash: string;
        search: string;
        pathname: string;
        assign: string;
    };
    document: {
        title: string;
        documentElement: {
            lang: string;
        };
        createEvent: (type: string) => unknown;
        createElement: (type: string) => unknown;
    };
    history: {
        back: () => void;
        replaceState: () => void;
    };
    grecaptcha?: {
        ready: (callback: () => void) => unknown;
        execute: (...args: unknown[]) => Promise<string>;
    };
    open: (url?: string, target?: string, windowFeatures?: string) => WindowProxy | null;
    ContextHub: {
        getStore: (name: string) => unknown;
        get: (storeName: string) => {
            uid: string;
            mail: string;
            roles: string;
        } | undefined;
    };
    telenetgroupLoader: {
        showPageLoader: (option: unknown) => void;
        hidePageLoader: () => void;
    };
}
export declare const windowFactory: () => WindowInterface;
//# sourceMappingURL=window.testfactory.d.ts.map