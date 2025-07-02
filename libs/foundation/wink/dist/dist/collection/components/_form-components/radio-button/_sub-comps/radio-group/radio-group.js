import { h } from "@stencil/core";
import { DIRECTIONS } from "../../../../../models/positions.types";
export class RadioGroup {
    constructor() {
        this.label = '';
        this.helper = '';
        this.direction = DIRECTIONS.vertical;
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
        return (h("fieldset", { key: 'e490b8f9e96079460ac2ac7eda69f90ba4d7a916' }, h("legend", { key: 'd96aa8fcf6a9b20767991732665367e36687a55b', class: "radio-group__wrapper" }, h("wink-form-label", { key: '2d131f7ae1fdc24cf2eb8fe4ba19b1c153d5df1c', label: this.label, helper: this.helper, "show-optional": !this.isRequired, "optional-text": this.optionalText })), h("div", { key: '0ca6931cde693164749a85f789c0ff7e453e5e61', class: `radio-group--${this.direction}` }, h("slot", { key: '134ae95d33ea8e0f7806a79f3260f47f523021da' })), this.error && h("wink-validation-message", { message: this.error, type: "error" })));
    }
    static get is() { return "wink-radio-group"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/radio-group.telenet.scss"],
            "base": ["styles/brands/radio-group.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/radio-group.telenet.css"],
            "base": ["styles/brands/radio-group.base.css"]
        };
    }
    static get properties() {
        return {
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
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Directions",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "Directions": {
                            "location": "import",
                            "path": "../../../../../models/positions.types",
                            "id": "../core/src/models/positions.types.ts::Directions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "direction",
                "reflect": false,
                "defaultValue": "DIRECTIONS.vertical"
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
                "defaultValue": "'Optioneel'"
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
            }
        };
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
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=radio-group.js.map
