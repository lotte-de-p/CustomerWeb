import { h, Host } from "@stencil/core";
import { NOTIFICATION_TYPES } from "./models/notification.types";
import { ICON_SIZES } from "../icon/models/icon.types";
export class Notification {
    constructor() {
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
    static get is() { return "wink-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/notification.telenet.scss"],
            "base": ["styles/brands/notification.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/notification.telenet.css"],
            "base": ["styles/brands/notification.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NotificationType",
                    "resolved": "\"error\" | \"information\" | \"success\" | \"warning\"",
                    "references": {
                        "NotificationType": {
                            "location": "import",
                            "path": "./models/notification.types",
                            "id": "../core/src/components/notification/models/notification.types.tsx::NotificationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "appearance",
                "reflect": false,
                "defaultValue": "NOTIFICATION_TYPES.information"
            },
            "hasCloseIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "has-close-icon",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isNotificationVisible": {}
        };
    }
}
//# sourceMappingURL=notification.js.map
