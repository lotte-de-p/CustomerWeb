import { r as registerInstance, h, H as Host } from './index-4268ac0c.js';

const PARAGRAPH_APPEARANCES = {
    body: 'body',
    caption: 'caption',
};
const PARAGRAPH_SIZES = {
    regular: 'regular',
    small: 'small',
    large: 'large',
    bold: 'bold',
};

const paragraphBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;width:100%}:host(.font--body-regular){font-size:18px;line-height:28px}:host(.font--body-small){font-size:16px;line-height:24px}:host(.font--body-large){font-size:24px;line-height:36px}:host(.font--caption-bold){font-size:14px;line-height:20px;font-weight:bold}:host(.font--caption-regular){font-size:14px;line-height:20px}:host(.font--caption-small){font-size:12px;line-height:16px}";
const WinkParagraphBaseStyle0 = paragraphBaseCss;

const paragraphTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;width:100%}:host(.font--body-regular){font-size:18px;line-height:28px}:host(.font--body-small){font-size:16px;line-height:24px}:host(.font--body-large){font-size:24px;line-height:36px}:host(.font--caption-bold){font-size:14px;line-height:20px;font-weight:bold}:host(.font--caption-regular){font-size:14px;line-height:20px}:host(.font--caption-small){font-size:12px;line-height:16px}";
const WinkParagraphTelenetStyle0 = paragraphTelenetCss;

const Paragraph = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.appearance = PARAGRAPH_APPEARANCES.body;
        this.size = PARAGRAPH_SIZES.regular;
    }
    render() {
        return (h(Host, { key: 'f74cebdf05b2f6e4135eb2e9d6f60461612d2e0e', class: `font--${this.appearance}-${this.size}` }, h("slot", { key: 'e9bb9bcb6965caaad10e97d80c48647bab6b7746' })));
    }
};
Paragraph.style = {
    base: WinkParagraphBaseStyle0,
    telenet: WinkParagraphTelenetStyle0
};

export { Paragraph as wink_paragraph };

//# sourceMappingURL=wink-paragraph.entry.js.map