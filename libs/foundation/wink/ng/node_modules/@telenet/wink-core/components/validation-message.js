import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { S as STATUS_VARIANTS } from './statuses.types.js';
import { d as defineCustomElement$1 } from './icon.js';

const VALIDATION_TYPES = {
    error: STATUS_VARIANTS.error,
};

const validationMessageBaseCss = ".sr-only.sc-wink-validation-message-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-validation-message-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-validation-message-base-h>*.sc-wink-validation-message-base{--wink-icon-color:var(--semantic-color-icon-error);color:var(--semantic-color-text-error);display:flex;flex-wrap:wrap;width:100%;gap:calc(var(--semantic-spacing-3xs) * 1rem);align-items:center;font-size:1.4rem;line-height:2rem;margin-top:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-validation-message-base-h .validation-message--error.sc-wink-validation-message-base{--wink-icon-color:var(--semantic-color-icon-error)}";
const WinkValidationMessageBaseStyle0 = validationMessageBaseCss;

const validationMessageTelenetCss = ".sr-only.sc-wink-validation-message-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-validation-message-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-validation-message-telenet-h>*.sc-wink-validation-message-telenet{--wink-icon-color:var(--semantic-color-icon-error);color:var(--semantic-color-text-error);display:flex;flex-wrap:wrap;width:100%;gap:calc(var(--semantic-spacing-3xs) * 1rem);align-items:center;font-size:1.4rem;line-height:2rem;margin-top:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-validation-message-telenet-h .validation-message--error.sc-wink-validation-message-telenet{--wink-icon-color:var(--semantic-color-icon-error)}";
const WinkValidationMessageTelenetStyle0 = validationMessageTelenetCss;

const ValidationMessage = /*@__PURE__*/ proxyCustomElement(class ValidationMessage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.message = undefined;
        this.type = VALIDATION_TYPES.error;
    }
    render() {
        return (h("div", { key: '3ad88915d603ba0b26a3b35bfec69dfeae97635b', class: `validation-message--${this.type}` }, h("wink-icon", { key: '8e427aa709ac3bdf6994a7e9a2e690f57fee18cd', icon: "error-shape" }), this.message));
    }
    static get style() { return {
        base: WinkValidationMessageBaseStyle0,
        telenet: WinkValidationMessageTelenetStyle0
    }; }
}, [34, "wink-validation-message", {
        "message": [1],
        "type": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-validation-message", "wink-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-validation-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ValidationMessage);
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ValidationMessage as V, defineCustomElement as d };

//# sourceMappingURL=validation-message.js.map