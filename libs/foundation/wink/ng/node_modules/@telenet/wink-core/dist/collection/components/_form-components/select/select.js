import { h, Host } from "@stencil/core";
import { FORM_LABEL_RENDITION } from "../form-label/models/form-label.types";
import { UUId } from "../../../utils/utils";
export class Select {
    constructor() {
        this.label = undefined;
        this.helper = undefined;
        this.isRequired = false;
        this.selectId = '';
        this.selectName = undefined;
        this.error = undefined;
        this.isDisabled = false;
        this.value = undefined;
        this.placeholder = undefined;
    }
    internals;
    host;
    componentDidRender() {
        const selectEl = this.host.querySelector('select');
        if (selectEl?.value === '') {
            selectEl.classList.add('placeholder');
        }
        this.selectId = this.selectId.length > 0 ? this.selectId : UUId();
    }
    handleChange(e) {
        this.value = e.target.value;
        if (this.value === '') {
            e.target.classList.add('placeholder');
        }
        else {
            e.target.classList.remove('placeholder');
        }
    }
    render() {
        return (h(Host, { key: '1813c868d5c6d5afafba0a266225d0e202f27a29' }, h("label", { key: '53affcdc0add022abc8cfb91035e34a0ad93041f', class: { 'label-disabled': this.isDisabled }, htmlFor: this.selectId }, h("wink-form-label", { key: 'e5fb998d5c5286ccae9de63348c1d1f85934231a', label: this.label, helper: this.helper, rendition: FORM_LABEL_RENDITION.default, "show-optional": this.isRequired })), h("div", { key: 'c8a423819070a049c140f4e2081eafda63afe6c9', class: "select-wrapper" }, h("select", { key: 'adf6fda40188d6cd15d3ccf864e80cd74835ee45', id: this.selectId, name: this.selectName, "aria-invalid": !!this.error, onChange: (e) => this.handleChange(e), disabled: !!this.isDisabled, class: {
                invalid: !!this.error,
            } }, this.placeholder && (h("option", { value: "", selected: true, disabled: true }, this.placeholder)), h("slot", { key: '2490da6cbc2e15be733cac6f560a147935bc80da' })), h("wink-icon", { key: '7a306fb86ee49e44904abe9cdd23423e0bbecc83', icon: "chevron-down", appearance: "transparent" })), this.error && h("wink-validation-message", { message: this.error })));
    }
    static get is() { return "wink-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/select.telenet.scss"],
            "base": ["styles/brands/select.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/select.telenet.css"],
            "base": ["styles/brands/select.base.css"]
        };
    }
    static get properties() {
        return {
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
            "selectId": {
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
                "attribute": "select-id",
                "reflect": false,
                "defaultValue": "''"
            },
            "selectName": {
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
                "attribute": "select-name",
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
            "value": {
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
                "attribute": "value",
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
            }
        };
    }
    static get elementRef() { return "host"; }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=select.js.map
