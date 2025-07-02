import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { NormalizationService } from '@telenet/ng-lib-page';
import { LanguageEnum } from '../constants/language.enum';
import { CharsEnum } from '../enums/chars.enum';
import { OmapiProductMapper } from './omapi-product.mapper';
import { OmapiProduct } from '../models/omapi-product.model';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { OmapiConstituentType } from '../constants/omapi.constants';
import { RawOmapiProductInterface } from '../interfaces/raw-omapi-product.interface';

const mockProductsResponse = require('../data/omapi-product-response.json');
const mockRawOmapi = require('../data/20048.json');

describe('OmapiProductMapper', () => {
  let omapiProductMapper: OmapiProductMapper, omapiProduct: OmapiProduct;
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
      providers: [NormalizationService, OmapiProductMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
    omapiProduct = omapiProductMapper.toModel(mockProductsResponse);
  });

  describe('toModel', () => {
    it('should MAP the omapi product data', () => {
      expect(omapiProduct.productId).toBe('1');
      expect(omapiProduct.isYupProduct).toBe(true);
      expect(omapiProduct.salesOfferingId).toBe('2');
      expect(omapiProduct.externalProductCode).toBe('BOYO0025');
      expect(omapiProduct.labelKey).toBe('25 Based on you');
      expect(omapiProduct.productType).toBe('PRODUCT');
      expect(omapiProduct.weight).toBe(20);
      expect(omapiProduct.apps).toEqual([]);
      expect(omapiProduct.visible).toBe(false);
      expect(omapiProduct.visibilityRules?.conditionalVisibility).toBe(false);
      expect(omapiProduct.unlimited).toBe(false);
      expect(omapiProduct.maxCount).toBe('20');
      expect(omapiProduct.eligibleForDiscount).toBe(true);
      expect(omapiProduct.unlimitedInternet).toBe(false);
      expect(omapiProduct.priceType).toBe('Recurrent Charge');
      expect((omapiProduct.characteristics as CharacteristicsInterface)?.prices?.activationFee).toBe(15.0);
      expect((omapiProduct.characteristics as CharacteristicsInterface)?.esimAvailable).toBe(true);
      expect(omapiProduct.usageBasedRatePlan).toBe(false);
      expect(omapiProduct.requiresInstallation).toBe(true);
      expect(omapiProduct.productConstituents?.[0].type).toBe('mobile_line');
      expect(omapiProduct.productConstituents?.[0].minCount).toBe('0');
      expect(omapiProduct.productConstituents?.[0].maxCount).toBe('5');
      expect(omapiProduct.isExternalContentPack).toBe('true');
      expect(omapiProduct.isEligibleForSettinglimits).toBe(true);
      expect(omapiProduct.isEligibleForAutoPause).toBe(false);
      expect(omapiProduct.isEligibleForPauseProfile).toBe(true);
      expect(omapiProduct.isFPBProduct).toBe(true);
    });

    it('should MAP the customer categories data', () => {
      expect(omapiProduct.customerCategories?.length).toBe(3);
      expect(omapiProduct.customerCategories?.[0]).toBe('residential');
      expect(omapiProduct.customerCategories?.[1]).toBe('production-test');
      expect(omapiProduct.customerCategories?.[2]).toBe('eventdemo');
    });

    it('should MAP the categories data', () => {
      expect(omapiProduct.categories?.length).toBe(3);
      expect(omapiProduct.categories?.[0]).toBe('based-on-you-plans');
      expect(omapiProduct.categories?.[1]).toBe('for-5-discount');
      expect(omapiProduct.categories?.[2]).toBe('post-paid-mobile');
    });

    it('should MAP the omapi level localized content data', () => {
      expect(omapiProduct.localizedContent?.length).toBe(3);
      expect(omapiProduct.localizedContent?.[0].locale).toBe('nl');
      expect(omapiProduct.localizedContent?.[0].name).toBe('25 Based on you NL');
      expect(omapiProduct.localizedContent?.[0].logo).toBe('https://customerzone.sup.base.be/nl');
      expect(omapiProduct.localizedContent?.[1].locale).toBe('fr');
      expect(omapiProduct.localizedContent?.[1].name).toBe('25 Based on you FR');
      expect(omapiProduct.localizedContent?.[1].logo).toBe('https://customerzone.sup.base.be/fr');
      expect(omapiProduct.localizedContent?.[2].locale).toBe('en');
      expect(omapiProduct.localizedContent?.[2].name).toBe('25 Based on you EN');
      expect(omapiProduct.localizedContent?.[2].logo).toBe('https://customerzone.sup.base.be/en');
    });

    it('should MAP the short description', () => {
      expect(omapiProduct.shortDescription?.localizedContent?.locale).toBe('nl');
      expect(omapiProduct.shortDescription?.localizedContent?.name).toBe('Combineer 0 tot 7 GB');
      expect(omapiProduct.shortDescription?.localizedContent?.logo).toBe('');
    });

    it('should MAP the rates', () => {
      expect(omapiProduct.rates?.length).toBe(2);
      expect(omapiProduct.rates?.[0].type).toBe('mobile-data');
      expect(omapiProduct.rates?.[0].unit).toBe('MB');
      expect(omapiProduct.rates?.[0].cost).toBe('0,003487');
      expect(omapiProduct.rates?.[0].currency).toBe('EUR');
      expect(omapiProduct.rates?.[1].type).toBe('call-to-other-networks');
      expect(omapiProduct.rates?.[1].unit).toBe('MIN');
      expect(omapiProduct.rates?.[1].cost).toBe('0,041666');
      expect(omapiProduct.rates?.[1].currency).toBe('EUR');
    });

    it('should MAP the sub category', () => {
      expect(omapiProduct.subCategory?.name).toBe('Spotify');
      expect(omapiProduct.subCategory?.weight).toBe(20);
      expect(omapiProduct.subCategory?.mutualExclusion).toBe(false);
      expect(omapiProduct.subCategory?.localizedContent[0].locale).toBe('nl');
      expect(omapiProduct.subCategory?.localizedContent[0].name).toBe('Spotify NL');
      expect(omapiProduct.subCategory?.localizedContent[0].logo).toBe('');
      expect(omapiProduct.subCategory?.localizedContent[1].locale).toBe('fr');
      expect(omapiProduct.subCategory?.localizedContent[1].name).toBe('Spotify FR');
      expect(omapiProduct.subCategory?.localizedContent[1].logo).toBe('');
      expect(omapiProduct.subCategory?.localizedContent[2].locale).toBe('en');
      expect(omapiProduct.subCategory?.localizedContent[2].name).toBe('Spotify EN');
      expect(omapiProduct.subCategory?.localizedContent[2].logo).toBe('');
      expect(omapiProduct.subCategory?.localizedName).toBe('Spotify NL');
    });

    it('should MAP the services', () => {
      expect(omapiProduct.services?.length).toBe(6);

      const service_1 = omapiProduct.services?.[0];
      expect(service_1?.serviceType).toBe('MOBILE_CALLING');
      expect(service_1?.experience?.experienceType).toBe('CALL');
      expect(service_1?.specifications?.length).toBe(3);

      const service_1_specification_1 = service_1?.specifications?.[0];
      expect(service_1_specification_1?.labelKey).toBe('spec-mobilecalling-minutes-onnet');
      expect(service_1_specification_1?.value).toBe('unlimited');
      expect(service_1_specification_1?.unit).toBe('minutes');
      expect(service_1_specification_1?.visible).toBe(true);
      expect(service_1_specification_1?.weight).toBe('40');
      expect(service_1_specification_1?.localizedContent?.locale).toBe('nl');
      expect(service_1_specification_1?.localizedContent?.name).toBe('Bellen naar BASE');
      expect(service_1_specification_1?.localizedContent?.logo).toBe('');

      const service_1_specification_2 = service_1?.specifications?.[1];
      expect(service_1_specification_2?.labelKey).toBe('spec-mobilecalling-minutes-nationaleu');
      expect(service_1_specification_2?.minValue).toBe('0');
      expect(service_1_specification_2?.maxValue).toBe('600');
      expect(service_1_specification_2?.unit).toBe('minutes');
      expect(service_1_specification_2?.visible).toBe(true);
      expect(service_1_specification_2?.weight).toBe('30');
      expect(service_1_specification_2?.localizedContent?.locale).toBe('nl');
      expect(service_1_specification_2?.localizedContent?.name).toBe('Minuten naar alle');
      expect(service_1_specification_2?.localizedContent?.logo).toBe('');

      const service_1_specification_3 = service_1?.specifications?.[2];
      expect(service_1_specification_3?.labelKey).toBe('spec-mobilecalling-sms-nationaleu');
      expect(service_1_specification_3?.value).toBe('unlimited');
      expect(service_1_specification_3?.unit).toBe('number');
      expect(service_1_specification_3?.visible).toBe(true);
      expect(service_1_specification_3?.weight).toBe('50');
      expect(service_1_specification_3?.localizedContent?.locale).toBe('nl');
      expect(service_1_specification_3?.localizedContent?.name).toBe("Sms'en");
      expect(service_1_specification_3?.localizedContent?.logo).toBe('');

      const service_2 = omapiProduct.services?.[1];
      expect(service_2?.serviceType).toBe('MOBILE_MONETARY');
      expect(service_2?.experience?.experienceType).toBe('GENERAL');
      expect(service_2?.specifications?.length).toBe(1);

      const service_2_specification_1 = service_2?.specifications?.[0];
      expect(service_2_specification_1?.labelKey).toBe('spec-mobilemonetary-volume-nationaleu');
      expect(service_2_specification_1?.value).toBe('25');
      expect(service_2_specification_1?.unit).toBe('EUR');
      expect(service_2_specification_1?.visible).toBe(true);
      expect(service_2_specification_1?.weight).toBe('10');
      expect(service_2_specification_1?.localizedContent?.locale).toBe('nl');
      expect(service_2_specification_1?.localizedContent?.name).toBe('Maandelijks bedrag');
      expect(service_2_specification_1?.localizedContent?.logo).toBe('');

      const service_3 = omapiProduct.services?.[2];
      expect(service_3?.serviceType).toBe('MOBILE_INTERNET');
      expect(service_3?.experience?.experienceType).toBe('SURF');
      expect(service_3?.specifications?.length).toBe(1);

      const service_3_specification_1 = service_3?.specifications?.[0];
      expect(service_3_specification_1?.labelKey).toBe('spec-mobileinternet-data-nationaleu');
      expect(service_3_specification_1?.minValue).toBe('0');
      expect(service_3_specification_1?.maxValue).toBe('7');
      expect(service_3_specification_1?.unit).toBe('GB');
      expect(service_3_specification_1?.visible).toBe(true);
      expect(service_3_specification_1?.weight).toBe('20');
      expect(service_3_specification_1?.localizedContent?.locale).toBe('nl');
      expect(service_3_specification_1?.localizedContent?.name).toBe('Mobiele data in België en de EU-zone');
      expect(service_3_specification_1?.localizedContent?.logo).toBe('');

      const service_4 = omapiProduct.services?.[3];
      expect(service_4?.serviceType).toBe('GENERAL');
      expect(service_4?.experience?.experienceType).toBe('GENERAL');
      expect(service_4?.specifications?.length).toBe(0);
    });

    it('should map raw omapi product to omapi product without constituents, if it does not have constituents', () => {
      expect(omapiProduct.productId).toBe('1');
      expect(omapiProduct.getConstituent(OmapiConstituentType.INTERNET)).toBeUndefined();
      expect(omapiProduct.getConstituent(OmapiConstituentType.DTV)).toBeUndefined();
    });

    it('should map raw omapi product to omapi product with constituents, if it has constituents', () => {
      const omapiProductBundle: OmapiProduct = omapiProductMapper.toModel(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mockRawOmapi as RawOmapiProductInterface
      );

      expect(omapiProductBundle.getConstituent(OmapiConstituentType.INTERNET)?.productInfo?.productId).toBe('24675');
      expect(omapiProductBundle.getConstituent(OmapiConstituentType.INTERNET)?.productInfo?.productType).toBe(
        'PRODUCT'
      );
    });
    it('should map raw usage notifications to omapi usage notifications', () => {
      expect(omapiProduct.usagenotifications?.internet.length).toBe(1);
      expect(omapiProduct.usagenotifications?.internet[0].threshold.length).toBe(3);

      expect(omapiProduct.usagenotifications?.internet[0].threshold[0].communicationPreferenceType).toBe('Internet80');
      expect(omapiProduct.usagenotifications?.internet[0].threshold[0].communicationPreferenceTypeValue).toBe('80');

      expect(omapiProduct.usagenotifications?.internet[0].threshold[1].communicationPreferenceType).toBe('Internet90');
      expect(omapiProduct.usagenotifications?.internet[0].threshold[1].communicationPreferenceTypeValue).toBe('90');

      expect(omapiProduct.usagenotifications?.internet[0].threshold[2].communicationPreferenceType).toBe('Internet100');
      expect(omapiProduct.usagenotifications?.internet[0].threshold[2].communicationPreferenceTypeValue).toBe('100');
    });

    it('should map services in omapi', () => {
      const mockOmapiWithEmptyService = JSON.parse(JSON.stringify(mockProductsResponse)) as RawOmapiProductInterface;
      if (mockOmapiWithEmptyService.product) {
        mockOmapiWithEmptyService.product.services[0].experience = undefined;
      }
      const omapiWithEmptyService = omapiProductMapper.toModel(mockOmapiWithEmptyService);
      expect(omapiWithEmptyService?.services?.[0].experience).toBeUndefined();
    });

    it('should map empty services in omapi', () => {
      const mockOmapiWithEmptyService = JSON.parse(JSON.stringify(mockProductsResponse));
      mockOmapiWithEmptyService.product.services = [];
      const omapiWithEmptyService = omapiProductMapper.toModel(mockOmapiWithEmptyService);

      expect(omapiWithEmptyService.services).toEqual([]);
    });

    it('should map chars in omapi', () => {
      expect(omapiProduct.chars?.length).toBe(6);
      expect(omapiProduct.chars?.[0].key).toBe(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK);
      expect(omapiProduct.chars?.[1].key).toBe(CharsEnum.HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE);
      expect(omapiProduct.chars?.[0].values.length).toBe(9);
      expect(omapiProduct.chars?.[1].values.length).toBe(1);
    });

    it('should map isExternalContentPack when elementarycharacteristics is empty', () => {
      const mockProductsResponse_1 = JSON.parse(JSON.stringify(mockProductsResponse));
      mockProductsResponse_1.product.characteristics.elementarycharacteristics = [
        {
          key: 'hideaddbuttonwhenpackactive',
          value: 'TVPK0015',
          unit: '',
        },
      ];
      const actualOmpaiResponse = omapiProductMapper.toModel(mockProductsResponse_1);
      expect(actualOmpaiResponse.isExternalContentPack).toBe('false');
    });

    it('should map productTier with elementarycharacteristics producttier if not exists', () => {
      const mockProductsResponse_1 = JSON.parse(JSON.stringify(mockProductsResponse));
      mockProductsResponse_1.product.characteristics.productTier = undefined;
      const actualOmpaiResponse = omapiProductMapper.toModel(mockProductsResponse_1);
      expect((actualOmpaiResponse.characteristics as CharacteristicsInterface).productTier).toBe('Mid');
    });

    it('should correct DWN services to characteristics', () => {
      const mockProductsResponse_1 = JSON.parse(JSON.stringify(mockProductsResponse));
      mockProductsResponse_1.product.productid = 'C5FA0001';
      const actualOmpaiResponse = omapiProductMapper.toModel(mockProductsResponse_1);
      expect((actualOmpaiResponse.characteristics as CharacteristicsInterface)?.sharedMobileData).toMatchObject({
        value: '200',
        unit: 'GB',
      });
      expect((actualOmpaiResponse.characteristics as CharacteristicsInterface)?.maxMobileLines).toBe('5');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
