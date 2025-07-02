import { h, Host } from "@stencil/core";
export class GlobalHeader {
    constructor() {
        this.hasCustomerOrientation = false;
        this.hasIntentBar = false;
        this.hasCustomerZone = false;
        this.hasLanguage = false;
        this.hasBrand = false;
        this.hasMainNavigation = false;
        this.hasSearch = false;
        this.hasCallToAction = false;
        this.hasTopNavigation = false;
        this.hasMobileCustomerOrientation = false;
        this.hasMobileIntentBar = false;
        this.hasMobileCustomerZone = false;
        this.hasMobileLanguage = false;
        this.hasMobileBrand = false;
        this.hasMobileMainNavigation = false;
        this.hasMobileSearch = false;
        this.hasMobileCallToAction = false;
        this.IsMobileMinimal = false;
        this.hasFlyout = false;
        this.hasMobileFlyout = false;
        this.isSubNavOpen = false;
    }
    host;
    handleMainNavigationItemClicked(event) {
        if (this.host.querySelector(`[slot="mobile-flyout"][flyout-id="${event.detail.index}"]`)) {
            this.isSubNavOpen = true;
            return;
        }
        this.isSubNavOpen = false;
    }
    handleFlyoutBackLinkClicked() {
        this.isSubNavOpen = false;
    }
    componentWillLoad() {
        this.hasCustomerOrientation = !!this.host.querySelector('[slot="customer-orientation"]');
        this.hasIntentBar = !!this.host.querySelector('[slot="intent-bar"]');
        this.hasCustomerZone = !!this.host.querySelector('[slot="customer-zone"]');
        this.hasLanguage = !!this.host.querySelector('[slot="language"]');
        this.hasBrand = !!this.host.querySelector('[slot="brand"]');
        this.hasMainNavigation = !!this.host.querySelector('[slot="main-navigation"]');
        this.hasSearch = !!this.host.querySelector('[slot="search"]');
        this.hasCallToAction = !!this.host.querySelector('[slot="call-to-action"]');
        this.hasMobileCustomerOrientation = !!this.host.querySelector('[slot="mobile-customer-orientation"]');
        this.hasMobileIntentBar = !!this.host.querySelector('[slot="mobile-intent-bar"]');
        this.hasMobileCustomerZone = !!this.host.querySelector('[slot="mobile-customer-zone"]');
        this.hasMobileLanguage = !!this.host.querySelector('[slot="mobile-language"]');
        this.hasMobileBrand = !!this.host.querySelector('[slot="mobile-brand"]');
        this.hasMobileMainNavigation = !!this.host.querySelector('[slot="mobile-main-navigation"]');
        this.hasMobileSearch = !!this.host.querySelector('[slot="mobile-search"]');
        this.hasMobileCallToAction = !!this.host.querySelector('[slot="mobile-call-to-action"]');
        this.hasFlyout = !!this.host.querySelector('[slot="flyout"]');
        this.hasMobileFlyout = !!this.host.querySelector('[slot="mobile-flyout"]');
        this.hasTopNavigation = this.hasCustomerOrientation || this.hasIntentBar || this.hasCustomerZone;
        this.IsMobileMinimal =
            this.hasMobileLanguage &&
                !this.hasMobileCustomerOrientation &&
                !this.hasMobileIntentBar &&
                !this.hasMobileCustomerZone &&
                !this.hasMobileMainNavigation &&
                !this.hasMobileSearch &&
                !this.hasMobileCallToAction;
    }
    render() {
        return (h(Host, { key: 'c1cce354d43a28632479da8ed8722a8eb71d4887', class: { compact: !this.hasTopNavigation, minimal: this.IsMobileMinimal } }, this.hasTopNavigation && (h("div", { class: "top-row" }, this.hasCustomerOrientation && h("slot", { name: "customer-orientation" }), this.hasIntentBar && h("slot", { name: "intent-bar" }), this.hasCustomerZone && h("slot", { name: "customer-zone" }), this.hasLanguage && h("slot", { name: "language" }))), (this.hasBrand || this.hasMainNavigation || this.hasSearch || this.hasCallToAction) && (h("div", { class: "bottom-row" }, this.hasBrand && h("slot", { name: "brand" }), this.hasMainNavigation && h("slot", { name: "main-navigation" }), this.hasSearch && h("slot", { name: "search" }), this.hasCallToAction && h("slot", { name: "call-to-action" }), !this.hasTopNavigation && this.hasLanguage && h("slot", { name: "language" }), this.hasFlyout && (h("div", { class: "flyout-container" }, h("slot", { name: "flyout" }))))), this.hasMobileBrand && (h("div", { class: "mobile-row" }, this.hasMobileBrand && h("slot", { name: "mobile-brand" }), h("div", { class: "mobile-row-right" }, this.hasMobileCustomerZone && h("slot", { name: "mobile-customer-zone" }), this.hasMobileSearch && h("slot", { name: "mobile-search" }), h("div", { class: "mobile-hamburger" }, !this.IsMobileMinimal && h("input", { type: "checkbox", class: "mobile-hamburger-button" }), h("wink-icon", { appearance: "transparent", icon: "hamburger-menu", size: "md", class: "mobile-hamburger-button open" }), h("wink-icon", { appearance: "secondary", icon: "cross", size: "md", class: "mobile-hamburger-button close" }), h("div", { class: "mobile-fly-out" }, h("div", { class: "mobile-fly-out-top" }, h("div", { class: "mobile-fly-out-top-main" }, this.hasMobileMainNavigation && h("slot", { name: "mobile-main-navigation" }), this.hasMobileCallToAction && h("slot", { name: "mobile-call-to-action" }), this.hasMobileIntentBar && h("slot", { name: "mobile-intent-bar" })), h("div", { class: "mobile-fly-out-top-sub-nav", open: this.isSubNavOpen }, this.hasMobileFlyout && h("slot", { name: "mobile-flyout" }))), h("div", { class: "mobile-fly-out-bottom" }, this.hasMobileCustomerOrientation && h("slot", { name: "mobile-customer-orientation" }), this.hasMobileLanguage && h("slot", { name: "mobile-language" })))))))));
    }
    static get is() { return "wink-global-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/global-header.telenet.scss"],
            "base": ["styles/brands/global-header.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/global-header.telenet.css"],
            "base": ["styles/brands/global-header.base.css"]
        };
    }
    static get states() {
        return {
            "hasCustomerOrientation": {},
            "hasIntentBar": {},
            "hasCustomerZone": {},
            "hasLanguage": {},
            "hasBrand": {},
            "hasMainNavigation": {},
            "hasSearch": {},
            "hasCallToAction": {},
            "hasTopNavigation": {},
            "hasMobileCustomerOrientation": {},
            "hasMobileIntentBar": {},
            "hasMobileCustomerZone": {},
            "hasMobileLanguage": {},
            "hasMobileBrand": {},
            "hasMobileMainNavigation": {},
            "hasMobileSearch": {},
            "hasMobileCallToAction": {},
            "IsMobileMinimal": {},
            "hasFlyout": {},
            "hasMobileFlyout": {},
            "isSubNavOpen": {}
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "mainNavigationItemClicked",
                "method": "handleMainNavigationItemClicked",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "flyoutBackLinkClicked",
                "method": "handleFlyoutBackLinkClicked",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=global-header.js.map
