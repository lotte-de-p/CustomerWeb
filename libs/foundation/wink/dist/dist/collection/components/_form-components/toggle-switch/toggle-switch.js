import { h, Host } from "@stencil/core";
import { TOGGLE_ALIGNMENT } from "./models/toggle-switch.types";
import { UUId } from "../../../utils/utils";
export class ToggleSwitch {
    constructor() {
        this.label = '';
        this.toggleSwitchId = '';
        this.toggleSwitchName = '';
        this.alignment = TOGGLE_ALIGNMENT.nextTo;
        this.checked = false;
        this.disabled = false;
    }
    internals;
    host;
    labelOnClick = (_e) => {
        this.host?.querySelector('input')?.click();
    };
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.host?.querySelector('input')?.click();
        }
    };
    componentDidRender() {
        this.toggleSwitchId = this.toggleSwitchId?.length > 0 ? this.toggleSwitchId : UUId();
    }
    render() {
        return (h(Host, { key: '8eaea9a526d5fdf88d0092a41a0f2fc4b9eda781', class: `toggle-switch--${this.alignment.toLocaleLowerCase()}` }, h("p", { key: '084c14e951c16357ebc1f0fcb2fecce3165d04f4', class: `toggle-switch--label ${this.disabled ? 'toggle-switch--label--disabled' : ''}`, onClick: this.labelOnClick }, this.label), h("div", { key: 'd87e7f3b068bd4de018c6a3f0e1d71506b2e2ef1', class: "toggle-switch--wrapper" }, h("input", { key: '1dd4399c93b27989bb9026ef77aafeec24c7ab4f', type: "checkbox", id: this.toggleSwitchId, name: this.toggleSwitchName, onKeyDown: this.handleKeyDown, checked: this.checked, disabled: this.disabled }), h("div", { key: 'ff20ff19eadf7a72d54ed16e90134ac9a62b1470', class: "toggle-switch--icon", onClick: this.labelOnClick }, h("wink-icon", { key: '212f45f616c9ad346a34cedea77d5a5eaf231e03', icon: "cross-small", size: "sm" }), h("wink-icon", { key: '0d9658f2535b5a93fe3ddab1ec965a8e38be3247', icon: "tick-small", size: "sm" })), h("label", { key: '6ad1b044f672973f09102beba9055785490ee363', htmlFor: this.toggleSwitchId }))));
    }
    static get is() { return "wink-toggle-switch"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/toggle-switch.telenet.scss"],
            "base": ["styles/brands/toggle-switch.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/toggle-switch.telenet.css"],
            "base": ["styles/brands/toggle-switch.base.css"]
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
            "toggleSwitchId": {
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
                "attribute": "toggle-switch-id",
                "reflect": false,
                "defaultValue": "''"
            },
            "toggleSwitchName": {
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
                "attribute": "toggle-switch-name",
                "reflect": false,
                "defaultValue": "''"
            },
            "alignment": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "toggleAlignment",
                    "resolved": "\"nextToEachOther\" | \"spaceBetween\"",
                    "references": {
                        "toggleAlignment": {
                            "location": "import",
                            "path": "./models/toggle-switch.types",
                            "id": "../core/src/components/_form-components/toggle-switch/models/toggle-switch.types.tsx::toggleAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "alignment",
                "reflect": false,
                "defaultValue": "TOGGLE_ALIGNMENT.nextTo"
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
            }
        };
    }
    static get elementRef() { return "host"; }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=toggle-switch.js.map
