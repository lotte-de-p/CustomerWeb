'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const mediaQueryDetector = require('./media-query-detector-b8a1102f.js');

const mainNavigationBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host nav{display:contents}:host ul{all:unset;display:flex;align-self:stretch;gap:calc(var(--semantic-spacing-lg) * 1rem)}@media only screen and (min-width: 64em){:host ul{margin-left:calc(var(--semantic-spacing-md) * 1rem);margin-right:auto}}@media only screen and (max-width: calc(64em - 1px)){:host ul{flex-direction:column;gap:calc(var(--semantic-spacing-xs) * 1rem)}}@media only screen and (min-width: 64em) and (max-width: calc(74.5em - 1px)){:host ul{gap:calc(var(--semantic-spacing-sm) * 1rem)}}:host ul li{all:unset;display:contents}:host ul li a{display:flex;justify-content:space-between;align-items:center;gap:calc(var(--semantic-spacing-xs) * 1rem);position:relative;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0;color:var(--semantic-color-text-default);text-decoration:none;font-size:1.8rem;cursor:pointer}@media only screen and (max-width: calc(64em - 1px)){:host ul li a{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}}@media only screen and (min-width: 64em){:host ul li a:after{content:\"\";position:absolute;height:0.3rem;width:100%;left:0;bottom:0;border-radius:0.3rem 0.3rem 0 0;background-color:var(--wink-main-nav-link-after-bgc, unset)}:host ul li a:focus-visible,:host ul li a:hover{--wink-main-nav-link-after-bgc:var(--semantic-color-border-hover)}:host ul li a.active{--wink-main-nav-link-after-bgc:var(--semantic-color-border-selected)}:host ul li a wink-icon{display:none}}@media only screen and (min-width: 64em) and (max-width: calc(74.5em - 1px)){:host ul li a{font-size:1.6rem}}:host ul li a:focus,:host ul li a:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}";
const WinkMainNavigationBaseStyle0 = mainNavigationBaseCss;

const mainNavigationTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host nav{display:contents}:host ul{all:unset;display:flex;align-self:stretch;gap:calc(var(--semantic-spacing-lg) * 1rem)}@media only screen and (min-width: 64em){:host ul{margin-left:calc(var(--semantic-spacing-md) * 1rem);margin-right:auto}}@media only screen and (max-width: calc(64em - 1px)){:host ul{flex-direction:column;gap:calc(var(--semantic-spacing-xs) * 1rem)}}@media only screen and (min-width: 64em) and (max-width: calc(74.5em - 1px)){:host ul{gap:calc(var(--semantic-spacing-sm) * 1rem)}}:host ul li{all:unset;display:contents}:host ul li a{display:flex;justify-content:space-between;align-items:center;gap:calc(var(--semantic-spacing-xs) * 1rem);position:relative;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0;color:var(--semantic-color-text-default);text-decoration:none;font-size:1.8rem;cursor:pointer}@media only screen and (max-width: calc(64em - 1px)){:host ul li a{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}}@media only screen and (min-width: 64em){:host ul li a:after{content:\"\";position:absolute;height:0.3rem;width:100%;left:0;bottom:0;border-radius:0.3rem 0.3rem 0 0;background-color:var(--wink-main-nav-link-after-bgc, unset)}:host ul li a:focus-visible,:host ul li a:hover{--wink-main-nav-link-after-bgc:var(--semantic-color-border-hover)}:host ul li a.active{--wink-main-nav-link-after-bgc:var(--semantic-color-border-selected)}:host ul li a wink-icon{display:none}}@media only screen and (min-width: 64em) and (max-width: calc(74.5em - 1px)){:host ul li a{font-size:1.6rem}}:host ul li a:focus,:host ul li a:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}";
const WinkMainNavigationTelenetStyle0 = mainNavigationTelenetCss;

const MainNavigation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mainNavigationItemClicked = index.createEvent(this, "mainNavigationItemClicked", 7);
        this.menuItems = '';
        this._menuItems = [];
        this.isOpen = false;
        this.activeIndex = undefined;
        this.ActiveLinkRef = undefined;
    }
    mainNavigationItemClicked;
    handleFlyoutBackLinkClicked(e) {
        const { eventType } = e.detail;
        this.isOpen = false;
        if (eventType !== 'mouse') {
            this.ActiveLinkRef?.focus();
        }
    }
    componentWillLoad() {
        if (!this.menuItems) {
            return;
        }
        this._menuItems = JSON.parse(this.menuItems);
    }
    mainNavigationItemEmitter(item) {
        this.mainNavigationItemClicked?.emit(item);
    }
    handleFlyOutOpening(item) {
        this.isOpen = !!this._menuItems[item.index]?.hasSubNav;
        this.mainNavigationItemEmitter(item);
    }
    handleItemClick(item) {
        this.activeIndex = item.index;
        this.handleFlyOutOpening(item);
    }
    handleItemMouseOver(item) {
        if (item.eventType === 'mouse' && mediaQueryDetector.MediaQueryDetector.isUntilMdHeader) {
            return;
        }
        if (this._menuItems[item.index].hasSubNav) {
            this.handleFlyOutOpening(item);
            return;
        }
        this.isOpen = false;
        this.mainNavigationItemEmitter({ index: NaN, name: '' });
    }
    handleKeyDownEvent(e, index, name) {
        if (e.code === 'Space') {
            e.preventDefault();
            this.handleItemClick({ index, name });
        }
    }
    getATagCssClasses(index) {
        return {
            active: this.activeIndex === index,
        };
    }
    render() {
        return (index.h("nav", { key: '80a30a8089e3f84ab3d8bf4f149bfbf892770ec0', role: "navigation" }, index.h("ul", { key: 'b1620989d27c010d1facd44b227b10e64333d528', role: "menu", "aria-label": "Main navigation menu" }, this._menuItems.map((item, index$1) => (index.h("li", { role: "none" }, index.h("a", { role: "menuitem", "aria-haspopup": (!!item.hasSubNav).toString(), "aria-expanded": this.isOpen.toString(), "aria-controls": item.hasSubNav ? `flyout-${index$1}` : undefined, class: this.getATagCssClasses(index$1), href: item.url, onClick: () => this.handleItemClick({ index: index$1, name: item.name }), onMouseOver: () => this.handleItemMouseOver({ index: index$1, name: item.name, eventType: 'mouse' }), onKeyDown: (e) => this.handleKeyDownEvent(e, index$1, item.name), ref: (el) => this.activeIndex === index$1 && (this.ActiveLinkRef = el) }, item.name, item.hasSubNav && index.h("wink-icon", { appearance: "default", icon: "chevron-right", size: "sm" }))))))));
    }
};
MainNavigation.style = {
    base: WinkMainNavigationBaseStyle0,
    telenet: WinkMainNavigationTelenetStyle0
};

exports.wink_main_navigation = MainNavigation;

//# sourceMappingURL=wink-main-navigation.cjs.entry.js.map