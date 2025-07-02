import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as defineCustomElement$3, d as defineCustomElement$4 } from './animation.js';
import { d as defineCustomElement$2 } from './icon.js';

const sheetBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;--semantic-duration-medium:300ms;--semantic-duration-very-slow:500ms;--semantic-easing-productive-ease-in:cubic-bezier(0.11, 0, 0.5, 0);--semantic-easing-productive-ease-out:cubic-bezier(0.5, 1, 0.89, 1)}:host .sheet{--sticky-footer-height:10;background-color:var(--semantic-color-background-surface-neutral-overlapping-default);color:var(--semantic-color-text-default);border:unset;position:fixed;inset:auto auto 0 0;padding:0;margin:unset;width:100vw;height:-moz-fit-content;height:fit-content;max-width:100%;max-height:85vh;overflow:hidden;transition:display var(--semantic-duration-medium) allow-discrete, overlay var(--semantic-duration-medium) allow-discrete;animation-name:sheetMobileFadeOut;animation-duration:var(--semantic-duration-very-slow);animation-timing-function:var(--semantic-easing-productive-ease-out);animation-fill-mode:forwards;box-sizing:border-box;display:flex;flex-direction:column}@media only screen and (min-width: 48.0625em){:host .sheet{animation-name:sheetDesktopFadeOut;inset:0 0 0 auto;left:unset;right:0;top:0;bottom:0;width:-moz-fit-content;width:fit-content;height:100vh;max-width:50%;max-height:100%}}@media only screen and (min-width: 74.5em){:host .sheet{max-width:55.6rem}}:host .sheet::backdrop{pointer-events:none;background-color:var(--semantic-color-background-surface-overlay);transition:opacity var(--semantic-duration-very-slow) display var(--semantic-duration-very-slow) allow-discrete, overlay var(--semantic-duration-very-slow) allow-discrete;opacity:0}:host .sheet[open]{animation-name:sheetMobileFadeIn;animation-timing-function:var(--semantic-easing-productive-ease-in)}@media only screen and (min-width: 48.0625em){:host .sheet[open]{animation-name:sheetDesktopFadeIn}}:host .sheet[open]::backdrop{opacity:1}:host .sheet:not([open]){pointer-events:none;opacity:0}:host .sheet-darker,:host .sheet-darker .sheet-footer{background-color:var(--semantic-color-background-surface-neutral-overlapping-default)}:host .sheet-content{display:flex;flex:1;flex-direction:column;max-height:85vh;overflow:hidden;font-size:1.8rem;padding-top:calc(var(--semantic-icon-md) * 1rem + 2 * var(--semantic-spacing-md) * 1rem)}@media only screen and (min-width: 48.0625em){:host .sheet-content{padding-top:calc(var(--semantic-icon-md) * 1rem + 2 * var(--semantic-spacing-lg) * 1rem)}}:host .sheet-content-scroll{padding:0 calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem);overflow-y:auto}@media only screen and (min-width: 48.0625em){:host .sheet-content-scroll{padding-bottom:calc(var(--sticky-footer-height) * 1rem + var(--semantic-spacing-lg) * 1rem)}}:host .sheet-content-page{display:none}:host .sheet-content-page-visible{display:block}:host .sheet-icon{--icon-position:var(--semantic-spacing-3xs);cursor:pointer;position:absolute;top:calc(var(--icon-position) * 1rem)}@media only screen and (min-width: 48.0625em){:host .sheet-icon{--icon-position:var(--semantic-spacing-sm)}}:host .sheet-icon-close{right:calc(var(--icon-position) * 1rem)}:host .sheet-icon-back{left:calc(var(--icon-position) * 1rem)}:host .sheet-footer{background-color:var(--semantic-color-background-surface-neutral-overlapping-default);padding:calc(var(--semantic-spacing-md) * 1rem);border-top:calc(var(--semantic-border-sm) * 1rem) solid var(--semantic-color-border-default);width:100%;max-height:calc(var(--sticky-footer-height) * 1rem);box-sizing:border-box;flex-shrink:0}@media only screen and (min-width: 48.0625em){:host .sheet-footer{position:absolute;bottom:0;left:0;padding:calc(var(--semantic-spacing-lg) * 1rem)}}:host .sheet-footer-sub{display:none}:host .sheet-footer-sub.sheet-footer-visible{display:flex;gap:calc(var(--semantic-spacing-md) * 1rem)}@keyframes sheetDesktopFadeIn{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}@keyframes sheetDesktopFadeOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(100%)}}@keyframes sheetMobileFadeIn{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes sheetMobileFadeOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(100%)}}@media (prefers-reduced-motion){:host{animation-duration:0}}";
const WinkSheetBaseStyle0 = sheetBaseCss;

const sheetTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;--semantic-duration-medium:300ms;--semantic-duration-very-slow:500ms;--semantic-easing-productive-ease-in:cubic-bezier(0.11, 0, 0.5, 0);--semantic-easing-productive-ease-out:cubic-bezier(0.5, 1, 0.89, 1)}:host .sheet{--sticky-footer-height:10;background-color:var(--semantic-color-background-surface-neutral-overlapping-default);color:var(--semantic-color-text-default);border:unset;position:fixed;inset:auto auto 0 0;padding:0;margin:unset;width:100vw;height:-moz-fit-content;height:fit-content;max-width:100%;max-height:85vh;overflow:hidden;transition:display var(--semantic-duration-medium) allow-discrete, overlay var(--semantic-duration-medium) allow-discrete;animation-name:sheetMobileFadeOut;animation-duration:var(--semantic-duration-very-slow);animation-timing-function:var(--semantic-easing-productive-ease-out);animation-fill-mode:forwards;box-sizing:border-box;display:flex;flex-direction:column}@media only screen and (min-width: 48.0625em){:host .sheet{animation-name:sheetDesktopFadeOut;inset:0 0 0 auto;left:unset;right:0;top:0;bottom:0;width:-moz-fit-content;width:fit-content;height:100vh;max-width:50%;max-height:100%}}@media only screen and (min-width: 74.5em){:host .sheet{max-width:55.6rem}}:host .sheet::backdrop{pointer-events:none;background-color:var(--semantic-color-background-surface-overlay);transition:opacity var(--semantic-duration-very-slow) display var(--semantic-duration-very-slow) allow-discrete, overlay var(--semantic-duration-very-slow) allow-discrete;opacity:0}:host .sheet[open]{animation-name:sheetMobileFadeIn;animation-timing-function:var(--semantic-easing-productive-ease-in)}@media only screen and (min-width: 48.0625em){:host .sheet[open]{animation-name:sheetDesktopFadeIn}}:host .sheet[open]::backdrop{opacity:1}:host .sheet:not([open]){pointer-events:none;opacity:0}:host .sheet-darker,:host .sheet-darker .sheet-footer{background-color:var(--semantic-color-background-surface-neutral-overlapping-default)}:host .sheet-content{display:flex;flex:1;flex-direction:column;max-height:85vh;overflow:hidden;font-size:1.8rem;padding-top:calc(var(--semantic-icon-md) * 1rem + 2 * var(--semantic-spacing-md) * 1rem)}@media only screen and (min-width: 48.0625em){:host .sheet-content{padding-top:calc(var(--semantic-icon-md) * 1rem + 2 * var(--semantic-spacing-lg) * 1rem)}}:host .sheet-content-scroll{padding:0 calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem);overflow-y:auto}@media only screen and (min-width: 48.0625em){:host .sheet-content-scroll{padding-bottom:calc(var(--sticky-footer-height) * 1rem + var(--semantic-spacing-lg) * 1rem)}}:host .sheet-content-page{display:none}:host .sheet-content-page-visible{display:block}:host .sheet-icon{--icon-position:var(--semantic-spacing-3xs);cursor:pointer;position:absolute;top:calc(var(--icon-position) * 1rem)}@media only screen and (min-width: 48.0625em){:host .sheet-icon{--icon-position:var(--semantic-spacing-sm)}}:host .sheet-icon-close{right:calc(var(--icon-position) * 1rem)}:host .sheet-icon-back{left:calc(var(--icon-position) * 1rem)}:host .sheet-footer{background-color:var(--semantic-color-background-surface-neutral-overlapping-default);padding:calc(var(--semantic-spacing-md) * 1rem);border-top:calc(var(--semantic-border-sm) * 1rem) solid var(--semantic-color-border-default);width:100%;max-height:calc(var(--sticky-footer-height) * 1rem);box-sizing:border-box;flex-shrink:0}@media only screen and (min-width: 48.0625em){:host .sheet-footer{position:absolute;bottom:0;left:0;padding:calc(var(--semantic-spacing-lg) * 1rem)}}:host .sheet-footer-sub{display:none}:host .sheet-footer-sub.sheet-footer-visible{display:flex;gap:calc(var(--semantic-spacing-md) * 1rem)}@keyframes sheetDesktopFadeIn{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}@keyframes sheetDesktopFadeOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(100%)}}@keyframes sheetMobileFadeIn{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes sheetMobileFadeOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(100%)}}@media (prefers-reduced-motion){:host{animation-duration:0}}";
const WinkSheetTelenetStyle0 = sheetTelenetCss;

