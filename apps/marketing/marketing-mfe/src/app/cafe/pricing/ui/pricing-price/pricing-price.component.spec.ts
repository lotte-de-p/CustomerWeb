import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { when } from 'jest-when';
import { LanguageEnum, LanguageService, windowFactory } from '@telenet/ng-lib-page';
import { PricingPriceComponent } from './pricing-price.component';

describe('PricingPriceComponent', () => {
  let component: PricingPriceComponent,
    fixture: ComponentFixture<PricingPriceComponent>,
    languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([]),
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(PricingPriceComponent);
    languageService = TestBed.inject(LanguageService);
    component = new PricingPriceComponent(languageService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('ngOnInIt', () => {
    it('should set the data received from the pricingService and set loaded to true when productCategory is sofyProducts', () => {
      component.rendition = 'large';
      component.amount = '28.00';
      component.applyBaseSingleDigitStyle = false;

      languageService.getLanguage = jest.fn();
      when(languageService.getLanguage).mockReturnValue(LanguageEnum.FR);

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.rendition).toBe('large');
      expect(component.amount).toBe('28.00');
      expect(component.applyBaseSingleDigitStyle).toBe(false);
    });
  });

  describe('isRenditionSmall', () => {
    it('should return the true when rendition is small ', () => {
      component.rendition = 'small';
      expect(component.isRenditionSmall()).toEqual(true);
    });

    it('should return the false when rendition is small ', () => {
      component.rendition = 'large';
      expect(component.isRenditionSmall()).toEqual(false);
    });
  });

  describe('isRenditionLarge', () => {
    it('should return the true when rendition is small ', () => {
      component.rendition = 'large';
      expect(component.isRenditionLarge()).toEqual(true);
    });

    it('should return the false when rendition is small ', () => {
      component.rendition = 'small';
      expect(component.isRenditionLarge()).toEqual(false);
    });
  });

  describe('isFrench', () => {
    it('should return true when language is FR ', () => {
      languageService.getLanguage = jest.fn();
      when(languageService.getLanguage).mockReturnValue(LanguageEnum.FR);
      expect(component.isFrench()).toEqual(true);
    });

    it('should return false when language is EN', () => {
      languageService.getLanguage = jest.fn();
      when(languageService.getLanguage).mockReturnValue(LanguageEnum.EN);
      expect(component.isFrench()).toEqual(false);
    });
  });

  describe('getPriceSingleDigitCssWithComma', () => {
    it('should return CssBeforeText CSS when applyBaseSingleDigitStyle is true ', () => {
      component.applyBaseSingleDigitStyle = true;
      expect(component.getPriceSingleDigitCssBeforeText()).toEqual(`promo-highlight__third-row--before-text-one-digit`);
    });

    it('should not return CssBeforeText CSS when applyBaseSingleDigitStyle is false ', () => {
      component.applyBaseSingleDigitStyle = false;
      expect(component.getPriceSingleDigitCssBeforeText()).toEqual(``);
    });
  });

  describe('getPriceSingleDigitCssWithComma', () => {
    it('should return CssWithComma when applyBaseSingleDigitStyle is true ', () => {
      component.applyBaseSingleDigitStyle = true;
      expect(component.getPriceSingleDigitCssWithComma()).toEqual(`promo-highlight__third-row--with-comma-one-digit`);
    });

    it('should not return CssWithComma when applyBaseSingleDigitStyle is false ', () => {
      component.applyBaseSingleDigitStyle = false;
      expect(component.getPriceSingleDigitCssWithComma()).toEqual(``);
    });
  });

  describe('getPriceSingleDigitCss', () => {
    it('should return CSS when applyBaseSingleDigitStyle is true ', () => {
      component.applyBaseSingleDigitStyle = true;
      expect(component.getPriceSingleDigitCss()).toEqual(`promo-highlight__third-row--price-one-digit`);
    });

    it('should not return CSS when applyBaseSingleDigitStyle is false ', () => {
      component.applyBaseSingleDigitStyle = false;
      expect(component.getPriceSingleDigitCss()).toEqual(``);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
