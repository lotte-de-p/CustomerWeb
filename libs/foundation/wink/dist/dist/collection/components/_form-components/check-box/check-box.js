import { h } from "@stencil/core";
import { FORM_LABEL_RENDITION } from "../form-label/models/form-label.types";
export class CheckBox {
    constructor() {
        this.label = '';
        this.helper = '';
        this.checkboxId = '';
        this.name = '';
        this.checked = false;
        this.error = false;
        this.disabled = false;
    }
    internals;
    host;
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.host?.querySelector('input')?.click();
        }
    };
    render() {
        return (h("label", { key: '05799f25e823d41da196068d0518f459d092a3dd' }, h("input", { key: '424783c05fa92dbb1f5be256b4e3e39954ba1670', type: "checkbox", checked: this.checked, disabled: this.disabled, "aria-invalid": this.error, id: this.checkboxId, name: this.name, value: this.label, onKeyDown: this.handleKeyDown }), h("wink-form-label", { key: '9f930c283f86e38f1ad55a1c5f0fd298f0856bea', label: this.label, helper: this.helper, rendition: FORM_LABEL_RENDITION.subComponent })));
    }
    static get is() { return "wink-check-box"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/check-box.telenet.scss"],
            "base": ["styles/brands/check-box.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/check-box.telenet.css"],
            "base": ["styles/brands/check-box.base.css"]
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
            "checkboxId": {
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
                "attribute": "checkbox-id",
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
            }
        };
    }
    static get elementRef() { return "host"; }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=check-box.js.map
