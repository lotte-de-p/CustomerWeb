import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { PaidInvoiceComponent } from './billing-overview-paid-invoice.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { Invoice } from '@billing/invoice-overview/data-access';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { HttpClient } from '@angular/common/http';

describe('PaidInvoiceComponent', () => {
  let component: PaidInvoiceComponent;
  let fixture: ComponentFixture<PaidInvoiceComponent>;
  let languageService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidInvoiceComponent, TranslateModule.forRoot()],
      declarations: [
        MockComponent(BillingOverviewAmountComponent),
        MockComponent(BillingOverviewDownloadComponent),
        MockComponent(BillingOverviewIconComponent),
      ],
      providers: [
        MockProvider(LanguageService),
        MockProvider(HttpClient),
        MockProvider(BillingOverviewDownloadComponent),
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

    fixture = TestBed.createComponent(PaidInvoiceComponent);
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

  it('should see if amount is a reimbursement', () => {
    expect(component.isReimbursement(5)).toBe(false);
    expect(component.isReimbursement(-5)).toBe(true);
    expect(component.isReimbursement(0)).toBe(false);
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
