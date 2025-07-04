'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const input_types = require('./input.types-4bbaee93.js');
const utils = require('./utils-6a0947a7.js');
require('./sizes.types-a4f51bb2.js');

const inputBaseCss = ".sr-only.sc-wink-input-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-input-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-input-base-h{display:flex;flex-direction:column;width:100%}.sc-wink-input-base-h .input-wrapper.sc-wink-input-base{display:flex;width:100%}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-text-subtlest);position:relative;width:100%}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base wink-icon.sc-wink-input-base{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base wink-icon.disabled.sc-wink-input-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem)}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-calendar-picker-indicator{opacity:0}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-datetime-edit-day-field:focus,.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-datetime-edit-month-field:focus,.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-datetime-edit-year-field:focus{background-color:var(--semantic-color-background-surface-system-informative)}.sc-wink-input-base-h .input.sc-wink-input-base{width:100%;box-sizing:border-box;border-radius:0;border:calc(var(--wink-input--border-width, var(--semantic-border-md)) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-default);background-color:var(--wink-input--bgc, --semantic-color-background-canvas-default)}.sc-wink-input-base-h .input.sc-wink-input-base,.sc-wink-input-base-h .input-affix.sc-wink-input-base{padding-top:var(--wink-input--pt, calc(var(--semantic-spacing-sm) * 1rem));padding-bottom:var(--wink-input--pb, calc(var(--semantic-spacing-sm) * 1rem));padding-left:calc(var(--semantic-spacing-md) * 1rem);padding-right:calc(var(--semantic-spacing-md) * 1rem);font-size:var(--wink-input--fs, 1.8rem);line-height:var(--wink-input--lh, 2.4rem)}.sc-wink-input-base-h .input-affix.sc-wink-input-base{display:block;min-width:3.2rem;flex-shrink:0;text-align:center;border-radius:0;border:calc(var(--semantic-border-md) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-subtlest);background:var(--semantic-color-border-subtle)}.sc-wink-input-base-h .input-affix-prefix.sc-wink-input-base{border-right:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-base-h .input-affix-postfix.sc-wink-input-base{border-left:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-base-h .input.sc-wink-input-base::placeholder{color:var(--semantic-color-text-subtlest)}.sc-wink-input-base-h .input.sc-wink-input-base:hover{border-color:var(--wink-input--hover--bgc, --semantic-color-border-highlight);border:calc(var(--wink-input--hover--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-base-h .input.sc-wink-input-base:focus{z-index:1;border-radius:0.1rem;outline-offset:0.1rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight);border:calc(var(--wink-input--active--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-base-h .input.sc-wink-input-base:read-only:not(:disabled),.sc-wink-input-base-h .input-affix.input-affix-readonly.sc-wink-input-base{background-color:transparent;border-color:transparent;border-left-width:0;border-right-width:0;padding-left:calc(var(--semantic-spacing-none) * 1rem);padding-right:calc(var(--semantic-spacing-none) * 1rem);-webkit-user-select:none;user-select:none;pointer-events:none}.sc-wink-input-base-h .input-affix.input-affix-readonly.input-affix-prefix.sc-wink-input-base{padding-right:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-base-h .input-affix.input-affix-readonly.input-affix-postfix.sc-wink-input-base{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-base-h .input.sc-wink-input-base:disabled,.sc-wink-input-base-h .input-affix.input-affix-disabled.sc-wink-input-base{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none;background-color:var(--semantic-color-background-surface-neutral-default)}.sc-wink-input-base-h .input.sc-wink-input-base:disabled:hover,.sc-wink-input-base-h .input-affix.input-affix-disabled.sc-wink-input-base:hover{border-color:var(--semantic-color-border-input-default)}.sc-wink-input-base-h .input.invalid.sc-wink-input-base:not(:read-only){border-color:var(--semantic-color-border-error)}.sc-wink-input-base-h .input-with-icon-button.sc-wink-input-base{position:relative;align-items:center;justify-content:center}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-base .input.sc-wink-input-base{padding-left:var(--wink-input--icon-button-left--pl, 4.8rem)}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-base .input-icon-button-left.sc-wink-input-base{left:var(--wink-input--icon-button-left--l, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-base .input.sc-wink-input-base{padding-right:var(--wink-input--icon-button-right--pr, 4.8rem)}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-base .input-icon-button-right.sc-wink-input-base{right:var(--wink-input--icon-button-right--r, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:2}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base{display:flex;cursor:pointer;border-width:0;border-radius:0.4rem;background:transparent;padding:var(--wink-input--icon-button-padding, calc(var(--semantic-spacing-2xs) * 1rem))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base wink-icon.sc-wink-input-base{--wink-icon-color:var(--wink-input--icon-color, var(--semantic-color-icon-subtle))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:hover{background:var(--semantic-color-border-hover)}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:hover wink-icon.sc-wink-input-base{--wink-icon-color:var(--semantic-color-icon-default)}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:active{background:var(--wink-input--active--bgc, --semantic-color-background-surface-neutral-pressed)}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus,.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;z-index:1;border-color:var(--semantic-color-border-button-default);background:var(--wink-input--focus--bgc, var(--semantic-color-background-surface-neutral-pressed))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus wink-icon.sc-wink-input-base,.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus-visible wink-icon.sc-wink-input-base{--wink-icon-color:var(--semantic-color-icon-default-on-action)}.sc-wink-input-base-h wink-form-label.sc-wink-input-base{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-input-base-h .label-disabled.sc-wink-input-base{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none}.sc-wink-input-base-h .error-msg.sc-wink-input-base{color:var(--semantic-color-text-error);display:flex;align-items:flex-start;margin-top:4px;width:100%;font-size:14px;line-height:20px;font-weight:normal}.sc-wink-input-base-h .error-msg.sc-wink-input-base .error-label.sc-wink-input-base{margin-top:2px}.sc-wink-input-base-h .error-msg.sc-wink-input-base wink-icon.sc-wink-input-base{--wink-icon-color:var(--semantic-color-text-error);margin-right:4px}[appearance=search].sc-wink-input-base-h{--wink-input--icon-color:var(--semantic-color-icon-subtle);--wink-input--bgc:var(--semantic-color-background-surface-bold-default);--wink-input--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--hover--bgc:var(--semantic-color-background-surface-bold-hovered);--wink-input--hover--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--active--bgc:var(--semantic-color-background-surface-bold-pressed);--wink-input--active--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--focus--bgc:var(--semantic-color-background-surface-subtle-pressed)}[size=sm].sc-wink-input-base-h{--wink-input--fs:1.6rem;--wink-input--lh:2.4rem;--wink-input--pt:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--pb:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--icon-button-padding:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-left--pl:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-left--l:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-right--pr:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-right--r:calc(var(--semantic-spacing-3xs) * 1rem)}";
const WinkInputBaseStyle0 = inputBaseCss;

