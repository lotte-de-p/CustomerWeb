import { r as registerInstance, h, H as Host } from './index-4268ac0c.js';
import { T as TOAST_TYPES } from './toast.types-6bc98f13.js';

const toasterBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}wink-toaster{position:fixed;z-index:99999;right:0;bottom:0;width:100%;height:auto;display:block;box-sizing:border-box;display:flex;justify-content:flex-end;flex-direction:column;pointer-events:none;transition:all 200ms ease-in-out;gap:calc(var(--semantic-spacing-3xs) * 1rem)}@media only screen and (min-width: 36em){wink-toaster{align-items:flex-end;gap:calc(var(--semantic-spacing-md) * 1rem);padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkToasterBaseStyle0 = toasterBaseCss;

const toasterTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}wink-toaster{position:fixed;z-index:99999;right:0;bottom:0;width:100%;height:auto;display:block;box-sizing:border-box;display:flex;justify-content:flex-end;flex-direction:column;pointer-events:none;transition:all 200ms ease-in-out;gap:calc(var(--semantic-spacing-3xs) * 1rem)}@media only screen and (min-width: 36em){wink-toaster{align-items:flex-end;gap:calc(var(--semantic-spacing-md) * 1rem);padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkToasterTelenetStyle0 = toasterTelenetCss;

const Toaster = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toasts = [];
    }
    async winkCreateToast(toast) {
        this.toasts = [...this.toasts, toast];
    }
    render() {
        return (h(Host, { key: 'db735387e621d6a7343648cb3ec2fa235b993b87', "aria-live": "polite", "aria-atomic": "true" }, this.toasts.map((toast) => (h("wink-toast", { appearance: toast.appearance || TOAST_TYPES.actionable, text: toast.text || '', duration: toast.duration || 6000, href: toast.href || '#', target: toast.target || '_self', linkText: toast.linkText || 'link', "is-open": true }))), h("slot", { key: '5d2596336bd40af5c4ab0b97b572c9162e034881' })));
    }
};
Toaster.style = {
    base: WinkToasterBaseStyle0,
    telenet: WinkToasterTelenetStyle0
};

export { Toaster as wink_toaster };

//# sourceMappingURL=wink-toaster.entry.js.map