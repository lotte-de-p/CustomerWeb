import { setMode } from '@stencil/core';

const BRANDS: string[] = ['telenet', 'base'];
const STORAGE_BRAND: string = localStorage.getItem('currentBrand') || 'telenet';

setMode((el: HTMLElement) => {
  const comp_brand = el.getAttribute('brand') || STORAGE_BRAND;
  if (!BRANDS.includes(comp_brand)) {
    el.setAttribute('brand', STORAGE_BRAND);
  }
  el.setAttribute('brand', STORAGE_BRAND);
  return comp_brand;
});
