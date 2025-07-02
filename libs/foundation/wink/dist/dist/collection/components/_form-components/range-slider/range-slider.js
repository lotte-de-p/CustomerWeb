import { h } from "@stencil/core";
import { SLIDER_TYPES, SLIDER_DIRECTIONS } from "./models/range-slider.types";
export class RangeSlider {
    constructor() {
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
    static get is() { return "wink-range-slider"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/range-slider.telenet.scss"],
            "base": ["styles/brands/range-slider.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/range-slider.telenet.css"],
            "base": ["styles/brands/range-slider.base.css"]
        };
    }
    static get properties() {
        return {
            "sliderId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "slider-id",
                "reflect": false,
                "defaultValue": "''"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "''"
            },
            "helper": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "helper",
                "reflect": false,
                "defaultValue": "''"
            },
            "minValue": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "min-value",
                "reflect": false,
                "defaultValue": "0"
            },
            "maxValue": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "max-value",
                "reflect": false,
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "step",
                "reflect": false,
                "defaultValue": "1"
            },
            "showValues": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-values",
                "reflect": false,
                "defaultValue": "false"
            },
            "showInput": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-input",
                "reflect": false,
                "defaultValue": "false"
            },
            "errorMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "error-message",
                "reflect": false,
                "defaultValue": "''"
            },
            "sliderType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SliderType",
                    "resolved": "\"range\" | \"single\"",
                    "references": {
                        "SliderType": {
                            "location": "import",
                            "path": "./models/range-slider.types",
                            "id": "../core/src/components/_form-components/range-slider/models/range-slider.types.tsx::SliderType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "slider-type",
                "reflect": false,
                "defaultValue": "SLIDER_TYPES.range"
            },
            "bottomValue": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "bottom-value",
                "reflect": true,
                "defaultValue": "0"
            },
            "value": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "100"
            }
        };
    }
    static get states() {
        return {
            "topValueError": {},
            "bottomValueError": {}
        };
    }
    static get methods() {
        return {
            "showFromValue": {
                "complexType": {
                    "signature": "() => Promise<number>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<number>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "showToValue": {
                "complexType": {
                    "signature": "() => Promise<number>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<number>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getDragValue": {
                "complexType": {
                    "signature": "() => Promise<number>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<number>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=range-slider.js.map
