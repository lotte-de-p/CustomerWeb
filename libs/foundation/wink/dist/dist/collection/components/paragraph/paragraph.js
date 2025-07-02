import { h, Host } from "@stencil/core";
import { PARAGRAPH_APPEARANCES, PARAGRAPH_SIZES } from "./models/paragraph.types";
export class Paragraph {
    constructor() {
        this.appearance = PARAGRAPH_APPEARANCES.body;
        this.size = PARAGRAPH_SIZES.regular;
    }
    render() {
        return (h(Host, { key: 'f74cebdf05b2f6e4135eb2e9d6f60461612d2e0e', class: `font--${this.appearance}-${this.size}` }, h("slot", { key: 'e9bb9bcb6965caaad10e97d80c48647bab6b7746' })));
    }
    static get is() { return "wink-paragraph"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/paragraph.telenet.scss"],
            "base": ["styles/brands/paragraph.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/paragraph.telenet.css"],
            "base": ["styles/brands/paragraph.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ParagraphAppearance",
                    "resolved": "\"body\" | \"caption\"",
                    "references": {
                        "ParagraphAppearance": {
                            "location": "import",
                            "path": "./models/paragraph.types",
                            "id": "../core/src/components/paragraph/models/paragraph.types.tsx::ParagraphAppearance"
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
                "defaultValue": "PARAGRAPH_APPEARANCES.body"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ParagraphSize",
                    "resolved": "\"bold\" | \"large\" | \"regular\" | \"small\"",
                    "references": {
                        "ParagraphSize": {
                            "location": "import",
                            "path": "./models/paragraph.types",
                            "id": "../core/src/components/paragraph/models/paragraph.types.tsx::ParagraphSize"
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
                "defaultValue": "PARAGRAPH_SIZES.regular"
            }
        };
    }
}
//# sourceMappingURL=paragraph.js.map
