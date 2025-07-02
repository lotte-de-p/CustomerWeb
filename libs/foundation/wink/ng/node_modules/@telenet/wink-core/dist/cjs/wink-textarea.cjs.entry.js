'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const input_types = require('./input.types-4bbaee93.js');
const utils = require('./utils-6a0947a7.js');
require('./sizes.types-a4f51bb2.js');

const AUTOCOMPLETE_OPTIONS = {
    on: 'on',
    off: 'off',
};

const textareaBaseCss = ".sr-only.sc-wink-textarea-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-textarea-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-textarea-base-h{display:block}.sc-wink-textarea-base-h wink-form-label.sc-wink-textarea-base{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base{width:100%;font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem);color:var(--semantic-color-text-default);background:var(--color-background-input-outlined);border:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-bold);padding:calc(var(--semantic-spacing-2xs) * 1rem) calc(var(--semantic-spacing-sm) * 1rem)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base::placeholder{color:var(--semantic-color-text-subtle)}.sc-wink-textarea-base-h textarea[aria-invalid].sc-wink-textarea-base{border-color:var(--semantic-color-border-error)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:hover{border-color:var(--semantic-color-border-highlight)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:disabled,.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:disabled~*.sc-wink-textarea-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:disabled:hover{border-color:var(--semantic-color-border-button-default)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:focus,.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}";
const WinkTextareaBaseStyle0 = textareaBaseCss;

const textareaTelenetCss = ".sr-only.sc-wink-textarea-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-textarea-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-textarea-telenet-h{display:block}.sc-wink-textarea-telenet-h wink-form-label.sc-wink-textarea-telenet{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet{width:100%;font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem);color:var(--semantic-color-text-default);background:var(--color-background-input-outlined);border:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-bold);padding:calc(var(--semantic-spacing-2xs) * 1rem) calc(var(--semantic-spacing-sm) * 1rem)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet::placeholder{color:var(--semantic-color-text-subtle)}.sc-wink-textarea-telenet-h textarea[aria-invalid].sc-wink-textarea-telenet{border-color:var(--semantic-color-border-error)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:hover{border-color:var(--semantic-color-border-highlight)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:disabled,.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:disabled~*.sc-wink-textarea-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:disabled:hover{border-color:var(--semantic-color-border-button-default)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:focus,.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}";
const WinkTextareaTelenetStyle0 = textareaTelenetCss;

const TextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isDisabled = false;
        this.isRequired = false;
        this.autocomplete = AUTOCOMPLETE_OPTIONS.off;
        this.enterkeyhintOption = input_types.INPUT_ENTERKEYHINTS.none;
        this.textareaId = undefined;
        this.label = undefined;
        this.helper = undefined;
        this.name = undefined;
        this.placeholder = undefined;
        this.error = undefined;
        this.minlength = undefined;
        this.maxlength = undefined;
        this.rows = undefined;
    }
    getAttributes() {
        return {
            ...(this.textareaId && { id: this.textareaId }),
            ...(this.name && { name: this.name }),
            ...(this.autocomplete && { autocomplete: this.autocomplete }),
            ...(this.minlength && { minlength: this.minlength }),
            ...(this.maxlength && { maxlength: this.maxlength }),
            ...(this.placeholder && { placeholder: this.placeholder }),
            ...(this.rows && { rows: this.rows }),
            ...(this.enterkeyhintOption && { enterkeyhint: this.enterkeyhintOption }),
            'aria-invalid': !!this.error,
            required: this.isRequired,
            disabled: this.isDisabled,
        };
    }
    componentDidRender() {
        this.textareaId = this.textareaId?.length > 0 ? this.textareaId : utils.UUId();
    }
    render() {
        return (index.h("label", { key: '23f2d6dadeaef36871f554132e6c3c69028ecb37' }, index.h("wink-form-label", { key: 'abb4ad4159726d60e3d2f6fd9ab151b5299f7288', label: this.label, helper: this.helper, showOptional: !this.isRequired, "is-disabled": this.isDisabled }), index.h("textarea", { key: '39d04d8ca8244e0c4c6c204222262632f41c6ba5', ...this.getAttributes() }), !!this.error && index.h("wink-validation-message", { message: this.error, type: "error" })));
    }
};
TextArea.style = {
    base: WinkTextareaBaseStyle0,
    telenet: WinkTextareaTelenetStyle0
};

exports.wink_textarea = TextArea;

//# sourceMappingURL=wink-textarea.cjs.entry.js.map