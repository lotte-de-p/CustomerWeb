import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { Product } from './product.model';
import { ProductHolding } from './product-holding.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { LineEnum } from '@telenet/ng-lib-form';
import { AddressTestfactory } from '../../../common/address/models/address.testfactory';
import {
  ProductFactory,
  ProductHoldingFactory,
  ProductServiceEnum,
  ProductTypeEnum,
} from '../factories/product-holding.model.testfactory';
import { ProductPredicates } from './product-predicates';

describe('ProductHoldingModel', () => {
  let productHolding: ProductHolding;

  beforeEach(() => {
    productHolding = new ProductHolding();
  });

  describe('containsFMC', () => {
    it('should return true if there is a product containing FM', () => {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOPPA, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WIGO_15, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.containsFMC()).toBe(true);
    });

    it('should return false  if there is no product containing FMC', () => {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOPPA, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WHOP, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.containsFMC()).toBe(false);
    });
  });

  describe('containsWigoHomeS', () => {
    it('should return true if there is a product containing FMC', () => {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOPPA, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WIGO_HOME_S, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.containsWigoHomeS()).toBe(true);
    });

    it('should return false  if there is no product containing FMC', () => {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOPPA, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WIGO_15, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.containsWigoHomeS()).toBe(false);
    });
  });

  describe('containsWhoppa', () => {
    it('should true if there is a product containing Whoppa', function () {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOPPA, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WIGO_15, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.containsWhoppa()).toBe(true);
    });

    it('should true false there is no product containing Whoppa', function () {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOP, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WIGO_15, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.containsWhoppa()).toBe(false);
    });
  });

  describe('containsInternetProduct', () => {
    beforeEach(() => {
      productHolding.products = [];
      const address = AddressTestfactory.build({ addressId: '1' });
      const product = new Product();
      product.address = address;
      product.productInfo = new OmapiProduct();
      product.productInfo.services = [
        {
          serviceType: Product.DTV,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
        {
          serviceType: Product.ATV,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
      ];
      productHolding.products.push(product);
    });

    it('should return true if there is a product containing internet', function () {
      const secondProduct = new Product();
      secondProduct.address = AddressTestfactory.build({ addressId: '1' });
      secondProduct.productInfo = new OmapiProduct();
      secondProduct.productInfo.services = [
        {
          serviceType: Product.FIXED_CALLING,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
      ];

      const bundleProduct = new Product();
      bundleProduct.address = AddressTestfactory.build({ addressId: '1' });
      bundleProduct.productInfo = new OmapiProduct();
      bundleProduct.productInfo.services = [
        {
          serviceType: Product.FIXED_INTERNET,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
        {
          serviceType: Product.FIXED_CALLING,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
      ];

      secondProduct.products.push(bundleProduct);
      productHolding.products.push(secondProduct);

      expect(productHolding.containsInternetProduct()).toBe(true);
    });

    it('should return false there is no product containing internet', function () {
      expect(productHolding.containsInternetProduct()).toBe(false);
    });
  });

  describe('getLinesForAddress', () => {
    it('should return the lines for a certain address', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.INTERNET, ProductServiceEnum.PHONE],
          address: address,
        },
      ]);

      const lines = productHolding.getLinesForAddress(address);
      expect(lines).toContain(LineEnum.IDTV);
      expect(lines).toContain(LineEnum.ANALOGTV);
      expect(lines).toContain(LineEnum.INTERNET);
      expect(lines).toContain(LineEnum.PHONE);
    });

    it('should return the lines for a certain address also with nested products', () => {
      productHolding.products = [];
      const address = AddressTestfactory.build({ addressId: '1' });
      const product = new Product();
      product.address = address;
      product.productInfo = new OmapiProduct();
      product.productInfo.services = [
        {
          serviceType: Product.DTV,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
        {
          serviceType: Product.ATV,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
      ];

      const secondProduct = new Product();
      secondProduct.address = address;
      secondProduct.productInfo = new OmapiProduct();
      secondProduct.productInfo.services = [
        {
          serviceType: Product.FIXED_INTERNET,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
        {
          serviceType: Product.FIXED_CALLING,
          experience: {
            experienceType: 'none',
          },
          specifications: [],
        },
      ];

      product.products = [];
      product.products.push(secondProduct);
      productHolding.products.push(product);

      const lines = productHolding.getLinesForAddress(address);
      expect(lines).toContain(LineEnum.IDTV);
      expect(lines).toContain(LineEnum.ANALOGTV);
      expect(lines).toContain(LineEnum.INTERNET);
      expect(lines).toContain(LineEnum.PHONE);
    });

    it('should return false if there is no product containing FMC for the requested address', () => {
      productHolding.products = [];
      const address = AddressTestfactory.build({ addressId: '1' });
      const secondAddress = AddressTestfactory.build({ addressId: '2' });

      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.INTERNET, ProductServiceEnum.PHONE],
          address: secondAddress,
        },
      ]);

      const lines = productHolding.getLinesForAddress(address);
      expect(lines).toContain(LineEnum.IDTV);
      expect(lines).toContain(LineEnum.ANALOGTV);
      expect(lines).not.toContain(LineEnum.INTERNET);
      expect(lines).not.toContain(LineEnum.PHONE);
    });
  });

  describe('getMaxMobileLines', () => {
    it('should return the amount of max mobile lines of the first product', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.C5_FAST_PAX2,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
      ]);

      const maxMobileLines = productHolding.getMaxMobileLines();
      expect(maxMobileLines).toEqual('2');
    });
  });

  describe('getBundleMaxMobileLines', () => {
    it('should return the amount of max mobile lines of the first bundle', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.C5_FAST_PAX2,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
      ]);

      const maxMobileLines = productHolding.getBundleMaxMobileLines();
      expect(maxMobileLines).toEqual(2);
    });
  });

  describe('getProductsForAddress', () => {
    it('should return products for a certain address', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.INTERNET, ProductServiceEnum.PHONE],
          address: address,
        },
      ]);

      const products = productHolding.getProductsForAddress(productHolding.products, address);
      expect(products[0].address).toEqual(address);
    });
  });

  describe('getLines', () => {
    it('should return the lines for a set of products', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.INTERNET, ProductServiceEnum.PHONE],
          address: address,
        },
      ]);

      const lines = productHolding.getLines();
      expect(lines).toContain(LineEnum.IDTV);
      expect(lines).toContain(LineEnum.ANALOGTV);
      expect(lines).toContain(LineEnum.INTERNET);
      expect(lines).toContain(LineEnum.PHONE);
    });
  });

  describe('getFixedLine', () => {
    it('should return the fixed line number', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.WIGO_HOME,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
      ]);

      const fixedLine = productHolding.getFixedLine();
      expect(fixedLine).toEqual('015557766');
    });
    it('should return empty if no fixed line number present', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.WHOP,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
      ]);

      const fixedLine = productHolding.getFixedLine();
      expect(fixedLine).toEqual('');
    });
  });

  describe('getProductIds', () => {
    it('should return a list of productIds the products in holding', () => {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.WHOPPA, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.WIGO_15, address: AddressTestfactory.build() },
      ]);
      expect(productHolding.getProductIds()).toEqual(expect.arrayContaining(['70', '20050']));
    });
  });

  describe('containsOnlyGivenProductsAndOptions', () => {
    it('should return false if list of products have different size', function () {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.C5_FAST_PAX2, address: AddressTestfactory.build() },
      ]);

      expect(productHolding.containsOnlyGivenProductsAndOptions(['36860', 'other'])).toBe(false);
    });
    it('should return false if list of products does not have correct omapi ID', function () {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.C5_FAST_PAX2, address: AddressTestfactory.build() },
      ]);

      expect(productHolding.containsOnlyGivenProductsAndOptions(['36861'])).toBe(false);
    });
    it('should return true if list of products has correct omapi ID', function () {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.C5_FAST_PAX2, address: AddressTestfactory.build() },
      ]);

      expect(productHolding.containsOnlyGivenProductsAndOptions(['36860'])).toBe(true);
    });
    it('should return true if list of products has all the omapi IDs', function () {
      productHolding = ProductHoldingFactory.build([
        { productType: ProductTypeEnum.C5_FAST_PAX2, address: AddressTestfactory.build() },
        { productType: ProductTypeEnum.YUGO_CONNECT_30, address: AddressTestfactory.build() },
      ]);

      expect(productHolding.containsOnlyGivenProductsAndOptions(['36860', '33996'])).toBe(true);
    });
  });

  describe('installationAddresses', () => {
    it('should get the installationAddreses', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.EMPTY,
          productServices: [ProductServiceEnum.ANALOGTV, ProductServiceEnum.IDTV],
          address: address,
        },
      ]);
      const addresses = productHolding.installationAddresses;
      expect(addresses.length).toEqual(1);
      expect(addresses[0]).toEqual(address);
    });
  });

  describe('installationAddressesForProduct', () => {
    it('should get the installationAddressesForProduct', () => {
      const address = AddressTestfactory.build();
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.KLIK_2SIM_LIMITED,
          productServices: [ProductServiceEnum.INTERNET_WITH_FREEPHONE_BUSINESS, ProductServiceEnum.IDTV],
          address: address,
        },
      ]);
      const addresses = productHolding.getInstallationAddressesForProduct(ProductPredicates.freePhoneBusinessPredicate);
      expect(addresses.length).toEqual(1);
      expect(addresses[0]).toEqual(address);
    });
  });

  describe('getBundleDtvIdentifier', () => {
    it('should return undefined if productholding does not contain bundle', () => {
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.DTV,
          productServices: [ProductServiceEnum.IDTV],
          address: AddressTestfactory.build(),
        },
      ]);

      const actual = productHolding.getBundleDtvIdentifier();
      expect(actual).toBeUndefined();
    });
    it('should return undefined if bundle does not contain DTV', () => {
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.WIGO_15,
          productServices: [ProductServiceEnum.INTERNET],
          address: AddressTestfactory.build(),
        },
      ]);

      const actual = productHolding.getBundleDtvIdentifier();
      expect(actual).toBeUndefined();
    });
    it('should return dtv identifier for bundle containing DTV', () => {
      const dtv = ProductFactory.build({
        productType: ProductTypeEnum.DTV,
        productServices: [ProductServiceEnum.IDTV],
        address: AddressTestfactory.build(),
      });
      productHolding = ProductHoldingFactory.build([
        {
          productType: ProductTypeEnum.WIGO_15,
          productServices: [ProductServiceEnum.INTERNET],
          address: AddressTestfactory.build(),
        },
      ]);
      productHolding.products[0].products = [dtv];

      const actual = productHolding.getBundleDtvIdentifier();
      expect(actual).toEqual('dtv1234');
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
