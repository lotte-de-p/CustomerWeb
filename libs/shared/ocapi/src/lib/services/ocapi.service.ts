// @ts-nocheck
import { isEmpty, forEach } from 'lodash-es';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { catchError, concatMap, map, mergeMap, take, tap } from 'rxjs/operators';

import { OmapiProductService, RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { UrlService } from '@telenet/ng-lib-page';
import { OcapiHelper } from '../utils';
import { OcapiCallConfig } from '../models';
import { HttpTypesEnum } from '../enums';
import { OmapiQueryProductService, RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { SalesConstants } from '../constants';
import { AuthenticationState } from './authentication/state/authentication.state';
import { Log, LogFactory } from '@telenet/ng-lib-shared';
import { ErrorReportService } from './error-report.service';

@Injectable({
  providedIn: 'root',
})
export class OcapiService {
  private static readonly LOG: Log = LogFactory.createLogger(OcapiService);

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService,
    private readonly messageService: MessageService,
    private readonly omapiProductService: OmapiProductService,
    private readonly omapiQueryProductService: OmapiQueryProductService,
    private readonly ocapiHelper: OcapiHelper,
    private readonly dataLayerService: DataLayerService,
    private readonly urlService: UrlService,
    private readonly authenticationState: AuthenticationState,
    private readonly errorReportService: ErrorReportService
  ) {}

  public doGet<T, G>(ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    return this.doResolve(HttpTypesEnum.GET, ocapiCallConfig);
  }

  public doPost<T, G>(ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    return this.doResolve(HttpTypesEnum.POST, ocapiCallConfig);
  }

  public doPut<T, G>(ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    return this.doResolve(HttpTypesEnum.PUT, ocapiCallConfig);
  }

  public doRestHead<T, G>(ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    return this.doResolve(HttpTypesEnum.HEAD, ocapiCallConfig);
  }

  public doPatch<T, G>(ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    return this.doResolve(HttpTypesEnum.PATCH, ocapiCallConfig);
  }

  public doDelete<T, G>(ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    return this.doResolve(HttpTypesEnum.DELETE, ocapiCallConfig);
  }

  private doResolve<T, G>(httpType: HttpTypesEnum, ocapiCallConfig: OcapiCallConfig<T, G>): Observable<G> {
    ocapiCallConfig.httpType = httpType;
    try {
      return this.doRequest(ocapiCallConfig).pipe(
        mergeMap((ocapiResponse: T) => {
          return this.ocapiResponseEnrichedWithOmapiData$<T>(
            ocapiCallConfig.messageGroupName,
            ocapiResponse,
            ocapiCallConfig.observeAsResponse,
            ocapiCallConfig.silentlyHandleError
          );
        }),
        mergeMap((ocapiResponse: T) => {
          return this.ocapiResponseEnrichedWithOmapiQueryData$<T>(
            ocapiCallConfig.messageGroupName,
            ocapiResponse,
            ocapiCallConfig.observeAsResponse
          );
        }),
        map((ocapiResponseEnrichedWithOmapiData: T) => {
          return (
            ocapiCallConfig.mapper?.toModel(ocapiResponseEnrichedWithOmapiData) || ocapiResponseEnrichedWithOmapiData
          );
        })
      );
    } catch (e) {
      this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
      this.messageService.addMessage(
        new ErrorMessage(
          ocapiCallConfig.messageGroupName,
          'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)
        )
      );
    }
  }

  private ocapiResponseEnrichedWithOmapiQueryData$<T>(
    messageGroup: string,
    ocapiResponse: T,
    isResponseObservable: boolean | undefined
  ): Observable<T> {
    const queryUrls = this.recursiveUrls(ocapiResponse, SalesConstants.QUERY_URL);
    let responseBody = ocapiResponse;
    if (isResponseObservable) {
      responseBody = ocapiResponse['body'];
    }
    if (!isEmpty(queryUrls)) {
      return this.omapiQueryProductService.rawQueryProductsFromEndpoints$(messageGroup, queryUrls).pipe(
        tap((omapiQueryResponses: RawOmapiQueryProductInterface[]) => {
          forEach(omapiQueryResponses, (omapiQueryResponse: RawOmapiQueryProductInterface) =>
            this.recursiveAddDataToOcapiResponse(responseBody, omapiQueryResponse, SalesConstants.QUERY_URL)
          );
        }),
        map(() => {
          return ocapiResponse;
        })
      );
    } else {
      return of(ocapiResponse);
    }
  }

  private ocapiResponseEnrichedWithOmapiData$<T>(
    messageGroup: string,
    ocapiResponse: T,
    isResponseObservable: boolean | undefined,
    silentlyHandleError: boolean
  ): Observable<T> {
    const specUrls = this.recursiveUrls(ocapiResponse, SalesConstants.SPEC_URL);
    let responseBody = ocapiResponse;
    if (isResponseObservable) {
      responseBody = ocapiResponse['body'];
    }
    if (!isEmpty(specUrls)) {
      return this.omapiProductService.rawProductsFromEndpoints$(messageGroup, specUrls, silentlyHandleError).pipe(
        tap((omapiResponses: RawOmapiProductInterface[]) => {
          forEach(omapiResponses, (omapiResponse: RawOmapiProductInterface) =>
            this.recursiveAddDataToOcapiResponse(responseBody, omapiResponse, SalesConstants.SPEC_URL)
          );
        }),
        map(() => {
          return ocapiResponse;
        })
      );
    } else {
      return of(ocapiResponse);
    }
  }

  private doRequest<T, G>(ocapiCall: OcapiCallConfig<T, G>): Observable<unknown> {
    const options = this.ocapiHelper.getHttpOptions(ocapiCall);

    switch (ocapiCall.httpType) {
      case HttpTypesEnum.GET: {
        const request$ = this.http
          .get(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.getEndpoint(), options)
          .pipe(catchError((error: unknown) => this.handleError(error as HttpErrorResponse, ocapiCall)));

        if (ocapiCall.authNeeded) {
          OcapiService.LOG.logDebug(`Auth is needed for request: ${ocapiCall.getEndpoint()}`);
          return this.authenticationState.getAuthenticated().pipe(
            concatMap(() => {
              return request$;
            })
          );
        }
        OcapiService.LOG.logDebug(`Auth is not needed for request: ${ocapiCall.getEndpoint()}`);
        return request$;
      }
      case HttpTypesEnum.POST:
        return this.http
          .post(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
          .pipe(
            take(1),
            catchError((error: unknown) => this.handleError(error as HttpErrorResponse, ocapiCall))
          );

      case HttpTypesEnum.PUT:
        return this.http
          .put(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
          .pipe(
            take(1),
            catchError((error: unknown) => this.handleError(error as HttpErrorResponse, ocapiCall))
          );

      case HttpTypesEnum.PATCH:
        return this.http
          .patch(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
          .pipe(
            take(1),
            catchError((error: unknown) => this.handleError(error as HttpErrorResponse, ocapiCall))
          );

      case HttpTypesEnum.HEAD:
        return this.http
          .head(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options)
          .pipe(
            take(1),
            catchError((error: unknown) => this.handleError(error as HttpErrorResponse, ocapiCall))
          );

      case HttpTypesEnum.DELETE:
        return this.http
          .delete(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options)
          .pipe(
            take(1),
            catchError((error: unknown) => {
              return this.handleError(error as HttpErrorResponse, ocapiCall);
            })
          );
    }
  }

  private recursiveAddDataToOcapiResponse(data: unknown, omapiorOmapiQueryResponse: unknown, type: string) {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (key === SalesConstants.SPEC_URL && type === SalesConstants.SPEC_URL) {
          this.isSpecUrl(value, data, omapiorOmapiQueryResponse);
        } else if (key === SalesConstants.QUERY_URL && type === SalesConstants.QUERY_URL) {
          this.isQueryUrl(value, data, omapiorOmapiQueryResponse);
        }
        if (typeof value === 'object') {
          this.recursiveAddDataToOcapiResponse(value, omapiorOmapiQueryResponse, type);
        }
      });
    }
    return data;
  }

  private isQueryUrl(value, data, omapiorOmapiQueryResponse) {
    const itemCodeFromQueryUrl: string = this.urlService.getParamsValueFromUrl(value.toString(), 'itemcodes');
    const itemCodeFromOmapiQuery = this.getProductIdFromOmapiResponse(omapiorOmapiQueryResponse, itemCodeFromQueryUrl);
    if (
      (itemCodeFromQueryUrl && itemCodeFromQueryUrl.toString()) ===
        (itemCodeFromOmapiQuery && itemCodeFromOmapiQuery.toString()) ||
      isEmpty(omapiorOmapiQueryResponse.products)
    ) {
      data['rawOmapiQuery'] = omapiorOmapiQueryResponse;
    }
  }

  private isSpecUrl(value, data, omapiorOmapiQueryResponse) {
    const epcFromSpecUrl = value.toString() && value.toString().split('/').pop();
    const epcFromOmapi = omapiorOmapiQueryResponse.product && omapiorOmapiQueryResponse.product.productid;
    if ((epcFromSpecUrl && epcFromSpecUrl.toString()) === (epcFromOmapi && epcFromOmapi.toString())) {
      data['rawOmapi'] = omapiorOmapiQueryResponse;
    }
  }

  private getProductIdFromOmapiResponse(omapiQueryResponse: unknown, itemCode: string): string {
    if (!isEmpty(omapiQueryResponse.products) && !isEmpty(omapiQueryResponse.products[0].variants)) {
      const filteredVariant = omapiQueryResponse.products[0].variants.find((varaint) => {
        return varaint.productId === itemCode;
      });
      return !isEmpty(filteredVariant) ? filteredVariant.productId : '';
    } else {
      return '';
    }
  }

  private recursiveUrls(data, type: string, urls = []) {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (key === type && value !== null) {
          urls.push(value.toString());
        }
        if (value !== null && typeof value === 'object') {
          this.recursiveUrls(value, type, urls);
        }
      });
    }
    return urls;
  }

  private handleError<T, G>(error: HttpErrorResponse, ocapiCall: OcapiCallConfig<T, G>) {
    if (ocapiCall.errorHandler !== undefined) {
      this.sendErrorEventToAnalyticsForCustomError(error, ocapiCall);
      return ocapiCall.errorHandler(error, ocapiCall);
    }

    let errorCode = 'ocapi.'.concat(error.status.toString());
    switch (error.status) {
      case 401:
        break;
      case 400:
      case 500:
        this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
        this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
        break;
      default:
        errorCode = this.getDetailedErrorCode(error, errorCode);
        if (errorCode !== 'ocapi.422-OCAPI-ERR-ODSO156') {
          this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
        }
        this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
        break;
    }
    const errorDetails = 'An error occured while trying to fetch ' + ocapiCall.messageGroupName + ' | ' + errorCode;
    const throwErrorDetails =
      errorCode && errorCode.includes('VM000061') ? errorDetails + ' | ' + error.error.cause : errorDetails;
    return throwError(() => throwErrorDetails);
  }

  private sendErrorEventToAnalyticsForCustomError<T, G>(error: HttpErrorResponse, ocapiCall: OcapiCallConfig<T, G>) {
    if (error && error.status !== 401) {
      let errorCode = 'ocapi.'.concat(error.status.toString());
      errorCode = this.getDetailedErrorCode(error, errorCode);
      this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
    }
  }

  private getDetailedErrorCode(error: HttpErrorResponse, errorCode: string) {
    if (error.error && error.error.code) {
      return errorCode.concat('-').concat(error.error.code);
    }
    return errorCode;
  }
}
