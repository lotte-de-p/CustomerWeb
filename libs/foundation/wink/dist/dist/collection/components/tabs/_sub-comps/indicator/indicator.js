import { h, Host } from "@stencil/core";
import { BUTTON_SIZES } from "../../../button/models/button.types";
import { INDICATOR_DIRECTIONS } from "../../../../models/directions.types";
export class Indicator {
    constructor() {
        this.direction = INDICATOR_DIRECTIONS.right;
        this.size = BUTTON_SIZES.sm;
    }
    iconsNamesMap = new Map([
        [INDICATOR_DIRECTIONS.left, 'chevron-left-small'],
        [INDICATOR_DIRECTIONS.right, 'chevron-right-small'],
        [INDICATOR_DIRECTIONS.up, 'chevron-up-small'],
        [INDICATOR_DIRECTIONS.down, 'chevron-down-small'],
    ]);
    render() {
        return (h(Host, { key: '0bcc73c74dde8f3cfa2fb6baa8e25fa477e4f333' }, h("div", { key: '45252ca01701b39273447bd566532dd751708c98', class: "wrapper" }, h("div", { key: 'ee32f1bce19a43e70632b20179d95b08ae60d997', class: "indicator" }, h("wink-icon", { key: '5d832aa22af22411e1f171d8c9d1f4c5bfc06654', appearance: "default", size: this.size, icon: this.iconsNamesMap.get(this.direction) })))));
    }
    static get is() { return "wink-indicator"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/indicator.telenet.scss"],
            "base": ["styles/brands/indicator.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/indicator.telenet.css"],
            "base": ["styles/brands/indicator.base.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IndicatorDirection",
                    "resolved": "\"down\" | \"left\" | \"right\" | \"up\"",
                    "references": {
                        "IndicatorDirection": {
                            "location": "import",
                            "path": "../../../../models/directions.types",
                            "id": "../core/src/models/directions.types.tsx::IndicatorDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "direction",
                "reflect": false,
                "defaultValue": "INDICATOR_DIRECTIONS.right"
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
                            "path": "../../../button/models/button.types",
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
                "defaultValue": "BUTTON_SIZES.sm"
            }
        };
    }
}
//# sourceMappingURL=indicator.js.map
