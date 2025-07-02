import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { Product } from './product.model';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';

describe('ProductModel', () => {
  let product: Product;
  let productInfo: OmapiProduct;
  beforeEach(() => {
    product = new Product();
    productInfo = new OmapiProduct();
    product.productInfo = productInfo;
  });

  describe('isFmc', () => {
    it('should return true the product group is FMC', () => {
      if (product?.productInfo) product.productInfo.characteristics = { productGroup: 'FMC' };

      expect(product.isFmc()).toBe(true);
    });

    it('should return false the product group is NO FMC', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = {
          productGroup: 'TEST',
        };
      expect(product.isFmc()).toBe(false);
    });
  });

  describe('is3P', () => {
    it('should return true the product group is 3P', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = {
          productLevel: '3P',
        };

      expect(product.is3P()).toBe(true);
    });

    it('should return false the product group is NO 3P', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = [
          {
            productLevel: 'TEST',
          },
        ];
      expect(product.is3P()).toBe(false);
    });
  });

  describe('is4P', () => {
    it('should return true the product group is 3P', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = {
          productLevel: '4P',
        };
      expect(product.is4P()).toBe(true);
    });

    it('should return false the product group is NO 3P', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = [
          {
            productLevel: 'TEST',
          },
        ];
      expect(product.is4P()).toBe(false);
    });
  });

  describe('isMidTier', () => {
    it('should return true the product group is Mid tier', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = {
          productTier: 'Mid',
        };
      expect(product.isMidTier()).toBe(true);
    });

    it('should return false the product group is NOT Mid tier', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = [
          {
            productTier: 'TEST',
          },
        ];
      expect(product.isMidTier()).toBe(false);
    });
  });

  describe('isHighTier', () => {
    it('should return true the product group is High tier', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = {
          productTier: 'High',
        };
      expect(product.isHighTier()).toBe(true);
    });

    it('should return false the product group is NOT High tier', () => {
      if (product?.productInfo)
        product.productInfo.characteristics = [
          {
            productTier: 'Mid',
          },
        ];
      expect(product.isHighTier()).toBe(false);
    });
  });

  describe('isWhop', () => {
    it('should return true the product is Whop', () => {
      if (product?.productInfo) product.productInfo.productId = '71';
      expect(product.isWhop()).toBe(true);
    });

    it('should return false the product group is NOT Whop', () => {
      if (product?.productInfo) product.productInfo.productId = '75';
      if (product?.productInfo)
        product.productInfo.characteristics = [
          {
            productgroup: 'TEST',
          },
        ];
      expect(product.isWhop()).toBe(false);
    });
  });

  describe('isWhoppa', () => {
    it('should return true the product is Whoppa', () => {
      if (product?.productInfo) product.productInfo.productId = '70';
      expect(product.isWhoppa()).toBe(true);
    });

    it('should return false the product group is NOT Whoppa', () => {
      if (product?.productInfo) product.productInfo.productId = '75';
      if (product?.productInfo)
        product.productInfo.characteristics = [
          {
            productgroup: 'TEST',
          },
        ];
      expect(product.isWhoppa()).toBe(false);
    });
  });

  describe('isInternetProduct', () => {
    it('should return true the product is an internet product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.FIXED_INTERNET,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isInternet()).toBe(true);
    });

    it('should return false the product group is NOT an internet product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.FIXED_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isInternet()).toBe(false);
    });
  });

  describe('isMobile', () => {
    it('should return true the product is an mobile product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.MOBILE_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isMobile()).toBe(true);
    });

    it('should return false the product group is NOT an mobile product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.FIXED_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isMobile()).toBe(false);
    });
  });

  describe('isDTV', () => {
    it('should return true if the product is a dtv product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.DTV,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isDTV()).toBe(true);
    });

    it('should return false if the product group is NOT a dtv product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.FIXED_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isDTV()).toBe(false);
    });
  });

  describe('hasDtvSubProducts', () => {
    it('should return true if the sub product is a dtv product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.GENERAL,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      const omapiProduct = OmapiProductTestfactory.build();
      omapiProduct.services = [
        {
          serviceType: Product.DTV,
          experience: { experienceType: '' },
          specifications: [],
        },
      ];
      product.products = [
        {
          productInfo: omapiProduct,
          isDTV(): boolean {
            return true;
          },
        } as Product,
      ];

      expect(product.hasDtvSubProducts()).toBe(true);
    });

    it('should return false if the sub product group is NOT a dtv product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.GENERAL,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      const omapiProduct = OmapiProductTestfactory.build();
      omapiProduct.services = [
        {
          serviceType: Product.FIXED_CALLING,
          experience: { experienceType: '' },
          specifications: [],
        },
      ];
      product.products = [
        {
          productInfo: omapiProduct,
          isDTV(): boolean {
            return false;
          },
        } as Product,
      ];

      expect(product.hasDtvSubProducts()).toBe(false);
    });
  });

  describe('isMobileInternet', () => {
    it('should return true the product is an mobile internet product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.MOBILE_INTERNET,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isMobileInternet()).toBe(true);
    });

    it('should return false the product group is NOT an mobile internet product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.MOBILE_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isMobileInternet()).toBe(false);
    });

    it('should return false the product group is a mobile internet and mobile calling product', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: 'MOBILE_INTERNET',
            experience: { experienceType: '' },
            specifications: [],
          },
          {
            serviceType: Product.MOBILE_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];

      expect(product.isMobileInternet()).toBe(false);
    });
  });

  describe('characteristicCheck', () => {
    it('should return false if no omapidata is present', () => {
      product = new Product();
      expect(product.isHighTier()).toBe(false);
      expect(product.isFmc()).toBe(false);
      expect(product.is3P()).toBe(false);
    });
  });

  describe('isFixedCalling', () => {
    it('should return false if no service present', () => {
      expect(product.isFixedCalling()).toBeFalsy();
    });
    it('should return false if no FIXED_CALLING service present 2', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          { serviceType: Product.DTV, experience: { experienceType: '' }, specifications: [] },
        ];
      expect(product.isFixedCalling()).toBeFalsy();
    });
    it('should return true if FIXED_CALLING service present', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.FIXED_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];
      expect(product.isFixedCalling()).toBeTruthy();
    });
    it('should return false if FIXED_CALLING service is not present', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.FIXED_INTERNET,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];
      expect(product.isFixedCalling()).toBeFalsy();
    });
    it('should return true if FIXED_CALLING service present in one of the services', () => {
      if (product?.productInfo)
        product.productInfo.services = [
          {
            serviceType: Product.DTV,
            experience: { experienceType: '' },
            specifications: [],
          },
          {
            serviceType: Product.FIXED_CALLING,
            experience: { experienceType: '' },
            specifications: [],
          },
        ];
      expect(product.isFixedCalling()).toBeTruthy();
    });
  });

  describe('getOmapiId', () => {
    it('should return undefined if no product info is present', function () {
      product.productInfo = undefined;

      expect(product.getOmapiId()).toBeUndefined();
    });
    it('should return undefined if no product id present', function () {
      if (product?.productInfo) product.productInfo.productId = undefined;

      expect(product.getOmapiId()).toBeUndefined();
    });
    it('should return the product id', function () {
      if (product?.productInfo) product.productInfo.productId = '123456';

      expect(product.getOmapiId()).toEqual('123456');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
