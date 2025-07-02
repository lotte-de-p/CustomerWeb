import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationComponent } from './recommendation.component';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TranslatePipe } from '@ngx-translate/core';
import { ProductSpec, SalesOffer } from '@sales/shared/data-access';

describe('RecommendationComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;
  const easyInternet = 'Easy Internet';
  const tvIconic = 'Tv Iconic';
  const mobile13Gb = 'Mobile 13 GB';
  const fixedTelephone = 'Fixed telephone';
  const oneForOne = 'ONE for one';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationComponent, TgTranslateTestingModule.forRoot()],
      providers: [TranslatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On creation', () => {
    it('should create recommendation for multiple tlo', () => {
      const easyInternetTvIconicOmapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      easyInternetTvIconicOmapiProduct.externalProductCode = 'TWOP0011';
      const telenetMobile13GbOmapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      telenetMobile13GbOmapiProduct.externalProductCode = 'TMOB0001';
      telenetMobile13GbOmapiProduct.productType = 'MOBILE';
      const fixedTelephoneOmapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      fixedTelephoneOmapiProduct.externalProductCode = 'FREU0000';

      const salesOffer: SalesOffer = {
        price: 10,
        promo: null,
      };

      const easyInternetTvIconcicProductSpec: ProductSpec = {
        shortSummaries: [
          {
            labelKey: easyInternet,
            type: 'INTERNET',
          },
          {
            labelKey: tvIconic,
            type: 'TV',
          },
        ],
        detailedSpecs: [
          { icon: '', labelKey: easyInternet, type: 'INTERNET' },
          { icon: '', labelKey: tvIconic, type: 'TV' },
        ],
      };
      const telenetMobile13GbProductSpec: ProductSpec = {
        shortSummaries: [
          {
            labelKey: mobile13Gb,
            type: 'MOBILE',
          },
        ],
        detailedSpecs: [{ icon: '', labelKey: mobile13Gb, type: 'MOBILE' }],
      };
      const fixedTelephoneProductSpec: ProductSpec = {
        shortSummaries: [
          {
            labelKey: fixedTelephone,
            type: 'FIXED_TELEPHONE',
          },
        ],
        detailedSpecs: [{ icon: '', labelKey: fixedTelephone, type: 'FIXED_TELEPHONE' }],
      };

      component.productRecommendation = {
        offers: [
          { id: 'TWOP0011', offers: [], type: 'BUNDLE' },
          { id: 'TMOB0001', offers: [], type: 'MOBILE' },
          { id: 'TMOB0001', offers: [], type: 'MOBILE' },
          { id: 'FREU0000', offers: [], type: 'FIXED_TELEPHONE' },
        ],
        salesOffer,
        products: [
          {
            localizedOmapiProductName: 'Easy Internet + Tv Iconic',
            productSpec: easyInternetTvIconcicProductSpec,
            omapiProduct: easyInternetTvIconicOmapiProduct,
          },
          {
            localizedOmapiProductName: 'Telenet Mobile 13 GB',
            productSpec: telenetMobile13GbProductSpec,
            omapiProduct: telenetMobile13GbOmapiProduct,
          },
          {
            localizedOmapiProductName: 'Telenet Mobile 13 GB',
            productSpec: telenetMobile13GbProductSpec,
            omapiProduct: telenetMobile13GbOmapiProduct,
          },
          {
            localizedOmapiProductName: fixedTelephone,
            productSpec: fixedTelephoneProductSpec,
            omapiProduct: fixedTelephoneOmapiProduct,
          },
        ],
      };

      expect(component.isMultipleTLO).toBe(true);
      expect(component.containsC5Product).toBe(false);
      expect(component.title).toEqual('Easy Internet + Tv Iconic + 2x Telenet Mobile 13 GB + Fixed telephone');
      expect(component.shortSummaries).toEqual([easyInternet, tvIconic, mobile13Gb, fixedTelephone]);
      expect(component.salesOffer).toEqual(salesOffer);
      expect(component.internetDetailedSpecsTitle).toEqual('Easy Internet + Tv Iconic');
      expect(component.internetDetailedSpecs).toEqual([easyInternetTvIconcicProductSpec.detailedSpecs[0]]);
      expect(component.tvDetailedSpecs).toEqual([easyInternetTvIconcicProductSpec.detailedSpecs[1]]);
      expect(component.mobileDetailedSpecs).toEqual(telenetMobile13GbProductSpec.detailedSpecs);
      expect(component.fixedTelephoneDetailedSpecs).toEqual(fixedTelephoneProductSpec.detailedSpecs);
    });

    it('should create recommendation for C5', () => {
      const c5OmapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      c5OmapiProduct.externalProductCode = 'C5FA0001';
      jest.spyOn(c5OmapiProduct, 'isConnect5').mockReturnValue(true);

      const salesOffer: SalesOffer = {
        price: 10,
        promo: null,
      };

      const c5ProductSpec: ProductSpec = {
        shortSummaries: [
          {
            labelKey: 'Internet',
            type: 'INTERNET',
          },
          {
            labelKey: 'TV',
            type: 'TV',
          },
          {
            labelKey: 'MOBILE',
            type: 'MOBILE',
          },
          {
            labelKey: 'FIXED_TELEPHONE',
            type: 'FIXED_TELEPHONE',
          },
        ],
        detailedSpecs: [
          { icon: '', labelKey: 'Internet', type: 'INTERNET' },
          { icon: '', labelKey: tvIconic, type: 'TV' },
          { icon: '', labelKey: 'Mobile', type: 'MOBILE' },
          { icon: '', labelKey: fixedTelephone, type: 'FIXED_TELEPHONE' },
        ],
      };
      component.productRecommendation = {
        offers: [{ id: 'C5FA0001', offers: [], type: 'BUNDLE' }],
        salesOffer,
        products: [
          {
            localizedOmapiProductName: oneForOne,
            productSpec: c5ProductSpec,
            omapiProduct: c5OmapiProduct,
          },
        ],
      };

      expect(component.isMultipleTLO).toBe(false);
      expect(component.containsC5Product).toBe(true);
      expect(component.title).toEqual(oneForOne);
      expect(component.shortSummaries).toEqual(['Internet', 'TV', 'MOBILE', 'FIXED_TELEPHONE']);
      expect(component.salesOffer).toEqual(salesOffer);
      expect(component.internetDetailedSpecsTitle).toEqual(oneForOne);
      expect(component.internetDetailedSpecs).toEqual([c5ProductSpec.detailedSpecs[0]]);
      expect(component.tvDetailedSpecs).toEqual([c5ProductSpec.detailedSpecs[1]]);
      expect(component.mobileDetailedSpecs).toEqual([c5ProductSpec.detailedSpecs[2]]);
      expect(component.fixedTelephoneDetailedSpecs).toEqual([c5ProductSpec.detailedSpecs[3]]);
    });
  });
});
