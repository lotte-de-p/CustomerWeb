import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as TARGETS } from './targets.types.js';
import { I as ICON_SIZES } from './icon.types.js';
import { a as defineCustomElement$3, d as defineCustomElement$4 } from './animation.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './link.js';

const TOAST_TYPES = {
    negative: 'negative',
    positive: 'positive',
    actionable: 'actionable',
    feedback: 'feedback',
};

const toastBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--semantic-duration-very-fast:100ms;--semantic-duration-fast:200ms;--semantic-duration-medium:300ms;--semantic-duration-slow:400ms;--semantic-duration-very-slow:500ms;--semantic-easing-productive-ease-in:cubic-bezier(0.11, 0, 0.5, 0);--semantic-easing-productive-ease-out:cubic-bezier(0.5, 1, 0.89, 1);--semantic-easing-productive-ease-in-out:cubic-bezier(0.45, 0, 0.55, 1);font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.8rem;pointer-events:none;overflow:hidden;display:flex;align-items:center;justify-content:flex-start;background-color:var(--semantic-color-background-canvas-default);color:var(--semantic-color-text-default);animation-name:toastFadeOut;animation-duration:var(--semantic-duration-slow);animation-timing-function:var(--semantic-easing-productive-ease-in-out);animation-fill-mode:forwards;animation-iteration-count:1;height:-moz-fit-content;height:fit-content}@media only screen and (min-width: 36em){:host{width:-moz-fit-content;width:fit-content;justify-content:center}}:host .toast-icon{margin-right:calc(var(--semantic-spacing-sm) * 1rem)}:host .toast-icon-positive{--wink-icon-color:var(--semantic-color-icon-succes)}:host .toast-icon-negative{--wink-icon-color:var(--semantic-color-icon-error)}:host .toast-text{margin:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem) 0}:host .toast-link{--wink-link-color--default:var(--semantic-color-text-default);--wink-link-color--visited:var(--semantic-color-text-default);--wink-link-color--hover:var(--semantic-color-text-default);margin:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) 0 0}:host .toast-close{--wink-icon-color:var(--semantic-color-icon);padding-left:calc(var(--semantic-spacing-md) * 1rem);border-left:0.1rem solid var(--semantic-color-border-button-default);margin-left:auto}@media only screen and (min-width: 48.0625em){:host .toast-close{margin-left:0}}:host([is-open]),:host([is-open=true]){animation-name:toastFadeIn;pointer-events:auto}@keyframes toastFadeIn{from{opacity:0;padding:0 calc(var(--semantic-spacing-md) * 1rem)}to{opacity:1;padding:calc(var(--semantic-spacing-md) * 1rem)}}@keyframes toastFadeOut{0%{opacity:1;max-height:7rem;padding:calc(var(--semantic-spacing-md) * 1rem);margin-top:0}70%{opacity:0}100%{opacity:0;max-height:0;padding:0 calc(var(--semantic-spacing-md) * 1rem);margin-top:-1.6rem;display:none}}@media (prefers-reduced-motion){:host{animation-duration:0}}";
const WinkToastBaseStyle0 = toastBaseCss;

const toastTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--semantic-duration-very-fast:100ms;--semantic-duration-fast:200ms;--semantic-duration-medium:300ms;--semantic-duration-slow:400ms;--semantic-duration-very-slow:500ms;--semantic-easing-productive-ease-in:cubic-bezier(0.11, 0, 0.5, 0);--semantic-easing-productive-ease-out:cubic-bezier(0.5, 1, 0.89, 1);--semantic-easing-productive-ease-in-out:cubic-bezier(0.45, 0, 0.55, 1);font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.8rem;pointer-events:none;overflow:hidden;display:flex;align-items:center;justify-content:flex-start;background-color:var(--semantic-color-background-canvas-default);color:var(--semantic-color-text-default);animation-name:toastFadeOut;animation-duration:var(--semantic-duration-slow);animation-timing-function:var(--semantic-easing-productive-ease-in-out);animation-fill-mode:forwards;animation-iteration-count:1;height:-moz-fit-content;height:fit-content}@media only screen and (min-width: 36em){:host{width:-moz-fit-content;width:fit-content;justify-content:center}}:host .toast-icon{margin-right:calc(var(--semantic-spacing-sm) * 1rem)}:host .toast-icon-positive{--wink-icon-color:var(--semantic-color-icon-succes)}:host .toast-icon-negative{--wink-icon-color:var(--semantic-color-icon-error)}:host .toast-text{margin:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem) 0}:host .toast-link{--wink-link-color--default:var(--semantic-color-text-default);--wink-link-color--visited:var(--semantic-color-text-default);--wink-link-color--hover:var(--semantic-color-text-default);margin:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) 0 0}:host .toast-close{--wink-icon-color:var(--semantic-color-icon);padding-left:calc(var(--semantic-spacing-md) * 1rem);border-left:0.1rem solid var(--semantic-color-border-button-default);margin-left:auto}@media only screen and (min-width: 48.0625em){:host .toast-close{margin-left:0}}:host([is-open]),:host([is-open=true]){animation-name:toastFadeIn;pointer-events:auto}@keyframes toastFadeIn{from{opacity:0;padding:0 calc(var(--semantic-spacing-md) * 1rem)}to{opacity:1;padding:calc(var(--semantic-spacing-md) * 1rem)}}@keyframes toastFadeOut{0%{opacity:1;max-height:7rem;padding:calc(var(--semantic-spacing-md) * 1rem);margin-top:0}70%{opacity:0}100%{opacity:0;max-height:0;padding:0 calc(var(--semantic-spacing-md) * 1rem);margin-top:-1.6rem;display:none}}@media (prefers-reduced-motion){:host{animation-duration:0}}";
const WinkToastTelenetStyle0 = toastTelenetCss;

