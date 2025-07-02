import { r as registerInstance, h, H as Host } from './index-4268ac0c.js';

const columnCountBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .cols{column-count:4;column-width:27rem;column-gap:calc(var(--semantic-spacing-lg) * 1rem)}:host .cols.cols-count-1{column-count:1}:host .cols.cols-count-2{column-count:2}:host .cols.cols-count-3{column-count:3}:host .cols ::slotted(*){display:block;break-inside:avoid;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}";
const WinkColumnCountBaseStyle0 = columnCountBaseCss;

const columnCountTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .cols{column-count:4;column-width:27rem;column-gap:calc(var(--semantic-spacing-lg) * 1rem)}:host .cols.cols-count-1{column-count:1}:host .cols.cols-count-2{column-count:2}:host .cols.cols-count-3{column-count:3}:host .cols ::slotted(*){display:block;break-inside:avoid;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}";
const WinkColumnCountTelenetStyle0 = columnCountTelenetCss;

const ColumnCount = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colsCount = 4;
    }
    render() {
        return (h(Host, { key: 'b53b2099581d0bb5b0ff1a70816ddb9d8be1ab61' }, h("div", { key: 'f3c57f327fe321ed194731f23086b790fbab268f', class: { cols: true, [`cols-count-${this.colsCount}`]: true } }, h("slot", { key: 'e1908de58c90848196e9c128441872357eb5b33d' }))));
    }
};
ColumnCount.style = {
    base: WinkColumnCountBaseStyle0,
    telenet: WinkColumnCountTelenetStyle0
};

export { ColumnCount as wink_column_count };

//# sourceMappingURL=wink-column-count.entry.js.map