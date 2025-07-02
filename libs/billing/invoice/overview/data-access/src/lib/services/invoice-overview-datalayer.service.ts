import { inject, Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ExportType, Invoice, UnpaidInvoices } from '../entities/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceOverviewDatalayerService {
  public static readonly MESSAGE_GROUP = 'invoice';
  public static readonly CATEGORY_CARE = 'care';
  public static readonly ATTRIBUTES_ITEM_NAME = 'itemName';
  public static readonly ATTRIBUTES_ITEM_DATA = 'itemData';
  public static readonly ATTRIBUTES_ITEM_GROUP = 'itemGroup';
  public static readonly EVENT_INFO_TYPE_IMPRESSION = 'impression';
  public static readonly EVENT_INFO_TYPE_CLICK = 'click';
  public static readonly EVENT_INFO_VIEWED = 'invoice viewed';
  public static readonly EVENT_INFO_OPEN_BALANCE = 'open balance';
  public static readonly EVENT_INFO_NO_BALANCE = 'no balance';
  public static readonly EVENT_INFO_DOWNLOAD_INVOICE = 'download invoice link clicked';
  public static readonly EVENT_INFO_EXPORT = 'export invoices link clicked';
  public static readonly EVENT_INFO_CHANGE_BILLINGS_SETTINGS_CHANGED = 'billing settings changed';
  public static readonly EVENT_INFO_CHANGE_PAYMENT_METHOD = 'change payment method';
  public static readonly EVENT_INFO_CHANGE_DELIVERY_METHOD = 'change delivery method';
  public static readonly ITEM_DATA_BILL_SHOCK_SCENARIO = 'bill shock scenario';
  public static readonly ITEM_DATA_NO_BILL_SHOCK_SCENARIO = 'no bill shock scenario';
  public static readonly ATTRIBUTES_LIST_VAR1 = 'listvar1';
  public static readonly EVENT_INFO_INVOICE_DETAILS_VIEWED = 'invoice details viewed';
  public static readonly EVENT_ATTRIBUTE_PAID_BILL = 'paid bill';
  public static readonly EVENT_ATTRIBUTE_UNPAID_BILL = 'unpaid bill';

  private readonly dataLayerService = inject(DataLayerService);

  public sendOutstandingBalance(outstandingBalance: number): void {
    this.sendImpression(
      InvoiceOverviewDatalayerService.EVENT_INFO_VIEWED,
      outstandingBalance > 0
        ? InvoiceOverviewDatalayerService.EVENT_INFO_OPEN_BALANCE
        : InvoiceOverviewDatalayerService.EVENT_INFO_NO_BALANCE
    );
  }

  public sendDownloadInvoice(): void {
    this.sendDataLayerEventWithAttributes(
      InvoiceOverviewDatalayerService.EVENT_INFO_DOWNLOAD_INVOICE,
      '',
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK
    );
  }

  public sendExportInvoices(exportType: ExportType): void {
    this.sendDataLayerEventWithAttributes(
      InvoiceOverviewDatalayerService.EVENT_INFO_EXPORT,
      exportType === 'zip' ? 'csv and pdf' : exportType,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK
    );
  }

  public sendChangePaymentMethod(): void {
    this.sendDataLayerEventWithAttributes(
      InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_BILLINGS_SETTINGS_CHANGED,
      InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_PAYMENT_METHOD,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK
    );
  }

  public sendChangeDeliveryMethod(): void {
    this.sendDataLayerEventWithAttributes(
      InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_BILLINGS_SETTINGS_CHANGED,
      InvoiceOverviewDatalayerService.EVENT_INFO_CHANGE_DELIVERY_METHOD,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_CLICK
    );
  }

  public sendOutstandingBalanceWithBillScenarios(unpaidInvoices: UnpaidInvoices): void {
    this.sendDataLayerEventWithAttributes(
      InvoiceOverviewDatalayerService.EVENT_INFO_VIEWED,
      unpaidInvoices.totalAmount > 0
        ? InvoiceOverviewDatalayerService.EVENT_INFO_OPEN_BALANCE
        : InvoiceOverviewDatalayerService.EVENT_INFO_NO_BALANCE,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      InvoiceOverviewDatalayerService.ITEM_DATA_BILL_SHOCK_SCENARIO,
      this.getUnpaidInvoiceBillScenarios(unpaidInvoices.invoices)
    );
  }

  public sendAdditionalBillScenarios(invoice: Invoice, paymentStatus: string) {
    this.sendDataLayerEventWithAttributes(
      InvoiceOverviewDatalayerService.EVENT_INFO_INVOICE_DETAILS_VIEWED,
      paymentStatus === 'unpaid'
        ? InvoiceOverviewDatalayerService.EVENT_ATTRIBUTE_UNPAID_BILL
        : InvoiceOverviewDatalayerService.EVENT_ATTRIBUTE_PAID_BILL,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      (invoice.billingScenarios?.length ?? 0) > 0
        ? InvoiceOverviewDatalayerService.ITEM_DATA_BILL_SHOCK_SCENARIO
        : InvoiceOverviewDatalayerService.ITEM_DATA_NO_BILL_SHOCK_SCENARIO,
      invoice.billingScenarios?.flatMap((scenario) => scenario.name).join(',')
    );
  }

  private sendImpression(eventName: string, itemName: string) {
    this.sendDataLayerEventWithAttributes(
      eventName,
      itemName,
      InvoiceOverviewDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      InvoiceOverviewDatalayerService.ITEM_DATA_NO_BILL_SHOCK_SCENARIO
    );
  }

  private sendDataLayerEventWithAttributes(
    eventName: string,
    itemName: string,
    eventType: string,
    itemData?: string,
    billShockLabels?: string
  ) {
    const attributes: Record<string, unknown> = {};

    attributes[InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_NAME] = itemName;
    if (itemData) {
      attributes[InvoiceOverviewDatalayerService.ATTRIBUTES_ITEM_DATA] = itemData;
    }
    if (billShockLabels) {
      attributes[InvoiceOverviewDatalayerService.ATTRIBUTES_LIST_VAR1] = billShockLabels;
    }
    const category = this.dataLayerService.createCategory(
      InvoiceOverviewDatalayerService.CATEGORY_CARE,
      InvoiceOverviewDatalayerService.MESSAGE_GROUP
    );
    const eventInfo = this.dataLayerService.createEventInfo(eventName, eventType, [
      InvoiceOverviewDatalayerService.MESSAGE_GROUP,
    ]);
    this.dataLayerService.sendEvent({ eventInfo, attributes, category });
  }

  private getUnpaidInvoiceBillScenarios(invoices: Invoice[]): string {
    return Array.from(
      new Set(invoices.flatMap((invoice) => invoice.billingScenarios?.map((scenario) => scenario.name) || []))
    ).join(',');
  }
}
