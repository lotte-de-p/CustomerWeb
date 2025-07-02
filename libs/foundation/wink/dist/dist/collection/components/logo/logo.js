import { h, Host, getAssetPath } from "@stencil/core";
import { logos } from "./data/logo.data";
import { BREAKPOINTS } from "../../models/breakpoints.types";
import { TARGETS } from "../../models/targets.types";
export class Logo {
    constructor() {
        this.alt = '';
        this.href = '';
        this.target = TARGETS.self;
        this.appearance = 'telenet-yellow';
    }
    getSrcDesktop() {
        return logos[this.appearance]['desktop'] && getAssetPath(logos[this.appearance]['desktop']);
    }
    getSrcMobile() {
        return logos[this.appearance]['mobile'] && getAssetPath(logos[this.appearance]['mobile']);
    }
    altText() {
        return (this.alt !== 'Inspect element to check' && this.alt) || logos[this.appearance]['alt'];
    }
    renderLogoImage = (srcDesktop, srcMobile, alt) => {
        return (h("picture", null, srcMobile && h("source", { srcSet: srcMobile, media: BREAKPOINTS.mobile }), h("img", { src: srcDesktop, alt: alt })));
    };
    render() {
        return (h(Host, { key: 'af3037b2e099d2cae8367abf1e6f37fce1a3ee39' }, this.href.length > 0 ? (h("a", { href: this.href, target: this.target }, this.renderLogoImage(this.getSrcDesktop(), this.getSrcMobile(), this.altText()))) : (this.renderLogoImage(this.getSrcDesktop(), this.getSrcMobile(), this.altText()))));
    }
    static get is() { return "wink-logo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/logo.telenet.scss"],
            "base": ["styles/brands/logo.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/logo.telenet.css"],
            "base": ["styles/brands/logo.base.css"]
        };
    }
    static get properties() {
        return {
            "alt": {
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
                "attribute": "alt",
                "reflect": false,
                "defaultValue": "''"
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
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "logoVariant",
                    "resolved": "string | undefined",
                    "references": {
                        "logoVariant": {
                            "location": "import",
                            "path": "./models/logo.types",
                            "id": "../core/src/components/logo/models/logo.types.tsx::logoVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "appearance",
                "reflect": false,
                "defaultValue": "'telenet-yellow'"
            }
        };
    }
}
//# sourceMappingURL=logo.js.map
