'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const icon_types = require('./icon.types-41fea202.js');
require('./sizes.types-a4f51bb2.js');

const accordionBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}.accordion{font-size:initial;color:var(--semantic-color-text-default);border-bottom:calc(var(--semantic-border-sm) * 1rem) solid var(--semantic-color-border-subtle)}.accordion [role=heading]{font-family:arial, sans-serif;font-size:inherit;margin:0;padding:0}.accordion [role=heading] .accordion-title{display:inline-flex;gap:calc(var(--semantic-spacing-lg) * 1rem)}.accordion-trigger{all:unset;display:flex;justify-content:space-between;align-items:flex-start;gap:calc(var(--semantic-spacing-lg) * 1rem);width:100%;padding:calc(var(--semantic-spacing-lg) * 1rem) 0 calc(var(--semantic-spacing-lg) * 1rem) 0;position:relative;text-align:left;box-sizing:border-box}.accordion-trigger:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}.accordion-trigger[aria-expanded=true] .accordion-icon{transform:rotate(180deg)}.accordion-icon{transition:all 0.3s ease}.accordion .accordion-panel{display:grid;grid-template-rows:1fr;overflow:hidden;transition:all 0.3s ease}.accordion .accordion-panel>div{min-height:0;padding-right:calc(var(--semantic-icon-md) * 1rem)}.accordion .accordion-panel>div.with-icon{padding-left:calc(var(--semantic-spacing-lg) * 1rem + var(--semantic-icon-md) * 1rem)}.accordion .accordion-panel>div::after{content:\"\";display:block;width:100%;height:calc(var(--semantic-spacing-lg) * 1rem)}.accordion .accordion-panel[aria-hidden=false]{grid-template-rows:0fr}";
const WinkAccordionBaseStyle0 = accordionBaseCss;

const accordionTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}.accordion{font-size:1.6rem;color:var(--semantic-color-text-default);border-bottom:calc(var(--semantic-border-sm) * 1rem) solid var(--semantic-color-border-subtle)}.accordion [role=heading]{font-family:telenetalbra-bold, arial, sans-serif;font-size:2rem;margin:0;padding:0}.accordion [role=heading] .accordion-title{display:inline-flex;gap:calc(var(--semantic-spacing-lg) * 1rem)}.accordion-trigger{all:unset;display:flex;justify-content:space-between;align-items:flex-start;gap:calc(var(--semantic-spacing-lg) * 1rem);width:100%;padding:calc(var(--semantic-spacing-lg) * 1rem) 0 calc(var(--semantic-spacing-lg) * 1rem) 0;position:relative;text-align:left;box-sizing:border-box}.accordion-trigger:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}.accordion-trigger[aria-expanded=true] .accordion-icon{transform:rotate(180deg)}.accordion-icon{transition:all 0.3s ease}.accordion .accordion-panel{display:grid;grid-template-rows:1fr;overflow:hidden;transition:all 0.3s ease}.accordion .accordion-panel>div{min-height:0;padding-right:calc(var(--semantic-icon-md) * 1rem)}.accordion .accordion-panel>div.with-icon{padding-left:calc(var(--semantic-spacing-lg) * 1rem + var(--semantic-icon-md) * 1rem)}.accordion .accordion-panel>div::after{content:\"\";display:block;width:100%;height:calc(var(--semantic-spacing-lg) * 1rem)}.accordion .accordion-panel[aria-hidden=false]{grid-template-rows:0fr}";
const WinkAccordionTelenetStyle0 = accordionTelenetCss;

const Accordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = '';
        this.icon = '';
        this.isExpanded = false;
    }
    componentDidLoad() {
        if (!this.isExpanded)
            this.activeContentPanel.style.setProperty('display', 'none');
    }
    activeContentPanel;
    get dynamicIdBasedOnTitle() {
        return this.heading.replace(/\s/g, '-').substring(0, 7);
    }
    onButtonClick = () => {
        this.isExpanded = !this.isExpanded;
    };
    panelTransitionStart = () => {
        if (this.isExpanded) {
            this.activeContentPanel.style.removeProperty('display');
        }
    };
    panelTransitionEnd = () => {
        if (!this.isExpanded) {
            this.activeContentPanel.style.setProperty('display', 'none');
        }
    };
    render() {
        return (index.h(index.Host, { key: 'fee3ec6dec5147e0d4c41a93a2db575842d745b6' }, index.h("div", { key: 'fd8610b0544e355d089da8d35a9ce2e729e1662d', id: "accordion", class: "accordion" }, index.h("div", { key: '0c13e9249ca39c9e3d0dcb2186d4cf3f0dbdee89', role: "heading", "aria-level": "5" }, index.h("button", { key: '7fa30a0c5c299f4743acd0859fb32340241a3ac3', class: "accordion-trigger", onClick: this.onButtonClick, type: "button", "aria-expanded": `${this.isExpanded}`, "aria-controls": `section-${this.dynamicIdBasedOnTitle}`, id: "accordion1id" }, index.h("div", { key: '08027ba23e928a92b70dc5d55d552a2a9ee2b563', class: "accordion-title" }, !!this.icon && index.h("wink-icon", { appearance: "default", icon: this.icon, size: icon_types.ICON_SIZES.md }), this.heading), index.h("wink-icon", { key: 'b4922d586acbdfec71878f30c5081cfd632c1fcb', class: "accordion-icon", appearance: "default", icon: "chevron-down", size: icon_types.ICON_SIZES.md }))), index.h("div", { key: '69be91831b0f460e2ee1662cd64a769cddcdd80b', id: `section-${this.dynamicIdBasedOnTitle}`, class: "accordion-panel", role: "region", "aria-labelledby": "accordion1id", "aria-hidden": `${this.isExpanded}`, hidden: !this.isExpanded, onTransitionEnd: this.panelTransitionEnd, onTransitionStart: this.panelTransitionStart }, index.h("div", { key: 'e28dac024655d4487c029a502b1963db59a5bbac', id: "content", class: `${this.icon ? 'with-icon' : ''}`, ref: (el) => (this.activeContentPanel = el) }, index.h("slot", { key: 'e7262f515952b7dafff1b3b715cf135fceb9e867' }))))));
    }
};
Accordion.style = {
    base: WinkAccordionBaseStyle0,
    telenet: WinkAccordionTelenetStyle0
};

exports.wink_accordion = Accordion;

//# sourceMappingURL=wink-accordion.cjs.entry.js.map