import { h } from "@stencil/core";
import { VALIDATION_TYPES } from "./models/validation-message.types";
export class ValidationMessage {
    constructor() {
        this.message = undefined;
        this.type = VALIDATION_TYPES.error;
    }
    render() {
        return (h("div", { key: '3ad88915d603ba0b26a3b35bfec69dfeae97635b', class: `validation-message--${this.type}` }, h("wink-icon", { key: '8e427aa709ac3bdf6994a7e9a2e690f57fee18cd', icon: "error-shape" }), this.message));
    }
    static get is() { return "wink-validation-message"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/validation-message.telenet.scss"],
            "base": ["styles/brands/validation-message.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/validation-message.telenet.css"],
            "base": ["styles/brands/validation-message.base.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                "attribute": "message",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ValidationTypes",
                    "resolved": "\"error\"",
                    "references": {
                        "ValidationTypes": {
                            "location": "import",
                            "path": "./models/validation-message.types",
                            "id": "../core/src/components/_form-components/validation-message/models/validation-message.types.tsx::ValidationTypes"
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
                "defaultValue": "VALIDATION_TYPES.error"
            }
        };
    }
}
//# sourceMappingURL=validation-message.js.map
