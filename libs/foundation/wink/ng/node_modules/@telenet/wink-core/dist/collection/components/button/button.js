import { h, Host } from "@stencil/core";
import { TARGETS } from "../../models/targets.types";
import { BUTTON_APPEARANCES, BUTTON_ELEMENTS, BUTTON_ICON_POSITIONS, BUTTON_SIZES, BUTTON_STATUSES, BUTTON_WIDTHS, TYPES, } from "./models/button.types";
export class Button {
    constructor() {
        this.text = undefined;
        this.loadingText = undefined;
        this.element = BUTTON_ELEMENTS.button;
        this.appearance = BUTTON_APPEARANCES.secondary;
        this.size = BUTTON_SIZES.md;
        this.width = BUTTON_WIDTHS.none;
        this.status = BUTTON_STATUSES.none;
        this.href = undefined;
        this.target = TARGETS.self;
        this.type = TYPES.button;
        this.icon = undefined;
        this.iconButtonAriaLabel = undefined;
        this.iconPosition = BUTTON_ICON_POSITIONS.left;
    }
    getText = () => {
        if (this.status === BUTTON_STATUSES.loading) {
            return this.loadingText;
        }
        return this.text;
    };
    loaderSVG = (h("wink-animation", { class: "animation", src: "/assets/shared/animations/spinner.json", autoplay: true }));
    getClasses() {
        return {
            button: true,
            [`type-${this.element}`]: this.element !== 'button',
            [`${this.appearance}`]: true,
            [`size-${this.size}`]: this.size !== BUTTON_SIZES.md,
            [`icon-${this.iconPosition}`]: typeof this.icon !== 'undefined',
            [`state-${this.status}`]: this.status !== 'none',
            ['icon-button']: !this.getText() && this.icon !== '',
        };
    }
    getAttributes() {
        return {
            ...(this.element !== 'a' && { type: this.type }),
            ...(this.element === 'a' && { href: this.href }),
            ...(this.element === 'a' && { target: this.target }),
            ...(this.element === 'input' && { value: this.getText() }),
            disabled: (this.status === 'disable' || this.status === 'loading') && this.element !== 'a',
            ...(this.element !== 'button' && { role: 'button' }),
            ...((this.status === 'disable' || this.status === 'loading') && { ['aria-disabled']: 'true' }),
            'aria-label': this.text ? this.text : this.iconButtonAriaLabel,
        };
    }
    componentDidRender() {
        if (this.status === BUTTON_STATUSES.loading) {
            this.iconPosition = BUTTON_ICON_POSITIONS.right;
        }
    }
    render() {
        return (h(Host, { key: '61b61e2d5528b91a81d3e956b1276081ce2fc13f', exportparts: this.icon && `icon, icon-${this.icon}` }, h(this.element, { key: '94b61f7d41421ab21375d4269568c439b270ddaa', class: this.getClasses(), ...this.getAttributes() }, this.icon && this.status !== 'loading' && this.element !== 'input' && (h("wink-icon", { appearance: "default", icon: this.icon, size: this.size })), this.status === BUTTON_STATUSES.loading && this.loaderSVG, this.element !== 'input' && this.getText())));
    }
    static get is() { return "wink-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/button.telenet.scss"],
            "base": ["styles/brands/button.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/button.telenet.css"],
            "base": ["styles/brands/button.base.css"]
        };
    }
    static get properties() {
        return {
            "text": {
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
                "attribute": "text",
                "reflect": false
            },
            "loadingText": {
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
                "attribute": "loading-text",
                "reflect": false
            },
            "element": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonElement",
                    "resolved": "\"a\" | \"button\" | \"input\"",
                    "references": {
                        "ButtonElement": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "element",
                "reflect": false,
                "defaultValue": "BUTTON_ELEMENTS.button"
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonAppearance",
                    "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "ButtonAppearance": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonAppearance"
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
                "defaultValue": "BUTTON_APPEARANCES.secondary"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "string",
                    "references": {
                        "ButtonSize": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonSize"
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
                "defaultValue": "BUTTON_SIZES.md"
            },
            "width": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonWidth",
                    "resolved": "string",
                    "references": {
                        "ButtonWidth": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonWidth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "width",
                "reflect": false,
                "defaultValue": "BUTTON_WIDTHS.none"
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonState",
                    "resolved": "\"disable\" | \"loading\" | \"none\" | \"skeleton\"",
                    "references": {
                        "ButtonState": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "status",
                "reflect": false,
                "defaultValue": "BUTTON_STATUSES.none"
            },
            "href": {
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
                "attribute": "href",
                "reflect": false
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
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonType",
                    "resolved": "\"button\" | \"file\" | \"reset\" | \"submit\"",
                    "references": {
                        "ButtonType": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "TYPES.button"
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
            "iconButtonAriaLabel": {
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
                "attribute": "icon-button-aria-label",
                "reflect": false
            },
            "iconPosition": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "ButtonIconPosition",
                    "resolved": "\"left\" | \"right\" | undefined",
                    "references": {
                        "ButtonIconPosition": {
                            "location": "import",
                            "path": "./models/button.types",
                            "id": "../core/src/components/button/models/button.types.tsx::ButtonIconPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon-position",
                "reflect": false,
                "defaultValue": "BUTTON_ICON_POSITIONS.left"
            }
        };
    }
}
//# sourceMappingURL=button.js.map
