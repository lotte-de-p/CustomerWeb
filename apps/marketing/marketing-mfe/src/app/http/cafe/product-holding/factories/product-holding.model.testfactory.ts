import { OmapiProduct, ServiceInterface, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { Address } from '../../../common/address/models/address.model';
import { Product } from '../models/product.model';
import { ProductHolding } from '../models/product-holding.model';

export interface ProductBuilderRequest {
  productType: ProductTypeEnum;
  productServices?: ProductServiceEnum[];
  address: Address;
}

export enum ProductTypeEnum {
  EMPTY,
  WHOP,
  WHOPPA,
  WIGO_HOME,
  WIGO_HOME_S,
  WIGO_S_3,
  WIGO_S_3_1SIM,
  WIGO_6,
  WIGO_9,
  WIGO_15,
  WIGO_35,
  WIGO_60,
  WIGO_UNLIMITED,
  YUGO_15,
  YUGO_30,
  YUGO_CONNECT_15,
  YUGO_CONNECT_30,
  C5_FAST_PAX2,
  TELENET_TV_FLOW,
  KLIK_2SIM_LIMITED,
  DTV,
}

export enum ProductServiceEnum {
  IDTV,
  ANALOGTV,
  PHONE,
  INTERNET,
  MOBILE_INTERNET,
  MOBILE_CALLING,
  INTERNET_WITH_FREEPHONE_BUSINESS,
}

export class ProductFactory {
  static build(productRequest: ProductBuilderRequest): Product {
    const productType = productRequest.productType;
    const product = new Product();

    if (!productRequest.productServices) {
      productRequest.productServices = [];
    }
    product.address = productRequest.address;

    switch (productType) {
      case ProductTypeEnum.EMPTY:
        product.productInfo = new OmapiProduct();
        break;
      case ProductTypeEnum.DTV:
        product.identifier = 'dtv1234';
        product.productInfo = new OmapiProduct();
        break;
      case ProductTypeEnum.WHOP:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '71';
        product.productInfo.productType = 'PRODUCT';
        product.productInfo.characteristics = {
          productsegment: 'ALL',
          productGroup: 'OTHER',
        };
        break;
      case ProductTypeEnum.WHOPPA:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '70';
        product.productInfo.characteristics = {
          productsegment: 'ALL',
          productGroup: 'OTHER',
        };
        break;
      case ProductTypeEnum.WIGO_HOME:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '20046';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '146',
          productLevel: '3P',
        };
        product.products = [ProductFactory.fixedLine(product.address)];
        product.productInfo.isBundle = () => true;
        break;
      case ProductTypeEnum.WIGO_HOME_S:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '20047';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '146',
          productLevel: '3P',
        };
        break;
      case ProductTypeEnum.WIGO_S_3_1SIM:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '31035';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '165',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_S_3:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '20048';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '165',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_6:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '20049';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '148',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_9:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '1599';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '126',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_15:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '20050';
        product.productInfo.productType = 'BUNDLE';
        product.productInfo.localizedContent = [{ locale: 'nl', name: 'wigo 15GB' }];
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '149',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_35:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '87';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '111',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_60:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '94';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '115',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.WIGO_UNLIMITED:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '1600';
        product.productInfo.characteristics = {
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '127',
          productLevel: '4P',
        };
        break;
      case ProductTypeEnum.YUGO_15:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '22907';
        product.productInfo.characteristics = {
          productSubGroup: 'NDH',
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '156',
          productLevel: '2P',
        };
        break;
      case ProductTypeEnum.YUGO_30:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '12213';
        product.productInfo.characteristics = {
          productSubGroup: 'NDH',
          productsegment: 'RMD',
          productTier: 'High',
          productGroup: 'FMC',
          activationsalesofferingid: '142',
          productLevel: '2P',
        };
        break;
      case ProductTypeEnum.YUGO_CONNECT_15:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '33995';
        product.productInfo.characteristics = {
          productSubGroup: 'NDH',
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '169',
          productLevel: '2P',
        };
        break;
      case ProductTypeEnum.YUGO_CONNECT_30:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '33996';
        product.productInfo.characteristics = {
          productSubGroup: 'NDH',
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '170',
          productLevel: '2P',
        };
        break;
      case ProductTypeEnum.C5_FAST_PAX2:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '36860';
        product.productInfo.characteristics = {
          productSubGroup: 'C5',
          productsegment: 'RMD',
          productTier: 'Mid',
          productGroup: 'FMC',
          activationsalesofferingid: '173',
          productLevel: '3P',
          priceExclVat: 45.21,
          priceInclVat: 45,
          maxMobileLines: '2',
        };
        product.productInfo.isBundle = () => true;
        break;
      case ProductTypeEnum.KLIK_2SIM_LIMITED:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '45975';
        product.productInfo.characteristics = {
          productsubgroup: 'C5 SOHO',
          productsegment: 'TB',
          producttier: 'High',
          productgroup: 'FMC',
          activationsalesofferingid: '128',
          productlevel: '4P',
        };
        break;
      case ProductTypeEnum.TELENET_TV_FLOW:
        product.productInfo = new OmapiProduct();
        product.productInfo.productId = '43755';
        product.productInfo.characteristics = {
          productsegment: 'ALL',
          productGroup: 'OTHER',
        };
    }
    product.productInfo.services = productRequest.productServices.map((serviceType) => {
      switch (serviceType) {
        case ProductServiceEnum.IDTV:
          return {
            serviceType: Product.DTV,
            experience: {
              experienceType: 'none',
            },
            specifications: [],
          };
        case ProductServiceEnum.ANALOGTV:
          return {
            serviceType: Product.ATV,
            experience: {
              experienceType: 'none',
            },
            specifications: [],
          };
        case ProductServiceEnum.INTERNET:
          return {
            serviceType: Product.FIXED_INTERNET,
            experience: {
              experienceType: 'none',
            },
            specifications: [
              {
                labelKey: 'spec-fixedinternet-speed-download',
                value: '200',
                unit: 'Mbps',
              } as SpecificationInterface,
              {
                labelKey: 'spec-fixedinternet-volume-download-cap',
                value: '2000',
                unit: 'GB',
              } as SpecificationInterface,
            ],
          };
        case ProductServiceEnum.INTERNET_WITH_FREEPHONE_BUSINESS:
          product.options = [
            {
              label: '',
              specUrl: '',
              productInfo: new OmapiProduct(),
              getOmapiId: () => '3159',
            },
          ];
          return {
            serviceType: Product.FIXED_INTERNET,
            experience: {
              experienceType: 'none',
            },
            options: [
              {
                omapiId: '3159',
              },
            ],
            specifications: [
              {
                labelKey: 'spec-fixedinternet-speed-download',
                value: '200',
                unit: 'Mbps',
              } as SpecificationInterface,
              {
                labelKey: 'spec-fixedinternet-volume-download-cap',
                value: '2000',
                unit: 'GB',
              } as SpecificationInterface,
            ],
          };
        case ProductServiceEnum.PHONE:
          return {
            serviceType: Product.FIXED_CALLING,
            experience: {
              experienceType: 'none',
            },
            specifications: [],
          };
        case ProductServiceEnum.MOBILE_CALLING:
          return {
            serviceType: Product.MOBILE_CALLING,
            experience: {
              experienceType: 'none',
            },
            specifications: [],
          };
        case ProductServiceEnum.MOBILE_INTERNET:
          return {
            serviceType: Product.MOBILE_INTERNET,
            experience: {
              experienceType: 'none',
            },
            specifications: [],
          };
      }
    });

    return product;
  }

  static fixedLine(address: Address): Product {
    const product = ProductFactory.build({
      productType: ProductTypeEnum.EMPTY,
      productServices: [ProductServiceEnum.PHONE],
      address: address,
    });
    product.identifier = '015557766';
    if (product?.productInfo)
      product.productInfo.services = [
        {
          serviceType: Product.FIXED_CALLING,
        } as ServiceInterface,
      ];
    return product;
  }
}

export class ProductHoldingFactory {
  static build(productTypes: ProductBuilderRequest[]): ProductHolding {
    const productHolding = new ProductHolding();
    productHolding.products = productTypes.map((request) => ProductFactory.build(request));
    return productHolding;
  }
}
