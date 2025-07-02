import { h, Host } from "@stencil/core";
import { AVATAR_SIZES } from "./models/avatar.types";
export class Avatar {
    constructor() {
        this.src = undefined;
        this.size = AVATAR_SIZES.md;
    }
    render() {
        return (h(Host, { key: '0696513c7ab31d5f5a435b02bea52d4e9824b87b' }, this.src?.length > 0 ? (h("img", { src: this.src, alt: "avatar image" })) : (h("wink-icon", { appearance: "secondary", icon: "user", size: this.size }))));
    }
    static get is() { return "wink-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/avatar.telenet.scss"],
            "base": ["styles/brands/avatar.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/avatar.telenet.css"],
            "base": ["styles/brands/avatar.base.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "src",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "string",
                    "references": {
                        "AvatarSize": {
                            "location": "import",
                            "path": "./models/avatar.types",
                            "id": "../core/src/components/avatar/models/avatar.types.tsx::AvatarSize"
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
                "defaultValue": "AVATAR_SIZES.md"
            }
        };
    }
}
//# sourceMappingURL=avatar.js.map
