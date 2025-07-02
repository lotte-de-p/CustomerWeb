import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { LoginDetails, OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { Login, ProductPriceChangesByAccount } from '../entities/product-price-change';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductPriceChangesService {
  public static readonly MESSAGE_GROUP = 'product-price-changes';
  private static readonly PRODUCT_PRICE_CHANGES_ENDPOINT =
    '/public/api/product-price-change-service/v1/product-price-changes';
  private static readonly AUTH_ENDPOINT = '/oauth/login';

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly messageService: MessageService
  ) {}

  login(login: Login) {
    const httpParams = new HttpParams().set('customernumber', login.customerNumber).set('lastname', login.lastName);
    return this.ocapiService
      .doPost(
        this.getOcapiCallConfig<LoginDetails>(
          ProductPriceChangesService.MESSAGE_GROUP,
          `${ProductPriceChangesService.AUTH_ENDPOINT}?${httpParams.toString()}`
        )
      )
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.handleError(error, ProductPriceChangesService.MESSAGE_GROUP, this.getLoginError)
        )
      );
  }

  getProductPriceChanges(): Observable<ProductPriceChangesByAccount[]> {
    return this.ocapiService
      .doGet(
        this.getOcapiCallConfig<ProductPriceChangesByAccount[]>(
          ProductPriceChangesService.MESSAGE_GROUP,
          ProductPriceChangesService.PRODUCT_PRICE_CHANGES_ENDPOINT
        )
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const messageGroupName =
            error.status === 403
              ? `${ProductPriceChangesService.MESSAGE_GROUP}.hidden`
              : ProductPriceChangesService.MESSAGE_GROUP;
          return this.handleError(error, messageGroupName, this.getProductPriceChangesError);
        })
      );
  }

  private getOcapiCallConfig<R>(messageGroupName: string, endpoint: string): OcapiCallConfig<R, R> {
    const ocapiCallConfig = new OcapiCallConfig<R, R>(messageGroupName, endpoint);
    ocapiCallConfig.errorHandler = (error) => throwError(() => error);
    return ocapiCallConfig;
  }

  private handleError(error: HttpErrorResponse, messageGroupName: string, getLabelKey: (status: number) => string) {
    const errorLabelKey = getLabelKey(error.status);
    this.addErrorMessage(errorLabelKey, messageGroupName);
    return throwError(() => error);
  }

  private addErrorMessage(key: string, messageGroupName: string): void {
    this.messageService.addMessage(new ErrorMessage(messageGroupName, key));
  }

  private getLoginError(status: number): string {
    return status === 400 ? `${ProductPriceChangesService.MESSAGE_GROUP}.ocapi.wrong-credentials` : `ocapi.${status}`;
  }

  private getProductPriceChangesError(status: number): string {
    return status === 403 ? 'ocapi.403-OCAPI-ERR-004' : `ocapi.${status}`;
  }
}
