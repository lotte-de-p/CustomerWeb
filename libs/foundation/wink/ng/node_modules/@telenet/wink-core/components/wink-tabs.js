import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { U as UUId } from './utils.js';
import { a as INDICATOR_DIRECTIONS, d as defineCustomElement$2 } from './indicator.js';
import { d as defineCustomElement$3 } from './icon.js';

const TAB_TYPES = {
    container: 'container',
    inline: 'inline',
};

const tabsBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .tabs{color:var(--semantic-color-text-default)}:host .tabs *{box-sizing:border-box}:host .tabs .tab-header{position:relative;display:flex;width:100%}:host .tabs .tab-header .tab-list{min-width:100%;display:inline-flex}:host .tabs .tab-header .tab-list .tab,:host .tabs .tab-header .tab-list .tab:focus,:host .tabs .tab-header .tab-list .tab:hover{all:unset;cursor:pointer;flex-grow:1;text-transform:capitalize;padding:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem);outline-offset:-0.3rem;white-space:nowrap}:host .tabs .tab-header .tab-list .tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:first-of-type{padding-left:0}:host .tabs .tab-header .tab-list .tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:last-of-type{padding-right:0}:host .tabs .tab-header .tab-list .tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus .tab-content,:host .tabs .tab-header .tab-list .tab:hover .tab-content{height:100%;background-color:var(--semantic-color-background-surface-bold-default);padding:calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-lg) * 1rem);font-size:1.4rem}:host .tabs .tab-header .tab-list .tab .tab-content p,:host .tabs .tab-header .tab-list .tab:focus .tab-content p,:host .tabs .tab-header .tab-list .tab:hover .tab-content p{margin:0}:host .tabs .tab-header .tab-list .tab .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:focus .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:hover .tab-content .tab-title{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:1.8rem;line-height:2.8rem}:host .tabs .tab-header .tab-list .tab:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:focus:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:hover:has(+.is-active-tab){padding-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{background-color:var(--semantic-color-background-tab-default);position:relative;border-top:calc(var(--semantic-border-lg) * 1rem) solid var(--semantic-color-border-selected);padding:calc(var(--semantic-spacing-lg) * 1rem + var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}@media only screen and (min-width: 36em){:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{padding:calc(var(--semantic-spacing-lg) * 1rem - var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}}:host .tabs .tab-header .tab-list .tab.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content{background-color:unset;padding:unset}:host .tabs .tab-header .tab-list .tab.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab+.tab{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible,:host .tabs .tab-header .tab-list .tab:focus:focus-visible,:host .tabs .tab-header .tab-list .tab:hover:focus-visible{isolation:isolate}:host .tabs .tab-header .tab-list .tab:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:focus:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:hover:focus-visible:not(.is-active-tab) .tab-content{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:first-of-type{margin-left:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:last-of-type{margin-right:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:hover .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover .tab-content{background-color:var(--semantic-color-background-surface-bold-hovered)}:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover.is-active-tab .tab-content{background-color:unset}:host .tabs .tab-header .tab-list .tab:disabled,:host .tabs .tab-header .tab-list .tab:focus:disabled,:host .tabs .tab-header .tab-list .tab:hover:disabled{cursor:not-allowed}:host .tabs .tab-header .tab-list .tab:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:focus:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:hover:disabled .tab-content{opacity:calc(var(--semantic-opacity-disabled) * 0.1)}:host .tabs .tab-header.is-scrollable{position:relative;z-index:1}:host .tabs .tab-header.is-scrollable .tab-list{overflow-x:auto;overflow-y:visible;padding:0.6rem 0;margin-bottom:-0.6rem;-ms-overflow-style:none;scrollbar-width:none}:host .tabs .tab-header.is-scrollable .tab-list::-webkit-scrollbar{display:none}:host .tabs .tab-header.is-scrollable .tab-list .tab{min-width:-moz-fit-content;min-width:fit-content}:host .tabs .tab-header .scroll-button{position:absolute;top:0;bottom:0;height:-moz-fit-content;height:fit-content;margin:auto 0}:host .tabs .tab-header .scroll-button-left{left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .scroll-button-right{right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs [role=tabpanel]{background-color:var(--semantic-color-background-tab-default);padding:calc(var(--semantic-spacing-lg) * 1rem);width:100%;overflow:auto}:host .tabs [role=tabpanel] *{font-size:1rem}:host .tabs [role=tabpanel].is-hidden{display:none}:host .tabs [role=tabpanel]:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;outline-offset:-0.2rem}:host .tabs-inline .tab-header .tab-list .tab,:host .tabs-inline .tab-header .tab-list .tab:focus,:host .tabs-inline .tab-header .tab-list .tab:hover{border-bottom:0.1rem solid var(--semantic-color-border-default)}:host .tabs-inline .tab-header .tab-list .tab.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:hover.is-active-tab{border:0.1rem solid var(--semantic-color-border-default);border-top:0.3rem solid var(--semantic-color-border-selected);border-bottom:0.1rem solid var(--semantic-color-background-tab-default)}";
const WinkTabsBaseStyle0 = tabsBaseCss;

const tabsTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .tabs{color:var(--semantic-color-text-default)}:host .tabs *{box-sizing:border-box}:host .tabs .tab-header{position:relative;display:flex;width:100%}:host .tabs .tab-header .tab-list{min-width:100%;display:inline-flex}:host .tabs .tab-header .tab-list .tab,:host .tabs .tab-header .tab-list .tab:focus,:host .tabs .tab-header .tab-list .tab:hover{all:unset;cursor:pointer;flex-grow:1;text-transform:capitalize;padding:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem);outline-offset:-0.3rem;white-space:nowrap}:host .tabs .tab-header .tab-list .tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:first-of-type{padding-left:0}:host .tabs .tab-header .tab-list .tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:last-of-type{padding-right:0}:host .tabs .tab-header .tab-list .tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus .tab-content,:host .tabs .tab-header .tab-list .tab:hover .tab-content{height:100%;background-color:var(--semantic-color-background-surface-bold-default);padding:calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-lg) * 1rem);font-size:1.4rem}:host .tabs .tab-header .tab-list .tab .tab-content p,:host .tabs .tab-header .tab-list .tab:focus .tab-content p,:host .tabs .tab-header .tab-list .tab:hover .tab-content p{margin:0}:host .tabs .tab-header .tab-list .tab .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:focus .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:hover .tab-content .tab-title{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:1.8rem;line-height:2.8rem}:host .tabs .tab-header .tab-list .tab:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:focus:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:hover:has(+.is-active-tab){padding-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{background-color:var(--semantic-color-background-tab-default);position:relative;border-top:calc(var(--semantic-border-lg) * 1rem) solid var(--semantic-color-border-selected);padding:calc(var(--semantic-spacing-lg) * 1rem + var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}@media only screen and (min-width: 36em){:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{padding:calc(var(--semantic-spacing-lg) * 1rem - var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}}:host .tabs .tab-header .tab-list .tab.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content{background-color:unset;padding:unset}:host .tabs .tab-header .tab-list .tab.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab+.tab{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible,:host .tabs .tab-header .tab-list .tab:focus:focus-visible,:host .tabs .tab-header .tab-list .tab:hover:focus-visible{isolation:isolate}:host .tabs .tab-header .tab-list .tab:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:focus:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:hover:focus-visible:not(.is-active-tab) .tab-content{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:first-of-type{margin-left:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:last-of-type{margin-right:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:hover .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover .tab-content{background-color:var(--semantic-color-background-surface-bold-hovered)}:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover.is-active-tab .tab-content{background-color:unset}:host .tabs .tab-header .tab-list .tab:disabled,:host .tabs .tab-header .tab-list .tab:focus:disabled,:host .tabs .tab-header .tab-list .tab:hover:disabled{cursor:not-allowed}:host .tabs .tab-header .tab-list .tab:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:focus:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:hover:disabled .tab-content{opacity:calc(var(--semantic-opacity-disabled) * 0.1)}:host .tabs .tab-header.is-scrollable{position:relative;z-index:1}:host .tabs .tab-header.is-scrollable .tab-list{overflow-x:auto;overflow-y:visible;padding:0.6rem 0;margin-bottom:-0.6rem;-ms-overflow-style:none;scrollbar-width:none}:host .tabs .tab-header.is-scrollable .tab-list::-webkit-scrollbar{display:none}:host .tabs .tab-header.is-scrollable .tab-list .tab{min-width:-moz-fit-content;min-width:fit-content}:host .tabs .tab-header .scroll-button{position:absolute;top:0;bottom:0;height:-moz-fit-content;height:fit-content;margin:auto 0}:host .tabs .tab-header .scroll-button-left{left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .scroll-button-right{right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs [role=tabpanel]{background-color:var(--semantic-color-background-tab-default);padding:calc(var(--semantic-spacing-lg) * 1rem);width:100%;overflow:auto}:host .tabs [role=tabpanel] *{font-size:1.6rem}:host .tabs [role=tabpanel].is-hidden{display:none}:host .tabs [role=tabpanel]:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;outline-offset:-0.2rem}:host .tabs-inline .tab-header .tab-list .tab,:host .tabs-inline .tab-header .tab-list .tab:focus,:host .tabs-inline .tab-header .tab-list .tab:hover{border-bottom:0.1rem solid var(--semantic-color-border-default)}:host .tabs-inline .tab-header .tab-list .tab.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:hover.is-active-tab{border:0.1rem solid var(--semantic-color-border-default);border-top:0.3rem solid var(--semantic-color-border-selected);border-bottom:0.1rem solid var(--semantic-color-background-tab-default)}";
const WinkTabsTelenetStyle0 = tabsTelenetCss;

const Tabs = /*@__PURE__*/ proxyCustomElement(class Tabs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.appearance = TAB_TYPES.container;
        this.activeTabIndex = 1;
        this.isScrollable = false;
        this.tabElements = [];
        this.uuidMap = new Map();
    }
    get host() { return this; }
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
    static get style() { return {
        base: WinkTabsBaseStyle0,
        telenet: WinkTabsTelenetStyle0
    }; }
}, [33, "wink-tabs", {
        "appearance": [1],
        "activeTabIndex": [32],
        "isScrollable": [32],
        "tabElements": [32],
        "uuidMap": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-tabs", "wink-icon", "wink-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tabs);
            }
            break;
        case "wink-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "wink-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const WinkTabs = Tabs;
const defineCustomElement = defineCustomElement$1;

export { WinkTabs, defineCustomElement };

//# sourceMappingURL=wink-tabs.js.map