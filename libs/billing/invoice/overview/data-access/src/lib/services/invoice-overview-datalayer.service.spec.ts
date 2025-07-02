import { TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { InvoiceOverviewDatalayerService } from './invoice-overview-datalayer.service';
import { Category, EventInfo } from 'udl';
import { BillingScenarioName, BillingScenarioType, Invoice, UnpaidInvoices } from './../entities/invoice';
import { PaymentStatus } from './../entities/payment-status';

describe('InvoiceOverviewDatalayerService', () => {
  let service: InvoiceOverviewDatalayerService;
  let datalayerService: DataLayerService;
  const eventInfo = {} as EventInfo;
  const category = {} as Category;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvoiceOverviewDatalayerService,
        MockProvider(DataLayerService),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(InvoiceOverviewDatalayerService);
    datalayerService = TestBed.inject(DataLayerService);
    jest.spyOn(datalayerService, 'setPage').mockReturnValue(Promise.resolve(true));
    jest.spyOn(datalayerService, 'addPageEvent');
    jest.spyOn(datalayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
    jest.spyOn(datalayerService, 'createEventInfo').mockReturnValue(eventInfo);
    jest.spyOn(datalayerService, 'createCategory').mockReturnValue(category);
  });

  it('should send the correct impression depending on the outstanding balance', () => {
    service.sendOutstandingBalance(0);
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_DATA]:
          InvoiceOverviewDatalayerService.ITEM_DATA_NO_BILL_SHOCK_SCENARIO,
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: InvoiceOverviewDatalayerService.EVENT_INFO_NO_BALANCE,
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_VIEWED,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
    datalayerService.sendEvent['mockClear']();
    service.sendOutstandingBalance(1);
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_DATA]:
          InvoiceOverviewDatalayerService.ITEM_DATA_NO_BILL_SHOCK_SCENARIO,
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: InvoiceOverviewDatalayerService.EVENT_INFO_OPEN_BALANCE,
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_VIEWED,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
    datalayerService.sendEvent['mockClear']();
    service.sendOutstandingBalance(-1);
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_DATA]:
          InvoiceOverviewDatalayerService.ITEM_DATA_NO_BILL_SHOCK_SCENARIO,
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: InvoiceOverviewDatalayerService.EVENT_INFO_NO_BALANCE,
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_VIEWED,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
  });

  it('should send the correct event when downloading an invoice', () => {
    service.sendDownloadInvoice();
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: '',
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_DOWNLOAD_INVOICE,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
  });

  it('should send the correct event when exporting invoices', () => {
    service.sendExportInvoices('pdf');
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: 'pdf',
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_EXPORT,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
    datalayerService.sendEvent['mockClear']();
    service.sendExportInvoices('csv');
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: 'csv',
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_EXPORT,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
    datalayerService.sendEvent['mockClear']();
    service.sendExportInvoices('zip');
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]: 'csv and pdf',
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_EXPORT,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
  });

  it('should send the correct event when changing the payment method', () => {
    service.sendChangePaymentMethod();
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]:
          InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_PAYMENT_METHOD,
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_BILLINGS_SETTINGS_CHANGED,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
  });

  it('should send the correct event when changing the delivery method', () => {
    service.sendChangeDeliveryMethod();
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME]:
          InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_DELIVERY_METHOD,
      },
      category,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_BILLINGS_SETTINGS_CHANGED,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK,
      [InvoiceOverviewDatalayerService.MESSAGE_GROUP]
    );
  });

  it('should send event with open balance when total amount is greater than 0', () => {
    const unpaidInvoices: UnpaidInvoices = createUnpaidInvoices();
    service.sendOutstandingBalanceWithBillScenarios(unpaidInvoices);

    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(Object),
      attributes: expect.objectContaining({
        itemName: InvoiceOverviewDatalayerService.EVENT_INFO_OPEN_BALANCE,
        itemData: InvoiceOverviewDatalayerService.ITEM_DATA_BILL_SHOCK_SCENARIO,
        listvar1: 'EXTRA_COST_ROAMING_OUTSIDE_EU',
      }),
      category: expect.any(Object),
    });
  });

  it('should send event with no balance when total amount is 0', () => {
    const unpaidInvoices: UnpaidInvoices = createUnpaidInvoices();
    unpaidInvoices.totalAmount = 0;
    service.sendOutstandingBalanceWithBillScenarios(unpaidInvoices);

    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(Object),
      attributes: expect.objectContaining({
        itemName: InvoiceOverviewDatalayerService.EVENT_INFO_NO_BALANCE,
        itemData: InvoiceOverviewDatalayerService.ITEM_DATA_BILL_SHOCK_SCENARIO,
        listvar1: 'EXTRA_COST_ROAMING_OUTSIDE_EU',
      }),
      category: expect.any(Object),
    });
  });

  it('should send event with unpaid bill attribute when payment status is unpaid', () => {
    const invoice: Invoice = { billingScenarios: [{ name: BillingScenarioName.CABLE_CONNECTION }] } as Invoice;
    service.sendAdditionalBillScenarios(invoice, 'unpaid');

    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(Object),
      attributes: expect.objectContaining({
        itemName: InvoiceOverviewDatalayerService.EVENT_ATTRIBUTE_UNPAID_BILL,
        itemData: InvoiceOverviewDatalayerService.ITEM_DATA_BILL_SHOCK_SCENARIO,
        listvar1: 'CABLE_CONNECTION',
      }),
      category: expect.any(Object),
    });
  });

  it('should send event with paid bill attribute when payment status is paid', () => {
    const invoice: Invoice = { billingScenarios: [{ name: BillingScenarioName.COMPENSATIONS }] } as Invoice;
    service.sendAdditionalBillScenarios(invoice, 'paid');

    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(Object),
      attributes: expect.objectContaining({
        itemName: InvoiceOverviewDatalayerService.EVENT_ATTRIBUTE_PAID_BILL,
        itemData: InvoiceOverviewDatalayerService.ITEM_DATA_BILL_SHOCK_SCENARIO,
        listvar1: 'COMPENSATIONS',
      }),
      category: expect.any(Object),
    });
  });

  function createUnpaidInvoices(): UnpaidInvoices {
    return {
      totalAmount: 100,
      invoices: [
        {
          billingScenarios: [
            {
              name: BillingScenarioName.EXTRA_COST_ROAMING_OUTSIDE_EU,
              type: BillingScenarioType.EXTRA_COST,
            },
          ],
          invoiceDate: new Date('2022-03-10'),
          paymentDueDate: new Date('2022-03-10'),
          documentUrl: '/ocapi/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices/abcxxx',
          invoiceAmount: 12.34,
          outstandingDebt: 12.34,
          invoiceNumber: 'abcxxx',
          paymentStatus: PaymentStatus.OVERDUE,
          ogmCode: '+++490/5829/80701+++',
        },
      ],
    };
  }
});
