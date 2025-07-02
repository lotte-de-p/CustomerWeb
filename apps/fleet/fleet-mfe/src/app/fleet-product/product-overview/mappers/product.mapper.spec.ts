import {
  OmapiProductMapper,
  RawOmapiProductInterface,
  RawOmapiProductInterfaceData,
  RawServiceInterface,
  RawSpecificationInterface,
} from '@telenet/ng-lib-omapi';
import { ProductMapper } from './product.mapper';
import {
  RawContractDetailsInterface,
  RawHandsetInterface,
  RawOptionInterface,
  RawProduct,
  RawContentPacksInterface,
  RawProductPrice,
} from '../interfaces/raw-product.interface';
import { TestBed } from '@angular/core/testing';
import { ProductOverviewConstants } from '../../../shared/common/constants/product-overview.constant';
import { RawProductFactory } from '../factory/raw-product.factory';
import { ContractInterface, PriceInterface } from '../../../shared/common/models/product.model';
import {
  RawColorInterface,
  RawOmapiQueryProductInterfaceData,
  RawVariantsInterface,
} from '@telenet/ng-lib-omapi-query';
const mockProductJson: RawProduct[] = [RawProductFactory.rawProduct({})];
const date = '2025-01-01';

describe('ProductMapper', () => {
  let productMapper: ProductMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OmapiProductMapper,
        { provide: 'Window', useValue: { document: { documentElement: { lang: 'nl' } } } },
      ],
      imports: [],
    });
    productMapper = TestBed.inject(ProductMapper);
  });

  describe('toModel', () => {
    it('should return a valid product object', () => {
      const actual = productMapper.toModel(mockProductJson);
      const expectedPrice = {
        currency: undefined,
        recurrentTotal: undefined,
        recurrentDiscounted: undefined,
        recurrentDiscount: undefined,
        earlyTerminationFee: undefined,
        taxInclPrices: {
          currency: undefined,
          recurrentTotal: undefined,
          recurrentDiscounted: undefined,
          recurrentDiscount: undefined,
        },
        taxExclPrices: {
          currency: undefined,
          recurrentDiscounted: undefined,
          recurrentTotal: undefined,
          recurrentDiscount: undefined,
        },
      };

      expect(actual[0].accountNumber).toEqual(501320430);
      expect(actual[0].handsets).toEqual([]);
      expect(actual[0].identifier).toEqual('INT000060174');
      expect(actual[0].label).toEqual('All-Internet');
      expect(actual[0].options.length).toEqual(1);
      expect(actual[0].price).toEqual(expectedPrice);
      expect(actual[0].productType).toEqual('internet');
      expect(actual[0].specUrl).toEqual('https://api.int.telenet.be/omapi/public/product/INTF0200');
      expect(actual[0].status).toEqual('ACTIVE');
      expect(actual[0].addressId).toEqual('9165638564313171772');
      expect(actual[0].isUnderMove).toEqual(false);
      expect(actual[0].hasExtraOptions).toEqual(false);
      expect(actual[0].hasIncludedOptions).toEqual(true);
      expect(actual[0].children).toEqual([]);
      expect(actual[0].upgradePossibleTo).toEqual(undefined);
      expect(actual[0].hasOldSocialTariffDiscount).toEqual(true);
      expect(actual[0].simCardType).toEqual('PHYSICAL_SIM');
      expect(actual[0].simCardNumber).toEqual('8932030000205509128');
      expect(actual[0].pukCode).toEqual('51212812');
      expect(actual[0].isESim()).toBeFalsy();
      expect(actual[0].isPhysicalSim()).toBeTruthy();
      expect(actual[0].isSplitBill20()).toBeTruthy();
    });

    it('should return a valid dtv-product object', () => {
      mockProductJson[0].productType = ProductOverviewConstants.DTV;
      mockProductJson[0].children = [{} as RawProduct];
      const actual = productMapper.toModel(mockProductJson);

      expect(actual[0].children).toEqual([]);
      expect(actual[0].locationId).toEqual('9166723569713917825');
      expect(actual[0].addressId).toEqual('9165638564313171772');
      expect(actual[0].parentIdentifier).toEqual('INT000060174');
      expect(actual[0].hasOldSocialTariffDiscount).toEqual(true);
    });
  });
  describe('createProduct', () => {
    it('should return a valid product object', () => {
      mockProductJson[0].handsets = [];
      mockProductJson[0].upgradePossibleTo = 'true';
      mockProductJson[0].productType = ProductOverviewConstants.BUNDLE;
      mockProductJson[0].children = [
        { productType: ProductOverviewConstants.DTV } as RawProduct,
        { productType: ProductOverviewConstants.DTV } as RawProduct,
      ];
      const actual = productMapper['createProduct'](mockProductJson[0]);

      expect(actual.upgradePossibleTo).toEqual('true');
      expect(actual.isMultipleDTV).toEqual(true);
      expect(actual.hasOldSocialTariffDiscount).toEqual(true);
    });
    it('should return a valid product with only Active mobile child and filter out other mobile children', () => {
      mockProductJson[0].handsets = [];
      mockProductJson[0].upgradePossibleTo = 'true';
      mockProductJson[0].productType = ProductOverviewConstants.BUNDLE;
      mockProductJson[0].children = [
        { productType: 'mobile', status: 'DISCONNECTED' } as RawProduct,
        { productType: 'mobile', status: 'ACTIVE' } as RawProduct,
      ];
      const actual = productMapper['createProduct'](mockProductJson[0]);

      expect(actual.children.length).toEqual(1);
    });
  });

  describe('getOptions', () => {
    it('should return mapped options', () => {
      const rawOptions: RawOptionInterface[] = [
        {
          label: 'label',
          status: 'status',
          price: {} as RawProductPrice,
          isIncludedOption: true,
          isFree: false,
          activeOptions: 'activeOptions',
          contract: {} as RawContractDetailsInterface,
          rawOmapi: {} as RawOmapiProductInterface,
          specurl: 'specurl',
          upgradePossibleTo: 'upgradePossibleTo',
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(productMapper as any, 'createProductInfo').mockReturnValue({});

      const response = [
        {
          activeOptions: 'activeOptions',
          contract: {
            duration: undefined,
            obligationEndDate: undefined,
          },
          isFree: false,
          isIncludedOption: true,
          label: 'label',
          upgradePossibleTo: 'upgradePossibleTo',
          price: {
            currency: undefined,
            earlyTerminationFee: undefined,
            recurrentDiscount: undefined,
            recurrentDiscounted: undefined,
            recurrentTotal: undefined,
            taxInclPrices: {
              currency: undefined,
              recurrentDiscount: undefined,
              recurrentDiscounted: undefined,
              recurrentTotal: undefined,
            },
            taxExclPrices: {
              currency: undefined,
              recurrentDiscount: undefined,
              recurrentDiscounted: undefined,
              recurrentTotal: undefined,
            },
          },
          productInfo: {},
          status: 'status',
          description: 'label',
          productType: undefined,
          upgradedFrom: '',
          weight: undefined,
          category: undefined,
          name: undefined,
          productId: undefined,
          volume: null,
        },
      ];

      const returnValue = productMapper['getOptions'](rawOptions);

      expect(returnValue).toEqual(response);
    });

    it('should sort the options before returning', () => {
      const option1: RawOptionInterface = {
        rawOmapi: {
          product: {
            productid: 'a',
            weight: 20,
          },
        },
      } as RawOptionInterface;

      const option2: RawOptionInterface = {
        rawOmapi: {
          product: {
            productid: 'b',
            weight: 10,
          },
        },
      } as RawOptionInterface;

      const returnValue = productMapper['getOptions']([option1, option2]);

      expect(returnValue[0].productInfo.productId).toBe('b');
      expect(returnValue[1].productInfo.productId).toBe('a');
    });
  });

  describe('getHandsets', () => {
    it('should return mapped handsets', () => {
      const rawHandsets: RawHandsetInterface[] = [
        {
          label: 'label',
          specurl: 'specurl',
          queryurl: 'queryurl',
          identifier: 'identifier',
          msisdn: 'msisdn',
          accountNumber: 'acountnumber',
          contract: {
            obligationEndDate: date,
            duration: 1,
            price: {} as RawProductPrice,
          },
        },
      ];

      const response = [
        {
          accountNumber: 'acountnumber',
          contract: {
            duration: 1,
            obligationEndDate: date,
            price: {
              currency: undefined,
              earlyTerminationFee: undefined,
              recurrentDiscount: undefined,
              recurrentDiscounted: undefined,
              recurrentTotal: undefined,
              taxInclPrices: {
                currency: undefined,
                recurrentDiscount: undefined,
                recurrentDiscounted: undefined,
                recurrentTotal: undefined,
              },
              taxExclPrices: {
                currency: undefined,
                recurrentDiscount: undefined,
                recurrentDiscounted: undefined,
                recurrentTotal: undefined,
              },
            },
          },
          handsetName: 'label',
          identifier: 'identifier',
          label: 'label',
          msisdn: 'msisdn',
          productInfo: undefined,
        },
      ];

      const returnValue = productMapper['getHandsets'](rawHandsets);

      expect(returnValue).toEqual(response);
    });
  });

  describe('getContractDetails', () => {
    it('should return mapped contract', () => {
      const rawContract = {
        duration: 1,
        obligationEndDate: date,
      } as RawContractDetailsInterface;

      const returnValue = productMapper['getContractDetails'](rawContract);

      const response: ContractInterface = {
        obligationEndDate: date,
        duration: 1,
      };

      expect(returnValue).toEqual(response);
    });

    it('should return empty object', () => {
      const returnValue = productMapper['getContractDetails'](undefined as unknown as RawContractDetailsInterface);

      expect(returnValue).toEqual({});
    });

    it('should return mapped contract with price', () => {
      const rawContract = {
        duration: 1,
        obligationEndDate: date,
        price: {} as RawProductPrice,
      } as RawContractDetailsInterface;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(productMapper as any, 'createPrice').mockReturnValue({});

      const returnValue = productMapper['getContractDetails'](rawContract);

      const response: ContractInterface = {
        obligationEndDate: date,
        duration: 1,
        price: {} as PriceInterface,
      };

      expect(returnValue).toEqual(response);
    });
  });

  describe('getHandsetName', () => {
    it('should return name', () => {
      const label = 'label';
      const info: RawOmapiQueryProductInterfaceData[] = [
        {
          labelKey: 'labelKey',
          productFamily: 'productFamily',
          isPreOrder: false,
          isBackOrder: false,
          manBrand: {} as RawColorInterface,
          variants: [
            {
              shortDescription: {
                localizedContent: [
                  {
                    value: ['shortDescription1', 'shortDescription2'],
                    data: 'shortDescription1',
                  },
                ],
              },
              manBrand: {
                localizedContent: [
                  {
                    value: ['value1', 'value2'],
                  },
                ],
              },
            },
          ] as RawVariantsInterface[],
        },
      ];

      const returnValue = productMapper['getHandsetName'](label, info);

      expect(returnValue).toEqual('value1 shortDescription1');
    });
    it('should return label', () => {
      const label = 'label';
      const info: RawOmapiQueryProductInterfaceData[] = [];

      const returnValue = productMapper['getHandsetName'](label, info);

      expect(returnValue).toEqual('label');
    });
  });

  describe('getBundleProductDetails', () => {
    it('should return bundle product', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(productMapper as any, 'createProductInfo').mockReturnValue({});

      mockProductJson[0].contentPacks = [{} as RawContentPacksInterface, {} as RawContentPacksInterface];
      mockProductJson[0].experience = {
        experienceId: 'id',
        label: 'label',
        rawOmapi: {},
      };

      const returnValue = productMapper['getBundleProductDetails'](mockProductJson[0], mockProductJson[0]);

      expect(returnValue?.identifier).toEqual('INT000060174');
      expect(returnValue?.id).toEqual('9166723571113919705');
      expect(returnValue?.experience).toEqual({ experienceId: 'id', label: 'label', productInfo: {} });
    });

    it('should fill mobileIndetifiers array and limited lines', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(productMapper as any, 'createProductInfo').mockReturnValue({});

      mockProductJson[0].contentPacks = [{} as RawContentPacksInterface, {} as RawContentPacksInterface];
      mockProductJson[0].experience = {
        experienceId: 'id',
        label: 'label',
        rawOmapi: {},
      };
      mockProductJson[0].children = [
        {
          productType: 'mobile',
          identifier: 'identifier_child',
          eSimStatus: 'eSimStatus',
          dataLimit: 'limited',
        } as RawProduct,
      ];
      mockProductJson[0].productType = 'mobile';

      const returnValue = productMapper['getBundleProductDetails'](mockProductJson[0], mockProductJson[0]);

      expect(returnValue?.mobileIdentifier).toEqual([{ identifier: 'identifier_child', eSimStatus: 'eSimStatus' }]);
      expect(returnValue?.limitedLines).toEqual(['identifier_child']);
      expect(returnValue?.unlimitedLines).toEqual([]);
    });

    it('should fill mobileIndetifiers array and unlimited lines', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(productMapper as any, 'createProductInfo').mockReturnValue({});

      mockProductJson[0].contentPacks = [{} as RawContentPacksInterface, {} as RawContentPacksInterface];
      mockProductJson[0].experience = {
        experienceId: 'id',
        label: 'label',
        rawOmapi: {},
      };
      mockProductJson[0].children = [
        {
          productType: 'mobile',
          identifier: 'identifier_child',
          eSimStatus: 'eSimStatus',
          dataLimit: 'unlimited',
        } as RawProduct,
      ];
      mockProductJson[0].productType = 'mobile';

      const returnValue = productMapper['getBundleProductDetails'](mockProductJson[0], mockProductJson[0]);

      expect(returnValue?.mobileIdentifier).toEqual([{ identifier: 'identifier_child', eSimStatus: 'eSimStatus' }]);
      expect(returnValue?.unlimitedLines).toEqual(['identifier_child']);
      expect(returnValue?.limitedLines).toEqual([]);
    });

    it('should set bundleMaxlines property', () => {
      const service = {} as RawServiceInterface;
      service.servicetype = 'general';
      const specification = {} as RawSpecificationInterface;
      specification.labelkey = 'spec-bundle-mobile-maxlines';
      specification.value = '2';
      service.specifications = [specification];
      const productInfo = {} as RawOmapiProductInterface;
      productInfo.product = {} as RawOmapiProductInterfaceData;
      productInfo.product.services = [service];
      mockProductJson[0].contentPacks = [{} as RawContentPacksInterface, {} as RawContentPacksInterface];
      mockProductJson[0].experience = {
        experienceId: 'id',
        label: 'label',
        rawOmapi: {},
      };
      mockProductJson[0].children = [
        {
          productType: 'mobile',
          identifier: 'identifier_child',
          eSimStatus: 'eSimStatus',
          dataLimit: 'unlimited',
          rawOmapi: productInfo,
        } as RawProduct,
      ];
      mockProductJson[0].productType = 'mobile';
      mockProductJson[0].rawOmapi = productInfo;

      const returnValue = productMapper['createProduct'](mockProductJson[0]);

      expect(returnValue?.children[0].bundleMaxlines).toEqual(2);
    });
  });
});
