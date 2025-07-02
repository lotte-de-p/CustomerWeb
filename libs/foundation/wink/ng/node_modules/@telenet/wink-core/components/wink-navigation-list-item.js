import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as TARGETS } from './targets.types.js';

const navigationListItemBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .navigation-list-item{color:var(--semantic-color-text-default);text-decoration:none}";
const WinkNavigationListItemBaseStyle0 = navigationListItemBaseCss;

const navigationListItemTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .navigation-list-item{color:var(--semantic-color-text-default);text-decoration:none}";
const WinkNavigationListItemTelenetStyle0 = navigationListItemTelenetCss;

const NavigationListItem = /*@__PURE__*/ proxyCustomElement(class NavigationListItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.href = '';
        this.target = TARGETS.self;
    }
    render() {
        return (h(Host, { key: '3f6fd805c8fe113c745e6577aee2cc0ff62ee7eb' }, h("a", { key: '6c2d7e4f21f8784f08bb6fdec6c15e6affde549d', class: "navigation-list-item", href: this.href, target: this.target }, h("slot", { key: '01dbf9dfac8d7f7cfc99c1363db49eef86f1d7b9' }))));
    }
    static get style() { return {
        base: WinkNavigationListItemBaseStyle0,
        telenet: WinkNavigationListItemTelenetStyle0
    }; }
}, [33, "wink-navigation-list-item", {
        "href": [1],
        "target": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-navigation-list-item"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-navigation-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NavigationListItem);
            }
            break;
    } });
}

const WinkNavigationListItem = NavigationListItem;
const defineCustomElement = defineCustomElement$1;

export { WinkNavigationListItem, defineCustomElement };

//# sourceMappingURL=wink-navigation-list-item.js.map