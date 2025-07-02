import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { I as ICON_SIZES } from './icon.types.js';
import { d as defineCustomElement$1 } from './icon.js';

const DROPDOWN_ALIGN = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
};

const dropdownMenuBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{box-sizing:border-box;position:relative;display:inline-block;font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.6rem}:host .dropdown-menu--heading{display:flex;justify-content:center;align-items:center;border:0;padding:calc(var(--semantic-spacing-xs) * 1rem);border-radius:calc(var(--semantic-radius-default) * 1rem);color:var(--wink-dropdown-color, var(--semantic-color-text-default));background-color:var(--wink-dropdown-bg-color, var(--semantic-color-background-surface-subtle-default));font-size:var(--wink-dropdown-font-size, inherit);text-align:right}:host .dropdown-menu--heading ::slotted([slot=dropdown-menu--avatar]){margin-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .dropdown-menu--heading .dropdown-menu--chevron{display:inline-flex;margin-left:0.8rem;transform:rotate(0deg);transition:0.25s ease-in-out}:host .dropdown-menu--heading:hover,:host .dropdown-menu--heading:focus{cursor:pointer;background-color:var(--semantic-color-background-surface-subtle-hovered)}:host .dropdown-menu--heading:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .dropdown-menu--list{position:absolute;margin:0;display:none;flex-direction:column;padding:calc(var(--semantic-spacing-sm) * 1rem);gap:calc(var(--semantic-spacing-xs) * 1rem);background-color:var(--semantic-color-background-canvas-overlapping);box-shadow:0 0.8rem 1.6rem 0 rgba(41, 29, 24, 0.08);z-index:3;width:100%}:host .dropdown-menu--list li{list-style-type:none}:host([is-expanded]) .dropdown-menu--heading .dropdown-menu--chevron{transform:scaleY(-1)}:host([is-expanded]) .dropdown-menu--list{display:flex}:host(.dropdown-menu--align-list--top-left) .dropdown-menu--list{left:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--top-right) .dropdown-menu--list{right:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-left) .dropdown-menu--list{left:0;bottom:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-right) .dropdown-menu--list{right:0;bottom:calc(100% + 0.8rem)}";
const WinkDropdownMenuBaseStyle0 = dropdownMenuBaseCss;

const dropdownMenuTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{box-sizing:border-box;position:relative;display:inline-block;font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.6rem}:host .dropdown-menu--heading{display:flex;justify-content:center;align-items:center;border:0;padding:calc(var(--semantic-spacing-xs) * 1rem);border-radius:calc(var(--semantic-radius-default) * 1rem);color:var(--wink-dropdown-color, var(--semantic-color-text-default));background-color:var(--wink-dropdown-bg-color, var(--semantic-color-background-surface-subtle-default));font-size:var(--wink-dropdown-font-size, inherit);text-align:right}:host .dropdown-menu--heading ::slotted([slot=dropdown-menu--avatar]){margin-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .dropdown-menu--heading .dropdown-menu--chevron{display:inline-flex;margin-left:0.8rem;transform:rotate(0deg);transition:0.25s ease-in-out}:host .dropdown-menu--heading:hover,:host .dropdown-menu--heading:focus{cursor:pointer;background-color:var(--semantic-color-background-surface-subtle-hovered)}:host .dropdown-menu--heading:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .dropdown-menu--list{position:absolute;margin:0;display:none;flex-direction:column;padding:calc(var(--semantic-spacing-sm) * 1rem);gap:calc(var(--semantic-spacing-xs) * 1rem);background-color:var(--semantic-color-background-canvas-overlapping);box-shadow:0 0.8rem 1.6rem 0 rgba(41, 29, 24, 0.08);z-index:3;width:100%}:host .dropdown-menu--list li{list-style-type:none}:host([is-expanded]) .dropdown-menu--heading .dropdown-menu--chevron{transform:scaleY(-1)}:host([is-expanded]) .dropdown-menu--list{display:flex}:host(.dropdown-menu--align-list--top-left) .dropdown-menu--list{left:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--top-right) .dropdown-menu--list{right:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-left) .dropdown-menu--list{left:0;bottom:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-right) .dropdown-menu--list{right:0;bottom:calc(100% + 0.8rem)}";
const WinkDropdownMenuTelenetStyle0 = dropdownMenuTelenetCss;

const DropdownMenu = /*@__PURE__*/ proxyCustomElement(class DropdownMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.heading = 'default-1';
        this.isExpanded = false;
        this.dropdownTabIndex = 1;
        this.itemSelected = undefined;
        this.listPosition = DROPDOWN_ALIGN.topLeft;
        this.focusableItem = NaN;
    }
    get host() { return this; }
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
    static get style() { return {
        base: WinkDropdownMenuBaseStyle0,
        telenet: WinkDropdownMenuTelenetStyle0
    }; }
}, [33, "wink-dropdown-menu", {
        "heading": [1],
        "isExpanded": [1028, "is-expanded"],
        "dropdownTabIndex": [2, "dropdown-tab-index"],
        "itemSelected": [1, "item-selected"],
        "listPosition": [32],
        "focusableItem": [32]
    }, [[1, "keydown", "handleKeyDown"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-dropdown-menu", "wink-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-dropdown-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownMenu);
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { DropdownMenu as D, defineCustomElement as d };

//# sourceMappingURL=dropdown-menu.js.map