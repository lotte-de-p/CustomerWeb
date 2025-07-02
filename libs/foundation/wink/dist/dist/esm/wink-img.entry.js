import { r as registerInstance, h, H as Host } from './index-4268ac0c.js';
import { B as BREAKPOINTS } from './breakpoints.types-ac47967d.js';

const LOADING_TYPES = {
    lazy: 'lazy',
    eager: 'eager',
};

const imageBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:host picture,:host img{display:block;max-width:100%}";
const WinkImgBaseStyle0 = imageBaseCss;

const imageTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:host picture,:host img{display:block;max-width:100%}";
const WinkImgTelenetStyle0 = imageTelenetCss;

const Image = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
Image.style = {
    base: WinkImgBaseStyle0,
    telenet: WinkImgTelenetStyle0
};

export { Image as wink_img };

//# sourceMappingURL=wink-img.entry.js.map