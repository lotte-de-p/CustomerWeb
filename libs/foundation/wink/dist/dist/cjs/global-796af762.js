'use strict';

const index = require('./index-d9c52d86.js');

const BRANDS = ['telenet', 'base'];
const STORAGE_BRAND = localStorage.getItem('currentBrand') || 'telenet';
index.setMode((el) => {
    const comp_brand = el.getAttribute('brand') || STORAGE_BRAND;
    if (!BRANDS.includes(comp_brand)) {
        el.setAttribute('brand', STORAGE_BRAND);
    }
    el.setAttribute('brand', STORAGE_BRAND);
    return comp_brand;
});

//# sourceMappingURL=global-796af762.js.map