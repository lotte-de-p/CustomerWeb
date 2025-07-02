import { h } from "@stencil/core";
import { MediaQueryDetector } from "../../../../assets/shared/scripts/media-query-detector";
export class MainNavigation {
    constructor() {
        this.menuItems = '';
        this._menuItems = [];
        this.isOpen = false;
        this.activeIndex = undefined;
        this.ActiveLinkRef = undefined;
    }
    mainNavigationItemClicked;
    handleFlyoutBackLinkClicked(e) {
        const { eventType } = e.detail;
        this.isOpen = false;
        if (eventType !== 'mouse') {
            this.ActiveLinkRef?.focus();
        }
    }
    componentWillLoad() {
        if (!this.menuItems) {
            return;
        }
        this._menuItems = JSON.parse(this.menuItems);
    }
    mainNavigationItemEmitter(item) {
        this.mainNavigationItemClicked?.emit(item);
    }
    handleFlyOutOpening(item) {
        this.isOpen = !!this._menuItems[item.index]?.hasSubNav;
        this.mainNavigationItemEmitter(item);
    }
    handleItemClick(item) {
        this.activeIndex = item.index;
        this.handleFlyOutOpening(item);
    }
    handleItemMouseOver(item) {
        if (item.eventType === 'mouse' && MediaQueryDetector.isUntilMdHeader) {
            return;
        }
        if (this._menuItems[item.index].hasSubNav) {
            this.handleFlyOutOpening(item);
            return;
        }
        this.isOpen = false;
        this.mainNavigationItemEmitter({ index: NaN, name: '' });
    }
    handleKeyDownEvent(e, index, name) {
        if (e.code === 'Space') {
            e.preventDefault();
            this.handleItemClick({ index, name });
        }
    }
    getATagCssClasses(index) {
        return {
            active: this.activeIndex === index,
        };
    }
    render() {
        return (h("nav", { key: '80a30a8089e3f84ab3d8bf4f149bfbf892770ec0', role: "navigation" }, h("ul", { key: 'b1620989d27c010d1facd44b227b10e64333d528', role: "menu", "aria-label": "Main navigation menu" }, this._menuItems.map((item, index) => (h("li", { role: "none" }, h("a", { role: "menuitem", "aria-haspopup": (!!item.hasSubNav).toString(), "aria-expanded": this.isOpen.toString(), "aria-controls": item.hasSubNav ? `flyout-${index}` : undefined, class: this.getATagCssClasses(index), href: item.url, onClick: () => this.handleItemClick({ index, name: item.name }), onMouseOver: () => this.handleItemMouseOver({ index, name: item.name, eventType: 'mouse' }), onKeyDown: (e) => this.handleKeyDownEvent(e, index, item.name), ref: (el) => this.activeIndex === index && (this.ActiveLinkRef = el) }, item.name, item.hasSubNav && h("wink-icon", { appearance: "default", icon: "chevron-right", size: "sm" }))))))));
    }
    static get is() { return "wink-main-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/main-navigation.telenet.scss"],
            "base": ["styles/brands/main-navigation.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/main-navigation.telenet.css"],
            "base": ["styles/brands/main-navigation.base.css"]
        };
    }
    static get properties() {
        return {
            "menuItems": {
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
                "attribute": "menu-items",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "_menuItems": {},
            "isOpen": {},
            "activeIndex": {},
            "ActiveLinkRef": {}
        };
    }
    static get events() {
        return [{
                "method": "mainNavigationItemClicked",
                "name": "mainNavigationItemClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "flyoutBackLinkClicked",
                "method": "handleFlyoutBackLinkClicked",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=main-navigation.js.map
