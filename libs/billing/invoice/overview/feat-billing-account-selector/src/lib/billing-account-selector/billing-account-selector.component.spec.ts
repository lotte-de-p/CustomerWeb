import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingAccountSelectorComponent } from './billing-account-selector.component';
import { MockProvider } from 'ng-mocks';
import { BillingAccount, BillingAccountService, InvoiceOverviewFacade } from '@billing/invoice-overview/data-access';
import { of } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { signal } from '@angular/core';

describe('BillingAccountSelectorComponent', () => {
  let component: BillingAccountSelectorComponent;
  let fixture: ComponentFixture<BillingAccountSelectorComponent>;
  let billingAccountService: BillingAccountService;
  let facade: InvoiceOverviewFacade;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        MockProvider(InvoiceOverviewFacade, {
          selectBillingAccount: jest.fn(),
          selectedBillingAccount: signal(undefined),
        }),
        MockProvider(BillingAccountService),
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingAccountSelectorComponent);
    component = fixture.componentInstance;
    billingAccountService = TestBed.inject(BillingAccountService);
    urlService = TestBed.inject(UrlService);
    facade = TestBed.inject(InvoiceOverviewFacade);
    jest.spyOn(facade, 'selectBillingAccount');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the billing accounts on init with default account', () => {
    jest
      .spyOn(billingAccountService, 'getBillingAccounts')
      .mockReturnValue(
        of([
          { billingAccountNumber: '123', defaultAccount: true } as BillingAccount,
          { billingAccountNumber: '987', defaultAccount: false } as BillingAccount,
        ])
      );

    fixture.detectChanges();
    component.ngOnInit();
    expect(billingAccountService.getBillingAccounts).toHaveBeenCalled();
    expect(component.billingAccounts).toEqual([
      { billingAccountNumber: '123', defaultAccount: true },
      {
        billingAccountNumber: '987',
        defaultAccount: false,
      },
    ]);
    expect(facade.selectBillingAccount).toHaveBeenCalledWith(
      {
        billingAccountNumber: '123',
        defaultAccount: true,
      },
      undefined
    );
    expect(component.loading).toBe(false);
  });

  it('should get the billing accounts on init with session storage', () => {
    jest
      .spyOn(billingAccountService, 'getBillingAccounts')
      .mockReturnValue(
        of([{ billingAccountNumber: '123' } as BillingAccount, { billingAccountNumber: '987' } as BillingAccount])
      );
    sessionStorage.setItem(BillingAccountSelectorComponent.BILLING_ACCOUNT_STORAGE_KEY, '123');
    fixture.detectChanges();
    component.ngOnInit();
    expect(billingAccountService.getBillingAccounts).toHaveBeenCalled();
    expect(component.billingAccounts).toEqual([{ billingAccountNumber: '123' }, { billingAccountNumber: '987' }]);
    expect(facade.selectBillingAccount).toHaveBeenCalledWith(
      {
        billingAccountNumber: '123',
      },
      undefined
    );
    expect(component.loading).toBe(false);
  });

  it('should get the billing accounts on init from query param', () => {
    jest
      .spyOn(billingAccountService, 'getBillingAccounts')
      .mockReturnValue(
        of([{ billingAccountNumber: '123' } as BillingAccount, { billingAccountNumber: '987' } as BillingAccount])
      );
    jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('123');
    sessionStorage.clear();
    fixture.detectChanges();
    component.ngOnInit();
    expect(billingAccountService.getBillingAccounts).toHaveBeenCalled();
    expect(component.billingAccounts).toEqual([{ billingAccountNumber: '123' }, { billingAccountNumber: '987' }]);
    expect(facade.selectBillingAccount).toHaveBeenCalledWith(
      {
        billingAccountNumber: '123',
      },
      undefined
    );
    expect(component.loading).toBe(false);
  });

  it('should get the billing accounts on init with fallback', () => {
    jest
      .spyOn(billingAccountService, 'getBillingAccounts')
      .mockReturnValue(
        of([
          { billingAccountNumber: '123', defaultAccount: false } as BillingAccount,
          { billingAccountNumber: '987', defaultAccount: true } as BillingAccount,
        ])
      );
    sessionStorage.clear();
    fixture.detectChanges();
    component.showBillScenario = true;
    component.ngOnInit();
    expect(billingAccountService.getBillingAccounts).toHaveBeenCalled();
    expect(component.billingAccounts).toEqual([
      { billingAccountNumber: '123', defaultAccount: false },
      { billingAccountNumber: '987', defaultAccount: true },
    ]);
    expect(facade.selectBillingAccount).toHaveBeenCalledWith(
      {
        billingAccountNumber: '987',
        defaultAccount: true,
      },
      true
    );
    expect(component.loading).toBe(false);
  });

  it('should get the billing accounts on init without billing accounts', () => {
    jest.spyOn(billingAccountService, 'getBillingAccounts').mockReturnValue(of([]));
    sessionStorage.clear();
    fixture.detectChanges();
    component.ngOnInit();
    expect(billingAccountService.getBillingAccounts).toHaveBeenCalled();
    expect(component.billingAccounts).toEqual([]);
    expect(facade.selectBillingAccount).not.toHaveBeenCalled();
    expect(component.loading).toBe(false);
  });

  it('should toggle the menu', () => {
    expect(component.showMenu).toBe(false);
    component.open();
    expect(component.showMenu).toBe(true);
    component.close();
    expect(component.showMenu).toBe(false);
  });
});
