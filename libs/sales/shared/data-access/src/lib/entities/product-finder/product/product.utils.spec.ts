import { ProductUtils } from './product.utils';
import { Product } from './product.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('ProductUtils ', () => {
  const telenetMobile13Gb = 'Telenet Mobile 13 GB';

  describe('getUniqueProducts', () => {
    it('should return unique products based on omapi externalProductCode', () => {
      const omapiProduct: OmapiProduct = new OmapiProduct();
      omapiProduct.externalProductCode = '1';
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];

      const result: Product[] = ProductUtils.getUniqueProducts(products);

      expect(result).toHaveLength(1);
    });
  });

  describe('getNumberOfTimesMobileProductOccurs', () => {
    it('should return number of times a mobile product occurs', () => {
      const omapiProduct: OmapiProduct = new OmapiProduct();
      omapiProduct.externalProductCode = '1';
      omapiProduct.productType = 'MOBILE';
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];

      const result: number = ProductUtils.getNumberOfTimesMobileProductOccurs(
        products,
        omapiProduct.externalProductCode
      );

      expect(result).toEqual(2);
    });
  });

  describe('createTitle', () => {
    it('should join localized omapi names with +', () => {
      const easyInternetOmapiProduct: OmapiProduct = new OmapiProduct();
      easyInternetOmapiProduct.externalProductCode = 'INTB0001';

      const telenetMobile13GbOmapiProduct: OmapiProduct = new OmapiProduct();
      telenetMobile13GbOmapiProduct.externalProductCode = 'TMOB0001';
      telenetMobile13GbOmapiProduct.productType = 'MOBILE';

      const products: Product[] = [
        {
          localizedOmapiProductName: 'Easy Internet',
          omapiProduct: easyInternetOmapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
        {
          localizedOmapiProductName: telenetMobile13Gb,
          omapiProduct: telenetMobile13GbOmapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];

      const expected = 'Easy Internet + Telenet Mobile 13 GB';

      const result: string = ProductUtils.createTitle(products);

      expect(result).toEqual(expected);
    });

    it('should prefix mobile products with number of times the product occurs', () => {
      const telenetMobile13GbOmapiProduct: OmapiProduct = new OmapiProduct();
      telenetMobile13GbOmapiProduct.externalProductCode = 'TMOB0001';
      telenetMobile13GbOmapiProduct.productType = 'MOBILE';

      const product = {
        localizedOmapiProductName: telenetMobile13Gb,
        omapiProduct: telenetMobile13GbOmapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [],
        },
      };
      const products: Product[] = [product, product];

      const expected = '2x Telenet Mobile 13 GB';

      const result: string = ProductUtils.createTitle(products);

      expect(result).toEqual(expected);
    });

    it('should use c5 product localizedOmapiProductName as title', () => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      const product = {
        localizedOmapiProductName: 'ONE for one',
        omapiProduct: c5OmapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [],
        },
      };
      const products: Product[] = [product, product];

      const expected = 'ONE for one';

      jest.spyOn(c5OmapiProduct, 'isConnect5').mockReturnValue(true);

      const result: string = ProductUtils.createTitle(products);

      expect(result).toEqual(expected);
    });
  });

  describe('findC5Product', () => {
    it('should return C5 product', () => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      jest.spyOn(c5OmapiProduct, 'isConnect5').mockReturnValue(true);

      const expected = {
        localizedOmapiProductName: '',
        omapiProduct: c5OmapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [],
        },
      };

      const result: Product | undefined = ProductUtils.findC5Product([expected]);

      expect(result).toEqual(expected);
    });

    it('should return undefined', () => {
      const omapiProduct: OmapiProduct = new OmapiProduct();
      jest.spyOn(omapiProduct, 'isConnect5').mockReturnValue(false);

      const product = {
        localizedOmapiProductName: '',
        omapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [],
        },
      };

      const result: Product | undefined = ProductUtils.findC5Product([product]);

      expect(result).toEqual(undefined);
    });
  });

  describe('createFieldSelectedProduct', () => {
    it('should join localized omapi names and replace spaces with _', () => {
      const easyInternetOmapiProduct: OmapiProduct = new OmapiProduct();
      easyInternetOmapiProduct.externalProductCode = 'INTB0001';

      const telenetMobile13GbOmapiProduct: OmapiProduct = new OmapiProduct();
      telenetMobile13GbOmapiProduct.externalProductCode = 'TMOB0001';
      telenetMobile13GbOmapiProduct.productType = 'MOBILE';

      const products: Product[] = [
        {
          localizedOmapiProductName: 'Easy Internet',
          omapiProduct: easyInternetOmapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
        {
          localizedOmapiProductName: telenetMobile13Gb,
          omapiProduct: telenetMobile13GbOmapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];

      const expected = 'Easy_Internet_1x_Telenet_Mobile_13_GB';

      const result: string = ProductUtils.createFieldSelectedProduct(products);

      expect(result).toEqual(expected);
    });

    it('should prefix mobile products with number of times the product occurs', () => {
      const telenetMobile13GbOmapiProduct: OmapiProduct = new OmapiProduct();
      telenetMobile13GbOmapiProduct.externalProductCode = 'TMOB0001';
      telenetMobile13GbOmapiProduct.productType = 'MOBILE';

      const product = {
        localizedOmapiProductName: telenetMobile13Gb,
        omapiProduct: telenetMobile13GbOmapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [],
        },
      };
      const products: Product[] = [product, product];

      const expected = '2x_Telenet_Mobile_13_GB';

      const result: string = ProductUtils.createFieldSelectedProduct(products);

      expect(result).toEqual(expected);
    });
  });
});
