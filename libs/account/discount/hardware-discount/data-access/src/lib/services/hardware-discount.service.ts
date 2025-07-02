import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable, filter, map, throwError } from 'rxjs';
import { HardwareDiscount, HardwareInvoice } from '../entities/hardware-discount.interface';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HardwareDiscountService {
  mock_reply = {} as HardwareDiscount;
  private static readonly MESSAGE_GROUP = 'hardware-discount';
  private static readonly HARDWARE_ENDPOINT =
    '/public/api/customer-web-account-discount-overview-cs/v1/discount-overview';

  constructor(private readonly ocapiService: OcapiService) {}

  loadHardwareDiscount(): Observable<HardwareDiscount> {
    const endpoint = HardwareDiscountService.HARDWARE_ENDPOINT;
    return this.ocapiService.doGet(
      new OcapiCallConfig<HardwareDiscount, HardwareDiscount>(HardwareDiscountService.MESSAGE_GROUP, endpoint)
    );
  }

  getHardwareInvoice(invoice: HardwareInvoice): Observable<Blob> {
    const endpoint =
      HardwareDiscountService.HARDWARE_ENDPOINT +
      `/${invoice.billingAccountNumber}/invoices/${invoice.documentReferenceNumber}`;
    const ocapiCallConfig = new OcapiCallConfig<HttpResponse<Uint8Array>, HttpResponse<Uint8Array>>(
      HardwareDiscountService.MESSAGE_GROUP,
      endpoint
    );
    ocapiCallConfig.responseType = 'blob';
    ocapiCallConfig.observeAsResponse = true;
    ocapiCallConfig.errorHandler = (error) => throwError(() => error);
    return this.ocapiService.doGet(ocapiCallConfig).pipe(
      filter((response) => !!response.body),
      map((response) => new Blob([response.body!], { type: 'pdf' }))
    );
  }
}
