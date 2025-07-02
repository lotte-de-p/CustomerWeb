import { Fragment, Host, h } from "@stencil/core";
import { INPUT_APPEARANCES, INPUT_AUTOCOMPLETES, INPUT_ENTERKEYHINTS, INPUT_MODES, INPUT_SIZES, INPUT_TYPES, } from "./models/input.types";
import { UUId } from "../../../utils/utils";
export class Input {
    constructor() {
        this.appearance = INPUT_APPEARANCES.default;
        this.value = '';
        this.inputId = undefined;
        this.name = undefined;
        this.type = INPUT_TYPES.text;
        this.placeholder = '';
        this.isRequired = false;
        this.inputModeOption = INPUT_MODES.text;
        this.autocomplete = INPUT_AUTOCOMPLETES.off;
        this.enterkeyhintOption = INPUT_ENTERKEYHINTS.none;
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
        this.size = INPUT_SIZES.md;
    }
    host;
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
            return (h(Fragment, null, h("label", { htmlFor: this.inputId, id: this.getLabelId(), class: { label: true, 'label-disabled': this.isDisabled } }, h("wink-form-label", { label: this.label, helper: this.helper, "helper-id": this.getHelperId(), "show-optional": !this.isRequired, "optional-text": this.optionalText }))));
        }
    }
    get getPrefix() {
        if (this.prefixValue && !this.iconLeft) {
            return (h(Fragment, null, h("div", { class: {
                    'input-affix input-affix-prefix': true,
                    'input-affix-disabled': this.isDisabled,
                    'input-affix-readonly': this.isReadonly,
                } }, this.prefixValue)));
        }
    }
    get getPostfix() {
        if (this.postfixValue && !this.iconRight) {
            return (h(Fragment, null, h("div", { class: {
                    'input-affix input-affix-postfix': true,
                    'input-affix-disabled': this.isDisabled,
                    'input-affix-readonly': this.isReadonly,
                } }, this.postfixValue)));
        }
    }
    getReadOnlyLength(value) {
        if (this.isReadonly && value.length > 0) {
            this.inputWidth = this.type === INPUT_TYPES.date ? value.length + 4 : value.length;
        }
        else {
            this.inputWidth = 0;
        }
    }
    showSearchBackSpaceIcon(value) {
        if (value.length === 0 && this.appearance === INPUT_APPEARANCES.search) {
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
        this.inputId = this.inputId?.length > 0 ? this.inputId : UUId();
    }
    render() {
        return (h(Host, { key: '5261d5629d63c7ead5af380c61590852d0809233' }, this.getLabel, h("div", { key: 'df2fa871bf2a07bafb301255c85e2706da0f6b51', class: {
                'input-wrapper': true,
                'input-with-icon-button input-with-icon-button-left': this.iconLeft?.length > 0,
                'input-with-icon-button input-with-icon-button-right': this.iconRight?.length > 0,
                'input-wrapper-date': this.type === 'date',
            } }, this.getPrefix, this.iconLeft?.length > 0 && (h("div", { class: "input-icon-button input-icon-button-left" }, h("button", { type: "button", "aria-label": this.iconLeft, class: "input-icon-button-button" }, h("wink-icon", { appearance: "default", icon: this.iconLeft, size: this.size })))), h("input", { key: '20d0144a5ed31367ba24ada26bcb1f369600f02d', onInput: (e) => this.handleChange(e), ...this.getAttributes(), class: {
                input: true,
                invalid: !!this.error,
                'input-password': this.type === INPUT_TYPES.password,
            }, style: {
                width: this.isReadonly && this.inputWidth > 0 ? `${this.inputWidth}ch` : '',
            } }), this.type === INPUT_TYPES.date && !this.isReadonly && (h("wink-icon", { class: { disabled: this.isDisabled }, icon: "calendar", appearance: "transparent" })), this.iconRight?.length > 0 && this.showIconRight && (h("div", { class: "input-icon-button input-icon-button-right" }, h("button", { type: "button", "aria-label": this.iconRight, class: "input-icon-button-button", onClick: () => this.handleRightIconClick() }, h("wink-icon", { appearance: "default", icon: this.iconRight, size: this.size })))), this.getPostfix), this.error && (h("div", { id: this.getErrorMsgId(), class: "error-msg" }, h("wink-validation-message", { message: this.error })))));
    }
    static get is() { return "wink-input"; }
    static get encapsulation() { return "scoped"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/input.telenet.scss"],
            "base": ["styles/brands/input.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/input.telenet.css"],
            "base": ["styles/brands/input.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAppearance",
                    "resolved": "\"default\" | \"search\"",
                    "references": {
                        "InputAppearance": {
                            "location": "import",
                            "path": "./models/input.types",
                            "id": "../core/src/components/_form-components/input/models/input.types.tsx::InputAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "appearance",
                "reflect": true,
                "defaultValue": "INPUT_APPEARANCES.default"
            },
            "value": {
                "type": "string",
                "mutable": true,
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
                "attribute": "value",
                "reflect": true,
                "defaultValue": "''"
            },
            "inputId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "input-id",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "name",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputType",
                    "resolved": "\"date\" | \"email\" | \"hidden\" | \"number\" | \"password\" | \"tel\" | \"text\" | \"time\" | \"url\"",
                    "references": {
                        "InputType": {
                            "location": "import",
                            "path": "./models/input.types",
                            "id": "../core/src/components/_form-components/input/models/input.types.tsx::InputType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "INPUT_TYPES.text"
            },
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "''"
            },
            "isRequired": {
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
                "attribute": "is-required",
                "reflect": false,
                "defaultValue": "false"
            },
            "inputModeOption": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputMode",
                    "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
                    "references": {
                        "InputMode": {
                            "location": "import",
                            "path": "./models/input.types",
                            "id": "../core/src/components/_form-components/input/models/input.types.tsx::InputMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "input-mode-option",
                "reflect": false,
                "defaultValue": "INPUT_MODES.text"
            },
            "autocomplete": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAutocomplete",
                    "resolved": "\"address\" | \"current-password\" | \"email\" | \"name\" | \"new-password\" | \"off\" | \"on\" | \"username\"",
                    "references": {
                        "InputAutocomplete": {
                            "location": "import",
                            "path": "./models/input.types",
                            "id": "../core/src/components/_form-components/input/models/input.types.tsx::InputAutocomplete"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "autocomplete",
                "reflect": false,
                "defaultValue": "INPUT_AUTOCOMPLETES.off"
            },
            "enterkeyhintOption": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputEnterkeyhint",
                    "resolved": "\"done\" | \"enter\" | \"go\" | \"next\" | \"none\" | \"previous\" | \"search\" | \"send\"",
                    "references": {
                        "InputEnterkeyhint": {
                            "location": "import",
                            "path": "./models/input.types",
                            "id": "../core/src/components/_form-components/input/models/input.types.tsx::InputEnterkeyhint"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "enterkeyhint-option",
                "reflect": false,
                "defaultValue": "INPUT_ENTERKEYHINTS.none"
            },
            "isReadonly": {
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
                "attribute": "is-readonly",
                "reflect": false,
                "defaultValue": "false"
            },
            "isDisabled": {
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
                "attribute": "is-disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "isAutofocused": {
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
                "attribute": "is-autofocused",
                "reflect": false,
                "defaultValue": "false"
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "step",
                "reflect": false
            },
            "minValue": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "min-value",
                "reflect": false
            },
            "maxValue": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "max-value",
                "reflect": false
            },
            "error": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "error",
                "reflect": true
            },
            "prefixValue": {
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
                "attribute": "prefix-value",
                "reflect": false,
                "defaultValue": "''"
            },
            "postfixValue": {
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
                "attribute": "postfix-value",
                "reflect": false,
                "defaultValue": "''"
            },
            "iconLeft": {
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
                "attribute": "icon-left",
                "reflect": false,
                "defaultValue": "''"
            },
            "iconRight": {
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
                "attribute": "icon-right",
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
            "optionalText": {
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
                "attribute": "optional-text",
                "reflect": false,
                "defaultValue": "'Optional'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputSize",
                    "resolved": "string",
                    "references": {
                        "InputSize": {
                            "location": "import",
                            "path": "./models/input.types",
                            "id": "../core/src/components/_form-components/input/models/input.types.tsx::InputSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "INPUT_SIZES.md"
            }
        };
    }
    static get states() {
        return {
            "showIconRight": {},
            "inputWidth": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChanged",
                "name": "valueChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setValidation": {
                "complexType": {
                    "signature": "(errorMsg?: string) => Promise<void>",
                    "parameters": [{
                            "name": "errorMsg",
                            "type": "string | undefined",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=input.js.map