const Sheet = /*@__PURE__*/ proxyCustomElement(class Sheet extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dashboard = false;
        this.multipage = false;
        this.isVisible = false;
        this.isOpen = false;
        this.hasStickyFooter = false;
        this.firstPage = true;
    }
    get host() { return this; }
    onIsVisibleChange() {
        if (this.isVisible && !this.isOpen) {
            this.openModal();
        }
        if (!this.isVisible && this.isOpen) {
            this.closeModal();
        }
    }
    async open() {
        this.openModal();
    }
    async close() {
        this.closeModal();
    }
    async nextPage() {
        this.goForward();
    }
    componentWillLoad() {
        if (this.isVisible && !this.isOpen) {
            this.openModal();
        }
        const stickyElements = this.host?.querySelectorAll('[slot*="footer"]');
        if (stickyElements.length > 0) {
            this.hasStickyFooter = true;
        }
    }
    componentDidLoad() {
        document.addEventListener('click', this.handleOutsideClick, true);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick, true);
    }
    handleOutsideClick = (event) => {
        if (this.isOpen && !this.host.contains(event.target)) {
            this.closeModal();
        }
    };
    handleButtonClick = (event) => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'wink-button') {
            if (target.classList.contains('wink-button-forward')) {
                this.goForward();
            }
            if (target.classList.contains('wink-button-back')) {
                this.goBack();
            }
            if (target.classList.contains('wink-button-close')) {
                this.close();
            }
        }
    };
    openModal() {
        if (this.isOpen)
            return;
        this.isVisible = true;
        this.isOpen = true;
        setTimeout(() => {
            const dialog = this.host.shadowRoot?.querySelector('dialog');
            if (dialog) {
                dialog.showModal();
            }
        }, 0);
    }
    closeModal() {
        if (!this.isOpen)
            return;
        this.isVisible = false;
        this.isOpen = false;
        const dialog = this.host.shadowRoot?.querySelector('dialog');
        if (dialog) {
            dialog.close();
        }
    }
    goBack() {
        this.firstPage = true;
    }
    goForward() {
        this.firstPage = false;
    }
    renderFooter() {
        if (!this.hasStickyFooter)
            return;
        if (this.multipage) {
            return (h("div", { class: "sheet-footer" }, h("div", { class: `sheet-footer-sub ${this.firstPage ? 'sheet-footer-visible' : ''}` }, h("slot", { name: "footer" })), h("div", { class: `sheet-footer-sub ${!this.firstPage ? 'sheet-footer-visible' : ''}` }, h("slot", { name: "footer-second" }))));
        }
        return (h("div", { class: "sheet-footer" }, h("slot", { name: "footer" })));
    }
    render() {
        return (h("dialog", { key: '6c391240655b93400dd6736dc93cd169a12338b8', onClick: this.handleButtonClick, class: `sheet  ${this.hasStickyFooter ? 'sheet-margin-bottom' : ''} ${this.dashboard ? 'sheet-darker' : ''}`, "aria-live": "assertive" }, !this.firstPage && (h("wink-button", { appearance: "tertiary", size: "md", icon: "chevron-left", "icon-position": "center", class: "sheet-icon sheet-icon-back", "icon-button-aria-label": "Terug", onClick: this.goBack.bind(this) })), h("wink-button", { key: '93349cd37b62fd955255b5a758ba796182d851ce', appearance: "tertiary", size: "md", icon: "cross", "icon-position": "center", class: "sheet-icon sheet-icon-close", "icon-button-aria-label": "Sluiten", onClick: this.closeModal.bind(this) }), h("div", { key: 'a99178e56a7a76ee6371955b59481db8c5a1654d', class: "sheet-content" }, this.multipage ? (h("div", { class: "sheet-content-scroll" }, h("div", { class: `sheet-content-page sheet-content-page-first ${this.firstPage ? 'sheet-content-page-visible' : ''}` }, h("slot", { name: "page-first" })), h("div", { class: `sheet-content-page sheet-content-page-second ${!this.firstPage ? 'sheet-content-page-visible' : ''} ` }, h("slot", { name: "page-second" })), h("slot", null))) : (h("div", { class: "sheet-content-scroll" }, h("slot", null))), this.renderFooter())));
    }
    static get watchers() { return {
        "isVisible": ["onIsVisibleChange"]
    }; }
    static get style() { return {
        base: WinkSheetBaseStyle0,
        telenet: WinkSheetTelenetStyle0
    }; }
}, [33, "wink-sheet", {
        "dashboard": [4],
        "multipage": [4],
        "isVisible": [1540, "is-visible"],
        "isOpen": [32],
        "hasStickyFooter": [32],
        "firstPage": [32],
        "open": [64],
        "close": [64],
        "nextPage": [64]
    }, undefined, {
        "isVisible": ["onIsVisibleChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-sheet", "wink-animation", "wink-button", "wink-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-sheet":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Sheet);
            }
            break;
        case "wink-animation":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "wink-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkSheet = Sheet;
const defineCustomElement = defineCustomElement$1;

export { WinkSheet, defineCustomElement };

//# sourceMappingURL=wink-sheet.js.map