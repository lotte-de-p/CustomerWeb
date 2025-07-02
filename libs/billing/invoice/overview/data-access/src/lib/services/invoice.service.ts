import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, throwError } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { EXPORT_INVOICES_ENDPOINT, INVOICES_ENDPOINT, MESSAGE_GROUP } from '../invoice-overview.constants';
import { ExportType, Invoice, InvoiceOverview } from '../entities/invoice';
import { HttpResponse } from '@angular/common/http';
import { LanguageEnum } from '@telenet/ng-lib-page';

@Injectable({ providedIn: 'root' })
export class InvoiceOverviewService {
  public static readonly MESSAGE_GROUP = 'billing-overview';

  private readonly ocapiService = inject(OcapiService);

  getInvoices(billingAccountNumber: string): Observable<InvoiceOverview> {
    const url = INVOICES_ENDPOINT.replace('{billingAccountNumber}', billingAccountNumber);
    const ocapiCallConfig = this.getCallConfig<InvoiceOverview>(url);
    return this.ocapiService.doGet(ocapiCallConfig);
  }

  downloadDocument(invoice: Invoice): Observable<Blob> {
    const ocapiCallConfig = this.getCallConfig<HttpResponse<Uint8Array>>(invoice.documentUrl, 'blob', true);
    return this.ocapiService.doGet(ocapiCallConfig).pipe(
      filter((response) => !!response.body),
      map((response) => new Blob([response.body!], { type: this.getFileType('pdf') }))
    );
  }

  exportInvoices(billingAccountNumber: string, exportType: ExportType, lang: LanguageEnum) {
    const url = `${EXPORT_INVOICES_ENDPOINT.replace('{billingAccountNumber}', billingAccountNumber)}?type=${exportType}&language=${lang}`;
    const ocapiCallConfig = this.getCallConfig<HttpResponse<Uint8Array>>(url, 'blob', true);
    return this.ocapiService.doGet(ocapiCallConfig).pipe(
      filter((response) => !!response.body),
      map((response) => new Blob([response.body!], { type: this.getFileType(exportType) }))
    );
  }

  private getFileType(exportType: ExportType): string {
    switch (exportType) {
      case 'csv':
        return 'text/csv';
      case 'pdf':
        return 'application/pdf';
      case 'zip':
        return 'application/zip';
    }
  }

  private getCallConfig<T>(url: string, responseType?: string, observeAsResponse = false): OcapiCallConfig<T, T> {
    const callConfig = new OcapiCallConfig<T, T>(MESSAGE_GROUP, url);
    callConfig.responseType = responseType;
    callConfig.observeAsResponse = observeAsResponse;
    callConfig.errorHandler = (error) => throwError(() => error);
    return callConfig;
  }
}
