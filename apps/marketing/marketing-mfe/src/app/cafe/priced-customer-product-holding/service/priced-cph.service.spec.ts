import { PricedCphService } from './priced-cph.service';
import { ProductHolding } from '../../../http/cafe/product-holding/models/product-holding.model';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { Option } from '../../../http/cafe/product-holding/models/option.model';
import { Address } from '../../../http/common/address/models/address.model';
import { OmapiProduct, ServiceInterface } from '@telenet/ng-lib-omapi';
import { PricedCphOverview, PricedCphSpec } from '../model/priced-cph-data.model';
import { SpecificationsMapperService } from './specifications-mapper.service';
import {
  ProductBuilderRequest,
  ProductHoldingFactory,
  ProductTypeEnum,
} from '../../../http/cafe/product-holding/factories/product-holding.model.testfactory';
import { AddressTestfactory } from '../../../http/common/address/models/address.testfactory';
import { cafeBillTestFactory } from '../../../http/cafe/bills/factories/cafe-bill.interface.testfactory';

class MockSpecificationsMapperService extends SpecificationsMapperService {
  constructor() {
    super(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  map(product: Product, _parent?: Product): PricedCphSpec {
    const name = product?.productInfo?.name || '';
    return {
      key: name,
      label: {
        key: name,
        args: undefined,
      },
      icon: 'icon-' + name,
      amount: 1,
      weight: product?.productInfo?.weight || 0,
    };
  }
}

describe('PricedCphService', () => {
  let pricedCphService: PricedCphService;
  let specificationsMapperService: MockSpecificationsMapperService;

  beforeEach(() => {
    specificationsMapperService = new MockSpecificationsMapperService();

    pricedCphService = new PricedCphService(specificationsMapperService);
  });

  describe('getOverview', () => {
    it('should return empty overview for empty product holding without price', () => {
      const overview = pricedCphService.getOverview(new ProductHolding(), []);

      expect(overview[0]).toEqual({ products: [], options: [] });
    });
    it('should return empty overview when no product is visible without price', () => {
      const address = AddressTestfactory.build();
      const productHolding = buildProductHolding(
        [{ productType: ProductTypeEnum.WHOPPA, address: address }],
        ['WHOPPA'],
        [1]
      );

      (((productHolding ?? {}).products[0] ?? {}).productInfo ?? { visible: false }).visible = false;

      const overview = pricedCphService.getOverview(productHolding, []);

      expect(overview[0]).toEqual({ products: [], options: [] });
    });
    it('should return empty overview when product has no product info without price', () => {
      const address = AddressTestfactory.build();
      const productHolding = buildProductHolding(
        [{ productType: ProductTypeEnum.WHOPPA, address: address }],
        ['WHOPPA'],
        [1]
      );
      productHolding.products[0].productInfo = undefined;

      const overview = pricedCphService.getOverview(productHolding, []);

      expect(overview[0]).toEqual({ products: [], options: [] });
    });
    it('should return overview with visible product with only visible options without price', () => {
      const address = AddressTestfactory.build();
      const productHolding = buildProductHolding(
        [{ productType: ProductTypeEnum.WHOPPA, address: address }],
        ['WHOPPA'],
        [1]
      );

      const invisibleStreamz = streamz();
      invisibleStreamz.productInfo = undefined;
      productHolding.products[0].options = [invisibleOption(), invisibleStreamz];

      const overview = pricedCphService.getOverview(productHolding, []);

      expect(overview[0].options).toEqual([]);
    });
    it('should return overview with only products of the first installation address without price', () => {
      const address = AddressTestfactory.build();
      const otherAddress = AddressTestfactory.build({ addressId: 'other id' });
      const productHolding = buildProductHolding(
        [
          { productType: ProductTypeEnum.WHOPPA, address: address },
          { productType: ProductTypeEnum.WHOP, address: otherAddress },
        ],
        ['WHOPPA', 'WHOP'],
        [1, 1]
      );

      const overview = pricedCphService.getOverview(productHolding, []);

      whoppaAssertion(overview[0]);
    });
    it('should group and sort items correctly and set correct amount and icon without price', () => {
      const address = AddressTestfactory.build();
      const productHolding = buildProductHolding(
        [
          { productType: ProductTypeEnum.WIGO_15, address: address },
          { productType: ProductTypeEnum.TELENET_TV_FLOW, address: address },
        ],
        ['WIGO', 'invisible FLOW'],
        [1, 2]
      );
      productHolding.products[0].products = [
        internetLine(address),
        mobile(address),
        mobile(address),
        telephone(address, []),
        mobileInternet(address),
        invisibleProduct(address),
        dtv(address, [streamz(), beSports(), invisibleOption(), streamz()]),
      ];
      if (productHolding.products[1].productInfo) productHolding.products[1].productInfo.visible = false;

      const overviews = pricedCphService.getOverview(productHolding, []);

      const overview = overviews[0];

      expect(overview.products.length).toBe(1);
      expect(overview.options.length).toBe(2);

      expect(overview?.products[0]?.specifications?.length).toBe(5);

      expect(overview.products[0].key).toEqual('WIGO');

      expect(overview.products[0].amount).toEqual(1);

      expect(overview.products[0].weight).toEqual(1);

      expect(overview?.products[0]?.specifications && overview?.products[0]?.specifications[0]?.key).toEqual(
        Product.DTV
      );

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[0].amount).toBe(1);

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[1].key).toEqual(
        'Internet Line'
      );

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[1].amount).toBe(1);

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[2].key).toEqual('mobile');

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[2].amount).toBe(2);

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[3].key).toEqual(
        'Fixed telephone'
      );

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[3].amount).toBe(1);

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[4].key).toEqual(
        'mobile internet'
      );

      expect(overview?.products[0]?.specifications && overview.products[0].specifications[4].amount).toBe(1);

      expect(overview.options[0].key).toEqual('Streamz');

      expect(overview.options[0].amount).toBe(2);

      expect(overview.options[0].weight).toBe(1);

      expect(overview.options[1].key).toEqual('BE sports');

      expect(overview.options[1].amount).toBe(1);

      expect(overview.options[1].weight).toBe(5);
    });

    it('should return an overview with price given bills matching with cph', () => {
      const bills = [cafeBillTestFactory.build()];

      const address = AddressTestfactory.build();
      const otherAddress = AddressTestfactory.build({ addressId: 'other id' });
      const productHolding = buildProductHolding(
        [
          { productType: ProductTypeEnum.WHOPPA, address: address },
          { productType: ProductTypeEnum.WHOP, address: otherAddress },
        ],
        ['WHOPPA', 'WHOP'],
        [1, 1]
      );

      productHolding.products[0].accountNumber = 12345;

      const overview = pricedCphService.getOverview(productHolding, bills);

      whoppaAssertion(overview[0]);

      expect(overview[0].lastBillPrice).toEqual('30');
    });
    it('should not return an overview with price given bills not with cph', () => {
      const bills = [cafeBillTestFactory.build()];

      const address = AddressTestfactory.build();
      const productHolding = buildProductHolding(
        [{ productType: ProductTypeEnum.WHOPPA, address: address }],
        ['WHOPPA'],
        [1]
      );

      productHolding.products[0].accountNumber = 56789;

      const overview = pricedCphService.getOverview(productHolding, bills);

      whoppaAssertion(overview[0]);

      expect(overview[0].lastBillPrice).toBeUndefined();
    });

    function whoppaAssertion(overview: PricedCphOverview) {
      expect(overview.products.length).toBe(1);

      expect(overview.options.length).toBe(0);

      expect(overview.products[0].specifications?.length).toBe(1);

      expect(overview.products[0].key).toEqual('WHOPPA');

      expect(overview.products[0].amount).toEqual(1);

      expect(overview.products[0].weight).toEqual(1);
    }
  });
});

