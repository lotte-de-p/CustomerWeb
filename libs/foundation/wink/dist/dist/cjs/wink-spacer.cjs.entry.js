'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const sizes_types = require('./sizes.types-a4f51bb2.js');

const spacerBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .height-3xs{height:calc(var(--semantic-spacing-3xs) * 1rem)}:host .height-2xs{height:calc(var(--semantic-spacing-2xs) * 1rem)}:host .height-xs{height:calc(var(--semantic-spacing-xs) * 1rem)}:host .height-sm{height:calc(var(--semantic-spacing-sm) * 1rem)}:host .height-md{height:calc(var(--semantic-spacing-md) * 1rem)}:host .height-lg{height:calc(var(--semantic-spacing-lg) * 1rem)}:host .height-xl{height:calc(var(--semantic-spacing-xl) * 1rem)}:host .height-none{height:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkSpacerBaseStyle0 = spacerBaseCss;

const spacerTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .height-3xs{height:calc(var(--semantic-spacing-3xs) * 1rem)}:host .height-2xs{height:calc(var(--semantic-spacing-2xs) * 1rem)}:host .height-xs{height:calc(var(--semantic-spacing-xs) * 1rem)}:host .height-sm{height:calc(var(--semantic-spacing-sm) * 1rem)}:host .height-md{height:calc(var(--semantic-spacing-md) * 1rem)}:host .height-lg{height:calc(var(--semantic-spacing-lg) * 1rem)}:host .height-xl{height:calc(var(--semantic-spacing-xl) * 1rem)}:host .height-none{height:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkSpacerTelenetStyle0 = spacerTelenetCss;

const Spacer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = sizes_types.SIZES.md;
    }
    render() {
        return (index.h(index.Host, { key: '0b4aedd2307b6ff895b6d090bbc6e75e8508c40f' }, index.h("div", { key: '912beed0ede283947b2305990f2eed3768e1333b', class: `height-${this.size}` })));
    }
};
Spacer.style = {
    base: WinkSpacerBaseStyle0,
    telenet: WinkSpacerTelenetStyle0
};

exports.wink_spacer = Spacer;

//# sourceMappingURL=wink-spacer.cjs.entry.js.map