const inputTelenetCss = ".sr-only.sc-wink-input-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-input-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-input-telenet-h{display:flex;flex-direction:column;width:100%}.sc-wink-input-telenet-h .input-wrapper.sc-wink-input-telenet{display:flex;width:100%}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-text-subtlest);position:relative;width:100%}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet wink-icon.sc-wink-input-telenet{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet wink-icon.disabled.sc-wink-input-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem)}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-calendar-picker-indicator{opacity:0}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-datetime-edit-day-field:focus,.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-datetime-edit-month-field:focus,.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-datetime-edit-year-field:focus{background-color:var(--semantic-color-background-surface-system-informative)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet{width:100%;box-sizing:border-box;border-radius:0;border:calc(var(--wink-input--border-width, var(--semantic-border-md)) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-default);background-color:var(--wink-input--bgc, --semantic-color-background-canvas-default)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet,.sc-wink-input-telenet-h .input-affix.sc-wink-input-telenet{padding-top:var(--wink-input--pt, calc(var(--semantic-spacing-sm) * 1rem));padding-bottom:var(--wink-input--pb, calc(var(--semantic-spacing-sm) * 1rem));padding-left:calc(var(--semantic-spacing-md) * 1rem);padding-right:calc(var(--semantic-spacing-md) * 1rem);font-size:var(--wink-input--fs, 1.8rem);line-height:var(--wink-input--lh, 2.4rem)}.sc-wink-input-telenet-h .input-affix.sc-wink-input-telenet{display:block;min-width:3.2rem;flex-shrink:0;text-align:center;border-radius:0;border:calc(var(--semantic-border-md) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-subtlest);background:var(--semantic-color-border-subtle)}.sc-wink-input-telenet-h .input-affix-prefix.sc-wink-input-telenet{border-right:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-telenet-h .input-affix-postfix.sc-wink-input-telenet{border-left:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet::placeholder{color:var(--semantic-color-text-subtlest)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:hover{border-color:var(--wink-input--hover--bgc, --semantic-color-border-highlight);border:calc(var(--wink-input--hover--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:focus{z-index:1;border-radius:0.1rem;outline-offset:0.1rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight);border:calc(var(--wink-input--active--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:read-only:not(:disabled),.sc-wink-input-telenet-h .input-affix.input-affix-readonly.sc-wink-input-telenet{background-color:transparent;border-color:transparent;border-left-width:0;border-right-width:0;padding-left:calc(var(--semantic-spacing-none) * 1rem);padding-right:calc(var(--semantic-spacing-none) * 1rem);-webkit-user-select:none;user-select:none;pointer-events:none}.sc-wink-input-telenet-h .input-affix.input-affix-readonly.input-affix-prefix.sc-wink-input-telenet{padding-right:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-telenet-h .input-affix.input-affix-readonly.input-affix-postfix.sc-wink-input-telenet{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:disabled,.sc-wink-input-telenet-h .input-affix.input-affix-disabled.sc-wink-input-telenet{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none;background-color:var(--semantic-color-background-surface-neutral-default)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:disabled:hover,.sc-wink-input-telenet-h .input-affix.input-affix-disabled.sc-wink-input-telenet:hover{border-color:var(--semantic-color-border-input-default)}.sc-wink-input-telenet-h .input.invalid.sc-wink-input-telenet:not(:read-only){border-color:var(--semantic-color-border-error)}.sc-wink-input-telenet-h .input-with-icon-button.sc-wink-input-telenet{position:relative;align-items:center;justify-content:center}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-telenet .input.sc-wink-input-telenet{padding-left:var(--wink-input--icon-button-left--pl, 4.8rem)}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-telenet .input-icon-button-left.sc-wink-input-telenet{left:var(--wink-input--icon-button-left--l, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-telenet .input.sc-wink-input-telenet{padding-right:var(--wink-input--icon-button-right--pr, 4.8rem)}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-telenet .input-icon-button-right.sc-wink-input-telenet{right:var(--wink-input--icon-button-right--r, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:2}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet{display:flex;cursor:pointer;border-width:0;border-radius:0.4rem;background:transparent;padding:var(--wink-input--icon-button-padding, calc(var(--semantic-spacing-2xs) * 1rem))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--wink-input--icon-color, var(--semantic-color-icon-subtle))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:hover{background:var(--semantic-color-border-hover)}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:hover wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--semantic-color-icon-default)}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:active{background:var(--wink-input--active--bgc, --semantic-color-background-surface-neutral-pressed)}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus,.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;z-index:1;border-color:var(--semantic-color-border-button-default);background:var(--wink-input--focus--bgc, var(--semantic-color-background-surface-neutral-pressed))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus wink-icon.sc-wink-input-telenet,.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus-visible wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--semantic-color-icon-default-on-action)}.sc-wink-input-telenet-h wink-form-label.sc-wink-input-telenet{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-input-telenet-h .label-disabled.sc-wink-input-telenet{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none}.sc-wink-input-telenet-h .error-msg.sc-wink-input-telenet{color:var(--semantic-color-text-error);display:flex;align-items:flex-start;margin-top:4px;width:100%;font-size:14px;line-height:20px;font-weight:normal}.sc-wink-input-telenet-h .error-msg.sc-wink-input-telenet .error-label.sc-wink-input-telenet{margin-top:2px}.sc-wink-input-telenet-h .error-msg.sc-wink-input-telenet wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--semantic-color-text-error);margin-right:4px}[appearance=search].sc-wink-input-telenet-h{--wink-input--icon-color:var(--semantic-color-icon-subtle);--wink-input--bgc:var(--semantic-color-background-surface-bold-default);--wink-input--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--hover--bgc:var(--semantic-color-background-surface-bold-hovered);--wink-input--hover--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--active--bgc:var(--semantic-color-background-surface-bold-pressed);--wink-input--active--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--focus--bgc:var(--semantic-color-background-surface-subtle-pressed)}[size=sm].sc-wink-input-telenet-h{--wink-input--fs:1.6rem;--wink-input--lh:2.4rem;--wink-input--pt:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--pb:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--icon-button-padding:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-left--pl:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-left--l:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-right--pr:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-right--r:calc(var(--semantic-spacing-3xs) * 1rem)}";
const WinkInputTelenetStyle0 = inputTelenetCss;

