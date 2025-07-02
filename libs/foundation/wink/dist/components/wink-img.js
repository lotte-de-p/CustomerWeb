import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BREAKPOINTS } from './breakpoints.types.js';

const LOADING_TYPES = {
    lazy: 'lazy',
    eager: 'eager',
};

const imageBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:host picture,:host img{display:block;max-width:100%}";
const WinkImgBaseStyle0 = imageBaseCss;

const imageTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:host picture,:host img{display:block;max-width:100%}";
const WinkImgTelenetStyle0 = imageTelenetCss;

const Image = /*@__PURE__*/ proxyCustomElement(class Image extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.srcDesktop = '';
        this.srcTablet = undefined;
        this.srcMobile = undefined;
        this.alt = undefined;
        this.loading = LOADING_TYPES.lazy;
    }
    render() {
        const altText = this.srcDesktop?.length > 0 && this.alt ? this.alt : `Image of ${window.location.host}`;
        return (h(Host, { key: 'fe639502fea474f48d8d5d20d1225f54b01274fe' }, this.srcDesktop ? (h("picture", null, this.srcMobile && h("source", { srcSet: this.srcMobile, media: BREAKPOINTS.mobile }), this.srcTablet && h("source", { srcSet: this.srcTablet, media: BREAKPOINTS.tablet }), h("img", { src: this.srcDesktop, alt: altText, loading: this.loading }))) : (h("p", null, "Please set src "))));
    }
    static get style() { return {
        base: WinkImgBaseStyle0,
        telenet: WinkImgTelenetStyle0
    }; }
}, [33, "wink-img", {
        "srcDesktop": [513, "src-desktop"],
        "srcTablet": [1, "src-tablet"],
        "srcMobile": [1, "src-mobile"],
        "alt": [1],
        "loading": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wink-img"];
    components.forEach(tagName => { switch (tagName) {
        case "wink-img":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Image);
            }
            break;
    } });
}

const WinkImg = Image;
const defineCustomElement = defineCustomElement$1;

export { WinkImg, defineCustomElement };

//# sourceMappingURL=wink-img.js.map