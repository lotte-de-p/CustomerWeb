import { r as registerInstance, h, H as Host } from './index-4268ac0c.js';
import { T as TARGETS } from './targets.types-ef2f173a.js';

const navigationListItemBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .navigation-list-item{color:var(--semantic-color-text-default);text-decoration:none}";
const WinkNavigationListItemBaseStyle0 = navigationListItemBaseCss;

const navigationListItemTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .navigation-list-item{color:var(--semantic-color-text-default);text-decoration:none}";
const WinkNavigationListItemTelenetStyle0 = navigationListItemTelenetCss;

const NavigationListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = '';
        this.target = TARGETS.self;
    }
    render() {
        return (h(Host, { key: '3f6fd805c8fe113c745e6577aee2cc0ff62ee7eb' }, h("a", { key: '6c2d7e4f21f8784f08bb6fdec6c15e6affde549d', class: "navigation-list-item", href: this.href, target: this.target }, h("slot", { key: '01dbf9dfac8d7f7cfc99c1363db49eef86f1d7b9' }))));
    }
};
NavigationListItem.style = {
    base: WinkNavigationListItemBaseStyle0,
    telenet: WinkNavigationListItemTelenetStyle0
};

export { NavigationListItem as wink_navigation_list_item };

//# sourceMappingURL=wink-navigation-list-item.entry.js.map