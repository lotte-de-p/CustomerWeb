import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { D as DIRECTIONS } from './positions.types.js';
import { d as defineCustomElement$4 } from './form-label.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './validation-message.js';

const checkBoxGroupBaseCss = ".sr-only.sc-wink-check-box-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-check-box-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-check-box-group-base-h{display:block}.sc-wink-check-box-group-base-h fieldset.sc-wink-check-box-group-base{margin:0;padding:0;border:0}.sc-wink-check-box-group-base-h legend.sc-wink-check-box-group-base{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-check-box-group-base-h .check-box-group--horizontal.sc-wink-check-box-group-base,.sc-wink-check-box-group-base-h .check-box-group--vertical.sc-wink-check-box-group-base{display:inline-flex;flex-wrap:wrap}.sc-wink-check-box-group-base-h .check-box-group--vertical.sc-wink-check-box-group-base{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-check-box-group-base-h .check-box-group--horizontal.sc-wink-check-box-group-base{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkCheckBoxGroupBaseStyle0 = checkBoxGroupBaseCss;

const checkBoxGroupTelenetCss = ".sr-only.sc-wink-check-box-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-check-box-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-check-box-group-telenet-h{display:block}.sc-wink-check-box-group-telenet-h fieldset.sc-wink-check-box-group-telenet{margin:0;padding:0;border:0}.sc-wink-check-box-group-telenet-h legend.sc-wink-check-box-group-telenet{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-check-box-group-telenet-h .check-box-group--horizontal.sc-wink-check-box-group-telenet,.sc-wink-check-box-group-telenet-h .check-box-group--vertical.sc-wink-check-box-group-telenet{display:inline-flex;flex-wrap:wrap}.sc-wink-check-box-group-telenet-h .check-box-group--vertical.sc-wink-check-box-group-telenet{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-check-box-group-telenet-h .check-box-group--horizontal.sc-wink-check-box-group-telenet{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkCheckBoxGroupTelenetStyle0 = checkBoxGroupTelenetCss;

const CheckBoxGroup = /*@__PURE__*/ proxyCustomElement(class CheckBoxGroup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.label = '';
        this.helper = '';
        this.direction = DIRECTIONS.vertical;
        this.error = undefined;
        this.isRequired = false;
        this.optionalText = 'Optioneel';
    }
    internals;
    async setValidation(errorMsg) {
        if (errorMsg) {
            this.error = errorMsg;
        }
        else {
            this.error = '';
        }
    }
    render() {
        return (h("fieldset", { key: 'd7f5fa5db666b4c44c65794b26d89558fc95e00c' }, h("legend", { key: 'c123bc97caf59f4e07715fd3fb5567bbdbf56096', class: "check-box-group__wrapper" }, h("wink-form-label", { key: 'e321c64e5cf4cde27ebbe86779999826a3619c32', label: this.label, helper: this.helper, "show-optional": !this.isRequired, "optional-text": this.optionalText })), h("div", { key: 'ca479c96280af57731b88bc4aa0b2fbfee0e829a', class: `check-box-group--${this.direction}` }, h("slot", { key: '245b88689fd91bfe99bb6570a763207b30fe2438' })), this.error && h("wink-validation-message", { message: this.error, type: "error" })));
    }
    static get style() { return {
        base: WinkCheckBoxGroupBaseStyle0,
        telenet: WinkCheckBoxGroupTelenetStyle0
    }; }
}, [38, "wink-check-box-group", {
        "label": [1],
        "helper": [1],
        "direction": [1],
        "error": [1537],
        "isRequired": [4, "is-required"],
        "optionalText": [1, "optional-text"],
        "setValidation": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-check-box-group", "wink-form-label", "wink-icon", "wink-validation-message"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-check-box-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CheckBoxGroup);
            }
            break;
        case "wink-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "wink-validation-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkCheckBoxGroup = CheckBoxGroup;
const defineCustomElement = defineCustomElement$1;

export { WinkCheckBoxGroup, defineCustomElement };

//# sourceMappingURL=wink-check-box-group.js.map