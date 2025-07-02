import { h, Host } from "@stencil/core";
import { LOADING_TYPES } from "./models/image.types";
import { BREAKPOINTS } from "../../models/breakpoints.types";
export class Image {
    constructor() {
        this.srcDesktop = '';
        this.srcTablet = undefined;
        this.srcMobile = undefined;
        this.alt = undefined;
        this.loading = LOADING_TYPES.lazy;
    }
    render() {
        const altText = this.srcDesktop?.length > 0 && this.alt ? this.alt : `Image of ${window.location.host}`;
        return (h(Host, { key: 'fe639502fea474f48d8d5d20d1225f54b01274fe' }, this.srcDesktop ? (h("picture", null, this.srcMobile && h("source", { srcSet: this.srcMobile, media: BREAKPOINTS.mobile }), this.srcTablet && h("source", { srcSet: this.srcTablet, media: BREAKPOINTS.tablet }), h("img", { src: this.srcDesktop, alt: altText, loading: this.loading }))) : (h("p", null, "Please set src "))));
    }
    static get is() { return "wink-img"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/image.telenet.scss"],
            "base": ["styles/brands/image.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/image.telenet.css"],
            "base": ["styles/brands/image.base.css"]
        };
    }
    static get properties() {
        return {
            "srcDesktop": {
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
                "attribute": "src-desktop",
                "reflect": true,
                "defaultValue": "''"
            },
            "srcTablet": {
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
                "attribute": "src-tablet",
                "reflect": false
            },
            "srcMobile": {
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
                "attribute": "src-mobile",
                "reflect": false
            },
            "alt": {
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
                "attribute": "alt",
                "reflect": false
            },
            "loading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LoadingType",
                    "resolved": "\"eager\" | \"lazy\"",
                    "references": {
                        "LoadingType": {
                            "location": "import",
                            "path": "./models/image.types",
                            "id": "../core/src/components/image/models/image.types.tsx::LoadingType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "loading",
                "reflect": false,
                "defaultValue": "LOADING_TYPES.lazy"
            }
        };
    }
}
//# sourceMappingURL=image.js.map
