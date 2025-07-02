import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { F as FORM_LABEL_RENDITION, d as defineCustomElement$2 } from './form-label.js';

const radioButtonBaseCss = ".sr-only.sc-wink-radio-button-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-radio-button-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-radio-button-base-h{display:inline-block}.sc-wink-radio-button-base-h label.sc-wink-radio-button-base{display:flex;align-items:center;justify-content:flex-start;cursor:pointer;width:100%}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base{border-radius:50%;flex-shrink:0;align-self:flex-start;background-color:var(--semantic-color-background-surface-neutral-default);cursor:pointer;width:2rem;height:2rem;border:0.2rem solid var(--semantic-color-border-button-default);padding:0;margin:0.2rem calc(var(--semantic-spacing-xs) * 1rem) 0 0;appearance:none}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:before{content:\"\";position:absolute;margin-top:0.4rem;margin-left:0.4rem;width:0.8rem;height:0.8rem;border-radius:50%;background-color:var(--semantic-color-background-surface-highlight-7);transform:scale(0);transition:transform 0.12s ease-in-out}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:checked{background:var(--semantic-color-background-surface-action-default);border-color:var(--semantic-color-background-surface-action-selected)}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:checked:hover{background:var(--semantic-color-background-surface-action-hover);border-color:var(--semantic-color-background-surface-action-selected)}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:checked:before{transform:scale(1)}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:disabled,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:disabled~*.sc-wink-radio-button-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:disabled:hover{border-color:var(--semantic-color-border-button-default)}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:invalid,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:invalid:hover,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base:hover,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:invalid:focus,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base:focus{border:2px solid var(--semantic-color-border-error);background-color:transparent}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:invalid:before,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base:before,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:invalid:hover:before,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base:hover:before,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:invalid:focus:before,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base:focus:before{background-color:var(--semantic-color-icon-error)}.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:checked:invalid:before,.sc-wink-radio-button-base-h input[type=radio][aria-invalid].sc-wink-radio-button-base:checked:before{background-color:var(--semantic-color-icon-error)}.sc-wink-radio-button-base-h:hover,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:hover{border-color:var(--semantic-color-border-highlight)}.sc-wink-radio-button-base-h:focus,.sc-wink-radio-button-base-h input[type=radio].sc-wink-radio-button-base:focus{border-color:var(--semantic-color-border-highlight);outline:0.2rem solid var(--semantic-color-border-focus);outline-offset:0.2rem}";
const WinkRadioButtonBaseStyle0 = radioButtonBaseCss;

const radioButtonTelenetCss = ".sr-only.sc-wink-radio-button-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-radio-button-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-radio-button-telenet-h{display:inline-block}.sc-wink-radio-button-telenet-h label.sc-wink-radio-button-telenet{display:flex;align-items:center;justify-content:flex-start;cursor:pointer;width:100%}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet{border-radius:50%;flex-shrink:0;align-self:flex-start;background-color:var(--semantic-color-background-surface-neutral-default);cursor:pointer;width:2rem;height:2rem;border:0.2rem solid var(--semantic-color-border-button-default);padding:0;margin:0.2rem calc(var(--semantic-spacing-xs) * 1rem) 0 0;appearance:none}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:before{content:\"\";position:absolute;margin-top:0.4rem;margin-left:0.4rem;width:0.8rem;height:0.8rem;border-radius:50%;background-color:var(--semantic-color-background-surface-highlight-7);transform:scale(0);transition:transform 0.12s ease-in-out}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:checked{background:var(--semantic-color-background-surface-action-default);border-color:var(--semantic-color-background-surface-action-selected)}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:checked:hover{background:var(--semantic-color-background-surface-action-hover);border-color:var(--semantic-color-background-surface-action-selected)}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:checked:before{transform:scale(1)}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:disabled,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:disabled~*.sc-wink-radio-button-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:disabled:hover{border-color:var(--semantic-color-border-button-default)}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:invalid,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:invalid:hover,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet:hover,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:invalid:focus,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet:focus{border:2px solid var(--semantic-color-border-error);background-color:transparent}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:invalid:before,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet:before,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:invalid:hover:before,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet:hover:before,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:invalid:focus:before,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet:focus:before{background-color:var(--semantic-color-icon-error)}.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:checked:invalid:before,.sc-wink-radio-button-telenet-h input[type=radio][aria-invalid].sc-wink-radio-button-telenet:checked:before{background-color:var(--semantic-color-icon-error)}.sc-wink-radio-button-telenet-h:hover,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:hover{border-color:var(--semantic-color-border-highlight)}.sc-wink-radio-button-telenet-h:focus,.sc-wink-radio-button-telenet-h input[type=radio].sc-wink-radio-button-telenet:focus{border-color:var(--semantic-color-border-highlight);outline:0.2rem solid var(--semantic-color-border-focus);outline-offset:0.2rem}";
const WinkRadioButtonTelenetStyle0 = radioButtonTelenetCss;

const RadioButton = /*@__PURE__*/ proxyCustomElement(class RadioButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.label = '';
        this.helper = '';
        this.radioButtonId = '';
        this.name = '';
        this.checked = false;
        this.disabled = false;
        this.error = false;
    }
    internals;
    get host() { return this; }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.host?.querySelector('input')?.click();
        }
    };
    render() {
        return (h("label", { key: '5336dc95e8f71b7e53c78561ea6c3fa7178c1c6a' }, h("input", { key: '0d8b31f04b76faf13499f095727fc0b8461b42a6', type: "radio", id: this.radioButtonId, name: this.name, value: this.label, checked: this.checked, disabled: this.disabled, "aria-invalid": this.error, onKeyDown: this.handleKeyDown }), h("wink-form-label", { key: '45c16075ae892458d29ed10d4ded14932269dc21', label: this.label, helper: this.helper, rendition: FORM_LABEL_RENDITION.subComponent })));
    }
    static get style() { return {
        base: WinkRadioButtonBaseStyle0,
        telenet: WinkRadioButtonTelenetStyle0
    }; }
}, [34, "wink-radio-button", {
        "label": [1],
        "helper": [1],
        "radioButtonId": [1, "radio-button-id"],
        "name": [1],
        "checked": [516],
        "disabled": [4],
        "error": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-radio-button", "wink-form-label"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-radio-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RadioButton);
            }
            break;
        case "wink-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkRadioButton = RadioButton;
const defineCustomElement = defineCustomElement$1;

export { WinkRadioButton, defineCustomElement };

//# sourceMappingURL=wink-radio-button.js.map