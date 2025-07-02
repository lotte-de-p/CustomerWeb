'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const button_types = require('./button.types-6bcbb891.js');
const directions_types = require('./directions.types-03f2b46e.js');
require('./sizes.types-a4f51bb2.js');

const indicatorBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block}:host .wrapper{filter:drop-shadow(0rem 0.4rem 0.4rem var(--semantic-color-background-surface-bold-pressed))}:host .wrapper .indicator{background-color:var(--semantic-color-text-inverse-on-brand);padding:calc(var(--semantic-spacing-3xs) * 1rem);position:relative;display:flex;flex-direction:column;align-items:center;transition:transform 0.1s ease-in-out}:host .wrapper .indicator:hover{transform:scale(1.1)}:host .wrapper .indicator wink-icon{--wink-icon-color:var(--semantic-color-icon-on-brand);height:auto}";
const WinkIndicatorBaseStyle0 = indicatorBaseCss;

const indicatorTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host img{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}:host{display:block}:host .wrapper{filter:drop-shadow(0rem 0.4rem 0.4rem var(--semantic-color-background-surface-bold-pressed))}:host .wrapper .indicator{background-color:var(--semantic-color-text-inverse-on-brand);padding:calc(var(--semantic-spacing-3xs) * 1rem);position:relative;display:flex;flex-direction:column;align-items:center;transition:transform 0.1s ease-in-out}:host .wrapper .indicator:hover{transform:scale(1.1)}:host .wrapper .indicator wink-icon{--wink-icon-color:var(--semantic-color-icon-on-brand);height:auto}:host .indicator{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}";
const WinkIndicatorTelenetStyle0 = indicatorTelenetCss;

const Indicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.direction = directions_types.INDICATOR_DIRECTIONS.right;
        this.size = button_types.BUTTON_SIZES.sm;
    }
    iconsNamesMap = new Map([
        [directions_types.INDICATOR_DIRECTIONS.left, 'chevron-left-small'],
        [directions_types.INDICATOR_DIRECTIONS.right, 'chevron-right-small'],
        [directions_types.INDICATOR_DIRECTIONS.up, 'chevron-up-small'],
        [directions_types.INDICATOR_DIRECTIONS.down, 'chevron-down-small'],
    ]);
    render() {
        return (index.h(index.Host, { key: '0bcc73c74dde8f3cfa2fb6baa8e25fa477e4f333' }, index.h("div", { key: '45252ca01701b39273447bd566532dd751708c98', class: "wrapper" }, index.h("div", { key: 'ee32f1bce19a43e70632b20179d95b08ae60d997', class: "indicator" }, index.h("wink-icon", { key: '5d832aa22af22411e1f171d8c9d1f4c5bfc06654', appearance: "default", size: this.size, icon: this.iconsNamesMap.get(this.direction) })))));
    }
};
Indicator.style = {
    base: WinkIndicatorBaseStyle0,
    telenet: WinkIndicatorTelenetStyle0
};

exports.wink_indicator = Indicator;

//# sourceMappingURL=wink-indicator.cjs.entry.js.map