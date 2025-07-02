'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9c52d86.js');
const breakpoints_types = require('./breakpoints.types-2f230597.js');

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
        index.registerInstance(this, hostRef);
        this.srcDesktop = '';
        this.srcTablet = undefined;
        this.srcMobile = undefined;
        this.alt = undefined;
        this.loading = LOADING_TYPES.lazy;
    }
    render() {
        const altText = this.srcDesktop?.length > 0 && this.alt ? this.alt : `Image of ${window.location.host}`;
        return (index.h(index.Host, { key: 'fe639502fea474f48d8d5d20d1225f54b01274fe' }, this.srcDesktop ? (index.h("picture", null, this.srcMobile && index.h("source", { srcSet: this.srcMobile, media: breakpoints_types.BREAKPOINTS.mobile }), this.srcTablet && index.h("source", { srcSet: this.srcTablet, media: breakpoints_types.BREAKPOINTS.tablet }), index.h("img", { src: this.srcDesktop, alt: altText, loading: this.loading }))) : (index.h("p", null, "Please set src "))));
    }
};
Image.style = {
    base: WinkImgBaseStyle0,
    telenet: WinkImgTelenetStyle0
};

exports.wink_img = Image;

//# sourceMappingURL=wink-img.cjs.entry.js.map