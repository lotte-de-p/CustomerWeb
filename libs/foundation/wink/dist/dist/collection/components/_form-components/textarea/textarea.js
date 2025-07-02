import { h } from "@stencil/core";
import { AUTOCOMPLETE_OPTIONS } from "./models/textarea.types";
import { INPUT_ENTERKEYHINTS } from "../input/models/input.types";
import { UUId } from "../../../utils/utils";
export class TextArea {
    constructor() {
        this.isDisabled = false;
        this.isRequired = false;
        this.autocomplete = AUTOCOMPLETE_OPTIONS.off;
        this.enterkeyhintOption = INPUT_ENTERKEYHINTS.none;
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
        this.textareaId = this.textareaId?.length > 0 ? this.textareaId : UUId();
    }
    render() {
        return (h("label", { key: '23f2d6dadeaef36871f554132e6c3c69028ecb37' }, h("wink-form-label", { key: 'abb4ad4159726d60e3d2f6fd9ab151b5299f7288', label: this.label, helper: this.helper, showOptional: !this.isRequired, "is-disabled": this.isDisabled }), h("textarea", { key: '39d04d8ca8244e0c4c6c204222262632f41c6ba5', ...this.getAttributes() }), !!this.error && h("wink-validation-message", { message: this.error, type: "error" })));
    }
    static get is() { return "wink-textarea"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/textarea.telenet.scss"],
            "base": ["styles/brands/textarea.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/textarea.telenet.css"],
            "base": ["styles/brands/textarea.base.css"]
        };
    }
    static get properties() {
        return {
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
            "autocomplete": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AutocompleteOptions",
                    "resolved": "\"off\" | \"on\"",
                    "references": {
                        "AutocompleteOptions": {
                            "location": "import",
                            "path": "./models/textarea.types",
                            "id": "../core/src/components/_form-components/textarea/models/textarea.types.tsx::AutocompleteOptions"
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
                "defaultValue": "AUTOCOMPLETE_OPTIONS.off"
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
                            "path": "../input/models/input.types",
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
            "textareaId": {
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
                "attribute": "textarea-id",
                "reflect": false
            },
            "label": {
                "type": "string",
                "mutable": false,
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
                "attribute": "label",
                "reflect": false
            },
            "helper": {
                "type": "string",
                "mutable": false,
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
                "attribute": "helper",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
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
                "attribute": "name",
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
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
                "attribute": "placeholder",
                "reflect": false
            },
            "error": {
                "type": "string",
                "mutable": false,
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
                "reflect": false
            },
            "minlength": {
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
                "attribute": "minlength",
                "reflect": false
            },
            "maxlength": {
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
                "attribute": "maxlength",
                "reflect": false
            },
            "rows": {
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
                "attribute": "rows",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=textarea.js.map
