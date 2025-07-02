import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as TOAST_TYPES, d as defineCustomElement$2 } from './toast.js';
import { a as defineCustomElement$5, d as defineCustomElement$6 } from './animation.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './link.js';

const toasterBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}wink-toaster{position:fixed;z-index:99999;right:0;bottom:0;width:100%;height:auto;display:block;box-sizing:border-box;display:flex;justify-content:flex-end;flex-direction:column;pointer-events:none;transition:all 200ms ease-in-out;gap:calc(var(--semantic-spacing-3xs) * 1rem)}@media only screen and (min-width: 36em){wink-toaster{align-items:flex-end;gap:calc(var(--semantic-spacing-md) * 1rem);padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkToasterBaseStyle0 = toasterBaseCss;

const toasterTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}wink-toaster{position:fixed;z-index:99999;right:0;bottom:0;width:100%;height:auto;display:block;box-sizing:border-box;display:flex;justify-content:flex-end;flex-direction:column;pointer-events:none;transition:all 200ms ease-in-out;gap:calc(var(--semantic-spacing-3xs) * 1rem)}@media only screen and (min-width: 36em){wink-toaster{align-items:flex-end;gap:calc(var(--semantic-spacing-md) * 1rem);padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkToasterTelenetStyle0 = toasterTelenetCss;

const Toaster = /*@__PURE__*/ proxyCustomElement(class Toaster extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toasts = [];
    }
    async winkCreateToast(toast) {
        this.toasts = [...this.toasts, toast];
    }
    render() {
        return (h(Host, { key: 'db735387e621d6a7343648cb3ec2fa235b993b87', "aria-live": "polite", "aria-atomic": "true" }, this.toasts.map((toast) => (h("wink-toast", { appearance: toast.appearance || TOAST_TYPES.actionable, text: toast.text || '', duration: toast.duration || 6000, href: toast.href || '#', target: toast.target || '_self', linkText: toast.linkText || 'link', "is-open": true }))), h("slot", { key: '5d2596336bd40af5c4ab0b97b572c9162e034881' })));
    }
    static get style() { return {
        base: WinkToasterBaseStyle0,
        telenet: WinkToasterTelenetStyle0
    }; }
}, [36, "wink-toaster", {
        "toasts": [32],
        "winkCreateToast": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-toaster", "wink-animation", "wink-button", "wink-icon", "wink-link", "wink-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-toaster":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Toaster);
            }
            break;
        case "wink-animation":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "wink-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "wink-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "wink-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkToaster = Toaster;
const defineCustomElement = defineCustomElement$1;

export { WinkToaster, defineCustomElement };

//# sourceMappingURL=wink-toaster.js.map