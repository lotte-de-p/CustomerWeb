import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { S as STATUS_VARIANTS } from './statuses.types.js';
import { I as ICON_SIZES } from './icon.types.js';
import { d as defineCustomElement$2 } from './icon.js';

const NOTIFICATION_TYPES = {
    information: STATUS_VARIANTS.information,
    success: STATUS_VARIANTS.success,
    error: STATUS_VARIANTS.error,
    warning: STATUS_VARIANTS.warning,
};

const notificationBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host *{font-size:1.6rem;box-sizing:border-box;margin:0}:host .notification{display:flex;justify-content:space-between;align-items:flex-start;gap:1.6rem;padding:1.6rem;width:100%;flex-wrap:nowrap}@media only screen and (max-width: calc(36em - 1px)){:host .notification.has-close-icon{flex-wrap:wrap}}@media only screen and (max-width: calc(36em - 1px)){:host .notification{gap:2.4rem;padding:2.4rem}}:host .notification .close-icon{cursor:pointer}@media only screen and (min-width: 36em){:host .notification .close-icon{order:1}}:host .notification-text{display:flex;flex-direction:column;width:100%;gap:1.6rem}:host .notification.information{background-color:rgba(35, 115, 230, 0.1607843137)}:host .notification.information :not(.close-icon){--wink-icon-color:inherit}:host .notification.success{background-color:rgba(0, 135, 90, 0.1607843137)}:host .notification.success :not(.close-icon){--wink-icon-color:inherit}:host .notification.error{background-color:rgba(222, 53, 11, 0.1607843137)}:host .notification.error :not(.close-icon){--wink-icon-color:inherit}:host .notification.warning{background-color:rgba(255, 149, 0, 0.1607843137)}:host .notification.warning :not(.close-icon){--wink-icon-color:inherit}";
const WinkNotificationBaseStyle0 = notificationBaseCss;

const notificationTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host *{font-size:1.6rem;box-sizing:border-box;margin:0}:host .notification{display:flex;justify-content:space-between;align-items:flex-start;gap:1.6rem;padding:1.6rem;width:100%;flex-wrap:nowrap}@media only screen and (max-width: calc(36em - 1px)){:host .notification.has-close-icon{flex-wrap:wrap}}@media only screen and (max-width: calc(36em - 1px)){:host .notification{gap:2.4rem;padding:2.4rem}}:host .notification .close-icon{cursor:pointer}@media only screen and (min-width: 36em){:host .notification .close-icon{order:1}}:host .notification-text{display:flex;flex-direction:column;width:100%;gap:1.6rem}:host .notification.information{background-color:rgba(35, 115, 230, 0.1607843137)}:host .notification.information :not(.close-icon){--wink-icon-color:#2373e6}:host .notification.success{background-color:rgba(0, 135, 90, 0.1607843137)}:host .notification.success :not(.close-icon){--wink-icon-color:#00875a}:host .notification.error{background-color:rgba(222, 53, 11, 0.1607843137)}:host .notification.error :not(.close-icon){--wink-icon-color:#de350b}:host .notification.warning{background-color:rgba(255, 149, 0, 0.1607843137)}:host .notification.warning :not(.close-icon){--wink-icon-color:#ff9500}";
const WinkNotificationTelenetStyle0 = notificationTelenetCss;

const Notification = /*@__PURE__*/ proxyCustomElement(class Notification extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.appearance = NOTIFICATION_TYPES.information;
        this.hasCloseIcon = false;
        this.isNotificationVisible = true;
    }
    iconsNamesMap = new Map([
        ['information', 'information-shape'],
        ['success', 'check-shape'],
        ['error', 'error-shape'],
        ['warning', 'alert-shape'],
    ]);
    closeNotification = () => {
        this.isNotificationVisible = false;
    };
    render() {
        return (this.isNotificationVisible && (h(Host, { key: 'f440c5eaf0642729ff78e250908e5c0492e253df', exportparts: `icon, icon-cross-small, icon-${this.iconsNamesMap.get(this.appearance)}` }, h("div", { key: '68c6b2c237e7918b26ed0c7a8464119fa5b1083a', class: `notification ${this.appearance} ${this.hasCloseIcon ? 'has-close-icon' : ''}` }, h("wink-icon", { key: '9647c838b41ac5ac6b469b7139cd5f540fb85e92', size: ICON_SIZES.md, icon: this.iconsNamesMap.get(this.appearance) }), this.hasCloseIcon && (h("wink-icon", { class: "close-icon", appearance: "default", icon: "cross-small", size: ICON_SIZES.md, onClick: this.closeNotification })), h("div", { key: '5da60762854c2bf8575e91eace9591b1fb6b7378', class: "notification-text" }, h("slot", { key: '315745107efac4e38114bab292cfb68f993ec7cf', name: "heading" }), h("slot", { key: '5f1850a6ec9cdbd8b471c815c3bc3cd447f3d94a', name: "content" }))))));
    }
    static get style() { return {
        base: WinkNotificationBaseStyle0,
        telenet: WinkNotificationTelenetStyle0
    }; }
}, [33, "wink-notification", {
        "appearance": [1],
        "hasCloseIcon": [4, "has-close-icon"],
        "isNotificationVisible": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-notification", "wink-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-notification":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Notification);
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkNotification = Notification;
const defineCustomElement = defineCustomElement$1;

export { WinkNotification, defineCustomElement };

//# sourceMappingURL=wink-notification.js.map