import { r as registerInstance, h } from './index-4268ac0c.js';

const SLIDER_TYPES = {
    single: 'single',
    range: 'range',
};
const SLIDER_DIRECTIONS = {
    from: 'from',
    to: 'to',
};

const rangeSliderBaseCss = ".sr-only.sc-wink-range-slider-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-range-slider-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.slider-container.sc-wink-range-slider-base{display:flex}.slider-container-range.sc-wink-range-slider-base{flex-direction:column;gap:calc(var(--semantic-spacing-xl) * 1rem)}.slider-container-range.sc-wink-range-slider-base .slider-specific.sc-wink-range-slider-base{width:100%}.slider-container-single.sc-wink-range-slider-base{flex-wrap:wrap}.slider-container-single.sc-wink-range-slider-base wink-form-label.sc-wink-range-slider-base{width:100%;margin-bottom:calc(var(--semantic-spacing-xl) * 1rem)}.slider-container-single.sc-wink-range-slider-base .slider-specific.sc-wink-range-slider-base{margin-left:calc(var(--semantic-spacing-md) * 1rem)}.slider-container-single.sc-wink-range-slider-base .slider.sc-wink-range-slider-base{cursor:pointer;pointer-events:all}.slider-wrapper.sc-wink-range-slider-base{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem);color:var(--semantic-color-text-default);width:100%;padding-top:calc(var(--semantic-spacing-xs) * 1rem);display:flex;align-items:center;gap:calc(var(--semantic-spacing-sm) * 1rem)}.slider-controls.sc-wink-range-slider-base{position:relative;width:100%;height:calc(var(--semantic-spacing-xl) * 1rem);display:flex;align-items:center;justify-content:space-between}.slider-controls.sc-wink-range-slider-base:has(.slider:focus) .slider-tooltip.sc-wink-range-slider-base,.slider-controls.sc-wink-range-slider-base:has(.slider:hover) .slider-tooltip.sc-wink-range-slider-base{opacity:1}.slider-tooltip.sc-wink-range-slider-base{position:absolute;top:calc(var(--semantic-icon-xl) * 1rem * -1);font-size:calc(var(--semantic-typography-font-size-desktop-xs) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-xs) * 1rem);text-align:center;background-color:var(--semantic-color-background-input-outlined);color:var(--semantic-color-text-default);padding:calc(var(--semantic-spacing-2xs) * 1rem);border-radius:calc(var(--semantic-border-lg) * 1rem);box-shadow:0 calc(var(--semantic-spacing-2xs) * 1rem) calc(var(--semantic-spacing-xs) * 1rem) 0 var(--semantic-color-background-input-filled);transform:translateX(-50%);min-width:calc(var(--semantic-icon-md) * 1rem);opacity:0;transition:opacity 300ms ease-in-out}.slider-tooltip-shown.sc-wink-range-slider-base .slider-tooltip.sc-wink-range-slider-base{opacity:1}.slider.sc-wink-range-slider-base{--size:calc(var(--semantic-icon-md) + (var(--semantic-spacing-3xs) * 2));appearance:none;position:absolute;left:0;width:100%;height:4.4rem;background-color:transparent;pointer-events:none}.slider.sc-wink-range-slider-base::-webkit-slider-runnable-track{width:100%;height:calc(var(--semantic-spacing-3xs) * 1rem);background-color:transparent;box-shadow:none;border:0;animation:0.2s}.slider.sc-wink-range-slider-base::-webkit-slider-thumb{appearance:none;height:calc(var(--size) * 1rem);width:calc(var(--size) * 1rem);background-clip:padding-box;background-color:var(--semantic-color-background-surface-action-default);border-radius:50%;margin-top:calc(var(--size) * 1rem * -0.5 + var(--semantic-spacing-3xs) * 1rem / 2);margin-left:calc(var(--semantic-spacing-3xs) * 1rem * -0.5);pointer-events:all;cursor:pointer;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;border:calc(var(--semantic-spacing-3xs) * 1rem) solid transparent}.slider.sc-wink-range-slider-base::-webkit-slider-thumb:hover{--size:calc(var(--semantic-icon-md) + var(--semantic-spacing-3xs) + (var(--semantic-spacing-3xs) * 2));border:calc(var(--semantic-spacing-3xs) * 1rem) solid var(--semantic-color-background-surface-bold-hovered)}.slider.sc-wink-range-slider-base::-moz-range-track{width:100%;height:calc(var(--semantic-spacing-3xs) * 1rem);background-color:transparent;box-shadow:none;border:0;animation:0.2s}.slider.sc-wink-range-slider-base::-moz-range-track:hover{--size:calc(var(--semantic-icon-md) + var(--semantic-spacing-3xs) + (var(--semantic-spacing-3xs) * 2));border:calc(var(--semantic-spacing-3xs) * 1rem) solid var(--semantic-color-background-surface-bold-hovered)}.slider.sc-wink-range-slider-base::-moz-range-thumb{appearance:none;height:calc(var(--size) * 1rem);width:calc(var(--size) * 1rem);background-clip:padding-box;background-color:var(--semantic-color-background-surface-action-default);border-radius:50%;margin-top:calc(var(--size) * 1rem * -0.5 + var(--semantic-spacing-3xs) * 1rem / 2);margin-left:calc(var(--semantic-spacing-3xs) * 1rem * -0.5);pointer-events:all;cursor:pointer;-moz-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;border:calc(var(--semantic-spacing-3xs) * 1rem) solid var(--semantic-color-background-input-outlined)}.slider-track.sc-wink-range-slider-base{position:absolute;left:0;width:calc(100% - var(--semantic-border-lg) * 1rem * 2);height:calc(var(--semantic-spacing-3xs) * 1rem);margin:0 calc(var(--semantic-border-lg) * 1rem);border-radius:calc(var(--semantic-spacing-3xs) * 1rem)}.slider-tooltip-wrapper.sc-wink-range-slider-base{position:relative;width:calc(100% - var(--semantic-border-lg) * 1rem * 2);height:100%;margin:0 calc(var(--semantic-spacing-xs) * 1rem)}.slider-specific.sc-wink-range-slider-base{flex-shrink:0;display:flex;align-items:flex-start;gap:calc(var(--semantic-spacing-sm) * 1rem)}";
const WinkRangeSliderBaseStyle0 = rangeSliderBaseCss;

