import { h, Host } from "@stencil/core";
import { SIZES } from "../../../models/sizes.types";
export class Spacer {
    constructor() {
        this.size = SIZES.md;
    }
    render() {
        return (h(Host, { key: '0b4aedd2307b6ff895b6d090bbc6e75e8508c40f' }, h("div", { key: '912beed0ede283947b2305990f2eed3768e1333b', class: `height-${this.size}` })));
    }
    static get is() { return "wink-spacer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/spacer.telenet.scss"],
            "base": ["styles/brands/spacer.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/spacer.telenet.css"],
            "base": ["styles/brands/spacer.base.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "string",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "../../../models/sizes.types",
                            "id": "../core/src/models/sizes.types.tsx::Size"
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
                "defaultValue": "SIZES.md"
            }
        };
    }
}
//# sourceMappingURL=spacer.js.map
