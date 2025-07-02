import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PayByMobileTransactionComponent } from './pay-by-mobile-transaction.component';
import { CachedCompanyService, Company, Transaction } from '@billing/pay-by-mobile/data-access';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { of } from 'rxjs';
import { MockProvider } from 'ng-mocks';

describe('PayByMobileTransactionComponent', () => {
  let component: PayByMobileTransactionComponent;
  let fixture: ComponentFixture<PayByMobileTransactionComponent>;
  let languageService: LanguageService;
  let companyService: CachedCompanyService;

  const company = {
    companyName: 'Test Company',
  } as Company;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: window }, MockProvider(CachedCompanyService)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayByMobileTransactionComponent);
    component = fixture.componentInstance;
    languageService = TestBed.inject(LanguageService);
    companyService = TestBed.inject(CachedCompanyService);
    component.transaction = {
      companyId: 12345,
      serviceName: 'serviceName',
    } as Transaction;
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
    jest.spyOn(languageService, 'getLocaleString').mockReturnValue('nl-be');
    jest.spyOn(companyService, 'getCompany').mockReturnValue(of(company));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open and retrieve company details', fakeAsync(() => {
    expect(component.showDetails).toBe(false);
    component.open({
      stopPropagation: () => console.log('stop'),
    } as Event);
    tick(500);
    expect(component.showDetails).toBe(true);
    expect(companyService.getCompany).toHaveBeenCalledWith(12345, 'serviceName');
    expect(component.company).toEqual(company);
  }));

  it('should close the details', fakeAsync(() => {
    expect(component.showDetails).toBe(false);
    component.open({
      stopPropagation: () => console.log('stop'),
    } as Event);
    tick(500);
    expect(component.showDetails).toBe(true);
    component.close();
    expect(component.showDetails).toBe(false);
  }));
});
