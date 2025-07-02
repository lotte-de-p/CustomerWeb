import { h, Host } from "@stencil/core";
import { BADGE_COLORS, BADGE_SIZES } from "./models/badge.types";
export class Badge {
    constructor() {
        this.text = '';
        this.size = BADGE_SIZES.md;
        this.background = BADGE_COLORS.darkBrown;
    }
    render() {
        return h(Host, { key: 'd5c1a7fe17540563ef8fde972b7531e302193dd5' }, this.text);
    }
    static get is() { return "wink-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/badge.telenet.scss"],
            "base": ["styles/brands/badge.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/badge.telenet.css"],
            "base": ["styles/brands/badge.base.css"]
        };
    }
    static get properties() {
        return {
            "text": {
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
                "attribute": "text",
                "reflect": false,
                "defaultValue": "''"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeSize",
                    "resolved": "string",
                    "references": {
                        "BadgeSize": {
                            "location": "import",
                            "path": "./models/badge.types",
                            "id": "../core/src/components/badge/models/badge.types.tsx::BadgeSize"
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
                "defaultValue": "BADGE_SIZES.md"
            },
            "background": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeColor",
                    "resolved": "\"brightBlue\" | \"darkBrown\" | \"jeansBlue\" | \"lemon\" | \"lila\" | \"olivine\" | \"turquoise\" | \"watermelon\" | \"white\" | \"yellow\"",
                    "references": {
                        "BadgeColor": {
                            "location": "import",
                            "path": "./models/badge.types",
                            "id": "../core/src/components/badge/models/badge.types.tsx::BadgeColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "background",
                "reflect": false,
                "defaultValue": "BADGE_COLORS.darkBrown"
            }
        };
    }
}
//# sourceMappingURL=badge.js.map
