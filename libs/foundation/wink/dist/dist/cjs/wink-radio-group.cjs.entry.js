'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const positions_types = require('./positions.types-3913d7ec.js');

const radioGroupBaseCss = ".sr-only.sc-wink-radio-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-radio-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-radio-group-base-h{display:block}.sc-wink-radio-group-base-h fieldset.sc-wink-radio-group-base{margin:0;padding:0;border:0}.sc-wink-radio-group-base-h legend.sc-wink-radio-group-base{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-radio-group-base-h .radio-group--horizontal.sc-wink-radio-group-base,.sc-wink-radio-group-base-h .radio-group--vertical.sc-wink-radio-group-base{display:inline-flex;flex-wrap:wrap}.sc-wink-radio-group-base-h .radio-group--vertical.sc-wink-radio-group-base{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-radio-group-base-h .radio-group--horizontal.sc-wink-radio-group-base{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkRadioGroupBaseStyle0 = radioGroupBaseCss;

const radioGroupTelenetCss = ".sr-only.sc-wink-radio-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-radio-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-radio-group-telenet-h{display:block}.sc-wink-radio-group-telenet-h fieldset.sc-wink-radio-group-telenet{margin:0;padding:0;border:0}.sc-wink-radio-group-telenet-h legend.sc-wink-radio-group-telenet{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-radio-group-telenet-h .radio-group--horizontal.sc-wink-radio-group-telenet,.sc-wink-radio-group-telenet-h .radio-group--vertical.sc-wink-radio-group-telenet{display:inline-flex;flex-wrap:wrap}.sc-wink-radio-group-telenet-h .radio-group--vertical.sc-wink-radio-group-telenet{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-radio-group-telenet-h .radio-group--horizontal.sc-wink-radio-group-telenet{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkRadioGroupTelenetStyle0 = radioGroupTelenetCss;

const RadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.helper = '';
        this.direction = positions_types.DIRECTIONS.vertical;
        this.isRequired = false;
        this.optionalText = 'Optioneel';
        this.error = undefined;
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
        return (index.h("fieldset", { key: 'e490b8f9e96079460ac2ac7eda69f90ba4d7a916' }, index.h("legend", { key: 'd96aa8fcf6a9b20767991732665367e36687a55b', class: "radio-group__wrapper" }, index.h("wink-form-label", { key: '2d131f7ae1fdc24cf2eb8fe4ba19b1c153d5df1c', label: this.label, helper: this.helper, "show-optional": !this.isRequired, "optional-text": this.optionalText })), index.h("div", { key: '0ca6931cde693164749a85f789c0ff7e453e5e61', class: `radio-group--${this.direction}` }, index.h("slot", { key: '134ae95d33ea8e0f7806a79f3260f47f523021da' })), this.error && index.h("wink-validation-message", { message: this.error, type: "error" })));
    }
};
RadioGroup.style = {
    base: WinkRadioGroupBaseStyle0,
    telenet: WinkRadioGroupTelenetStyle0
};

exports.wink_radio_group = RadioGroup;

//# sourceMappingURL=wink-radio-group.cjs.entry.js.map