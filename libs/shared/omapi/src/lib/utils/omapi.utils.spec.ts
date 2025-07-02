import { OmapiUtils } from './omapi.utils';
import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { LanguageEnum } from '../constants/language.enum';
import { OmapiProduct } from '../models/omapi-product.model';
import { SofyComboProducts } from '../constants/sofy-combo-products.constants';

interface UrlShoppingBasketProduct {
  omapiid: string;
  optins: string[];
  options: string[];
}

describe('OmapiUtils', () => {
  describe('doesContainProductWithProvidedOmapiId', () => {
    it('should return true if the provided products contain the given omapi ID', () => {
      const urlShoppingBasketProducts: UrlShoppingBasketProduct[] = [
        { omapiid: '1', optins: [], options: [] },
        { omapiid: '2', optins: [], options: [] },
      ];

      const actual = OmapiUtils.doesContainProductWithProvidedOmapiId(urlShoppingBasketProducts, '1');

      expect(actual).toBe(true);
    });
    it('should return false if the provided products do not contain the given omapi ID', () => {
      const urlShoppingBasketProducts: UrlShoppingBasketProduct[] = [
        { omapiid: '1', optins: [], options: [] },
        { omapiid: '2', optins: [], options: [] },
      ];

      const actual = OmapiUtils.doesContainProductWithProvidedOmapiId(urlShoppingBasketProducts, '5');

      expect(actual).toBe(false);
    });
  });
  describe('getLocalizedContent', () => {
    it('should return the correct locale for the given language', () => {
      const nl: LocalizedContentInterface = {
        logo: '',
        name: 'productName nl',
        locale: 'nl',
      };
      const fr: LocalizedContentInterface = {
        logo: '',
        name: 'productName fr',
        locale: 'fr',
      };
      const omapiProduct = new OmapiProduct();
      omapiProduct.localizedContent = [nl, fr];
      const actual = OmapiUtils.getLocalizedContent(LanguageEnum.NL, omapiProduct);
      expect(actual?.locale).toBe('nl');
      expect(actual?.name).toBe('productName nl');
    });
  });

  describe('getComboProducts', () => {
    it('should return omapi data if a valid sofy combo product is provided', () => {
      const actual = OmapiUtils.getComboProducts('22792_46948');

      expect(actual).toBe(SofyComboProducts[0]);
    });

    it('should return an empty object if the provided product is not a combo product', () => {
      const actual = OmapiUtils.getComboProducts('22792');

      expect(actual).toBeUndefined();
    });
  });
});
