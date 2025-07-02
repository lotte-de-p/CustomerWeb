import { BillPriceComponent } from './bill-price.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BillPriceComponent', () => {
  let component: BillPriceComponent;
  let fixture: ComponentFixture<BillPriceComponent>;
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageService, { provide: 'Window', useValue: {} }],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    languageService = TestBed.inject(LanguageService);
    fixture = TestBed.createComponent(BillPriceComponent);
    component = fixture.componentInstance;
    component.price = '40.34';
  });

  describe('ngOnInit', () => {
    it('should split the input price in integers and decimals', () => {
      languageService.getLanguage = jest.fn().mockReturnValue(LanguageEnum.EN);

      fixture.detectChanges();
      component.ngOnInit();

      expect(component.integer).toEqual('40');
      expect(component.decimal).toEqual('34');
      expect(component.isFrench).toBe(false);
    });
    it('should isFrench to true given languageEnumFR', () => {
      languageService.getLanguage = jest.fn().mockReturnValue(LanguageEnum.FR);

      fixture.detectChanges();
      component.ngOnInit();

      expect(component.isFrench).toBe(true);
    });
  });
});