function buildProductHolding(
  productTypes: ProductBuilderRequest[],
  names: string[],
  weights: number[]
): ProductHolding {
  const productHolding = ProductHoldingFactory.build(productTypes);

  productHolding.products.forEach((product, index) => {
    if (product.productInfo) {
      product.productInfo.visible = true;
      product.productInfo.name = names[index];
      product.productInfo.weight = weights[index];
    }
    product.accountNumber = 12345;
  });
  return productHolding;
}

function internetLine(address: Address): Product {
  return buildProduct('Internet Line', 2, Product.FIXED_INTERNET, address, []);
}

function dtv(address: Address, options: Option[] = []): Product {
  return buildProduct(Product.DTV, 1, Product.DTV, address, options);
}

function telephone(address: Address, options: Option[] = []): Product {
  return buildProduct('Fixed telephone', 4, Product.FIXED_CALLING, address, options);
}

function mobile(address: Address): Product {
  return buildProduct('mobile', 3, Product.MOBILE_CALLING, address, []);
}

function mobileInternet(address: Address): Product {
  return buildProduct('mobile internet', 5, Product.MOBILE_INTERNET, address, []);
}

function invisibleProduct(address: Address): Product {
  return buildProduct('INVISIBLE', 5, Product.MOBILE_INTERNET, address, [], false);
}

function buildProduct(
  name: string,
  weight: number,
  service: string,
  address: Address,
  options: Option[],
  visible: boolean = true
) {
  const product = new Product();

  product.address = address;
  product.productInfo = new OmapiProduct();
  product.productInfo.name = name;
  product.productInfo.weight = weight;
  product.productInfo.services = getServices(service);
  product.productInfo.visible = visible;
  product.options = options;

  return product;
}

function streamz(): Option {
  return buildOption('Streamz', 1, Product.DTV);
}

function beSports(): Option {
  return buildOption('BE sports', 5, Product.DTV);
}

function invisibleOption(): Option {
  return buildOption('INVISIBLE', 5, Product.DTV, false);
}

function buildOption(name: string, weight: number, service: string, visible: boolean = true): Option {
  const option = new Option();

  option.productInfo = new OmapiProduct();
  option.productInfo.name = name;
  option.productInfo.weight = weight;
  option.productInfo.services = getServices(service);
  option.productInfo.visible = visible;

  return option;
}

function getServices(type: string): ServiceInterface[] {
  return [{ serviceType: type, specifications: [] }];
}
