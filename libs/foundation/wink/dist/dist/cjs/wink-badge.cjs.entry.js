'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const sizes_types = require('./sizes.types-a4f51bb2.js');

const BADGE_SIZES = {
    sm: sizes_types.SIZES.sm,
    md: sizes_types.SIZES.md,
    lg: sizes_types.SIZES.lg,
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

const Badge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.text = '';
        this.size = BADGE_SIZES.md;
        this.background = BADGE_COLORS.darkBrown;
    }
    render() {
        return index.h(index.Host, { key: 'd5c1a7fe17540563ef8fde972b7531e302193dd5' }, this.text);
    }
};
Badge.style = {
    base: WinkBadgeBaseStyle0,
    telenet: WinkBadgeTelenetStyle0
};

exports.wink_badge = Badge;

//# sourceMappingURL=wink-badge.cjs.entry.js.map