import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './dropdown-menu.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './link.js';

const customerOrientationBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:flex;align-items:center;gap:calc(var(--semantic-spacing-xs) * 1rem)}";
const WinkCustomerOrientationBaseStyle0 = customerOrientationBaseCss;

const customerOrientationTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:flex;align-items:center;gap:calc(var(--semantic-spacing-xs) * 1rem)}";
const WinkCustomerOrientationTelenetStyle0 = customerOrientationTelenetCss;

const CustomerOrientation = /*@__PURE__*/ proxyCustomElement(class CustomerOrientation extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '542153bceb3a8be168fb0c69e37ec0167710e5fb' }, h("wink-dropdown-menu", { key: '21cb755809796f4d3766e2a6c0ee3c50cd20c1b0', heading: "Particulieren", "item-selected": "Particulieren", "list-position": "left" }, h("wink-link", { key: '5c9e70a069d0248563578b6786be30e2a31f7b6f', appearance: "dropdown-menu-link" }, "Particulieren"), h("wink-link", { key: '89f5e576d2d18090b4b065824188a4965fc3d07d', appearance: "dropdown-menu-link" }, "Zelfstandigen"), h("wink-link", { key: 'd8dc29f6faf20f6730897eb5a98cce43a1777041', appearance: "dropdown-menu-link" }, "Bedrijven")), h("wink-dropdown-menu", { key: 'cfaca4e27040ca50940672c7e4ca2cd71fb031fe', heading: "Alle websites", "item-selected": "Alle websites", "list-position": "left" }, h("wink-link", { key: 'cfa23a104b7e94f53159bd213535b453ec3cb338', appearance: "dropdown-menu-link" }, "Alle websites"), h("wink-link", { key: '7ba33ff27fdd1cb7b9038388fc7342a646137f05', appearance: "dropdown-menu-link" }, "Play sports"), h("wink-link", { key: '007d2ff70e8dbab97245579b06b7dc914d744861', appearance: "dropdown-menu-link" }, "Telenet-apps"))));
    }
    static get style() { return {
        base: WinkCustomerOrientationBaseStyle0,
        telenet: WinkCustomerOrientationTelenetStyle0
    }; }
}, [33, "wink-customer-orientation"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-customer-orientation", "wink-dropdown-menu", "wink-icon", "wink-link"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-customer-orientation":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CustomerOrientation);
            }
            break;
        case "wink-dropdown-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "wink-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkCustomerOrientation = CustomerOrientation;
const defineCustomElement = defineCustomElement$1;

export { WinkCustomerOrientation, defineCustomElement };

//# sourceMappingURL=wink-customer-orientation.js.map