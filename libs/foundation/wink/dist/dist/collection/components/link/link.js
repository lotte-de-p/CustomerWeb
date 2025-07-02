import { h, Host } from "@stencil/core";
import { LINK_APPEARANCES, LINK_ICON_POSITIONS, LINK_SIZES, } from "./models/link.types";
import { ICON_TYPES_BASIS } from "../icon/models/icon.types";
import { TARGETS } from "../../models/targets.types";
export class Link {
    constructor() {
        this.appearance = LINK_APPEARANCES.default;
        this.size = LINK_SIZES.inherit;
        this.icon = undefined;
        this.iconPosition = LINK_ICON_POSITIONS.left;
        this.iconAppearance = ICON_TYPES_BASIS.default;
        this.isDisabled = false;
        this.href = '';
        this.target = TARGETS.self;
    }
    getTypeClasses() {
        return this.appearance !== LINK_APPEARANCES.default ? `${this.appearance}` : '';
    }
    hasBackdrop() {
        return (this.iconAppearance !== ICON_TYPES_BASIS.default && Object.values(ICON_TYPES_BASIS).includes(this.iconAppearance));
    }
    render() {
        const sizeClasses = `font-${this.size}`;
        return (h(Host, { key: 'fc89d77072b84beca652fdc0d403df3a1af2301b' }, h("a", { key: '8337b1fb778c85308de2f1ddcfdca6c97018a2a8', class: {
                link: true,
                [sizeClasses]: true,
                [this.getTypeClasses()]: true,
                [`link-with-icon link-with-icon-${this.iconPosition}`]: this.icon !== '',
                'link-with-icon-backdrop': this.hasBackdrop(),
                disabled: this.isDisabled,
            }, href: this.href, target: this.target }, h("slot", { key: 'b6b54ae4531683cfae70d9bba9d7a28c60906ee7', name: "link-icon" }), h("div", { key: '195e537f7baa3c1302ab446cfd41dd1707fb5b73', id: "link-content" }, h("slot", { key: 'a8fbb669673e38b0431991ca3b6def423d9483b3' })))));
    }
    static get is() { return "wink-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/link.telenet.scss"],
            "base": ["styles/brands/link.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/link.telenet.css"],
            "base": ["styles/brands/link.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LinkAppearance",
                    "resolved": "\"area\" | \"default\" | \"dropdown-menu-link\" | \"menu-back\" | \"menu-secondary\" | \"subtle\"",
                    "references": {
                        "LinkAppearance": {
                            "location": "import",
                            "path": "./models/link.types",
                            "id": "../core/src/components/link/models/link.types.tsx::LinkAppearance"
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
                "reflect": true,
                "defaultValue": "LINK_APPEARANCES.default"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LinkSize | LinkSizeSnowflake",
                    "resolved": "\"body-regular\" | \"caption-bold\" | \"inherit\"",
                    "references": {
                        "LinkSize": {
                            "location": "import",
                            "path": "./models/link.types",
                            "id": "../core/src/components/link/models/link.types.tsx::LinkSize"
                        },
                        "LinkSizeSnowflake": {
                            "location": "import",
                            "path": "./models/link.types",
                            "id": "../core/src/components/link/models/link.types.tsx::LinkSizeSnowflake"
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
                "defaultValue": "LINK_SIZES.inherit"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon",
                "reflect": false
            },
            "iconPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LinkPositions",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "LinkPositions": {
                            "location": "import",
                            "path": "./models/link.types",
                            "id": "../core/src/components/link/models/link.types.tsx::LinkPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon-position",
                "reflect": false,
                "defaultValue": "LINK_ICON_POSITIONS.left"
            },
            "iconAppearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconTypeBasis",
                    "resolved": "\"default\" | \"primary\" | \"secondary\"",
                    "references": {
                        "IconTypeBasis": {
                            "location": "import",
                            "path": "../icon/models/icon.types",
                            "id": "../core/src/components/icon/models/icon.types.tsx::IconTypeBasis"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon-appearance",
                "reflect": false,
                "defaultValue": "ICON_TYPES_BASIS.default"
            },
            "isDisabled": {
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
                "attribute": "is-disabled",
                "reflect": false,
                "defaultValue": "false"
            },
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
                            "path": "../../models/targets.types",
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
//# sourceMappingURL=link.js.map
