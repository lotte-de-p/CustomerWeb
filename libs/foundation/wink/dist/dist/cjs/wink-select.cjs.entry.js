'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const formLabel_types = require('./form-label.types-a877a1f1.js');
const utils = require('./utils-6a0947a7.js');

const selectBaseCss = ".sr-only.sc-wink-select-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-select-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-select-base-h{display:block}.sc-wink-select-base-h wink-form-label.sc-wink-select-base{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-select-base-h .select-wrapper.sc-wink-select-base{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-icon-default);position:relative;width:100%}.sc-wink-select-base-h .select-wrapper.sc-wink-select-base wink-icon.sc-wink-select-base{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-select-base-h select.sc-wink-select-base{background-color:transparent;appearance:none;display:block;margin:0;box-sizing:border-box;width:100%;padding:calc(var(--semantic-spacing-sm) * 1rem) calc(var(--semantic-spacing-sm) * 1rem);border-radius:0;border-width:calc(var(--semantic-border-md) * 1rem);border-style:solid;border-color:var(--semantic-color-border-bold);font-size:18px;line-height:28px;color:var(--semantic-color-text-default)}.sc-wink-select-base-h select.placeholder.sc-wink-select-base{color:var(--semantic-color-text-subtle)}.sc-wink-select-base-h select.sc-wink-select-base:hover{border-color:var(--semantic-color-border-highlight);cursor:pointer}.sc-wink-select-base-h select.sc-wink-select-base:focus{outline-offset:0.2rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight)}.sc-wink-select-base-h select.invalid.sc-wink-select-base{border-color:var(--semantic-color-border-error)}.sc-wink-select-base-h .label-disabled.sc-wink-select-base,.sc-wink-select-base-h select.sc-wink-select-base:disabled,.sc-wink-select-base-h select.sc-wink-select-base:disabled+wink-icon.sc-wink-select-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-select-base-h select.sc-wink-select-base:disabled{border-color:var(--semantic-color-border-bold);background-color:var(--semantic-color-background-surface-bold-default)}";
const WinkSelectBaseStyle0 = selectBaseCss;

const selectTelenetCss = ".sr-only.sc-wink-select-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-select-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-select-telenet-h{display:block}.sc-wink-select-telenet-h wink-form-label.sc-wink-select-telenet{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-select-telenet-h .select-wrapper.sc-wink-select-telenet{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-icon-default);position:relative;width:100%}.sc-wink-select-telenet-h .select-wrapper.sc-wink-select-telenet wink-icon.sc-wink-select-telenet{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-select-telenet-h select.sc-wink-select-telenet{background-color:transparent;appearance:none;display:block;margin:0;box-sizing:border-box;width:100%;padding:calc(var(--semantic-spacing-sm) * 1rem) calc(var(--semantic-spacing-sm) * 1rem);border-radius:0;border-width:calc(var(--semantic-border-md) * 1rem);border-style:solid;border-color:var(--semantic-color-border-bold);font-size:18px;line-height:28px;color:var(--semantic-color-text-default)}.sc-wink-select-telenet-h select.placeholder.sc-wink-select-telenet{color:var(--semantic-color-text-subtle)}.sc-wink-select-telenet-h select.sc-wink-select-telenet:hover{border-color:var(--semantic-color-border-highlight);cursor:pointer}.sc-wink-select-telenet-h select.sc-wink-select-telenet:focus{outline-offset:0.2rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight)}.sc-wink-select-telenet-h select.invalid.sc-wink-select-telenet{border-color:var(--semantic-color-border-error)}.sc-wink-select-telenet-h .label-disabled.sc-wink-select-telenet,.sc-wink-select-telenet-h select.sc-wink-select-telenet:disabled,.sc-wink-select-telenet-h select.sc-wink-select-telenet:disabled+wink-icon.sc-wink-select-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-select-telenet-h select.sc-wink-select-telenet:disabled{border-color:var(--semantic-color-border-bold);background-color:var(--semantic-color-background-surface-bold-default)}";
const WinkSelectTelenetStyle0 = selectTelenetCss;

const Select = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.helper = undefined;
        this.isRequired = false;
        this.selectId = '';
        this.selectName = undefined;
        this.error = undefined;
        this.isDisabled = false;
        this.value = undefined;
        this.placeholder = undefined;
    }
    internals;
    get host() { return index.getElement(this); }
    componentDidRender() {
        const selectEl = this.host.querySelector('select');
        if (selectEl?.value === '') {
            selectEl.classList.add('placeholder');
        }
        this.selectId = this.selectId.length > 0 ? this.selectId : utils.UUId();
    }
    handleChange(e) {
        this.value = e.target.value;
        if (this.value === '') {
            e.target.classList.add('placeholder');
        }
        else {
            e.target.classList.remove('placeholder');
        }
    }
    render() {
        return (index.h(index.Host, { key: '1813c868d5c6d5afafba0a266225d0e202f27a29' }, index.h("label", { key: '53affcdc0add022abc8cfb91035e34a0ad93041f', class: { 'label-disabled': this.isDisabled }, htmlFor: this.selectId }, index.h("wink-form-label", { key: 'e5fb998d5c5286ccae9de63348c1d1f85934231a', label: this.label, helper: this.helper, rendition: formLabel_types.FORM_LABEL_RENDITION.default, "show-optional": this.isRequired })), index.h("div", { key: 'c8a423819070a049c140f4e2081eafda63afe6c9', class: "select-wrapper" }, index.h("select", { key: 'adf6fda40188d6cd15d3ccf864e80cd74835ee45', id: this.selectId, name: this.selectName, "aria-invalid": !!this.error, onChange: (e) => this.handleChange(e), disabled: !!this.isDisabled, class: {
                invalid: !!this.error,
            } }, this.placeholder && (index.h("option", { value: "", selected: true, disabled: true }, this.placeholder)), index.h("slot", { key: '2490da6cbc2e15be733cac6f560a147935bc80da' })), index.h("wink-icon", { key: '7a306fb86ee49e44904abe9cdd23423e0bbecc83', icon: "chevron-down", appearance: "transparent" })), this.error && index.h("wink-validation-message", { message: this.error })));
    }
};
Select.style = {
    base: WinkSelectBaseStyle0,
    telenet: WinkSelectTelenetStyle0
};

exports.wink_select = Select;

//# sourceMappingURL=wink-select.cjs.entry.js.map