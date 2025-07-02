import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewComponent } from './billing-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';
import {
  BillingAccount,
  Invoice,
  InvoiceOverview,
  InvoiceOverviewFacade,
  UnpaidInvoices,
} from '@billing/invoice-overview/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService, PathCategorisationService } from '@telenet/ng-lib-page';
import { signal } from '@angular/core';

describe('InvoiceOverviewComponent', () => {
  let component: BillingOverviewComponent;
  let fixture: ComponentFixture<BillingOverviewComponent>;
  let facade: InvoiceOverviewFacade;
  let pathCategorisationService: PathCategorisationService;
  let languageService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewComponent, TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: {
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
        MockProvider(ActivatedRoute),
        MockProvider(PathCategorisationService),
        MockProvider(InvoiceOverviewFacade, {
          loading: signal(false),
          paidInvoicesAvailable: signal(false),
          selectedBillingAccount: signal(undefined),
          loadError: signal(undefined),
          showAll: signal(false),
          isBusinessCustomer: signal(false),
          invoiceOverview: signal({
            paidInvoices: [
              {
                invoiceYear: '2024',
                invoices: [
                  {
                    invoiceAmount: 123.45,
                    invoiceNumber: '12345',
                  } as Invoice,
                ],
              },
            ],
            unpaidInvoices: {
              totalAmount: 12345,
              invoices: [],
            } as UnpaidInvoices,
          } as InvoiceOverview),
          updatedPaymentMethod: signal(''),
          areExplicitBillScenariosAvailable: signal(false),
        }),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewComponent);
    component = fixture.componentInstance;
    component.onlinePaymentLink = '/test/payment/url';
    facade = TestBed.inject(InvoiceOverviewFacade);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
    languageService = TestBed.inject(LanguageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load more', () => {
    jest.spyOn(facade, 'loadMore');
    component.loadMore();
    expect(facade.loadMore).toHaveBeenCalled();
  });

  it('should get the billing settings url', () => {
    expect(component.getBillingSettingsUrl({ billingAccountNumber: '123456' } as BillingAccount)).toBeUndefined();
    component.billingSettingsLink = 'https://billing-settings.link';
    expect(component.getBillingSettingsUrl({ billingAccountNumber: '123456' } as BillingAccount)).toEqual(
      'https://billing-settings.link?accountNumber=123456'
    );
  });

  it('should get the online payment url', () => {
    jest.spyOn(facade, 'isBusinessCustomer').mockReturnValue(false);
    expect(component.getOnlinePaymentUrl({ billingAccountNumber: '123456' } as BillingAccount, {} as Invoice)).toEqual(
      '/test/payment/url?accountNumber=123456'
    );
    jest.spyOn(facade, 'isBusinessCustomer').mockReturnValue(true);
    expect(
      component.getOnlinePaymentUrl(
        { billingAccountNumber: '123456' } as BillingAccount,
        {
          invoiceNumber: 'abcxxx',
          ogmCode: '+++000/1111111/222+++',
        } as Invoice
      )
    ).toEqual('/test/payment/url?accountNumber=123456&billNumber=abcxxx&ogmCode=+++000/1111111/222+++');
  });

  it('should get the locale string', () => {
    jest.spyOn(languageService, 'getLocaleString').mockReturnValue('en');
    fixture.detectChanges();
    expect(component.locale).toEqual('en');
    expect(languageService.getLocaleString).toHaveBeenCalled();
  });

  it('should return true if the customer brand is TELENET', () => {
    jest.spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue('TELENET');
    expect(component.isTelenetCustomer).toBe(true);
  });

  it('should return false if the customer brand is BASE', () => {
    jest.spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue('BASE');
    expect(component.isTelenetCustomer).toBe(false);
  });

  it('should return true when facade.areExplicitBillScenariosAvailable is true and showBillScenario is true', () => {
    jest.spyOn(facade, 'areExplicitBillScenariosAvailable').mockReturnValue(true);
    component.showBillScenario = true;
    expect(component.areExplicitBillScenariosAvailable).toBe(true);
  });

  it('should return false when facade.areExplicitBillScenariosAvailable is false and showBillScenario is true', () => {
    jest.spyOn(facade, 'areExplicitBillScenariosAvailable').mockReturnValue(false);
    component.showBillScenario = true;
    expect(component.areExplicitBillScenariosAvailable).toBe(false);
  });

  it('should return false when facade.areExplicitBillScenariosAvailable is true and showBillScenario is false', () => {
    jest.spyOn(facade, 'areExplicitBillScenariosAvailable').mockReturnValue(true);
    component.showBillScenario = false;
    expect(component.areExplicitBillScenariosAvailable).toBe(false);
  });

  it('should return false when facade.areExplicitBillScenariosAvailable is false and showBillScenario is false', () => {
    jest.spyOn(facade, 'areExplicitBillScenariosAvailable').mockReturnValue(false);
    component.showBillScenario = false;
    expect(component.areExplicitBillScenariosAvailable).toBe(false);
  });
});
