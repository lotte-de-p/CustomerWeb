import { h, Host } from "@stencil/core";
import { ICON_SIZES, ICON_TYPES } from "./models/icon.types";
export class Icon {
    constructor() {
        this.appearance = ICON_TYPES.default;
        this.size = ICON_SIZES.md;
        this.icon = 'bell';
        this.hasBackdrop = false;
    }
    componentWillRender() {
        this.hasBackdrop = this.appearance !== 'default' && Object.values(ICON_TYPES).includes(this.appearance);
    }
    render() {
        return (h(Host, { key: 'bd4199183f03ccaca1e483e179f0dae4d5c11b6f', exportparts: `icon, icon-${this.icon}` }, h("i", { key: 'a42f47cc73e52a702175c1f62efd1ce44483b4f6', class: {
                [this.size]: true,
                [this.appearance]: true,
                ['backdrop']: this.hasBackdrop,
            }, part: `icon icon-${this.icon}`, "aria-hidden": "true" })));
    }
    static get is() { return "wink-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/icon.telenet.scss"],
            "base": ["styles/brands/icon.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/icon.telenet.css"],
            "base": ["styles/brands/icon.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconType",
                    "resolved": "\"default\" | \"primary\" | \"secondary\" | \"transparent\"",
                    "references": {
                        "IconType": {
                            "location": "import",
                            "path": "./models/icon.types",
                            "id": "../core/src/components/icon/models/icon.types.tsx::IconType"
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
                "reflect": false,
                "defaultValue": "ICON_TYPES.default"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconSize",
                    "resolved": "string",
                    "references": {
                        "IconSize": {
                            "location": "import",
                            "path": "./models/icon.types",
                            "id": "../core/src/components/icon/models/icon.types.tsx::IconSize"
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
                "reflect": false,
                "defaultValue": "ICON_SIZES.md"
            },
            "icon": {
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
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "'bell'"
            }
        };
    }
    static get states() {
        return {
            "hasBackdrop": {}
        };
    }
}
//# sourceMappingURL=icon.js.map