const Input = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChanged = index.createEvent(this, "valueChanged", 7);
        this.appearance = input_types.INPUT_APPEARANCES.default;
        this.value = '';
        this.inputId = undefined;
        this.name = undefined;
        this.type = input_types.INPUT_TYPES.text;
        this.placeholder = '';
        this.isRequired = false;
        this.inputModeOption = input_types.INPUT_MODES.text;
        this.autocomplete = input_types.INPUT_AUTOCOMPLETES.off;
        this.enterkeyhintOption = input_types.INPUT_ENTERKEYHINTS.none;
        this.isReadonly = false;
        this.isDisabled = false;
        this.isAutofocused = false;
        this.step = undefined;
        this.minValue = undefined;
        this.maxValue = undefined;
        this.error = undefined;
        this.prefixValue = '';
        this.postfixValue = '';
        this.iconLeft = '';
        this.iconRight = '';
        this.showIconRight = true;
        this.inputWidth = 0;
        this.label = '';
        this.helper = '';
        this.optionalText = 'Optional';
        this.size = input_types.INPUT_SIZES.md;
    }
    get host() { return index.getElement(this); }
    valueChanged;
    async setValidation(errorMsg) {
        if (errorMsg) {
            this.error = errorMsg;
        }
        else {
            this.error = '';
        }
    }
    getLabelId() {
        return this.inputId + ':Label';
    }
    getHelperId() {
        return this.inputId + ':Helper';
    }
    getErrorMsgId() {
        return this.inputId + ':Error';
    }
    getAriaDescribedby() {
        return [this.label && this.getLabelId(), this.helper && this.getHelperId(), this.error && this.getErrorMsgId()]
            .filter((item) => typeof item === 'string' && item.trim().length > 0)
            .join(' ');
    }
    get getLabel() {
        if (this.label) {
            return (index.h(index.Fragment, null, index.h("label", { htmlFor: this.inputId, id: this.getLabelId(), class: { label: true, 'label-disabled': this.isDisabled } }, index.h("wink-form-label", { label: this.label, helper: this.helper, "helper-id": this.getHelperId(), "show-optional": !this.isRequired, "optional-text": this.optionalText }))));
        }
    }
    get getPrefix() {
        if (this.prefixValue && !this.iconLeft) {
            return (index.h(index.Fragment, null, index.h("div", { class: {
                    'input-affix input-affix-prefix': true,
                    'input-affix-disabled': this.isDisabled,
                    'input-affix-readonly': this.isReadonly,
                } }, this.prefixValue)));
        }
    }
    get getPostfix() {
        if (this.postfixValue && !this.iconRight) {
            return (index.h(index.Fragment, null, index.h("div", { class: {
                    'input-affix input-affix-postfix': true,
                    'input-affix-disabled': this.isDisabled,
                    'input-affix-readonly': this.isReadonly,
                } }, this.postfixValue)));
        }
    }
    getReadOnlyLength(value) {
        if (this.isReadonly && value.length > 0) {
            this.inputWidth = this.type === input_types.INPUT_TYPES.date ? value.length + 4 : value.length;
        }
        else {
            this.inputWidth = 0;
        }
    }
    showSearchBackSpaceIcon(value) {
        if (value.length === 0 && this.appearance === input_types.INPUT_APPEARANCES.search) {
            this.showIconRight = false;
        }
        else {
            this.showIconRight = true;
        }
    }
    handleChange(event) {
        this.value = event.target.value;
        this.showSearchBackSpaceIcon(this.value);
        this.getReadOnlyLength(this.value);
        if (this.valueChanged) {
            this.valueChanged.emit(this.value);
        }
    }
    handleRightIconClick() {
        const inputEl = this.host?.querySelector('input');
        if (inputEl?.classList.contains('input-password')) {
            const rightIconEl = this.host?.querySelector('.input-icon-button-right wink-icon');
            if (inputEl?.type === 'password') {
                inputEl.type = 'text';
                rightIconEl?.setAttribute('icon', 'eye-off');
            }
            else {
                inputEl.type = 'password';
                rightIconEl?.setAttribute('icon', 'eye');
            }
        }
    }
    getAttributes() {
        return {
            ...{ id: this.inputId },
            ...{ name: this.name },
            ...{ type: this.type },
            ...{ value: this.value },
            ...(this.placeholder && { placeholder: this.placeholder }),
            ...{ 'input-mode': this.inputModeOption },
            ...{ autocomplete: this.autocomplete },
            ...(this.isAutofocused && { autofocus: this.isAutofocused }),
            ...{ enterkeyhint: this.enterkeyhintOption },
            ...(this.isRequired && { required: this.isRequired }),
            ...(this.isDisabled && { disabled: this.isDisabled }),
            ...(this.isReadonly && { readonly: this.isReadonly }),
            'aria-describedby': this.getAriaDescribedby(),
            'aria-invalid': !!this.error,
            ...(this.minValue !== undefined && { min: this.minValue }),
            ...(this.maxValue !== undefined && { max: this.maxValue }),
            ...(this.step && { step: this.step }),
        };
    }
    componentDidRender() {
        this.showSearchBackSpaceIcon(this.value);
        this.getReadOnlyLength(this.value);
        this.inputId = this.inputId?.length > 0 ? this.inputId : utils.UUId();
    }
    render() {
        return (index.h(index.Host, { key: '5261d5629d63c7ead5af380c61590852d0809233' }, this.getLabel, index.h("div", { key: 'df2fa871bf2a07bafb301255c85e2706da0f6b51', class: {
                'input-wrapper': true,
                'input-with-icon-button input-with-icon-button-left': this.iconLeft?.length > 0,
                'input-with-icon-button input-with-icon-button-right': this.iconRight?.length > 0,
                'input-wrapper-date': this.type === 'date',
            } }, this.getPrefix, this.iconLeft?.length > 0 && (index.h("div", { class: "input-icon-button input-icon-button-left" }, index.h("button", { type: "button", "aria-label": this.iconLeft, class: "input-icon-button-button" }, index.h("wink-icon", { appearance: "default", icon: this.iconLeft, size: this.size })))), index.h("input", { key: '20d0144a5ed31367ba24ada26bcb1f369600f02d', onInput: (e) => this.handleChange(e), ...this.getAttributes(), class: {
                input: true,
                invalid: !!this.error,
                'input-password': this.type === input_types.INPUT_TYPES.password,
            }, style: {
                width: this.isReadonly && this.inputWidth > 0 ? `${this.inputWidth}ch` : '',
            } }), this.type === input_types.INPUT_TYPES.date && !this.isReadonly && (index.h("wink-icon", { class: { disabled: this.isDisabled }, icon: "calendar", appearance: "transparent" })), this.iconRight?.length > 0 && this.showIconRight && (index.h("div", { class: "input-icon-button input-icon-button-right" }, index.h("button", { type: "button", "aria-label": this.iconRight, class: "input-icon-button-button", onClick: () => this.handleRightIconClick() }, index.h("wink-icon", { appearance: "default", icon: this.iconRight, size: this.size })))), this.getPostfix), this.error && (index.h("div", { id: this.getErrorMsgId(), class: "error-msg" }, index.h("wink-validation-message", { message: this.error })))));
    }
    static get formAssociated() { return true; }
};
Input.style = {
    base: WinkInputBaseStyle0,
    telenet: WinkInputTelenetStyle0
};

exports.wink_input = Input;

//# sourceMappingURL=wink-input.cjs.entry.js.map