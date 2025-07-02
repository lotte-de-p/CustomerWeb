import { h, Host } from "@stencil/core";
import { TARGETS } from "../../../../../models/targets.types";
export class NavigationListItem {
    constructor() {
        this.href = '';
        this.target = TARGETS.self;
    }
    render() {
        return (h(Host, { key: '3f6fd805c8fe113c745e6577aee2cc0ff62ee7eb' }, h("a", { key: '6c2d7e4f21f8784f08bb6fdec6c15e6affde549d', class: "navigation-list-item", href: this.href, target: this.target }, h("slot", { key: '01dbf9dfac8d7f7cfc99c1363db49eef86f1d7b9' }))));
    }
    static get is() { return "wink-navigation-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/navigation-list-item.telenet.scss"],
            "base": ["styles/brands/navigation-list-item.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/navigation-list-item.telenet.css"],
            "base": ["styles/brands/navigation-list-item.base.css"]
        };
    }
    static get properties() {
        return {
            "href": {
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
                "attribute": "href",
                "reflect": false,
                "defaultValue": "''"
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Target",
                    "resolved": "string",
                    "references": {
                        "Target": {
                            "location": "import",
                            "path": "../../../../../models/targets.types",
                            "id": "../core/src/models/targets.types.tsx::Target"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "TARGETS.self"
            }
        };
    }
}
//# sourceMappingURL=navigation-list-item.js.map