const rangeSliderTelenetCss = ".sr-only.sc-wink-range-slider-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-range-slider-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.slider-container.sc-wink-range-slider-telenet{display:flex}.slider-container-range.sc-wink-range-slider-telenet{flex-direction:column;gap:calc(var(--semantic-spacing-xl) * 1rem)}.slider-container-range.sc-wink-range-slider-telenet .slider-specific.sc-wink-range-slider-telenet{width:100%}.slider-container-single.sc-wink-range-slider-telenet{flex-wrap:wrap}.slider-container-single.sc-wink-range-slider-telenet wink-form-label.sc-wink-range-slider-telenet{width:100%;margin-bottom:calc(var(--semantic-spacing-xl) * 1rem)}.slider-container-single.sc-wink-range-slider-telenet .slider-specific.sc-wink-range-slider-telenet{margin-left:calc(var(--semantic-spacing-md) * 1rem)}.slider-container-single.sc-wink-range-slider-telenet .slider.sc-wink-range-slider-telenet{cursor:pointer;pointer-events:all}.slider-wrapper.sc-wink-range-slider-telenet{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem);color:var(--semantic-color-text-default);width:100%;padding-top:calc(var(--semantic-spacing-xs) * 1rem);display:flex;align-items:center;gap:calc(var(--semantic-spacing-sm) * 1rem)}.slider-controls.sc-wink-range-slider-telenet{position:relative;width:100%;height:calc(var(--semantic-spacing-xl) * 1rem);display:flex;align-items:center;justify-content:space-between}.slider-controls.sc-wink-range-slider-telenet:has(.slider:focus) .slider-tooltip.sc-wink-range-slider-telenet,.slider-controls.sc-wink-range-slider-telenet:has(.slider:hover) .slider-tooltip.sc-wink-range-slider-telenet{opacity:1}.slider-tooltip.sc-wink-range-slider-telenet{position:absolute;top:calc(var(--semantic-icon-xl) * 1rem * -1);font-size:calc(var(--semantic-typography-font-size-desktop-xs) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-xs) * 1rem);text-align:center;background-color:var(--semantic-color-background-input-outlined);color:var(--semantic-color-text-default);padding:calc(var(--semantic-spacing-2xs) * 1rem);border-radius:calc(var(--semantic-border-lg) * 1rem);box-shadow:0 calc(var(--semantic-spacing-2xs) * 1rem) calc(var(--semantic-spacing-xs) * 1rem) 0 var(--semantic-color-background-input-filled);transform:translateX(-50%);min-width:calc(var(--semantic-icon-md) * 1rem);opacity:0;transition:opacity 300ms ease-in-out}.slider-tooltip-shown.sc-wink-range-slider-telenet .slider-tooltip.sc-wink-range-slider-telenet{opacity:1}.slider.sc-wink-range-slider-telenet{--size:calc(var(--semantic-icon-md) + (var(--semantic-spacing-3xs) * 2));appearance:none;position:absolute;left:0;width:100%;height:4.4rem;background-color:transparent;pointer-events:none}.slider.sc-wink-range-slider-telenet::-webkit-slider-runnable-track{width:100%;height:calc(var(--semantic-spacing-3xs) * 1rem);background-color:transparent;box-shadow:none;border:0;animation:0.2s}.slider.sc-wink-range-slider-telenet::-webkit-slider-thumb{appearance:none;height:calc(var(--size) * 1rem);width:calc(var(--size) * 1rem);background-clip:padding-box;background-color:var(--semantic-color-background-surface-action-default);border-radius:50%;margin-top:calc(var(--size) * 1rem * -0.5 + var(--semantic-spacing-3xs) * 1rem / 2);margin-left:calc(var(--semantic-spacing-3xs) * 1rem * -0.5);pointer-events:all;cursor:pointer;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;border:calc(var(--semantic-spacing-3xs) * 1rem) solid transparent}.slider.sc-wink-range-slider-telenet::-webkit-slider-thumb:hover{--size:calc(var(--semantic-icon-md) + var(--semantic-spacing-3xs) + (var(--semantic-spacing-3xs) * 2));border:calc(var(--semantic-spacing-3xs) * 1rem) solid var(--semantic-color-background-surface-bold-hovered)}.slider.sc-wink-range-slider-telenet::-moz-range-track{width:100%;height:calc(var(--semantic-spacing-3xs) * 1rem);background-color:transparent;box-shadow:none;border:0;animation:0.2s}.slider.sc-wink-range-slider-telenet::-moz-range-track:hover{--size:calc(var(--semantic-icon-md) + var(--semantic-spacing-3xs) + (var(--semantic-spacing-3xs) * 2));border:calc(var(--semantic-spacing-3xs) * 1rem) solid var(--semantic-color-background-surface-bold-hovered)}.slider.sc-wink-range-slider-telenet::-moz-range-thumb{appearance:none;height:calc(var(--size) * 1rem);width:calc(var(--size) * 1rem);background-clip:padding-box;background-color:var(--semantic-color-background-surface-action-default);border-radius:50%;margin-top:calc(var(--size) * 1rem * -0.5 + var(--semantic-spacing-3xs) * 1rem / 2);margin-left:calc(var(--semantic-spacing-3xs) * 1rem * -0.5);pointer-events:all;cursor:pointer;-moz-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;border:calc(var(--semantic-spacing-3xs) * 1rem) solid var(--semantic-color-background-input-outlined)}.slider-track.sc-wink-range-slider-telenet{position:absolute;left:0;width:calc(100% - var(--semantic-border-lg) * 1rem * 2);height:calc(var(--semantic-spacing-3xs) * 1rem);margin:0 calc(var(--semantic-border-lg) * 1rem);border-radius:calc(var(--semantic-spacing-3xs) * 1rem)}.slider-tooltip-wrapper.sc-wink-range-slider-telenet{position:relative;width:calc(100% - var(--semantic-border-lg) * 1rem * 2);height:100%;margin:0 calc(var(--semantic-spacing-xs) * 1rem)}.slider-specific.sc-wink-range-slider-telenet{flex-shrink:0;display:flex;align-items:flex-start;gap:calc(var(--semantic-spacing-sm) * 1rem)}";
const WinkRangeSliderTelenetStyle0 = rangeSliderTelenetCss;

const RangeSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sliderId = '';
        this.label = '';
        this.helper = '';
        this.minValue = 0;
        this.maxValue = 100;
        this.step = 1;
        this.showValues = false;
        this.showInput = false;
        this.errorMessage = '';
        this.sliderType = SLIDER_TYPES.range;
        this.bottomValue = 0;
        this.value = 100;
        this.topValueError = undefined;
        this.bottomValueError = undefined;
    }
    internals;
    async showFromValue() {
        return this.bottomValue;
    }
    async showToValue() {
        return this.value;
    }
    async getDragValue() {
        return this.value;
    }
    componentWillRender() {
        this.checkForErrors();
    }
    handleValueChanged(event, slider) {
        const value = parseFloat(event.detail);
        this.updateValue(value, slider);
    }
    handleValueSlider(event, slider) {
        const inputElement = event.target;
        if (inputElement) {
            const value = parseFloat(inputElement.value);
            this.updateValue(value, slider);
        }
    }
    updateValue(value, slider) {
        if (slider === SLIDER_DIRECTIONS.from) {
            this.bottomValue = value;
        }
        if (slider === SLIDER_DIRECTIONS.to) {
            this.value = value;
        }
        if (value < this.minValue) {
            slider === SLIDER_DIRECTIONS.from ? (this.bottomValue = this.minValue) : (this.value = this.minValue);
        }
        if (value > this.maxValue) {
            this.value = this.maxValue;
        }
        if (this.bottomValue > this.value) {
            this.invertValues();
        }
    }
    invertValues() {
        const tempValue = this.bottomValue;
        this.bottomValue = this.value;
        this.value = tempValue;
    }
    calculateTooltipPosition(value) {
        const newValue = Number(((value - this.minValue) * 100) / (this.maxValue - this.minValue));
        const newPosition = 10 - newValue * 0.2;
        if (newValue < 0) {
            return '3%';
        }
        if (newValue > 100) {
            return '97%';
        }
        return `calc(${newValue}% + (${newPosition}px))`;
    }
    calculateBackground() {
        const lowTopValue = this.minValue || 0;
        const highTopValue = this.maxValue || 100;
        const lowValue = this.bottomValue || lowTopValue;
        const highValue = this.value || highTopValue;
        const sliderLength = highTopValue - lowTopValue;
        const toPercentage = Math.round((((highValue - lowTopValue) / sliderLength) * 100) / this.step) * this.step;
        if (this.sliderType === SLIDER_TYPES.single) {
            return `linear-gradient(to right, var(--semantic-color-background-surface-action-default) ${toPercentage}%, var(--semantic-color-background-surface-bold-hovered) ${toPercentage}%)`;
        }
        const fromPercentage = Math.round((((lowValue - lowTopValue) / sliderLength) * 100) / this.step) * this.step;
        return `linear-gradient(to right, var(--semantic-color-background-surface-bold-hovered) ${fromPercentage}% , var(--semantic-color-background-surface-action-default) ${fromPercentage}% , var(--semantic-color-background-surface-action-default) ${toPercentage}%, var(--semantic-color-background-surface-bold-hovered) ${toPercentage}%)`;
    }
    renderSpecific() {
        const fromValueProps = this.bottomValueError ? { error: this.bottomValueError } : {};
        const toValueProps = this.topValueError && this.sliderType === SLIDER_TYPES.range ? { error: this.topValueError } : {};
        return (h("div", { class: "slider-specific" }, this.sliderType === SLIDER_TYPES.range && (h("wink-input", { class: "slider-specific-from", type: "number", inputId: this.sliderId + 'from-value', name: "fromValue", label: "From", value: this.bottomValue.toString(), "min-value": this.minValue, "max-value": this.maxValue, step: this.step, isRequired: true, ...fromValueProps, onValueChanged: (event) => this.handleValueChanged(event, SLIDER_DIRECTIONS.from) })), h("wink-input", { class: "slider-specific-to", type: "number", inputId: this.sliderId + 'to-value', name: "toValue", label: this.sliderType === SLIDER_TYPES.range ? 'To' : '', value: this.value.toString(), "min-value": this.minValue, "max-value": this.maxValue, step: this.step, isRequired: true, ...toValueProps, onValueChanged: (event) => this.handleValueChanged(event, SLIDER_DIRECTIONS.to) })));
    }
    checkForErrors() {
        if ((!this.bottomValue && this.bottomValue !== 0) || this.bottomValue % this.step !== 0) {
            this.bottomValueError = this.errorMessage;
        }
        else {
            this.bottomValueError = undefined;
        }
        if ((!this.value && this.value !== 0) || this.value % this.step !== 0) {
            this.topValueError = this.errorMessage;
        }
        else {
            this.topValueError = undefined;
        }
    }
    render() {
        return (h("label", { key: 'a9f898767e2d6e1e94cac11d09c9c78b24f010da', class: `slider-container slider-container-${this.sliderType}` }, h("wink-form-label", { key: '5652e8d44e355e459d5e1cd5646e72d1eb5e7322', label: this.label, helper: this.helper }), h("div", { key: '5c9b646830bb0774de70cf4a7e32f511731f71a0', class: "slider-wrapper" }, this.showValues && h("span", null, this.minValue), h("div", { key: 'e7ee2f3cd7896e4d3d0461e3806e7aea9c6a66e3', class: "slider-controls" }, h("div", { key: '388b3f0a1530ce5731556f136da3607828d126e4', class: `slider-tooltip-wrapper ${!this.showInput ? 'slider-tooltip-shown' : ''}` }, this.sliderType === SLIDER_TYPES.range && (h("div", { style: { left: this.calculateTooltipPosition(this.bottomValue) }, class: "slider-tooltip" }, this.bottomValue)), h("div", { key: '06a0ad3ccee21c8be0504fdd1688906764347de9', style: { left: this.calculateTooltipPosition(this.value) }, class: "slider-tooltip" }, this.value)), h("div", { key: 'b2acd782cecc66fb30a0278c5df7cf7b1fbb786e', style: { background: this.calculateBackground() }, class: "slider-track" }), this.sliderType === SLIDER_TYPES.range && (h("input", { class: "slider slider-from", type: "range", value: this.bottomValue, min: this.minValue, max: this.maxValue, step: this.step, onInput: (event) => this.handleValueSlider(event, SLIDER_DIRECTIONS.from) })), h("input", { key: 'bbc14c32e53527848d3ccaeebc97666976668853', class: "slider slider-to", type: "range", value: this.value, min: this.minValue, max: this.maxValue, step: this.step, onInput: (event) => this.handleValueSlider(event, SLIDER_DIRECTIONS.to) })), this.showValues && h("span", null, this.maxValue), this.sliderType === SLIDER_TYPES.single && this.showInput && this.renderSpecific()), this.sliderType === SLIDER_TYPES.range && this.showInput && this.renderSpecific(), this.topValueError && this.sliderType === SLIDER_TYPES.single && (h("wink-validation-message", { message: this.topValueError, type: "error" }))));
    }
};
RangeSlider.style = {
    base: WinkRangeSliderBaseStyle0,
    telenet: WinkRangeSliderTelenetStyle0
};

export { RangeSlider as wink_range_slider };

//# sourceMappingURL=wink-range-slider.entry.js.map