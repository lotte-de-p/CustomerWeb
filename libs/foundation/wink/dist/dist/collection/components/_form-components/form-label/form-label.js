import { h, Host } from "@stencil/core";
import { FORM_LABEL_RENDITION } from "./models/form-label.types";
export class FormLabel {
    constructor() {
        this.label = '';
        this.helper = undefined;
        this.labelId = undefined;
        this.helperId = undefined;
        this.rendition = FORM_LABEL_RENDITION.default;
        this.optionalText = 'Optioneel';
        this.showOptional = false;
        this.isDisabled = false;
    }
    render() {
        return (h(Host, { key: '5dfbd831a7ebb558e65cb7ae7e9746124d52f7b5', class: `${this.isDisabled ? 'label--disabled' : ''} label--${this.rendition}`.toLocaleLowerCase() }, h("span", { key: 'aae45fa31c41b7dab0483d2dddbaf879ff4f3ca8', class: "label--content-wrapper" }, h("span", { key: 'fae2d7ebaa990faec70d1e5e118459f343d543f2', class: "label--text" }, this.label), this.helper && (h("span", { class: "label--helper", id: this.helperId }, this.helper))), this.showOptional && h("span", { class: "label--optional" }, this.optionalText)));
    }
    static get is() { return "wink-form-label"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/form-label.telenet.scss"],
            "base": ["styles/brands/form-label.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/form-label.telenet.css"],
            "base": ["styles/brands/form-label.base.css"]
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
            "labelId": {
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
                "attribute": "label-id",
                "reflect": false
            },
            "helperId": {
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
                "attribute": "helper-id",
                "reflect": false
            },
            "rendition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FormLabelRendition",
                    "resolved": "\"default\" | \"subComponent\"",
                    "references": {
                        "FormLabelRendition": {
                            "location": "import",
                            "path": "./models/form-label.types",
                            "id": "../core/src/components/_form-components/form-label/models/form-label.types.tsx::FormLabelRendition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "rendition",
                "reflect": false,
                "defaultValue": "FORM_LABEL_RENDITION.default"
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
            "showOptional": {
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
                "attribute": "show-optional",
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
            }
        };
    }
}
//# sourceMappingURL=form-label.js.map
