import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { EuroSignPipe, PricePipe } from '../pipes';
import { InstallTypePriceTestFactory } from '../models';
import { queryByTid } from '../utils/test.utils';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Mock = jest.Mock;
import { InstallTypePriceComponent } from '.';
import { TgFormsModule } from '../forms.module';

const priceWithoutPromo = 'price without promo';
const priceWithPromo = 'price with promo';
const STRIKE_THROUGH = 'strike-through';

describe('InstallTypePriceComponent', () => {
  let component: InstallTypePriceComponent;
  let fixture: ComponentFixture<InstallTypePriceComponent>;
  let de: DebugElement;
  const window: Window = {} as Window;
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallTypePriceComponent],
      providers: [LanguageService, { provide: 'Window', useValue: window }],
      imports: [FormsModule, CommonModule, TgFormsModule, PricePipe, EuroSignPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallTypePriceComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    languageService = TestBed.inject(LanguageService);
    languageService.getLanguage = jest.fn();
  });

  describe('Language NL', () => {
    beforeEach(() => {
      (languageService.getLanguage as Mock).mockReturnValue(LanguageEnum.NL);
    });

    describe('DESKTOP', () => {
      it(priceWithoutPromo, () => {
        component.installTypePrice = InstallTypePriceTestFactory.installPriceWithoutPromo('100,00');

        fixture.detectChanges();

        expect(component.isFrench).toBe(false);
        expect(queryByTid(de, 'decimal')?.text).toBe(',00');
        expect(queryByTid(de, 'integer')?.text).toBe('100');
        expect(queryByTid(de, STRIKE_THROUGH)).toBeNull();
        expect(queryByTid(de, 'nl')?.text).toBe('€');
        expect(queryByTid(de, 'fr')).toBeNull();
      });

      it(priceWithPromo, () => {
        component.installTypePrice = InstallTypePriceTestFactory.installPriceWithPromo('100,00', '5,00');

        fixture.detectChanges();

        expect(component.isFrench).toBe(false);
        expect(queryByTid(de, 'decimal')?.text).toBe(',00');
        expect(queryByTid(de, STRIKE_THROUGH)?.text).toBe('€100,00');
        expect(queryByTid(de, 'integer')?.text).toBe('5');
        expect(queryByTid(de, 'nl')?.text).toBe('€');
        expect(queryByTid(de, 'fr')).toBeNull();
      });
    });
  });

  describe('Language FR', () => {
    beforeEach(() => {
      (languageService.getLanguage as Mock).mockReturnValue(LanguageEnum.FR);
    });

    describe('DESKTOP', () => {
      it(priceWithoutPromo, () => {
        component.installTypePrice = InstallTypePriceTestFactory.installPriceWithoutPromo('100,00');

        fixture.detectChanges();

        expect(component.isFrench).toBe(true);
        expect(queryByTid(de, 'decimal')?.text).toBe(',00');
        expect(queryByTid(de, 'integer')?.text).toBe('100');
        expect(queryByTid(de, STRIKE_THROUGH)).toBeNull();
        expect(queryByTid(de, 'nl')).toBeNull();
        expect(queryByTid(de, 'fr')?.text).toBe('€');
      });

      it(priceWithPromo, () => {
        component.installTypePrice = InstallTypePriceTestFactory.installPriceWithPromo('100,00', '10,00');

        fixture.detectChanges();

        expect(component.isFrench).toBe(true);
        expect(queryByTid(de, 'integer')?.text).toBe('10');
        expect(queryByTid(de, 'decimal')?.text).toBe(',00');
        expect(queryByTid(de, STRIKE_THROUGH)?.text).toBe('100,00€');
        expect(queryByTid(de, 'fr')?.text).toBe('€');
        expect(queryByTid(de, 'nl')).toBeNull();
      });
    });
  });
});
