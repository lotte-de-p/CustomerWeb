import { h } from "@stencil/core";
import { DIRECTIONS } from "../../../../../models/positions.types";
export class CheckBoxGroup {
    constructor() {
        this.label = '';
        this.helper = '';
        this.direction = DIRECTIONS.vertical;
        this.error = undefined;
        this.isRequired = false;
        this.optionalText = 'Optioneel';
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
        return (h("fieldset", { key: 'd7f5fa5db666b4c44c65794b26d89558fc95e00c' }, h("legend", { key: 'c123bc97caf59f4e07715fd3fb5567bbdbf56096', class: "check-box-group__wrapper" }, h("wink-form-label", { key: 'e321c64e5cf4cde27ebbe86779999826a3619c32', label: this.label, helper: this.helper, "show-optional": !this.isRequired, "optional-text": this.optionalText })), h("div", { key: 'ca479c96280af57731b88bc4aa0b2fbfee0e829a', class: `check-box-group--${this.direction}` }, h("slot", { key: '245b88689fd91bfe99bb6570a763207b30fe2438' })), this.error && h("wink-validation-message", { message: this.error, type: "error" })));
    }
    static get is() { return "wink-check-box-group"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/check-box-group.telenet.scss"],
            "base": ["styles/brands/check-box-group.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/check-box-group.telenet.css"],
            "base": ["styles/brands/check-box-group.base.css"]
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
//# sourceMappingURL=check-box-group.js.map
