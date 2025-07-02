'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const sizes_types = require('./sizes.types-a4f51bb2.js');

const STACK_SIZES = {
    '3xs': sizes_types.SIZES['3xs'],
    '2xs': sizes_types.SIZES['2xs'],
    xs: sizes_types.SIZES.xs,
    sm: sizes_types.SIZES.sm,
    md: sizes_types.SIZES.md,
    lg: sizes_types.SIZES.lg,
    none: sizes_types.SIZES.none,
};

const stackBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:flex;box-sizing:border-box}:host(.justify-content-flex-start){justify-content:flex-start}:host(.justify-content-center){justify-content:center}:host(.justify-content-flex-end){justify-content:flex-end}:host(.justify-content-unset){justify-content:unset}:host(.justify-content-space-around){justify-content:space-around}:host(.justify-content-space-between){justify-content:space-between}:host(.justify-content-space-evenly){justify-content:space-evenly}:host(.justify-content-stretch){justify-content:stretch}:host(.justify-content-left){justify-content:left}:host(.justify-content-inherit){justify-content:inherit}:host(.justify-content-normal){justify-content:normal}:host(.align-items-flex-start){align-items:flex-start}:host(.align-items-center){align-items:center}:host(.align-items-flex-end){align-items:flex-end}:host(.align-items-baseline){align-items:baseline}:host(.align-items-stretch){align-items:stretch}:host(.align-items-inherit){align-items:inherit}:host(.flex-direction-row){flex-direction:row}:host(.flex-direction-row-reverse){flex-direction:row-reverse}:host(.flex-direction-column){flex-direction:column}:host(.flex-direction-column-reverse){flex-direction:column-reverse}:host(.flex-wrap-wrap){flex-wrap:wrap}:host(.flex-wrap-nowrap){flex-wrap:nowrap}:host(.flex-wrap-wrap-reverse){flex-wrap:wrap-reverse}:host(.flex-wrap-initial){flex-wrap:initial}:host(.col-1){flex-basis:8.3333333333%;max-width:8.3333333333%}:host(.col-2){flex-basis:16.6666666667%;max-width:16.6666666667%}:host(.col-3){flex-basis:25%;max-width:25%}:host(.col-4){flex-basis:33.3333333333%;max-width:33.3333333333%}:host(.col-5){flex-basis:41.6666666667%;max-width:41.6666666667%}:host(.col-6){flex-basis:50%;max-width:50%}:host(.col-7){flex-basis:58.3333333333%;max-width:58.3333333333%}:host(.col-8){flex-basis:66.6666666667%;max-width:66.6666666667%}:host(.col-9){flex-basis:75%;max-width:75%}:host(.col-10){flex-basis:83.3333333333%;max-width:83.3333333333%}:host(.col-11){flex-basis:91.6666666667%;max-width:91.6666666667%}:host(.col-12){flex-basis:100%;max-width:100%}:host(.gap-3xs){gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host(.gap-2xs){gap:calc(var(--semantic-spacing-2xs) * 1rem)}:host(.gap-xs){gap:calc(var(--semantic-spacing-xs) * 1rem)}:host(.gap-sm){gap:calc(var(--semantic-spacing-sm) * 1rem)}:host(.gap-md){gap:calc(var(--semantic-spacing-md) * 1rem)}:host(.gap-lg){gap:calc(var(--semantic-spacing-lg) * 1rem)}:host(.gap-xl){gap:calc(var(--semantic-spacing-xl) * 1rem)}:host(.gap-none){gap:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkStackBaseStyle0 = stackBaseCss;

const stackTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:flex;box-sizing:border-box}:host(.justify-content-flex-start){justify-content:flex-start}:host(.justify-content-center){justify-content:center}:host(.justify-content-flex-end){justify-content:flex-end}:host(.justify-content-unset){justify-content:unset}:host(.justify-content-space-around){justify-content:space-around}:host(.justify-content-space-between){justify-content:space-between}:host(.justify-content-space-evenly){justify-content:space-evenly}:host(.justify-content-stretch){justify-content:stretch}:host(.justify-content-left){justify-content:left}:host(.justify-content-inherit){justify-content:inherit}:host(.justify-content-normal){justify-content:normal}:host(.align-items-flex-start){align-items:flex-start}:host(.align-items-center){align-items:center}:host(.align-items-flex-end){align-items:flex-end}:host(.align-items-baseline){align-items:baseline}:host(.align-items-stretch){align-items:stretch}:host(.align-items-inherit){align-items:inherit}:host(.flex-direction-row){flex-direction:row}:host(.flex-direction-row-reverse){flex-direction:row-reverse}:host(.flex-direction-column){flex-direction:column}:host(.flex-direction-column-reverse){flex-direction:column-reverse}:host(.flex-wrap-wrap){flex-wrap:wrap}:host(.flex-wrap-nowrap){flex-wrap:nowrap}:host(.flex-wrap-wrap-reverse){flex-wrap:wrap-reverse}:host(.flex-wrap-initial){flex-wrap:initial}:host(.col-1){flex-basis:8.3333333333%;max-width:8.3333333333%}:host(.col-2){flex-basis:16.6666666667%;max-width:16.6666666667%}:host(.col-3){flex-basis:25%;max-width:25%}:host(.col-4){flex-basis:33.3333333333%;max-width:33.3333333333%}:host(.col-5){flex-basis:41.6666666667%;max-width:41.6666666667%}:host(.col-6){flex-basis:50%;max-width:50%}:host(.col-7){flex-basis:58.3333333333%;max-width:58.3333333333%}:host(.col-8){flex-basis:66.6666666667%;max-width:66.6666666667%}:host(.col-9){flex-basis:75%;max-width:75%}:host(.col-10){flex-basis:83.3333333333%;max-width:83.3333333333%}:host(.col-11){flex-basis:91.6666666667%;max-width:91.6666666667%}:host(.col-12){flex-basis:100%;max-width:100%}:host(.gap-3xs){gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host(.gap-2xs){gap:calc(var(--semantic-spacing-2xs) * 1rem)}:host(.gap-xs){gap:calc(var(--semantic-spacing-xs) * 1rem)}:host(.gap-sm){gap:calc(var(--semantic-spacing-sm) * 1rem)}:host(.gap-md){gap:calc(var(--semantic-spacing-md) * 1rem)}:host(.gap-lg){gap:calc(var(--semantic-spacing-lg) * 1rem)}:host(.gap-xl){gap:calc(var(--semantic-spacing-xl) * 1rem)}:host(.gap-none){gap:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkStackTelenetStyle0 = stackTelenetCss;

const Stack = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.col = { default: 12 };
        this.gap = { default: STACK_SIZES.xs };
        this.direction = undefined;
        this.justifyContent = undefined;
        this.alignItems = undefined;
        this.wrap = undefined;
    }
    getStackClasses = () => {
        return {
            ...this.getClassesByPostfix('col', 'col'),
            ...this.getClassesByPostfix('gap', 'gap'),
            ...this.getClassesByPostfix('flex-direction', 'direction'),
            ...this.getClassesByPostfix('justify-content', 'justifyContent'),
            ...this.getClassesByPostfix('align-items', 'alignItems'),
            ...this.getClassesByPostfix('flex-wrap', 'wrap'),
        };
    };
    getClassesByPostfix(postFix, prop) {
        if (!this[prop]) {
            return {};
        }
        return {
            ...(this[prop].default && { [`${postFix}-${this[prop].default}`]: true }),
            ...(this[prop].sm && { [`${postFix}-${this[prop].sm}-sm`]: true }),
            ...(this[prop].md && { [`${postFix}-${this[prop].md}-md`]: true }),
        };
    }
    render() {
        return (index.h(index.Host, { key: '3af6d8c575758d252dd72454dfd40d02e2ccffe3', class: this.getStackClasses() }, index.h("slot", { key: 'f614e77cf433a44ea8f4580d85f0ec853b804ad0' })));
    }
};
Stack.style = {
    base: WinkStackBaseStyle0,
    telenet: WinkStackTelenetStyle0
};

exports.wink_stack = Stack;

//# sourceMappingURL=wink-stack.cjs.entry.js.map