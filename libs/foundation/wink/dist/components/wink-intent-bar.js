import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './link.js';

const intentBarBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-xs) * 1rem)}@media only screen and (min-width: 64em){:host{flex-direction:row;align-items:center}}@media only screen and (max-width: calc(64em - 1px)){:host{width:100%}}:host wink-link{display:inline-flex}";
const WinkIntentBarBaseStyle0 = intentBarBaseCss;

const intentBarTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-xs) * 1rem)}@media only screen and (min-width: 64em){:host{flex-direction:row;align-items:center}}@media only screen and (max-width: calc(64em - 1px)){:host{width:100%}}:host wink-link{display:inline-flex}";
const WinkIntentBarTelenetStyle0 = intentBarTelenetCss;

const IntentBar = /*@__PURE__*/ proxyCustomElement(class IntentBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'ad81ae8f5475d75afa096d7277bdb374c43d872b' }, h("wink-link", { key: '6358eca3fac1768438f7aa5be54c1b0717116821', appearance: "menu-secondary", icon: "headset", size: "body-regular", "icon-position": "left", "icon-appearance": "default", href: "#" }, h("wink-icon", { key: '80dc31c9b6d4b24ee8424677930b3eedc7fa0df1', slot: "link-icon", appearance: "default", icon: "message-question", size: "sm" }), "Hulp"), h("wink-link", { key: '1352400e684bfe850700388ed0f70cf861d2cc94', appearance: "menu-secondary", icon: "headset", size: "body-regular", "icon-position": "left", "icon-appearance": "default", href: "#" }, h("wink-icon", { key: 'f676342f8fa08dd90bfe55b57b8e6cf9172ae094', slot: "link-icon", appearance: "default", icon: "headset", size: "sm" }), "Contact"), h("wink-link", { key: '84284ff0a689bba582e80220e0432d347bcec46c', appearance: "menu-secondary", icon: "headset", size: "body-regular", "icon-position": "left", "icon-appearance": "default", href: "#" }, h("wink-icon", { key: 'f560f8b4cb6f5cc6cde267e6db108d4c7096daf8', slot: "link-icon", appearance: "default", icon: "email", size: "sm" }), "Webmail")));
    }
    static get style() { return {
        base: WinkIntentBarBaseStyle0,
        telenet: WinkIntentBarTelenetStyle0
    }; }
}, [33, "wink-intent-bar"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-intent-bar", "wink-icon", "wink-link"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-intent-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IntentBar);
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

const WinkIntentBar = IntentBar;
const defineCustomElement = defineCustomElement$1;

export { WinkIntentBar, defineCustomElement };

//# sourceMappingURL=wink-intent-bar.js.map