import { h, Host } from "@stencil/core";
import { UUId } from "../../utils/utils";
import { TAB_TYPES } from "./models/tabs.types";
import { INDICATOR_DIRECTIONS } from "../../models/directions.types";
export class Tabs {
    constructor() {
        this.appearance = TAB_TYPES.container;
        this.activeTabIndex = 1;
        this.isScrollable = false;
        this.tabElements = [];
        this.uuidMap = new Map();
    }
    host;
    tabList;
    tabItems;
    handleClickOnButton = (index) => {
        this.activeTabIndex = index;
        this.handleScroll();
        this.tabItems[this.activeTabIndex - 1].focus();
    };
    handleKeyDown = (e) => {
        this.assignTheRightActiveTabIndex(e.key);
    };
    handleKeyDownIndicator = (e, direction) => {
        if (e.key === 'Enter') {
            direction === INDICATOR_DIRECTIONS.left
                ? this.handleScroll(INDICATOR_DIRECTIONS.left)
                : this.handleScroll(INDICATOR_DIRECTIONS.right);
        }
    };
    assignTheRightActiveTabIndex(key) {
        const supportedKeysMap = new Map([
            [
                'ArrowRight',
                () => {
                    this.handleScroll(INDICATOR_DIRECTIONS.right);
                },
            ],
            [
                'ArrowLeft',
                () => {
                    this.handleScroll(INDICATOR_DIRECTIONS.left);
                },
            ],
            [
                'Home',
                () => {
                    if (this.activeTabIndex !== 1) {
                        this.activeTabIndex = 1;
                    }
                },
            ],
            [
                'End',
                () => {
                    if (this.activeTabIndex !== this.tabElements.length) {
                        this.activeTabIndex = this.tabElements.length;
                    }
                },
            ],
        ]);
        const handler = supportedKeysMap.get(key);
        if (handler) {
            handler();
        }
    }
    findNextTabItemId(direction) {
        if (direction === INDICATOR_DIRECTIONS.left) {
            for (let i = this.activeTabIndex - 1; i > 0; i--) {
                const nextItem = this.tabList.querySelector('#tab-' + i);
                if (nextItem && !nextItem.hasAttribute('disabled')) {
                    return i;
                }
            }
        }
        else {
            for (let i = this.activeTabIndex + 1; i < this.tabElements.length + 1; i++) {
                const nextItem = this.tabList.querySelector('#tab-' + i);
                if (nextItem && !nextItem.hasAttribute('disabled')) {
                    return i;
                }
            }
        }
        return undefined;
    }
    handleScroll(direction) {
        if (direction) {
            this.activeTabIndex = this.findNextTabItemId(direction) || this.activeTabIndex;
        }
        const containerRect = this.tabList.getBoundingClientRect();
        const containerCenter = containerRect.width / 2;
        const activeTab = this.tabList.querySelector('#tab-' + this.activeTabIndex);
        if (activeTab) {
            const activeRect = activeTab.getBoundingClientRect();
            const activeCenter = activeRect.left + activeRect.width / 2;
            const scrollOffset = activeCenter - containerCenter;
            let scrollLeft = this.tabList.scrollLeft + scrollOffset - 8;
            if (this.activeTabIndex === 1) {
                scrollLeft = 0;
            }
            if (this.activeTabIndex === this.tabElements.length) {
                scrollLeft = this.tabList.scrollWidth;
            }
            this.tabList.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }
    checkIfScrollable() {
        this.tabList = this.host?.shadowRoot?.querySelector('.tab-list');
        this.tabItems = this.host?.shadowRoot?.querySelectorAll('.tab');
        let tabitemWidth = 0;
        this.tabItems.forEach((item) => {
            tabitemWidth = tabitemWidth + item.offsetWidth;
        });
        if (tabitemWidth >= this.tabList.offsetWidth + 4) {
            this.isScrollable = true;
        }
        else {
            this.isScrollable = false;
        }
    }
    renderSlots(type) {
        return this.tabElements.map((item, index) => {
            const slotname = (item.slot && item.slot.replace('tab-', '')) || `${index + 1}`;
            const computedSlotName = type === 'tabpanel' ? `tabpanel-${slotname}` : `tab-${slotname}`;
            let uuid = this.uuidMap.get(computedSlotName);
            if (uuid === undefined) {
                uuid = UUId();
                this.uuidMap.set(computedSlotName, uuid);
            }
            return type === 'tabpanel' ? (h("div", { key: uuid, id: `tabpanel-${index + 1}`, role: "tabpanel", "aria-labelledby": `tab-${index + 1}`, tabIndex: this.activeTabIndex === index + 1 ? 0 : -1, class: { 'is-hidden': this.activeTabIndex !== index + 1 } }, h("slot", { name: `tab-${slotname}` }))) : (h("button", { key: uuid, id: `tab-${index + 1}`, type: "button", role: "tab", disabled: item.hasAttribute('disabled'), class: `tab ${this.activeTabIndex === index + 1 ? 'is-active-tab' : ''}`, "aria-selected": `${this.activeTabIndex === index + 1}`, "aria-controls": `tabpanel-${index + 1}`, "aria-describedby": `tabpanel-${index + 1}`, onClick: () => this.handleClickOnButton(index + 1), onKeyDown: this.handleKeyDown }, h("div", { class: "tab-content" }, h("p", { class: "tab-title" }, " ", item.getAttribute('data-title')), item.getAttribute('data-subtitle'))));
        });
    }
    async componentWillLoad() {
        const tabDivs = this.host?.querySelectorAll('div[slot*="tab-"]');
        this.tabElements = Array.from(tabDivs);
    }
    componentDidLoad() {
        this.checkIfScrollable();
    }
    render() {
        return (h(Host, { key: '037d9e35e1e160cdf67e79565edffe9ef6097ea7' }, h("div", { key: '3d9c826186d92b384cefb90a933f435fc991a1e3', class: `tabs tabs-${this.appearance}` }, h("div", { key: '91b6c377f1cc6b1040285e461c1aac15602c5a95', class: `tab-header ${this.isScrollable ? 'is-scrollable' : ''}` }, h("div", { key: 'b699dcdec27e1c7177272613505d5e5623a82c5a', class: "tab-list", role: "tablist", "aria-labelledby": "tablist-1", ref: (el) => (this.tabList = el) }, this.renderSlots('tab')), this.isScrollable && this.activeTabIndex > 1 && (h("wink-indicator", { class: "scroll-button scroll-button-left", direction: "left", tabIndex: 1, onKeyDown: (event) => this.handleKeyDownIndicator(event, INDICATOR_DIRECTIONS.left), onClick: () => this.handleScroll(INDICATOR_DIRECTIONS.left) })), this.isScrollable && this.activeTabIndex !== this.tabElements.length && (h("wink-indicator", { class: "scroll-button scroll-button-right", direction: "right", tabIndex: 1, onKeyDown: (event) => this.handleKeyDownIndicator(event, INDICATOR_DIRECTIONS.right), onClick: () => this.handleScroll(INDICATOR_DIRECTIONS.right) }))), this.renderSlots('tabpanel'))));
    }
    static get is() { return "wink-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/tabs.telenet.scss"],
            "base": ["styles/brands/tabs.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/tabs.telenet.css"],
            "base": ["styles/brands/tabs.base.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TabTypes",
                    "resolved": "\"container\" | \"inline\"",
                    "references": {
                        "TabTypes": {
                            "location": "import",
                            "path": "./models/tabs.types",
                            "id": "../core/src/components/tabs/models/tabs.types.tsx::TabTypes"
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
                "defaultValue": "TAB_TYPES.container"
            }
        };
    }
    static get states() {
        return {
            "activeTabIndex": {},
            "isScrollable": {},
            "tabElements": {},
            "uuidMap": {}
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=tabs.js.map