const Toast = /*@__PURE__*/ proxyCustomElement(class Toast extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.appearance = TOAST_TYPES.actionable;
        this.text = '';
        this.linkText = 'Open Link';
        this.href = '';
        this.target = TARGETS.self;
        this.duration = 6000;
        this.isOpen = false;
        this.theme = 'telenet-light-theme';
        this.currentTheme = 'telenet-light-theme';
    }
    timer = null;
    iconsNamesMap = new Map([
        [TOAST_TYPES.negative, 'cross-circle-filled'],
        [TOAST_TYPES.positive, 'check-shape-filled'],
    ]);
    watchOpenPropHandler(newValue, oldValue) {
        if (newValue && !oldValue) {
            this.closeToastAfterTimeout();
        }
    }
    watchThemePropHandler(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.changeTheme(newValue);
        }
    }
    handleKeyDown(ev) {
        if (ev.key === 'Escape') {
            this.closeToast();
        }
    }
    componentDidLoad() {
        const currentTheme = localStorage.getItem('currentTheme') || 'telenet-light';
        this.changeTheme(currentTheme + '-theme');
        this.closeToastAfterTimeout();
    }
    changeTheme(newValue) {
        this.theme = newValue.includes('dark') ? newValue.replace('dark', 'light') : newValue.replace('light', 'dark');
    }
    closeToast() {
        this.isOpen = false;
    }
    closeToastAfterTimeout() {
        if (this.appearance !== TOAST_TYPES.actionable && this.duration && this.duration > 0) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.closeToast();
            }, Number(this.duration));
        }
    }
    render() {
        return (h(Host, { key: '4353ed175ce789298a19e7c9037ea92719db8d47', theme: this.theme, "aria-hidden": this.isOpen ? 'false' : 'true', role: "alert" }, (this.appearance === TOAST_TYPES.positive || this.appearance === TOAST_TYPES.negative) && (h("wink-icon", { class: `toast-icon toast-icon-${this.appearance}`, size: ICON_SIZES.md, icon: this.iconsNamesMap.get(this.appearance) })), this.text && h("p", { class: "toast-text" }, this.text), this.appearance === TOAST_TYPES.actionable && this.href && (h("wink-link", { appearance: "default", icon: "", size: "inherit", "is-disabled": "false", class: "toast-link", target: this.target, href: this.href }, this.linkText)), h("wink-button", { key: 'dae3eea4b47c3b59e37af642c36fbe3179a132a6', element: "button", type: "button", appearance: "tertiary", size: "sm", width: "none", status: "none", icon: "cross", "icon-position": "center", exportparts: "icon, icon-cross", class: "hydrated toast-close", "icon-button-aria-label": "close toast", onClick: this.closeToast.bind(this) })));
    }
    static get watchers() { return {
        "isOpen": ["watchOpenPropHandler"],
        "currentTheme": ["watchThemePropHandler"]
    }; }
    static get style() { return {
        base: WinkToastBaseStyle0,
        telenet: WinkToastTelenetStyle0
    }; }
}, [33, "wink-toast", {
        "appearance": [1],
        "text": [1],
        "linkText": [1, "link-text"],
        "href": [1],
        "target": [1],
        "duration": [2],
        "isOpen": [1540, "is-open"],
        "theme": [1537],
        "currentTheme": [513, "current-theme"]
    }, [[1, "keydown", "handleKeyDown"]], {
        "isOpen": ["watchOpenPropHandler"],
        "currentTheme": ["watchThemePropHandler"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-toast", "wink-animation", "wink-button", "wink-icon", "wink-link"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-toast":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Toast);
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
        case "wink-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Toast as T, TOAST_TYPES as a, defineCustomElement as d };

//# sourceMappingURL=toast.js.map