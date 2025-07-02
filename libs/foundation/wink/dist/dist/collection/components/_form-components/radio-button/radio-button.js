import { h } from "@stencil/core";
import { FORM_LABEL_RENDITION } from "../form-label/models/form-label.types";
export class RadioButton {
    constructor() {
        this.label = '';
        this.helper = '';
        this.radioButtonId = '';
        this.name = '';
        this.checked = false;
        this.disabled = false;
        this.error = false;
    }
    internals;
    host;
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.host?.querySelector('input')?.click();
        }
    };
    render() {
        return (h("label", { key: '5336dc95e8f71b7e53c78561ea6c3fa7178c1c6a' }, h("input", { key: '0d8b31f04b76faf13499f095727fc0b8461b42a6', type: "radio", id: this.radioButtonId, name: this.name, value: this.label, checked: this.checked, disabled: this.disabled, "aria-invalid": this.error, onKeyDown: this.handleKeyDown }), h("wink-form-label", { key: '45c16075ae892458d29ed10d4ded14932269dc21', label: this.label, helper: this.helper, rendition: FORM_LABEL_RENDITION.subComponent })));
    }
    static get is() { return "wink-radio-button"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/radio-button.telenet.scss"],
            "base": ["styles/brands/radio-button.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/radio-button.telenet.css"],
            "base": ["styles/brands/radio-button.base.css"]
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
            "radioButtonId": {
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
                "attribute": "radio-button-id",
                "reflect": false,
                "defaultValue": "''"
            },
            "name": {
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
                "attribute": "name",
                "reflect": false,
                "defaultValue": "''"
            },
            "checked": {
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
                "attribute": "checked",
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
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
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "host"; }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=radio-button.js.map
