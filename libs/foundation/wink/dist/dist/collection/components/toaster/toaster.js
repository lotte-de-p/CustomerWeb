import { h, Host } from "@stencil/core";
import { TOAST_TYPES } from "./_sub-comps/toast/models/toast.types";
export class Toaster {
    constructor() {
        this.toasts = [];
    }
    async winkCreateToast(toast) {
        this.toasts = [...this.toasts, toast];
    }
    render() {
        return (h(Host, { key: 'db735387e621d6a7343648cb3ec2fa235b993b87', "aria-live": "polite", "aria-atomic": "true" }, this.toasts.map((toast) => (h("wink-toast", { appearance: toast.appearance || TOAST_TYPES.actionable, text: toast.text || '', duration: toast.duration || 6000, href: toast.href || '#', target: toast.target || '_self', linkText: toast.linkText || 'link', "is-open": true }))), h("slot", { key: '5d2596336bd40af5c4ab0b97b572c9162e034881' })));
    }
    static get is() { return "wink-toaster"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/toaster.telenet.scss"],
            "base": ["styles/brands/toaster.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/toaster.telenet.css"],
            "base": ["styles/brands/toaster.base.css"]
        };
    }
    static get states() {
        return {
            "toasts": {}
        };
    }
    static get methods() {
        return {
            "winkCreateToast": {
                "complexType": {
                    "signature": "(toast: ToastElement) => Promise<void>",
                    "parameters": [{
                            "name": "toast",
                            "type": "{ appearance: ToastType; text: string; duration: number; href: string; target: string; linkText: string; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "ToastElement": {
                            "location": "import",
                            "path": "./models/toaster.types",
                            "id": "../core/src/components/toaster/models/toaster.types.tsx::ToastElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=toaster.js.map
