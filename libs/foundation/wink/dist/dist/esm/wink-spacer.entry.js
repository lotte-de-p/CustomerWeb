import { r as registerInstance, h, H as Host } from './index-4268ac0c.js';
import { S as SIZES } from './sizes.types-9eb79f88.js';

const spacerBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .height-3xs{height:calc(var(--semantic-spacing-3xs) * 1rem)}:host .height-2xs{height:calc(var(--semantic-spacing-2xs) * 1rem)}:host .height-xs{height:calc(var(--semantic-spacing-xs) * 1rem)}:host .height-sm{height:calc(var(--semantic-spacing-sm) * 1rem)}:host .height-md{height:calc(var(--semantic-spacing-md) * 1rem)}:host .height-lg{height:calc(var(--semantic-spacing-lg) * 1rem)}:host .height-xl{height:calc(var(--semantic-spacing-xl) * 1rem)}:host .height-none{height:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkSpacerBaseStyle0 = spacerBaseCss;

const spacerTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .height-3xs{height:calc(var(--semantic-spacing-3xs) * 1rem)}:host .height-2xs{height:calc(var(--semantic-spacing-2xs) * 1rem)}:host .height-xs{height:calc(var(--semantic-spacing-xs) * 1rem)}:host .height-sm{height:calc(var(--semantic-spacing-sm) * 1rem)}:host .height-md{height:calc(var(--semantic-spacing-md) * 1rem)}:host .height-lg{height:calc(var(--semantic-spacing-lg) * 1rem)}:host .height-xl{height:calc(var(--semantic-spacing-xl) * 1rem)}:host .height-none{height:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkSpacerTelenetStyle0 = spacerTelenetCss;

const Spacer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = SIZES.md;
    }
    render() {
        return (h(Host, { key: '0b4aedd2307b6ff895b6d090bbc6e75e8508c40f' }, h("div", { key: '912beed0ede283947b2305990f2eed3768e1333b', class: `height-${this.size}` })));
    }
};
Spacer.style = {
    base: WinkSpacerBaseStyle0,
    telenet: WinkSpacerTelenetStyle0
};

export { Spacer as wink_spacer };

//# sourceMappingURL=wink-spacer.entry.js.map