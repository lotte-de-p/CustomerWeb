import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PayByMobileSubscriptionComponent } from './pay-by-mobile-subscription.component';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { CachedCompanyService, Company, Subscription, SubscriptionStatus } from '@billing/pay-by-mobile/data-access';
import { of } from 'rxjs';
import { MockProvider } from 'ng-mocks';

describe('PayByMobileSubscriptionComponent', () => {
  let component: PayByMobileSubscriptionComponent;
  let fixture: ComponentFixture<PayByMobileSubscriptionComponent>;
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
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
        MockProvider(CachedCompanyService),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayByMobileSubscriptionComponent);
    component = fixture.componentInstance;
    languageService = TestBed.inject(LanguageService);
    companyService = TestBed.inject(CachedCompanyService);
    component.subscription = {
      companyId: 12345,
      serviceName: 'serviceName',
      status: SubscriptionStatus.ACTIVE,
      serviceTranslation: {
        nl: 'serviceNameNL',
        fr: 'serviceNameFR',
        en: 'serviceNameEN',
      },
      renewalPeriod: {
        period: 1,
        units: 'days',
      },
    } as Subscription;
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

  it('should show confirmation', () => {
    expect(component.confirmation).toBe(false);
    component.startConfirmation({
      stopPropagation: () => console.log('stop'),
    } as Event);
    expect(component.confirmation).toBe(true);
  });

  it('should show confirm', (done) => {
    expect(component.confirmation).toBe(false);
    component.confirmCancellation.subscribe(() => {
      expect(component.confirmation).toBe(false);
      done();
    });
    component.startConfirmation({
      stopPropagation: () => console.log('stop'),
    } as Event);
    expect(component.confirmation).toBe(true);
    component.confirm({
      stopPropagation: () => console.log('stop'),
    } as Event);
  });

  it('should get expired', () => {
    expect(component.expired).toBe(false);
    component.subscription = {
      companyId: 12345,
      serviceName: 'serviceName',
      status: SubscriptionStatus.EXPIRED,
    } as Subscription;
    expect(component.expired).toBe(true);
  });

  it('should get correct serviceName', () => {
    expect(component.serviceName).toEqual('serviceNameNL');
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.FR);
    fixture.detectChanges();
    expect(component.serviceName).toEqual('serviceNameFR');
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.EN);
    fixture.detectChanges();
    expect(component.serviceName).toEqual('serviceNameEN');
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
    fixture.detectChanges();
    expect(component.serviceName).toEqual('serviceNameNL');
  });
});
