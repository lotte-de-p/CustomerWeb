import { of } from 'rxjs';
import { OmapiProductCategoryUtil } from './omapi-product-category.util';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('OmapiProductCategoryUtil', () => {
  describe('checkOmapiProductsByCategory', () => {
    it('should return true if any product contains the specified category', (done) => {
      const products = [
        { categories: ['prepaid', 'mobile'] } as OmapiProduct,
        { categories: ['broadband'] } as OmapiProduct,
      ];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByCategory(products$, 'prepaid').subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });

    it('should return false if no product contains the specified category', (done) => {
      const products = [
        { categories: ['broadband', 'mobile'] } as OmapiProduct,
        { categories: ['data', 'voice'] } as OmapiProduct,
      ];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByCategory(products$, 'prepaid').subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });

    it('should return false if there are no products', (done) => {
      const products = [] as OmapiProduct[];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByCategory(products$, 'data').subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });

    it('should return false if category is empty', (done) => {
      const products = [] as OmapiProduct[];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByCategory(products$, '').subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });
  });

  describe('checkOmapiProductsByLabel', () => {
    it('should return true if any product contains the specified label', (done) => {
      const products = [
        { labelKey: 'Unlimited Data Plan' } as OmapiProduct,
        { labelKey: 'Basic Voice Plan' } as OmapiProduct,
      ];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByLabel(products$, 'data').subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });

    it('should return false if no product contains the specified label', (done) => {
      const products = [
        { labelKey: 'Unlimited Text Plan' } as OmapiProduct,
        { labelKey: 'Family Plan' } as OmapiProduct,
      ];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByLabel(products$, 'data').subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });

    it('should return false if there are no products', (done) => {
      const products = [] as OmapiProduct[];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByLabel(products$, 'data').subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });

    it('should return false if label is empty', (done) => {
      const products = [] as OmapiProduct[];
      const products$ = of(products);

      OmapiProductCategoryUtil.checkOmapiProductsByLabel(products$, '').subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });
  });
  describe('isFixedProduct', () => {
    it('should return true if any product requires installation', (done) => {
      const products = [
        { requiresInstallation: true } as OmapiProduct,
        { requiresInstallation: false } as OmapiProduct,
      ];
      const products$ = of(products);

      OmapiProductCategoryUtil.isFixedProduct(products$).subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });
    it('should return false if no product requires installation', (done) => {
      const products = [
        { requiresInstallation: false } as OmapiProduct,
        { requiresInstallation: false } as OmapiProduct,
      ];
      const products$ = of(products);

      OmapiProductCategoryUtil.isFixedProduct(products$).subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });
  });
  describe('getUpdatedInternalCategory', () => {
    it('should return POSTPAID if the category includes POST_PAID_MOBILE', () => {
      const result = OmapiProductCategoryUtil.getUpdatedInternalCategory('POST-PAID MOBILE');
      expect(result).toBe('POSTPAID');
    });
    it('should return PREPAID if the category does not include POST_PAID_MOBILE', () => {
      const result = OmapiProductCategoryUtil.getUpdatedInternalCategory('PREPAID_MOBILE');
      expect(result).toBe('PREPAID');
    });
  });
});
