import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const FORM_LABEL_RENDITION = {
    default: 'default',
    subComponent: 'subComponent',
};

const formLabelBaseCss = ".sr-only.sc-wink-form-label-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-form-label-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-form-label-base-h{display:flex;width:100%;justify-content:space-between}.sc-wink-form-label-base-h .label--content-wrapper.sc-wink-form-label-base{display:flex;flex-direction:column}.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{color:var(--semantic-color-text-default);font-size:1.6rem;line-height:2.4rem;background-color:transparent}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{font-size:1.4rem;line-height:2rem}}.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{font-size:1.2rem;line-height:1.6rem}}.sc-wink-form-label-base-h .label--optional.sc-wink-form-label-base{font-size:1.4rem;line-height:2rem;color:var(--semantic-color-text-subtlest)}.label--subcomponent.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{color:var(--semantic-color-text-default);font-size:1.8rem;line-height:2.8rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{font-size:1.6rem;line-height:2rem}}.label--subcomponent.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{font-size:1.2rem;line-height:1.6rem}}.label--disabled.sc-wink-form-label-base-h{opacity:calc(var(--semantic-opacity-disabled) / 10)}";
const WinkFormLabelBaseStyle0 = formLabelBaseCss;

const formLabelTelenetCss = ".sr-only.sc-wink-form-label-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-form-label-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-form-label-telenet-h{display:flex;width:100%;justify-content:space-between}.sc-wink-form-label-telenet-h .label--content-wrapper.sc-wink-form-label-telenet{display:flex;flex-direction:column}.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{color:var(--semantic-color-text-default);font-size:1.6rem;line-height:2.4rem;background-color:transparent}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{font-size:1.4rem;line-height:2rem}}.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{font-size:1.2rem;line-height:1.6rem}}.sc-wink-form-label-telenet-h .label--optional.sc-wink-form-label-telenet{font-size:1.4rem;line-height:2rem;color:var(--semantic-color-text-subtlest)}.label--subcomponent.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{color:var(--semantic-color-text-default);font-size:1.8rem;line-height:2.8rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{font-size:1.6rem;line-height:2rem}}.label--subcomponent.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{font-size:1.2rem;line-height:1.6rem}}.label--disabled.sc-wink-form-label-telenet-h{opacity:calc(var(--semantic-opacity-disabled) / 10)}";
const WinkFormLabelTelenetStyle0 = formLabelTelenetCss;

const FormLabel = /*@__PURE__*/ proxyCustomElement(class FormLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.label = '';
        this.helper = undefined;
        this.labelId = undefined;
        this.helperId = undefined;
        this.rendition = FORM_LABEL_RENDITION.default;
        this.optionalText = 'Optioneel';
        this.showOptional = false;
        this.isDisabled = false;
    }
    render() {
        return (h(Host, { key: '5dfbd831a7ebb558e65cb7ae7e9746124d52f7b5', class: `${this.isDisabled ? 'label--disabled' : ''} label--${this.rendition}`.toLocaleLowerCase() }, h("span", { key: 'aae45fa31c41b7dab0483d2dddbaf879ff4f3ca8', class: "label--content-wrapper" }, h("span", { key: 'fae2d7ebaa990faec70d1e5e118459f343d543f2', class: "label--text" }, this.label), this.helper && (h("span", { class: "label--helper", id: this.helperId }, this.helper))), this.showOptional && h("span", { class: "label--optional" }, this.optionalText)));
    }
    static get style() { return {
        base: WinkFormLabelBaseStyle0,
        telenet: WinkFormLabelTelenetStyle0
    }; }
}, [34, "wink-form-label", {
        "label": [1],
        "helper": [1],
        "labelId": [1, "label-id"],
        "helperId": [1, "helper-id"],
        "rendition": [1],
        "optionalText": [1, "optional-text"],
        "showOptional": [4, "show-optional"],
        "isDisabled": [4, "is-disabled"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-form-label"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-form-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FormLabel);
            }
            break;
    } });
}

export { FORM_LABEL_RENDITION as F, FormLabel as a, defineCustomElement as d };

//# sourceMappingURL=form-label.js.map