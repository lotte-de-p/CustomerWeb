import { h, Host } from "@stencil/core";
import { UUId } from "../../../../utils/utils";
export class NavigationList {
    constructor() {
        this.listTitle = '';
        this.hasBoldLinks = false;
    }
    host;
    render() {
        const allLinkChilds = Array.from(this.host.children).filter((node) => {
            return node.nodeName.toLocaleLowerCase() === 'wink-navigation-list-item';
        });
        return (h(Host, null, this.listTitle && (h("wink-paragraph", { appearance: "caption", size: "bold", class: "navigation-list--title" }, this.listTitle)), h("ul", { class: "navigation-list--list" }, allLinkChilds.map((child) => (h("li", { key: UUId(), innerHTML: child.outerHTML }))))));
    }
    static get is() { return "wink-navigation-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/navigation-list.telenet.scss"],
            "base": ["styles/brands/navigation-list.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/navigation-list.telenet.css"],
            "base": ["styles/brands/navigation-list.base.css"]
        };
    }
    static get properties() {
        return {
            "listTitle": {
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
                "attribute": "list-title",
                "reflect": false,
                "defaultValue": "''"
            },
            "hasBoldLinks": {
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
                "attribute": "has-bold-links",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=navigation-list.js.map
