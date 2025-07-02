import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { OcapiNotConfigured } from '../constants/errors.constants';
import { PaymentRequestDataInterface, PaymentResponseDataInterface } from '@sales/hardware-checkout/data-access';
import { Observable } from 'rxjs';
import { HeaderUtil } from '../utils/header.util';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  baseUrl: string;
  basePath = '/public/api/mytelenet-web-sales-checkout';
  constructor(
    private readonly http: HttpClient,
    private readonly urlService: UrlService,
    private readonly configService: ConfigService
  ) {
    const ocapiUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
    if (!ocapiUrl) {
      throw new HardwareCheckoutError(OcapiNotConfigured);
    }
    this.baseUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
  }

  getPaymentObject(request: PaymentRequestDataInterface): Observable<PaymentResponseDataInterface> {
    const url = this.getUrl('/v1/payment');
    return this.doPost(url, request);
  }

  private getUrl(endpoint: string): string {
    return `${this.baseUrl}${this.basePath}${endpoint}`;
  }

  private doPost<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(url, body, {
      headers: HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true,
    });
  }
}
