'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const formLabel_types = require('./form-label.types-a877a1f1.js');
const statuses_types = require('./statuses.types-31a27ec6.js');

const formLabelBaseCss = ".sr-only.sc-wink-form-label-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-form-label-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-form-label-base-h{display:flex;width:100%;justify-content:space-between}.sc-wink-form-label-base-h .label--content-wrapper.sc-wink-form-label-base{display:flex;flex-direction:column}.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{color:var(--semantic-color-text-default);font-size:1.6rem;line-height:2.4rem;background-color:transparent}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{font-size:1.4rem;line-height:2rem}}.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{font-size:1.2rem;line-height:1.6rem}}.sc-wink-form-label-base-h .label--optional.sc-wink-form-label-base{font-size:1.4rem;line-height:2rem;color:var(--semantic-color-text-subtlest)}.label--subcomponent.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{color:var(--semantic-color-text-default);font-size:1.8rem;line-height:2.8rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-base-h .label--text.sc-wink-form-label-base{font-size:1.6rem;line-height:2rem}}.label--subcomponent.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-base-h .label--helper.sc-wink-form-label-base{font-size:1.2rem;line-height:1.6rem}}.label--disabled.sc-wink-form-label-base-h{opacity:calc(var(--semantic-opacity-disabled) / 10)}";
const WinkFormLabelBaseStyle0 = formLabelBaseCss;

const formLabelTelenetCss = ".sr-only.sc-wink-form-label-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-form-label-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-form-label-telenet-h{display:flex;width:100%;justify-content:space-between}.sc-wink-form-label-telenet-h .label--content-wrapper.sc-wink-form-label-telenet{display:flex;flex-direction:column}.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{color:var(--semantic-color-text-default);font-size:1.6rem;line-height:2.4rem;background-color:transparent}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{font-size:1.4rem;line-height:2rem}}.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{font-size:1.2rem;line-height:1.6rem}}.sc-wink-form-label-telenet-h .label--optional.sc-wink-form-label-telenet{font-size:1.4rem;line-height:2rem;color:var(--semantic-color-text-subtlest)}.label--subcomponent.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{color:var(--semantic-color-text-default);font-size:1.8rem;line-height:2.8rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-telenet-h .label--text.sc-wink-form-label-telenet{font-size:1.6rem;line-height:2rem}}.label--subcomponent.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{color:var(--semantic-color-text-subtlest);font-size:1.4rem;line-height:2rem}@media only screen and (max-width: calc(74.5em - 1px)){.label--subcomponent.sc-wink-form-label-telenet-h .label--helper.sc-wink-form-label-telenet{font-size:1.2rem;line-height:1.6rem}}.label--disabled.sc-wink-form-label-telenet-h{opacity:calc(var(--semantic-opacity-disabled) / 10)}";
const WinkFormLabelTelenetStyle0 = formLabelTelenetCss;

const FormLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.helper = undefined;
        this.labelId = undefined;
        this.helperId = undefined;
        this.rendition = formLabel_types.FORM_LABEL_RENDITION.default;
        this.optionalText = 'Optioneel';
        this.showOptional = false;
        this.isDisabled = false;
    }
    render() {
        return (index.h(index.Host, { key: '5dfbd831a7ebb558e65cb7ae7e9746124d52f7b5', class: `${this.isDisabled ? 'label--disabled' : ''} label--${this.rendition}`.toLocaleLowerCase() }, index.h("span", { key: 'aae45fa31c41b7dab0483d2dddbaf879ff4f3ca8', class: "label--content-wrapper" }, index.h("span", { key: 'fae2d7ebaa990faec70d1e5e118459f343d543f2', class: "label--text" }, this.label), this.helper && (index.h("span", { class: "label--helper", id: this.helperId }, this.helper))), this.showOptional && index.h("span", { class: "label--optional" }, this.optionalText)));
    }
};
FormLabel.style = {
    base: WinkFormLabelBaseStyle0,
    telenet: WinkFormLabelTelenetStyle0
};

const VALIDATION_TYPES = {
    error: statuses_types.STATUS_VARIANTS.error,
};

const validationMessageBaseCss = ".sr-only.sc-wink-validation-message-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-validation-message-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-validation-message-base-h>*.sc-wink-validation-message-base{--wink-icon-color:var(--semantic-color-icon-error);color:var(--semantic-color-text-error);display:flex;flex-wrap:wrap;width:100%;gap:calc(var(--semantic-spacing-3xs) * 1rem);align-items:center;font-size:1.4rem;line-height:2rem;margin-top:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-validation-message-base-h .validation-message--error.sc-wink-validation-message-base{--wink-icon-color:var(--semantic-color-icon-error)}";
const WinkValidationMessageBaseStyle0 = validationMessageBaseCss;

const validationMessageTelenetCss = ".sr-only.sc-wink-validation-message-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-validation-message-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-validation-message-telenet-h>*.sc-wink-validation-message-telenet{--wink-icon-color:var(--semantic-color-icon-error);color:var(--semantic-color-text-error);display:flex;flex-wrap:wrap;width:100%;gap:calc(var(--semantic-spacing-3xs) * 1rem);align-items:center;font-size:1.4rem;line-height:2rem;margin-top:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-validation-message-telenet-h .validation-message--error.sc-wink-validation-message-telenet{--wink-icon-color:var(--semantic-color-icon-error)}";
const WinkValidationMessageTelenetStyle0 = validationMessageTelenetCss;

const ValidationMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = undefined;
        this.type = VALIDATION_TYPES.error;
    }
    render() {
        return (index.h("div", { key: '3ad88915d603ba0b26a3b35bfec69dfeae97635b', class: `validation-message--${this.type}` }, index.h("wink-icon", { key: '8e427aa709ac3bdf6994a7e9a2e690f57fee18cd', icon: "error-shape" }), this.message));
    }
};
ValidationMessage.style = {
    base: WinkValidationMessageBaseStyle0,
    telenet: WinkValidationMessageTelenetStyle0
};

exports.wink_form_label = FormLabel;
exports.wink_validation_message = ValidationMessage;

//# sourceMappingURL=wink-form-label_2.cjs.entry.js.map