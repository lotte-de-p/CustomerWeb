import { h, Host, } from "@stencil/core";
import { MediaQueryDetector } from "../../../../assets/shared/scripts/media-query-detector";
export class Flyout {
    constructor() {
        this.flyoutId = undefined;
        this.activeId = undefined;
        this.backLabel = undefined;
        this.isFlyoutOpen = false;
        this.focusableElements = [];
        this.focusedElementTracker = 0;
    }
    host;
    flyoutBackLinkClicked;
    handleMainNavigationItemClicked(event) {
        this.activeId = event.detail.index;
        this.backLabel = event.detail.name;
        this.isFlyoutOpen = this.flyoutId === this.activeId;
        if (event.detail.eventType === 'mouse') {
            return;
        }
        if (this.shouldFetchFocusableElements()) {
            this.getAllFocusableElements();
        }
        else {
            this.resetFocusableElements();
        }
        this.focusOnElement();
    }
    shouldFetchFocusableElements() {
        return (!this.focusableElements.length &&
            MediaQueryDetector.isFromMdHeader &&
            this.isFlyoutOpen &&
            !this.host.getAttribute('slot')?.includes('mobile'));
    }
    resetFocusableElements() {
        this.focusableElements = [];
        this.focusedElementTracker = 0;
    }
    focusOnElement() {
        if (this.focusableElements.length) {
            this.focusableElements[this.focusedElementTracker].focus();
        }
    }
    getAllFocusableElements() {
        const focusableQuery = 'a, button, [tabindex]:not([tabindex="-1"])';
        this.host.querySelectorAll('wink-navigation-list')?.forEach((list) => {
            list.shadowRoot.querySelectorAll('wink-navigation-list-item').forEach((item) => {
                this.focusableElements.push(item.shadowRoot.querySelector(focusableQuery));
            });
        });
    }
    handleKeyDown(e) {
        const { code, shiftKey } = e;
        const { length } = this.focusableElements;
        if (code === 'Escape') {
            this.closeFlyout();
            this.resetFlyout();
        }
        if (code === 'ArrowDown' || code === 'ArrowUp' || code === 'Tab') {
            e.preventDefault();
            this.focusedElementTracker += code === 'ArrowDown' || (code === 'Tab' && !shiftKey) ? 1 : -1;
            this.focusedElementTracker = (this.focusedElementTracker + length) % length;
            this.focusableElements[this.focusedElementTracker].focus();
        }
    }
    resetFlyout() {
        this.activeId = undefined;
        this.isFlyoutOpen = false;
        this.focusableElements = [];
        this.focusedElementTracker = 0;
    }
    closeFlyout() {
        this.resetFlyout();
        this.flyoutBackLinkClicked?.emit({ eventType: 'keyboard' });
    }
    handleFlyoutMouseLeave() {
        if (MediaQueryDetector.isUntilMdHeader) {
            return;
        }
        this.resetFlyout();
        this.flyoutBackLinkClicked?.emit({ eventType: 'mouse' });
    }
    render() {
        return (h(Host, { key: 'b3f8de09ea87e0737c3e2afc3e1187a048a80e1a', id: `flyout-${this.flyoutId}`, tabindex: "-1", "aria-label": this.flyoutId === this.activeId ? this.backLabel : ' ', onMouseLeave: this.handleFlyoutMouseLeave.bind(this), open: this.isFlyoutOpen }, h("div", { key: '05db9b329e56b761af5d89c94c2b8f4232f3da69', class: "container" }, h("div", { key: '029ad3b6f9e9209d502a89316276604c35f56e6b', class: "content" }, h("wink-link", { key: '06a63c15351212b1bd808ad3f3e1cc36930d19f3', onClick: this.closeFlyout.bind(this), appearance: "menu-back", icon: "arrow-left", size: "caption-bold", "icon-position": "left", "icon-appearance": "default", "is-disabled": "false", href: "#" }, h("wink-icon", { key: '4fb7df087966f6cb30f105f69c021c777d55c997', slot: "link-icon", appearance: "default", icon: "arrow-left", size: "md", exportparts: "icon, icon-arrow-left" }), this.backLabel), Array.from({ length: 4 }).map((_, index) => (h("slot", { name: `col-${index + 1}` })))))));
    }
    static get is() { return "wink-flyout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/flyout.telenet.scss"],
            "base": ["styles/brands/flyout.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/flyout.telenet.css"],
            "base": ["styles/brands/flyout.base.css"]
        };
    }
    static get properties() {
        return {
            "flyoutId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | undefined",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "flyout-id",
                "reflect": false,
                "defaultValue": "undefined"
            }
        };
    }
    static get states() {
        return {
            "activeId": {},
            "backLabel": {},
            "isFlyoutOpen": {},
            "focusableElements": {},
            "focusedElementTracker": {}
        };
    }
    static get events() {
        return [{
                "method": "flyoutBackLinkClicked",
                "name": "flyoutBackLinkClicked",
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
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "mainNavigationItemClicked",
                "method": "handleMainNavigationItemClicked",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=flyout.js.map
