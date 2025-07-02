import { setMode } from "@stencil/core";
const BRANDS = ['telenet', 'base'];
const STORAGE_BRAND = localStorage.getItem('currentBrand') || 'telenet';
setMode((el) => {
    const comp_brand = el.getAttribute('brand') || STORAGE_BRAND;
    if (!BRANDS.includes(comp_brand)) {
        el.setAttribute('brand', STORAGE_BRAND);
    }
    el.setAttribute('brand', STORAGE_BRAND);
    return comp_brand;
});
//# sourceMappingURL=global.js.map
