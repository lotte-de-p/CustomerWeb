import { h, Host } from "@stencil/core";
import { TOAST_TYPES } from "./models/toast.types";
import { TARGETS } from "../../../../models/targets.types";
import { ICON_SIZES } from "../../../icon/models/icon.types";
export class Toast {
    constructor() {
        this.appearance = TOAST_TYPES.actionable;
        this.text = '';
        this.linkText = 'Open Link';
        this.href = '';
        this.target = TARGETS.self;
        this.duration = 6000;
        this.isOpen = false;
        this.theme = 'telenet-light-theme';
        this.currentTheme = 'telenet-light-theme';
    }
    timer = null;
    iconsNamesMap = new Map([
        [TOAST_TYPES.negative, 'cross-circle-filled'],
        [TOAST_TYPES.positive, 'check-shape-filled'],
    ]);
    watchOpenPropHandler(newValue, oldValue) {
        if (newValue && !oldValue) {
            this.closeToastAfterTimeout();
        }
    }
    watchThemePropHandler(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.changeTheme(newValue);
        }
    }
    handleKeyDown(ev) {
        if (ev.key === 'Escape') {
            this.closeToast();
        }
    }
    componentDidLoad() {
        const currentTheme = localStorage.getItem('currentTheme') || 'telenet-light';
        this.changeTheme(currentTheme + '-theme');
        this.closeToastAfterTimeout();
    }
    changeTheme(newValue) {
        this.theme = newValue.includes('dark') ? newValue.replace('dark', 'light') : newValue.replace('light', 'dark');
    }
    closeToast() {
        this.isOpen = false;
    }
    closeToastAfterTimeout() {
        if (this.appearance !== TOAST_TYPES.actionable && this.duration && this.duration > 0) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.closeToast();
            }, Number(this.duration));
        }
    }
    render() {
        return (h(Host, { key: '4353ed175ce789298a19e7c9037ea92719db8d47', theme: this.theme, "aria-hidden": this.isOpen ? 'false' : 'true', role: "alert" }, (this.appearance === TOAST_TYPES.positive || this.appearance === TOAST_TYPES.negative) && (h("wink-icon", { class: `toast-icon toast-icon-${this.appearance}`, size: ICON_SIZES.md, icon: this.iconsNamesMap.get(this.appearance) })), this.text && h("p", { class: "toast-text" }, this.text), this.appearance === TOAST_TYPES.actionable && this.href && (h("wink-link", { appearance: "default", icon: "", size: "inherit", "is-disabled": "false", class: "toast-link", target: this.target, href: this.href }, this.linkText)), h("wink-button", { key: 'dae3eea4b47c3b59e37af642c36fbe3179a132a6', element: "button", type: "button", appearance: "tertiary", size: "sm", width: "none", status: "none", icon: "cross", "icon-position": "center", exportparts: "icon, icon-cross", class: "hydrated toast-close", "icon-button-aria-label": "close toast", onClick: this.closeToast.bind(this) })));
    }
    static get is() { return "wink-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/toast.telenet.scss"],
            "base": ["styles/brands/toast.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/toast.telenet.css"],
            "base": ["styles/brands/toast.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastType",
                    "resolved": "\"actionable\" | \"feedback\" | \"negative\" | \"positive\"",
                    "references": {
                        "ToastType": {
                            "location": "import",
                            "path": "./models/toast.types",
                            "id": "../core/src/components/toaster/_sub-comps/toast/models/toast.types.tsx::ToastType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "appearance",
                "reflect": false,
                "defaultValue": "TOAST_TYPES.actionable"
            },
            "text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "text",
                "reflect": false,
                "defaultValue": "''"
            },
            "linkText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "link-text",
                "reflect": false,
                "defaultValue": "'Open Link'"
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "href",
                "reflect": false,
                "defaultValue": "''"
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Target",
                    "resolved": "string | undefined",
                    "references": {
                        "Target": {
                            "location": "import",
                            "path": "../../../../models/targets.types",
                            "id": "../core/src/models/targets.types.tsx::Target"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "TARGETS.self"
            },
            "duration": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | undefined",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "duration",
                "reflect": false,
                "defaultValue": "6000"
            },
            "isOpen": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-open",
                "reflect": true,
                "defaultValue": "false"
            },
            "theme": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "theme",
                "reflect": true,
                "defaultValue": "'telenet-light-theme'"
            },
            "currentTheme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "current-theme",
                "reflect": true,
                "defaultValue": "'telenet-light-theme'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "watchOpenPropHandler"
            }, {
                "propName": "currentTheme",
                "methodName": "watchThemePropHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=toast.js.map
