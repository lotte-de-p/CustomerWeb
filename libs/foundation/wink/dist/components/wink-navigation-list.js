import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { U as UUId } from './utils.js';
import { d as defineCustomElement$2 } from './paragraph.js';

const navigationListBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}:host .navigation-list--title{color:var(--semantic-color-text-subtlest);font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul wink-navigation-list-item{font-size:1.8rem;line-height:2.8rem;text-decoration:none}@media only screen and (max-width: calc(48.0625em - 1px)){:host ul wink-navigation-list-item{display:block;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0}}:host([has-bold-links]) wink-navigation-list-item,:host([has-bold-links=true]) wink-navigation-list-item{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}";
const WinkNavigationListBaseStyle0 = navigationListBaseCss;

const navigationListTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}:host .navigation-list--title{color:var(--semantic-color-text-subtlest);font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul wink-navigation-list-item{font-size:1.8rem;line-height:2.8rem;text-decoration:none}@media only screen and (max-width: calc(48.0625em - 1px)){:host ul wink-navigation-list-item{display:block;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0}}:host([has-bold-links]) wink-navigation-list-item,:host([has-bold-links=true]) wink-navigation-list-item{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}";
const WinkNavigationListTelenetStyle0 = navigationListTelenetCss;

const NavigationList = /*@__PURE__*/ proxyCustomElement(class NavigationList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.listTitle = '';
        this.hasBoldLinks = false;
    }
    get host() { return this; }
    render() {
        const allLinkChilds = Array.from(this.host.children).filter((node) => {
            return node.nodeName.toLocaleLowerCase() === 'wink-navigation-list-item';
        });
        return (h(Host, null, this.listTitle && (h("wink-paragraph", { appearance: "caption", size: "bold", class: "navigation-list--title" }, this.listTitle)), h("ul", { class: "navigation-list--list" }, allLinkChilds.map((child) => (h("li", { key: UUId(), innerHTML: child.outerHTML }))))));
    }
    static get style() { return {
        base: WinkNavigationListBaseStyle0,
        telenet: WinkNavigationListTelenetStyle0
    }; }
}, [33, "wink-navigation-list", {
        "listTitle": [1, "list-title"],
        "hasBoldLinks": [4, "has-bold-links"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-navigation-list", "wink-paragraph"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-navigation-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NavigationList);
            }
            break;
        case "wink-paragraph":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkNavigationList = NavigationList;
const defineCustomElement = defineCustomElement$1;

export { WinkNavigationList, defineCustomElement };

//# sourceMappingURL=wink-navigation-list.js.map