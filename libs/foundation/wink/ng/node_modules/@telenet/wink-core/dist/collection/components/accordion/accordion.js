import { h, Host } from "@stencil/core";
import { ICON_SIZES } from "../icon/models/icon.types";
export class Accordion {
    constructor() {
        this.heading = '';
        this.icon = '';
        this.isExpanded = false;
    }
    componentDidLoad() {
        if (!this.isExpanded)
            this.activeContentPanel.style.setProperty('display', 'none');
    }
    activeContentPanel;
    get dynamicIdBasedOnTitle() {
        return this.heading.replace(/\s/g, '-').substring(0, 7);
    }
    onButtonClick = () => {
        this.isExpanded = !this.isExpanded;
    };
    panelTransitionStart = () => {
        if (this.isExpanded) {
            this.activeContentPanel.style.removeProperty('display');
        }
    };
    panelTransitionEnd = () => {
        if (!this.isExpanded) {
            this.activeContentPanel.style.setProperty('display', 'none');
        }
    };
    render() {
        return (h(Host, { key: 'fee3ec6dec5147e0d4c41a93a2db575842d745b6' }, h("div", { key: 'fd8610b0544e355d089da8d35a9ce2e729e1662d', id: "accordion", class: "accordion" }, h("div", { key: '0c13e9249ca39c9e3d0dcb2186d4cf3f0dbdee89', role: "heading", "aria-level": "5" }, h("button", { key: '7fa30a0c5c299f4743acd0859fb32340241a3ac3', class: "accordion-trigger", onClick: this.onButtonClick, type: "button", "aria-expanded": `${this.isExpanded}`, "aria-controls": `section-${this.dynamicIdBasedOnTitle}`, id: "accordion1id" }, h("div", { key: '08027ba23e928a92b70dc5d55d552a2a9ee2b563', class: "accordion-title" }, !!this.icon && h("wink-icon", { appearance: "default", icon: this.icon, size: ICON_SIZES.md }), this.heading), h("wink-icon", { key: 'b4922d586acbdfec71878f30c5081cfd632c1fcb', class: "accordion-icon", appearance: "default", icon: "chevron-down", size: ICON_SIZES.md }))), h("div", { key: '69be91831b0f460e2ee1662cd64a769cddcdd80b', id: `section-${this.dynamicIdBasedOnTitle}`, class: "accordion-panel", role: "region", "aria-labelledby": "accordion1id", "aria-hidden": `${this.isExpanded}`, hidden: !this.isExpanded, onTransitionEnd: this.panelTransitionEnd, onTransitionStart: this.panelTransitionStart }, h("div", { key: 'e28dac024655d4487c029a502b1963db59a5bbac', id: "content", class: `${this.icon ? 'with-icon' : ''}`, ref: (el) => (this.activeContentPanel = el) }, h("slot", { key: 'e7262f515952b7dafff1b3b715cf135fceb9e867' }))))));
    }
    static get is() { return "wink-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/accordion.telenet.scss"],
            "base": ["styles/brands/accordion.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/accordion.telenet.css"],
            "base": ["styles/brands/accordion.base.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
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
                "attribute": "heading",
                "reflect": false,
                "defaultValue": "''"
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
                "defaultValue": "''"
            },
            "isExpanded": {
                "type": "boolean",
                "mutable": true,
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
                "attribute": "is-expanded",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=accordion.js.map
