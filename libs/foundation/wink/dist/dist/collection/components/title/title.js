import { h, Host } from "@stencil/core";
import { TITLE_SIZES, TITLE_SPACINGS_Y } from "./models/title.types";
export class Title {
    constructor() {
        this.htmlTag = TITLE_SIZES.h2;
        this.noSeo = false;
        this.text = '';
        this.spacingY = TITLE_SPACINGS_Y.default;
        this._HtmlTag = this.htmlTag;
    }
    componentWillRender() {
        this._HtmlTag = this.noSeo ? 'div' : this.htmlTag;
    }
    render() {
        return (h(Host, { key: 'ad89fd8cc705021f289f820bba893b5fba3b7e30', class: this.spacingY !== 'default' ? `spacing-${this.spacingY}` : '' }, h(this._HtmlTag, { key: '9b43bafd3c9d4b96c56473032137277edf5ccee8', class: { [this.htmlTag]: this.noSeo } }, this.text)));
    }
    static get is() { return "wink-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/title.telenet.scss"],
            "base": ["styles/brands/title.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/title.telenet.css"],
            "base": ["styles/brands/title.base.css"]
        };
    }
    static get properties() {
        return {
            "htmlTag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TitleSize",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {
                        "TitleSize": {
                            "location": "import",
                            "path": "./models/title.types",
                            "id": "../core/src/components/title/models/title.types.tsx::TitleSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "html-tag",
                "reflect": false,
                "defaultValue": "TITLE_SIZES.h2"
            },
            "noSeo": {
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
                "attribute": "no-seo",
                "reflect": false,
                "defaultValue": "false"
            },
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
            "spacingY": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TitleSpacingY",
                    "resolved": "\"bottom\" | \"default\" | \"none\" | \"top\"",
                    "references": {
                        "TitleSpacingY": {
                            "location": "import",
                            "path": "./models/title.types",
                            "id": "../core/src/components/title/models/title.types.tsx::TitleSpacingY"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "spacing-y",
                "reflect": false,
                "defaultValue": "TITLE_SPACINGS_Y.default"
            }
        };
    }
    static get states() {
        return {
            "_HtmlTag": {}
        };
    }
}
//# sourceMappingURL=title.js.map
