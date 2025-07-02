import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPriceComponent } from './pricing-price.component';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';

describe('PricingPriceComponent', () => {
  let component: PricingPriceComponent;
  let fixture: ComponentFixture<PricingPriceComponent>;
  let languageService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPriceComponent],
      providers: [{ provide: 'Window', useValue: window }],
    }).compileComponents();

    languageService = TestBed.inject(LanguageService);
    fixture = TestBed.createComponent(PricingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('integralPart', () => {
    it('should get integral number before .', () => {
      component.amount = '99.00';

      component.ngOnInit();
      const result: string = component.integralPart;

      expect(result).toEqual('99');
    });

    it('should get integral number before ,', () => {
      component.amount = '99,00';

      component.ngOnInit();
      const result: string = component.integralPart;

      expect(result).toEqual('99');
    });
  });

  describe('decimalPart', () => {
    it('should get decimal number after .', () => {
      component.amount = '0.99';

      component.ngOnInit();
      const result: string = component.decimalPart;

      expect(result).toEqual('99');
    });

    it('should get decimal number after ,', () => {
      component.amount = '0,99';

      component.ngOnInit();
      const result: string = component.decimalPart;

      expect(result).toEqual('99');
    });
  });

  describe('isRenditionSmall', () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    it('should return true', () => {
      component.rendition = 'small';

      const result = component.isRenditionSmall();

      expect(result).toBe(true);
    });

    // eslint-disable-next-line sonarjs/no-duplicate-string
    it('should return false', () => {
      const result = component.isRenditionSmall();

      expect(result).toBe(false);
    });
  });

  describe('isRenditionLarge', () => {
    it('should return true', () => {
      const result = component.isRenditionLarge();

      expect(result).toBe(true);
    });

    it('should return false', () => {
      component.rendition = 'small';
      const result = component.isRenditionLarge();

      expect(result).toBe(false);
    });
  });

  describe('isFrench', () => {
    it('should return true', () => {
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.FR);

      const result: boolean = component.isFrench();

      expect(result).toBe(true);
    });

    it('should return false', () => {
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

      const result: boolean = component.isFrench();

      expect(result).toBe(false);
    });
  });
});
