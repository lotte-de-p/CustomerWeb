'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const utils = require('./utils-6a0947a7.js');

const navigationListBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}:host .navigation-list--title{color:var(--semantic-color-text-subtlest);font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul wink-navigation-list-item{font-size:1.8rem;line-height:2.8rem;text-decoration:none}@media only screen and (max-width: calc(48.0625em - 1px)){:host ul wink-navigation-list-item{display:block;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0}}:host([has-bold-links]) wink-navigation-list-item,:host([has-bold-links=true]) wink-navigation-list-item{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}";
const WinkNavigationListBaseStyle0 = navigationListBaseCss;

const navigationListTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}:host .navigation-list--title{color:var(--semantic-color-text-subtlest);font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul wink-navigation-list-item{font-size:1.8rem;line-height:2.8rem;text-decoration:none}@media only screen and (max-width: calc(48.0625em - 1px)){:host ul wink-navigation-list-item{display:block;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0}}:host([has-bold-links]) wink-navigation-list-item,:host([has-bold-links=true]) wink-navigation-list-item{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}";
const WinkNavigationListTelenetStyle0 = navigationListTelenetCss;

const NavigationList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.listTitle = '';
        this.hasBoldLinks = false;
    }
    get host() { return index.getElement(this); }
    render() {
        const allLinkChilds = Array.from(this.host.children).filter((node) => {
            return node.nodeName.toLocaleLowerCase() === 'wink-navigation-list-item';
        });
        return (index.h(index.Host, null, this.listTitle && (index.h("wink-paragraph", { appearance: "caption", size: "bold", class: "navigation-list--title" }, this.listTitle)), index.h("ul", { class: "navigation-list--list" }, allLinkChilds.map((child) => (index.h("li", { key: utils.UUId(), innerHTML: child.outerHTML }))))));
    }
};
NavigationList.style = {
    base: WinkNavigationListBaseStyle0,
    telenet: WinkNavigationListTelenetStyle0
};

exports.wink_navigation_list = NavigationList;

//# sourceMappingURL=wink-navigation-list.cjs.entry.js.map