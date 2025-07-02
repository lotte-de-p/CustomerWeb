import { h, Host } from "@stencil/core";
export class ColumnCount {
    constructor() {
        this.colsCount = 4;
    }
    render() {
        return (h(Host, { key: 'b53b2099581d0bb5b0ff1a70816ddb9d8be1ab61' }, h("div", { key: 'f3c57f327fe321ed194731f23086b790fbab268f', class: { cols: true, [`cols-count-${this.colsCount}`]: true } }, h("slot", { key: 'e1908de58c90848196e9c128441872357eb5b33d' }))));
    }
    static get is() { return "wink-column-count"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/column-count.telenet.scss"],
            "base": ["styles/brands/column-count.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/column-count.telenet.css"],
            "base": ["styles/brands/column-count.base.css"]
        };
    }
    static get properties() {
        return {
            "colsCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "cols-count",
                "reflect": false,
                "defaultValue": "4"
            }
        };
    }
}
//# sourceMappingURL=column-count.js.map
