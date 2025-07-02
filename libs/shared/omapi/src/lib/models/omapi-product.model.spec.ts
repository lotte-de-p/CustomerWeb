import { NormalizationService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OmapiProduct } from './omapi-product.model';
import { LanguageEnum } from '../constants/language.enum';
import { ProductConstants } from '../constants/product.constant';
import { CharsEnum } from '../enums/chars.enum';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '../mappers/omapi-product.mapper';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { OmapiProductTestfactory } from './omapi-product.testfactory';
import { OmapiConstituentType, OmapiProductType } from '../constants/omapi.constants';

const mockSuccessResponse = require('../data/omapi-product-response.json');
const mockOmapiWithConstituents = require('../data/20048.json');
const mockOmapiWithOutConstituents = require('../data/20047.json');
const POST_PAID_MOBILE = 'POST-PAID MOBILE';

describe('OmapiProductModel', () => {
  let omapiProduct: OmapiProduct;
  let omapiProductMapper: OmapiProductMapper;
  const setLang = (type: string) => {
    return {
      document: {
        documentElement: {
          lang: type,
        },
      },
    };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductMapper, NormalizationService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
  });

  beforeEach(() => {
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Types or properties are incompatible.
    omapiProduct = omapiProductMapper.toModel(mockSuccessResponse);
  });

  describe('getBillingCycle', () => {
    it('should return RECURRENT if order item price type is Recurrent Charge', () => {
      omapiProduct.priceType = 'Recurrent Charge';

      const actual = omapiProduct.getBillingCycle();

      expect(actual).toBe('RECURRENT');
    });

    it('should return ONE-TIME if order item price type is Non Recurrent Charge', () => {
      omapiProduct.priceType = 'Non Recurrent Charge';

      const actual = omapiProduct.getBillingCycle();

      expect(actual).toBe('ONE-TIME');
    });

    it('should return RECURRENT if order item price type is NOT defined', () => {
      omapiProduct.priceType = undefined;

      const actual = omapiProduct.getBillingCycle();

      expect(actual).toBe('RECURRENT');
    });
  });

  describe('hasCategory', () => {
    it('should return TRUE if the test category is present in the category list', () => {
      const actual = omapiProduct.hasCategory('POST-PAID-MOBILE');
      expect(actual).toBe(true);
    });

    it('should return TRUE if the test category is present in the category list', () => {
      const actual = omapiProduct.hasCategory('post-paid-mobile');
      expect(actual).toBe(true);
    });

    it('should return FALSE if the test category with all uppercase and dashes/space is NOT present in the category list', () => {
      const actual = omapiProduct.hasCategory('POST PAID-MOBILE');
      expect(actual).toBe(false);
    });

    it('should return FALSE if the test category with all lowercase and dashes is NOT present in the category list', () => {
      const actual = omapiProduct.hasCategory('pre-paid-mobile');
      expect(actual).toBe(false);
    });

    it('should return FALSE if the test category with all uppercase and dashes is NOT present in the category list', () => {
      const actual = omapiProduct.hasCategory('PRE-PAID-MOBILE');
      expect(actual).toBe(false);
    });
  });

  describe('setInternalCategory ', () => {
    it('should set proper internal category', () => {
      omapiProduct.setInternalCategory();
      expect(omapiProduct.internalCategory).toBe(POST_PAID_MOBILE);
    });

    it('should set proper internal category for base-pro', () => {
      omapiProduct.categories = ['base-pro', 'a', 'b'];
      omapiProduct.setInternalCategory();
      expect(omapiProduct.internalCategory).toBe(POST_PAID_MOBILE);
    });

    it('should set proper internal category for base-pro-voice', () => {
      omapiProduct.categories = ['base-pro-voice', 'a', 'b'];
      omapiProduct.setInternalCategory();
      expect(omapiProduct.internalCategory).toBe(POST_PAID_MOBILE);
    });

    it('should set proper internal category for pre-paid', () => {
      omapiProduct.categories = ['prepaid mobile', 'a', 'b'];
      omapiProduct.setInternalCategory();
      expect(omapiProduct.internalCategory).toBe('PREPAID MOBILE');
    });
  });

  describe('hasUnlimitedCalling ', () => {
    it('should return TRUE if product has unlimited calling option', () => {
      const actual = omapiProduct.hasUnlimitedCalling();
      expect(actual).toBe(true);
    });

    it('should return FALSE if product does not have unlimited calling option', () => {
      if (
        omapiProduct.services &&
        omapiProduct.services.length > 0 &&
        omapiProduct.services[0].specifications &&
        omapiProduct.services[0].specifications.length > 0
      ) {
        omapiProduct.services[0].specifications[0].value = '100';
      }
      const actual = omapiProduct.hasUnlimitedCalling();
      expect(actual).toBe(false);
    });
  });

  describe('hasUnlimitedInternet ', () => {
    it('should return TRUE if product has unlimited internet', () => {
      const mobileLineProductInfo = OmapiProductTestfactory.build({
        services: [
          {
            serviceType: 'MOBILE_INTERNET',
            specifications: [{ value: 'FUP' }],
          },
        ],
      });
      (omapiProduct.characteristics as CharacteristicsInterface).constituents = [
        {
          type: 'mobile_line',
          productInfo: mobileLineProductInfo,
          specurl: '',
        },
      ];
      const actual = omapiProduct.hasUnlimitedMobileInternet();
      expect(actual).toBe(true);
    });

    it('should return FALSE if product has NOT unlimited internet', () => {
      const mobileLineProductInfo = OmapiProductTestfactory.build({
        services: [
          {
            serviceType: 'MOBILE_INTERNET',
            specifications: [{ value: '15' }],
          },
        ],
      });
      (omapiProduct.characteristics as CharacteristicsInterface).constituents = [
        {
          type: 'mobile_line',
          productInfo: mobileLineProductInfo,
          specurl: '',
        },
      ];
      const actual = omapiProduct.hasUnlimitedMobileInternet();
      expect(actual).toBe(false);
    });
  });

  describe('hasUnlimitedInternetBasedOnLabelKey', () => {
    it('should return TRUE if product has unlimited label', () => {
      const mobileLineProductInfo = OmapiProductTestfactory.build({
        services: [
          {
            serviceType: 'MOBILE_INTERNET',
            specifications: [{ labelKey: 'spec.mobileinternet.volume.unlimited.shared' }],
          },
        ],
      });
      const actual = mobileLineProductInfo.hasUnlimitedInternetBasedOnLabelKey();
      expect(actual).toBe(true);
    });

    it('should return FALSE if product has NOT unlimited label', () => {
      const mobileLineProductInfo = OmapiProductTestfactory.build({
        services: [
          {
            serviceType: 'MOBILE_INTERNET',
            specifications: [{ value: 'FUP' }],
          },
        ],
      });
      const actual = mobileLineProductInfo.hasUnlimitedInternetBasedOnLabelKey();
      expect(actual).toBe(false);
    });
  });

  describe('getLocalizedContentNames ', () => {
    it('should map localised content offer names', () => {
      const actual = omapiProduct.getLocalizedContentNames();
      expect(actual['en']).toEqual('25 Based on you EN');
      expect(actual['nl']).toEqual('25 Based on you NL');
      expect(actual['fr']).toEqual('25 Based on you FR');
    });
  });

  describe('getSortedSpecifications', () => {
    it('should return specifications', () => {
      const actual = omapiProduct.getSortedSpecifications();
      expect(actual.length).toBe(9);

      expect(actual[0].weight).toBe('10');
      expect(actual[0].serviceType).toBe(ProductConstants.MOBILE_MONETARY);
      expect(actual[0].showUnit).toBe(false);
      expect(actual[0].isValue).toBe(false);
      expect(actual[0].isMonetary).toBe(true);
      expect(actual[0].isRange).toBe(false);
      expect(actual[0].isAsterisk).toBe(false);

      expect(actual[1].weight).toBe('20');
      expect(actual[1].serviceType).toBe(ProductConstants.MOBILE_INTERNET);
      expect(actual[1].value).toBeUndefined();
      expect(actual[1].minValue).toBe('0');
      expect(actual[1].maxValue).toBe('7');
      expect(actual[1].showUnit).toBe(true);
      expect(actual[1].isValue).toBe(false);
      expect(actual[1].isMonetary).toBe(false);
      expect(actual[1].isRange).toBe(true);
      expect(actual[1].isAsterisk).toBe(false);

      expect(actual[2].weight).toBe('30');
      expect(actual[2].serviceType).toBe(ProductConstants.MOBILE_CALLING);
      expect(actual[2].value).toBeUndefined();
      expect(actual[2].minValue).toBe('0');
      expect(actual[2].maxValue).toBe('600');
      expect(actual[2].showUnit).toBe(true);
      expect(actual[2].isValue).toBe(false);
      expect(actual[2].isMonetary).toBe(false);
      expect(actual[2].isRange).toBe(true);
      expect(actual[2].isAsterisk).toBe(false);

      expect(actual[3].weight).toBe('40');
      expect(actual[3].serviceType).toBe(ProductConstants.MOBILE_CALLING);
      expect(actual[3].value).toBe('unlimited');
      expect(actual[3].minValue).toBeUndefined();
      expect(actual[3].maxValue).toBeUndefined();
      expect(actual[3].showUnit).toBe(false);
      expect(actual[3].isValue).toBe(true);
      expect(actual[3].isMonetary).toBe(false);
      expect(actual[3].isRange).toBe(false);
      expect(actual[3].isAsterisk).toBe(true);

      expect(actual[4].weight).toBe('50');
      expect(actual[4].serviceType).toBe(ProductConstants.MOBILE_CALLING);
      expect(actual[4].value).toBe('unlimited');
      expect(actual[4].minValue).toBeUndefined();
      expect(actual[4].maxValue).toBeUndefined();
      expect(actual[4].showUnit).toBe(false);
      expect(actual[4].isValue).toBe(true);
      expect(actual[4].isMonetary).toBe(false);
      expect(actual[4].isRange).toBe(false);
      expect(actual[4].isAsterisk).toBe(true);

      expect(actual[5].weight).toBe('60');
      expect(actual[5].serviceType).toBe(ProductConstants.FIXED_CALLING);
      expect(actual[5].value).toBe('1000');
      expect(actual[5].minValue).toBeUndefined();
      expect(actual[5].maxValue).toBeUndefined();
      expect(actual[5].showUnit).toBe(true);
      expect(actual[5].isValue).toBe(true);
      expect(actual[5].isMonetary).toBe(false);
      expect(actual[5].isRange).toBe(false);
      expect(actual[5].isAsterisk).toBe(false);

      expect(actual[6].weight).toBe('70');
      expect(actual[6].serviceType).toBe(ProductConstants.FIXED_INTERNET);
      expect(actual[6].value).toBe('unlimited');
      expect(actual[6].minValue).toBeUndefined();
      expect(actual[6].maxValue).toBeUndefined();
      expect(actual[6].showUnit).toBe(false);
      expect(actual[6].isValue).toBe(true);
      expect(actual[6].isMonetary).toBe(false);
      expect(actual[6].isRange).toBe(false);
      expect(actual[6].isAsterisk).toBe(true);

      expect(actual[7].weight).toBe('80');
      expect(actual[7].serviceType).toBe(ProductConstants.FIXED_INTERNET);
      expect(actual[7].value).toBe('500');
      expect(actual[7].minValue).toBeUndefined();
      expect(actual[7].maxValue).toBeUndefined();
      expect(actual[7].showUnit).toBe(true);
      expect(actual[7].isValue).toBe(true);
      expect(actual[7].isMonetary).toBe(false);
      expect(actual[7].isRange).toBe(false);
      expect(actual[7].isAsterisk).toBe(false);

      expect(actual[8].weight).toBe('90');
      expect(actual[8].serviceType).toBe(ProductConstants.FIXED_INTERNET);
      expect(actual[8].value).toBe('30');
      expect(actual[8].minValue).toBeUndefined();
      expect(actual[8].maxValue).toBeUndefined();
      expect(actual[8].showUnit).toBe(true);
      expect(actual[8].isValue).toBe(true);
      expect(actual[8].isMonetary).toBe(false);
      expect(actual[8].isRange).toBe(false);
      expect(actual[8].isAsterisk).toBe(false);
    });
  });

  describe('isWigo', function () {
    it('should return true if the product group equals FMC and the product subgroup is an empty string', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productGroup = 'FMC';
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = '';

      const actual = omapiProduct.isWigo();

      expect(actual).toEqual(true);
    });
  });

  describe('isFiber', function () {
    it('should return true if the product is of fiber technology ', function () {
      omapiProduct.externalProductCode = 'WIGO1000';

      const actual = omapiProduct.isFiber();

      expect(actual).toEqual(true);
    });
    it('should return false if the product is not of fiber technology ', function () {
      omapiProduct.externalProductCode = 'FB0001';

      const actual = omapiProduct.isFiber();

      expect(actual).toEqual(false);
    });
  });

  describe('isFmc', function () {
    it('should return true if the product group equals FMC', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productGroup = 'FMC';
      const actual = omapiProduct.isFmc();

      expect(actual).toEqual(true);
    });
  });

  describe('isConnect5', function () {
    it('should return true if product subgroup is C5', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'C5';
      const actual = omapiProduct.isConnect5();
      expect(actual).toBe(true);
    });

    it('should return false if product subgroup is not C5', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'OTHERS';
      const actual = omapiProduct.isConnect5();
      expect(actual).toBe(false);
    });
  });

  describe('isConnect5Soho', function () {
    it('should return true if product subgroup is C5 SOHO', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'C5 SOHO';
      const actual = omapiProduct.isConnect5Soho();
      expect(actual).toBe(true);
    });

    it('should return false if product subgroup is not C5 SOHO', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'C5';
      const actual = omapiProduct.isConnect5Soho();
      expect(actual).toBe(false);
    });

    it('should return true if product subgroup is KLIK', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'KLIK';
      const actual = omapiProduct.isConnect5Soho();
      expect(actual).toBeTruthy();
    });
  });

  describe('hasServiceType', function () {
    it('should return true if the product has the given service type', function () {
      if (omapiProduct.services && omapiProduct.services.length > 0) {
        omapiProduct.services[0].serviceType = 'FIXED_CALLING';
      }
      const actual = omapiProduct.hasServiceType('FIXED_CALLING');

      expect(actual).toEqual(true);
    });

    it('should return false if the product does not have the given service type', function () {
      if (omapiProduct.services && omapiProduct.services.length > 0) {
        omapiProduct.services[0].serviceType = 'FIXED_INTERNET';
      }
      const actual = omapiProduct.hasServiceType('DUMMY_TYPE');

      expect(actual).toEqual(false);
    });
  });

  describe('getLogoUrl', () => {
    it('should return the logo url based on the labelkey given logo not present', function () {
      omapiProduct.logo = undefined;
      omapiProduct.labelKey = 'some key';

      const actualLogoUrl = omapiProduct.getLogoUrl();

      expect(actualLogoUrl).toBe('/content/dam/www-telenet-be/img/self-service/products/some-key.png');
    });

    it('should return the logo given logo url given logo present', function () {
      omapiProduct.logo = 'some existing url';
      omapiProduct.labelKey = 'some key';

      const actualLogoUrl = omapiProduct.getLogoUrl();

      expect(actualLogoUrl).toBe('some existing url');
    });
    it('should return empty path if no labelkey and no logo', function () {
      omapiProduct.logo = undefined;
      omapiProduct.labelKey = undefined;

      const actualLogoUrl = omapiProduct.getLogoUrl();

      expect(actualLogoUrl).toBe('');
    });
  });

  describe('getMaxMobileLines', () => {
    it('should return the maxMobileLines from characteristics', () => {
      const omapiProductBundle: OmapiProduct = OmapiProductTestfactory.build({
        characteristics: { maxMobileLines: '2' },
      });

      const actual = omapiProductBundle.getMaxMobileLines();
      expect(actual).toEqual('2');
    });
    it('should return the maxMobileLines from service specification if not in characteristics', () => {
      const omapiProductBundle: OmapiProduct = OmapiProductTestfactory.build({
        services: [
          {
            serviceType: 'GENERAL',
            specifications: [{ labelKey: 'spec-bundle-mobile-maxlines', value: '5' }],
          },
        ],
      });

      const actual = omapiProductBundle.getMaxMobileLines();
      expect(actual).toEqual('5');
    });
    it('should return null if maxMobileLines is not available', () => {
      const omapiProductBundle: OmapiProduct = OmapiProductTestfactory.build();
      const actual = omapiProductBundle.getMaxMobileLines();
      expect(actual).toBeNull();
    });
  });
  describe('getConstituent', () => {
    it('should return the constituent ', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Types or properties are incompatible.
      const omapiProductBundle: OmapiProduct = omapiProductMapper.toModel(mockOmapiWithConstituents);
      const actual = omapiProductBundle.getConstituent(OmapiConstituentType.INTERNET);

      expect(actual?.productInfo?.productId).toBe('24675');
      expect(actual?.productInfo?.productType).toBe('PRODUCT');
    });

    it('should return undefined when constituents does not exist in omapi response ', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Types or properties are incompatible.
      const omapiProductBundle: OmapiProduct = omapiProductMapper.toModel(mockOmapiWithOutConstituents);
      const actual = omapiProductBundle.getConstituent(OmapiConstituentType.INTERNET);

      expect(actual).toBeUndefined();
    });
  });

  describe('getServiceSpecificationByLabelKey', () => {
    it('should return the service specification by labelkey and serviceType', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Types or properties are incompatible.
      const omapiProductBundle: OmapiProduct = omapiProductMapper.toModel(mockOmapiWithConstituents);
      const actual = omapiProductBundle.getServiceSpecificationByLabelKey('spec.product.listprice.vatincl', 'GENERAL');

      expect(actual?.value).toBe('84.55');
      expect(actual?.unit).toBe('EURO');
    });

    it('should return the service specification by labelkey', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Types or properties are incompatible.
      const omapiProductBundle: OmapiProduct = omapiProductMapper.toModel(mockOmapiWithConstituents);
      const actual = omapiProductBundle.getServiceSpecificationByLabelKey('spec.bundle.mobile.shareddata');

      expect(actual?.value).toBe('3');
      expect(actual?.unit).toBe('GB');
    });

    it('should return undefined when service specification by labelkey is not found', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Types or properties are incompatible.
      const omapiProductBundle: OmapiProduct = omapiProductMapper.toModel(mockOmapiWithConstituents);
      const actual = omapiProductBundle.getServiceSpecificationByLabelKey('spec.bundle.XYZ');

      expect(actual).toBeUndefined();
    });
  });

  describe('getProductLevel', function () {
    it('should return 3P if the product level is 3P', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productLevel = '3P';
      const actual = omapiProduct.getProductLevel();
      expect(actual).toBe('3P');
    });

    it('should return undefined when product level is not defined', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productLevel = undefined;
      const actual = omapiProduct.getProductLevel();
      expect(actual).toBeUndefined();
    });
  });

  describe('getProductTier', function () {
    it('should return true if the product is mid-tier', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = 'Mid';
      const actual = omapiProduct.getProductTier();
      expect(actual).toBe('Mid');
    });

    it('should return true if the product is mid-tier', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = undefined;
      const actual = omapiProduct.getProductTier();
      expect(actual).toBeUndefined();
    });
  });

  describe('getSharedMobileData', function () {
    it('should return the value of sharedMobileData from product characteristics', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).sharedMobileData = { value: '60', unit: 'GB' };
      const actual = omapiProduct.getSharedMobileData();
      expect(actual).toBe('60');
    });

    it('should return undefined when sharedMobileData is not there in product characteristics', function () {
      (omapiProduct.characteristics as CharacteristicsInterface).sharedMobileData = undefined;
      const actual = omapiProduct.getSharedMobileData();
      expect(actual).toBeUndefined();
    });
  });

  describe('priceInclVat', () => {
    it('should return the price incl VAT if it exists', () => {
      const priceInclVat = 10;
      (omapiProduct.characteristics as CharacteristicsInterface).priceInclVat = priceInclVat;

      const actual = omapiProduct.priceInclVat();

      expect(actual).toBe(priceInclVat);
    });
    it('should return null if price incl VAT does not exist', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).priceInclVat = undefined;

      const actual = omapiProduct.priceInclVat();

      expect(actual).toBe(undefined);
    });
  });

  describe('getGroupNameLabel', () => {
    it('should return the correct label key for all provided characteristics', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).productGroup = 'FMC';
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'C5';
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = 'MID';
      (omapiProduct.characteristics as CharacteristicsInterface).productSegment = 'RES';

      const actual = omapiProduct.getGroupNameLabel();

      expect(actual).toBe('fmc-c5-mid-res');
    });

    it('should return the correct label key for all provided characteristics and stripped spaces', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).productGroup = 'FMC';
      (omapiProduct.characteristics as CharacteristicsInterface).productSubGroup = 'C5 SOHO';
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = 'MID';
      (omapiProduct.characteristics as CharacteristicsInterface).productSegment = 'TB';

      const actual = omapiProduct.getGroupNameLabel();

      expect(actual).toBe('fmc-c5soho-mid-tb');
    });

    it('should return the correct label key for all provided characteristics', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).productGroup = 'FMC';
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = 'MID';
      (omapiProduct.characteristics as CharacteristicsInterface).productSegment = 'RES';

      const actual = omapiProduct.getGroupNameLabel();

      expect(actual).toBe('fmc-mid-res');
    });
  });

  describe('getUniqOutOfBundlesLimits', () => {
    it('should return unique out of bundle limits list', () => {
      expect(omapiProduct.getUniqOutOfBundlesLimits()).toEqual([
        '5 Euro',
        '10 Euro',
        '20 Euro',
        '30 Euro',
        '40 Euro',
        '50 Euro',
      ]);
    });

    it('should return empty list if no limits available', () => {
      const mockOmapi = new OmapiProduct();

      expect(mockOmapi.usageLimits).toBeUndefined();
      expect(mockOmapi.getUniqOutOfBundlesLimits()).toEqual([]);
    });
  });

  describe('getInternetUsageNotificationThresholds', () => {
    it('should return internet usage notifications', () => {
      const mockThresholdValues = [
        {
          preferenceGroup: 'Internet',
          threshold: [
            {
              communicationPreferenceType: 'Internet80',
              communicationPreferenceTypeValue: '80',
            },
            {
              communicationPreferenceType: 'Internet90',
              communicationPreferenceTypeValue: '90',
            },
            {
              communicationPreferenceType: 'Internet100',
              communicationPreferenceTypeValue: '100',
            },
          ],
        },
      ];
      expect(omapiProduct.getInternetUsageNotificationThresholds()).toEqual(mockThresholdValues);
    });
  });

  describe('isHighTier', () => {
    it('should return true if productTier characteristic is equal to High', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = 'High';
      expect(omapiProduct.isHighTier()).toBe(true);
    });
    it('should return false if productTier characteristic is not equal to High', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = 'Mid';
      expect(omapiProduct.isHighTier()).toBe(false);
    });
    it('should return false if productTier characteristic is undefined', () => {
      (omapiProduct.characteristics as CharacteristicsInterface).productTier = undefined;
      expect(omapiProduct.isHighTier()).toBe(false);
    });
  });

  describe('hasCharKey', () => {
    it('should return true if chars contains the provided key', () => {
      const actual = omapiProduct.hasCharKey(CharsEnum.HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE);
      expect(actual).toBe(true);
    });

    it('should return false if chars contains the provided key', () => {
      const actual = omapiProduct.hasCharKey(undefined);
      expect(actual).toBe(false);
    });
  });

  describe('getCharValue', () => {
    it('should return the values of given char key', () => {
      const values = omapiProduct.getCharValue(CharsEnum.HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE);
      expect(values[0]).toBe('TVPK0015');
    });

    it('should return empty array if char key is not present', () => {
      const values = omapiProduct.getCharValue(null);
      expect(values).toEqual([]);
    });
  });

  describe('getCharUnit', () => {
    it('should return the values of given char unit', () => {
      const values = omapiProduct.getCharUnit(CharsEnum.INTERNET_USAGE_LIMIT);
      expect(values).toBe('GB');
    });

    it('should return empty value if char key is not present', () => {
      const values = omapiProduct.getCharValue(null);
      expect(values).toEqual([]);
    });
  });

  describe('fetchCharKey', () => {
    it('should return the key object of given char key', () => {
      const omapi = new OmapiProduct();
      omapi.chars = [
        {
          key: CharsEnum.HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE,
          values: ['TVPK0015'],
          unit: '',
        },
      ];
      const values = omapiProduct.fetchCharKey(CharsEnum.HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE);
      expect(values).toEqual(omapi.chars[0]);
    });

    it('should return empty object if char key is not found', () => {
      const values = omapiProduct.fetchCharKey(undefined);
      expect(values).toBeUndefined();
    });
  });

  describe('isStreamingServiceContainer', () => {
    it('should return false if given omapiID is undefined', () => {
      omapiProduct.productId = undefined;
      expect(omapiProduct.isStreamingServiceContainer()).toBeFalsy();
    });
    it('should return false if omapiID is not STRM0001', () => {
      omapiProduct.productId = 'STRM0002';
      expect(omapiProduct.isStreamingServiceContainer()).toBeFalsy();
    });
    it('should return true if omapiID is STRM0001', () => {
      omapiProduct.productId = 'STRM0001';
      expect(omapiProduct.isStreamingServiceContainer()).toBeTruthy();
    });
  });

  describe('isNetflixPremiumAddon', () => {
    it('should return false if omapiID is undefined', () => {
      omapiProduct.productId = undefined;
      expect(omapiProduct.isNetflixPremiumAddon()).toBeFalsy();
    });
    it('should return false if omapiID is not STRM0006', () => {
      omapiProduct.productId = 'STRM0002';
      expect(omapiProduct.isNetflixPremiumAddon()).toBeFalsy();
    });
    it('should return true if omapiID is STRM0006', () => {
      omapiProduct.productId = 'STRM0006';
      expect(omapiProduct.isNetflixPremiumAddon()).toBeTruthy();
    });
  });

  describe('isANetflixProduct', () => {
    it('should return false if subcategory is undefined', () => {
      omapiProduct.subCategory = undefined;
      expect(omapiProduct.isANetflixProduct()).toBeFalsy();
    });
    it('should return false if subcategory is not Netlix', () => {
      omapiProduct.subCategory = { name: 'netflix', localizedContent: [], weight: 1, mutualExclusion: false };
      expect(omapiProduct.isANetflixProduct()).toBeFalsy();
    });
    it('should return true if subcategory is Netlix', () => {
      omapiProduct.subCategory = { name: 'Netflix', localizedContent: [], weight: 1, mutualExclusion: false };
      expect(omapiProduct.isANetflixProduct()).toBeTruthy();
    });
  });

  describe('isNetflixStandard', () => {
    it('should return false if omapiID is undefined', () => {
      omapiProduct.productId = undefined;
      expect(omapiProduct.isNetflixStandard()).toBe(false);
    });
    it('should return false if omapiID is not STRM0005', () => {
      omapiProduct.productId = 'STRM0002';
      expect(omapiProduct.isNetflixStandard()).toBe(false);
    });
    it('should return true if omapiID is STRM0005', () => {
      omapiProduct.productId = 'STRM0005';
      expect(omapiProduct.isNetflixStandard()).toBe(true);
    });
  });

  describe('isDarwinProduct', () => {
    it('should return false for undefined', () => {
      omapiProduct.productId = undefined;
      expect(omapiProduct.isDarwinProduct()).toBeFalsy();
    });
    it('should return false for anything starting with number', () => {
      omapiProduct.productId = '1something';
      expect(omapiProduct.isDarwinProduct()).toBeFalsy();
    });
    it('should return true for anything starting with char', () => {
      omapiProduct.productId = 'a213';
      expect(omapiProduct.isDarwinProduct()).toBeTruthy();
    });
  });

  describe('isESim', () => {
    it('should return false if productType is undefined', () => {
      omapiProduct.productType = undefined;

      expect(omapiProduct.isESim()).toBeFalsy();
    });
    it('should return false if productType is not E_SIM', () => {
      omapiProduct.productType = 'SIM';

      expect(omapiProduct.isESim()).toBeFalsy();
    });
    it('should return true if productType is E_SIM', () => {
      omapiProduct.productType = OmapiProductType.E_SIM;

      expect(omapiProduct.isESim()).toBeTruthy();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
