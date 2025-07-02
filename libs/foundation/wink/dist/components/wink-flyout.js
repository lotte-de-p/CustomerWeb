import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { M as MediaQueryDetector } from './media-query-detector.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './link.js';

const flyoutBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@keyframes fadeIn{from{opacity:0}to{opacity:1}}:host{display:grid;grid-template-rows:var(--host-grid-template-rows, 0fr);background:var(--semantic-color-background-canvas-default);overflow:hidden;opacity:var(--host-opacity, 0);z-index:var(--host-z-index, 0);transition:all 0.3s ease}@media only screen and (max-width: calc(64em - 1px)){:host{display:none}}@media only screen and (max-width: calc(64em - 1px)){:host .container{display:contents}}@media only screen and (min-width: 64em){:host .container{min-height:0}}:host .content{display:grid;gap:calc(var(--semantic-spacing-lg) * 1rem);grid-auto-columns:1fr}@media only screen and (min-width: 64em){:host .content{grid-auto-flow:column;padding:4rem 0 1.6rem}}:host wink-link[appearance=menu-back]{display:block;position:sticky;top:0;background-color:#f8f8f8}@media only screen and (min-width: 64em){:host wink-link[appearance=menu-back]{display:none}}:host([open]){--host-grid-template-rows:1fr;--host-opacity:1;--host-z-index:1}@media only screen and (max-width: calc(64em - 1px)){:host([open]){display:contents}}";
const WinkFlyoutBaseStyle0 = flyoutBaseCss;

const flyoutTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@keyframes fadeIn{from{opacity:0}to{opacity:1}}:host{display:grid;grid-template-rows:var(--host-grid-template-rows, 0fr);background:var(--semantic-color-background-canvas-default);overflow:hidden;opacity:var(--host-opacity, 0);z-index:var(--host-z-index, 0);transition:all 0.3s ease}@media only screen and (max-width: calc(64em - 1px)){:host{display:none}}@media only screen and (max-width: calc(64em - 1px)){:host .container{display:contents}}@media only screen and (min-width: 64em){:host .container{min-height:0}}:host .content{display:grid;gap:calc(var(--semantic-spacing-lg) * 1rem);grid-auto-columns:1fr}@media only screen and (min-width: 64em){:host .content{grid-auto-flow:column;padding:4rem 0 1.6rem}}:host wink-link[appearance=menu-back]{display:block;position:sticky;top:0;background-color:#f8f8f8}@media only screen and (min-width: 64em){:host wink-link[appearance=menu-back]{display:none}}:host([open]){--host-grid-template-rows:1fr;--host-opacity:1;--host-z-index:1}@media only screen and (max-width: calc(64em - 1px)){:host([open]){display:contents}}";
const WinkFlyoutTelenetStyle0 = flyoutTelenetCss;

const Flyout = /*@__PURE__*/ proxyCustomElement(class Flyout extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.flyoutBackLinkClicked = createEvent(this, "flyoutBackLinkClicked", 7);
        this.flyoutId = undefined;
        this.activeId = undefined;
        this.backLabel = undefined;
        this.isFlyoutOpen = false;
        this.focusableElements = [];
        this.focusedElementTracker = 0;
    }
    get host() { return this; }
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
    static get style() { return {
        base: WinkFlyoutBaseStyle0,
        telenet: WinkFlyoutTelenetStyle0
    }; }
}, [33, "wink-flyout", {
        "flyoutId": [2, "flyout-id"],
        "activeId": [32],
        "backLabel": [32],
        "isFlyoutOpen": [32],
        "focusableElements": [32],
        "focusedElementTracker": [32]
    }, [[4, "mainNavigationItemClicked", "handleMainNavigationItemClicked"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-flyout", "wink-icon", "wink-link"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-flyout":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Flyout);
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

const WinkFlyout = Flyout;
const defineCustomElement = defineCustomElement$1;

export { WinkFlyout, defineCustomElement };

//# sourceMappingURL=wink-flyout.js.map