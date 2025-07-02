import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { S as SIZES } from './sizes.types.js';

const BADGE_SIZES = {
    sm: SIZES.sm,
    md: SIZES.md,
    lg: SIZES.lg,
};
const BADGE_COLORS = {
    darkBrown: 'darkBrown',
    white: 'white',
    yellow: 'yellow',
    lemon: 'lemon',
    brightBlue: 'brightBlue',
    jeansBlue: 'jeansBlue',
    lila: 'lila',
    olivine: 'olivine',
    turquoise: 'turquoise',
    watermelon: 'watermelon',
};

const badgeBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block;padding:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-xs) * 1rem);background-color:#009793;color:#ffffff;font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, Arial, sans-serif}:host([size=sm]){font-size:1.4rem;line-height:2rem}:host([size=md]){font-size:1.6rem;line-height:2.4rem}:host([size=lg]){font-size:2.4rem;line-height:3.2rem}";
const WinkBadgeBaseStyle0 = badgeBaseCss;

const badgeTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block;padding:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-xs) * 1rem);background-color:var(--semantic-color-background-surface-highlight-7);color:var(--semantic-color-text-inverse-on-brand);font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, Arial, sans-serif}:host([size=sm]){font-size:1.4rem;line-height:2rem}:host([size=md]){font-size:1.6rem;line-height:2.4rem}:host([size=lg]){font-size:2.4rem;line-height:3.2rem}:host([background=dark-brown]){background-color:var(--semantic-color-background-surface-highlight-7);color:var(--semantic-color-text-inverse-on-brand)}:host([background=white]){background-color:var(--semantic-color-background-surface-highlight-8);color:var(--semantic-color-text-default)}:host([background=yellow]){background-color:var(--semantic-color-background-canvas-brand);color:var(--semantic-color-text-default)}:host([background=lemon]){background-color:var(--semantic-color-background-canvas-accent);color:var(--semantic-color-text-default)}:host([background=bright-blue]){background-color:var(--semantic-color-background-surface-highlight-1);color:var(--semantic-color-text-default)}:host([background=jeans-blue]){background-color:var(--semantic-color-background-surface-highlight-4);color:var(--semantic-color-text-default)}:host([background=lila]){background-color:var(--semantic-color-background-surface-highlight-2);color:var(--semantic-color-text-default)}:host([background=olivine]){background-color:var(--semantic-color-background-surface-highlight-6);color:var(--semantic-color-text-default)}:host([background=turquoise]){background-color:var(--semantic-color-background-surface-highlight-4);color:var(--semantic-color-text-default)}:host([background=watermelon]){background-color:var(--semantic-color-background-surface-highlight-3);color:var(--semantic-color-text-default)}";
const WinkBadgeTelenetStyle0 = badgeTelenetCss;

const Badge = /*@__PURE__*/ proxyCustomElement(class Badge extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.text = '';
        this.size = BADGE_SIZES.md;
        this.background = BADGE_COLORS.darkBrown;
    }
    render() {
        return h(Host, { key: 'd5c1a7fe17540563ef8fde972b7531e302193dd5' }, this.text);
    }
    static get style() { return {
        base: WinkBadgeBaseStyle0,
        telenet: WinkBadgeTelenetStyle0
    }; }
}, [33, "wink-badge", {
        "text": [1],
        "size": [1],
        "background": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Badge);
            }
            break;
    } });
}

const WinkBadge = Badge;
const defineCustomElement = defineCustomElement$1;

export { WinkBadge, defineCustomElement };

//# sourceMappingURL=wink-badge.js.map