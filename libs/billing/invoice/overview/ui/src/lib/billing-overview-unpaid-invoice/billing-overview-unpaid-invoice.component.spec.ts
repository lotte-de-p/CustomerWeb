import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { UnpaidInvoiceComponent } from './billing-overview-unpaid-invoice.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { Invoice } from '@billing/invoice-overview/data-access';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { BillingOverviewPayComponent } from '../billing-overview-pay/billing-overview-pay.component';
import { BillingOverviewUnpaidStatusComponent } from '../billing-overview-unpaid-status/billing-overview-unpaid-status.component';
import { HttpClient } from '@angular/common/http';

describe('UnpaidInvoiceComponent', () => {
  let component: UnpaidInvoiceComponent;
  let fixture: ComponentFixture<UnpaidInvoiceComponent>;
  let languageService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnpaidInvoiceComponent, TranslateModule.forRoot()],
      declarations: [
        MockComponent(BillingOverviewAmountComponent),
        MockComponent(BillingOverviewDownloadComponent),
        MockComponent(BillingOverviewIconComponent),
        MockComponent(BillingOverviewPayComponent),
        MockComponent(BillingOverviewUnpaidStatusComponent),
      ],
      providers: [
        MockProvider(LanguageService),
        MockProvider(BillingOverviewDownloadComponent),
        MockProvider(HttpClient),
        {
          provide: 'Window',
          useValue: {
            location: { href: '' },
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UnpaidInvoiceComponent);
    component = fixture.componentInstance;
    languageService = TestBed.inject(LanguageService);
    component.invoice = {} as Invoice;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the locale string', () => {
    jest.spyOn(languageService, 'getLocaleString').mockReturnValue('en');
    fixture.detectChanges();
    expect(component.locale).toEqual('en');
    expect(languageService.getLocaleString).toHaveBeenCalled();
  });

  it('should set showDetailedBillScenario to true if areExplicitBillScenariosAvailable is true', () => {
    component.areExplicitBillScenariosAvailable = true;
    component.handleClickEvent();
    expect(component.showDetailedBillScenario).toBe(true);
  });

  it('should call downloadDocument if areExplicitBillScenariosAvailable is false', () => {
    component.areExplicitBillScenariosAvailable = false;
    component.downloadComponent = TestBed.createComponent(BillingOverviewDownloadComponent).componentInstance;
    jest.spyOn(component.downloadComponent, 'downloadDocument').mockImplementation(() => undefined);
    component.handleClickEvent();
    expect(component.downloadComponent.downloadDocument).toHaveBeenCalled();
  });
});
