import { h, Host } from "@stencil/core";
import { DROPDOWN_ALIGN } from "./models/dropdown-menu.types";
import { ICON_SIZES } from "../icon/models/icon.types";
export class DropdownMenu {
    constructor() {
        this.heading = 'default-1';
        this.isExpanded = false;
        this.dropdownTabIndex = 1;
        this.itemSelected = undefined;
        this.listPosition = DROPDOWN_ALIGN.topLeft;
        this.focusableItem = NaN;
    }
    host;
    componentDidLoad() {
        this.setPosition();
        for (let i = 0; i < this.getDropdownItems().length; i++) {
            if (this.getDropdownItems()[i].innerText === this.itemSelected) {
                this.getDropdownItems()[i].classList.add('active');
            }
        }
    }
    handleKeyDown(ev) {
        switch (ev.key) {
            case ' ':
            case 'Enter': {
                const element = ev?.target;
                if (element.tagName.toUpperCase() === 'WINK-LINK') {
                    element?.shadowRoot?.querySelector('a')?.click();
                }
                else {
                    this.toggleDropdown(ev);
                }
                break;
            }
            case 'Tab': {
                if (ev.target === this.getDropdownItems()[this.getDropdownItems().length - 1]) {
                    this.toggleDropdown(ev);
                }
                break;
            }
            case 'ArrowDown': {
                if (Number.isNaN(this.focusableItem) || this.focusableItem === this.getDropdownItems().length - 1) {
                    this.focusableItem = 0;
                }
                else {
                    this.focusableItem++;
                }
                this.focusOnItem(this.focusableItem);
                break;
            }
            case 'ArrowUp': {
                if (!this.focusableItem || this.focusableItem === -1) {
                    this.focusableItem = this.getDropdownItems().length - 1;
                }
                else {
                    this.focusableItem--;
                }
                this.focusOnItem(this.focusableItem);
                break;
            }
            case 'Escape': {
                this.isExpanded = false;
                this.host.shadowRoot?.querySelector('button')?.focus();
                break;
            }
            case 'Home': {
                this.focusableItem = 0;
                this.focusOnItem(this.focusableItem);
                break;
            }
            case 'End': {
                this.focusableItem = this.getDropdownItems().length - 1;
                this.focusOnItem(this.focusableItem);
                break;
            }
        }
    }
    focusOnItem(focusItem) {
        const itemToFocus = this.getDropdownItems()[focusItem];
        if (itemToFocus instanceof HTMLElement) {
            return itemToFocus?.shadowRoot?.querySelector('a')?.focus();
        }
    }
    getDropdownItems() {
        return this.host.querySelectorAll('wink-link');
    }
    toggleDropdown = (_e) => {
        this.setPosition();
        this.isExpanded = !this.isExpanded;
    };
    setPosition = () => {
        const dropdownRect = this.host.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const spaceOnLeft = dropdownRect.left;
        const spaceOnRight = viewportWidth - dropdownRect.right;
        const spaceOnTop = dropdownRect.top;
        const spaceOnBottom = viewportHeight - dropdownRect.bottom;
        const positionX = Math.max(spaceOnLeft, spaceOnRight) === spaceOnRight ? 'left' : 'right';
        const positionY = Math.max(spaceOnTop, spaceOnBottom) === spaceOnBottom ? 'top' : 'bottom';
        this.listPosition = `${positionY}-${positionX}`;
    };
    render() {
        return (h(Host, { key: '88fbb34e0b20c23d779fc73f705761149dcb19c0', class: `dropdown-menu--align-list--${this.listPosition}`, "is-expanded": this.isExpanded, onMouseDown: this.toggleDropdown, exportparts: "icon, icon-chevron-down-small" }, h("button", { key: '72d134a0d53203c6003a8da891c7bb85a5f1e753', class: "dropdown-menu--heading", tabindex: this.dropdownTabIndex }, h("slot", { key: '427559f9fceb6bd78f61e84c3d06cacafd52985c', name: "dropdown-menu--avatar" }), this.heading, h("div", { key: '477b64011bfef337fb58cecc1c1402e3a3b5ab6e', class: "dropdown-menu--chevron" }, h("wink-icon", { key: '5dd905ae775fdfc695d61871a06525a90c753a0b', size: ICON_SIZES.sm, icon: "chevron-down-small" }))), h("ul", { key: 'a61a0687e6c2c7e7707a3a4cd6a1abdeb378b35c', class: "dropdown-menu--list" }, h("slot", { key: '65527a46e8fac48e64133f1367b91f02997cebb3' }))));
    }
    static get is() { return "wink-dropdown-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/dropdown-menu.telenet.scss"],
            "base": ["styles/brands/dropdown-menu.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/dropdown-menu.telenet.css"],
            "base": ["styles/brands/dropdown-menu.base.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "heading",
                "reflect": false,
                "defaultValue": "'default-1'"
            },
            "isExpanded": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-expanded",
                "reflect": false,
                "defaultValue": "false"
            },
            "dropdownTabIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "dropdown-tab-index",
                "reflect": false,
                "defaultValue": "1"
            },
            "itemSelected": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "item-selected",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "listPosition": {},
            "focusableItem": {}
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=dropdown-menu.js.map
