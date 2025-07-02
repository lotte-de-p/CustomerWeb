import { h, Host } from "@stencil/core";
import { PRICING_ALIGN, LANGUAGES, PRICING_TYPES } from "./models/pricing.types";
export class Pricing {
    constructor() {
        this.price = '';
        this.priceStrikethrough = '';
        this.startingFrom = '';
        this.frequency = '';
        this.duration = '';
        this.appearance = PRICING_TYPES.text;
        this.annotation = LANGUAGES.nl;
        this.alignment = PRICING_ALIGN.left;
    }
    normalText = '_normal';
    strikeThroughText = '_strikethrough';
    screenReaderAnnotations = new Map([
        [LANGUAGES.nl + this.strikeThroughText, 'Normale prijs'],
        [LANGUAGES.fr + this.strikeThroughText, 'Prix normal'],
        [LANGUAGES.en + this.strikeThroughText, 'Normal price'],
        [LANGUAGES.nl + this.normalText, 'Huidige prijs'],
        [LANGUAGES.fr + this.normalText, 'Prix Maintenant'],
        [LANGUAGES.en + this.normalText, 'Current price'],
    ]);
    pricingChild = (price, lang, wrapperClassName) => {
        const currencyAfter = lang === LANGUAGES.fr ? 'currency-after' : '';
        const langDecimalPoint = lang !== LANGUAGES.en ? ',' : '.';
        const inputPrice = price ? price.replace(',', '.') : '';
        const integerPart = inputPrice.split('.')[0];
        const fractionalPart = inputPrice.split('.')[1] !== '00' ? inputPrice.split('.')[1] : '';
        const screenReaderText = wrapperClassName === 'pricing__promo-price'
            ? this.screenReaderAnnotations.get(lang + this.strikeThroughText)
            : this.screenReaderAnnotations.get(lang + this.normalText);
        let formatPriceHtml = (h("div", { class: `${wrapperClassName} ${currencyAfter}` }, h("span", { class: "sr-only" }, screenReaderText), h("i", { class: "price__price-currency" }, "\u20AC"), h("span", { class: "price__price-value" }, price)));
        if (inputPrice.includes('.')) {
            formatPriceHtml = (h("div", { class: `${wrapperClassName} ${currencyAfter}` }, h("span", { class: "sr-only" }, screenReaderText), h("i", { class: "price__price-currency" }, "\u20AC"), h("span", { class: "price__price-value" }, integerPart, fractionalPart && h("span", { class: "price__price-decimal" }, langDecimalPoint + fractionalPart))));
        }
        return formatPriceHtml;
    };
    alignmentClass = (alignment) => {
        return this.alignment !== PRICING_ALIGN.left ? `price-align__${alignment}` : '';
    };
    componentWillRender() {
        if (this.appearance === PRICING_TYPES.patch) {
            this.alignment = PRICING_ALIGN.center;
        }
    }
    render() {
        return (h(Host, { key: 'a1d45a16934f2c4c72c1275b011a4f054a688395', type: "product price" }, (this.startingFrom || this.priceStrikethrough) && (h("div", { class: `pricing__header ${this.alignmentClass(this.alignment)}` }, this.startingFrom && h("div", { class: "pricing__starting-from" }, this.startingFrom, " "), this.priceStrikethrough &&
            this.pricingChild(this.priceStrikethrough, this.annotation, 'pricing__promo-price'))), (this.price || this.frequency) && (h("div", { class: `pricing__current-price-wrapper ${this.alignmentClass(this.alignment)}` }, this.price && this.pricingChild(this.price, this.annotation, 'pricing__price-value-wrapper'), this.frequency && h("div", { class: "pricing__price-frequency" }, this.frequency))), this.duration && (h("div", { class: `pricing__footer ${this.alignmentClass(this.alignment)}` }, h("div", { class: "pricing__price-promo-duration" }, this.duration)))));
    }
    static get is() { return "wink-pricing"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/pricing.telenet.scss"],
            "base": ["styles/brands/pricing.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/pricing.telenet.css"],
            "base": ["styles/brands/pricing.base.css"]
        };
    }
    static get properties() {
        return {
            "price": {
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
                "attribute": "price",
                "reflect": false,
                "defaultValue": "''"
            },
            "priceStrikethrough": {
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
                "attribute": "price-strikethrough",
                "reflect": false,
                "defaultValue": "''"
            },
            "startingFrom": {
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
                "attribute": "starting-from",
                "reflect": false,
                "defaultValue": "''"
            },
            "frequency": {
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
                "attribute": "frequency",
                "reflect": false,
                "defaultValue": "''"
            },
            "duration": {
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
                "attribute": "duration",
                "reflect": false,
                "defaultValue": "''"
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PricingType",
                    "resolved": "\"patch\" | \"subtle text\" | \"text\"",
                    "references": {
                        "PricingType": {
                            "location": "import",
                            "path": "./models/pricing.types",
                            "id": "../core/src/components/pricing/models/pricing.types.tsx::PricingType"
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
                "defaultValue": "PRICING_TYPES.text"
            },
            "annotation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Language",
                    "resolved": "\"EN\" | \"FR\" | \"NL\"",
                    "references": {
                        "Language": {
                            "location": "import",
                            "path": "./models/pricing.types",
                            "id": "../core/src/components/pricing/models/pricing.types.tsx::Language"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "annotation",
                "reflect": false,
                "defaultValue": "LANGUAGES.nl"
            },
            "alignment": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "PricingAlign",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "PricingAlign": {
                            "location": "import",
                            "path": "./models/pricing.types",
                            "id": "../core/src/components/pricing/models/pricing.types.tsx::PricingAlign"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "alignment",
                "reflect": false,
                "defaultValue": "PRICING_ALIGN.left"
            }
        };
    }
}
//# sourceMappingURL=pricing.js.map
