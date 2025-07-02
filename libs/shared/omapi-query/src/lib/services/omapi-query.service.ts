import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { OmapiQueryHelper } from '../helpers/omapi-query.helper';
import { OmapiQueryCallConfig } from '../models/omapi-query-call.model';
import { OmapiEnrichService } from '@telenet/ng-lib-omapi';
import { AddressEnum } from '../enums/address.enum';

@Injectable({
  providedIn: 'root',
})
export class OmapiQueryService {
  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService,
    private readonly messageService: MessageService,
    private readonly omapiQueryHelper: OmapiQueryHelper,
    private readonly omapiEnrichService: OmapiEnrichService
  ) {}

  public doPost<T, G>(omapiQueryCallConfig: OmapiQueryCallConfig<T, G>): Observable<G> {
    return this.doRequest(omapiQueryCallConfig).pipe(
      mergeMap((omapiQueryResponse: T) => {
        return this.omapiEnrichService.enrichResponseWithOmapiData<T>(
          omapiQueryCallConfig.messageGroupName,
          omapiQueryResponse
        );
      }),
      map((omapiQueryResponseEnrichedWithOmapiData: T) => {
        return omapiQueryCallConfig.mapper.toModel(omapiQueryResponseEnrichedWithOmapiData);
      })
    );
  }

  public doGet<T, G>(omapiQueryCallConfig: OmapiQueryCallConfig<T, G>): Observable<G> {
    return this.http
      .get(this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCallConfig.endpoint)
      .pipe(
        // eslint-disable-next-line @typescript-eslint/ban-types
        mergeMap((omapiQueryResponse: Object) => {
          return this.omapiEnrichService.enrichResponseWithOmapiData<T>(
            omapiQueryCallConfig.messageGroupName,
            omapiQueryResponse as T
          );
        }),
        map((omapiResponseEnrichedWithOmapiData: T) =>
          omapiQueryCallConfig.mapper.toModel(omapiResponseEnrichedWithOmapiData)
        ),
        catchError((error: unknown) => {
          return this.handleError(error as HttpErrorResponse, omapiQueryCallConfig);
        })
      );
  }

  private doRequest<T, G>(omapiQueryCall: OmapiQueryCallConfig<T, G>): Observable<T> {
    const options = this.omapiQueryHelper.getHttpOptions();
    return this.http
      .post<T>(
        this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCall.endpoint,
        omapiQueryCall.data,
        options
      )
      .pipe(
        take(1),
        catchError((error: unknown) => {
          return this.handleError(error as HttpErrorResponse, omapiQueryCall);
        })
      );
  }

  private handleError<T, G>(error: HttpErrorResponse, omapiQueryCall: OmapiQueryCallConfig<T, G>) {
    if (omapiQueryCall.errorHandler !== undefined) {
      return omapiQueryCall.errorHandler(error, omapiQueryCall);
    }

    let errorCode = 'omapi-query.'.concat(error.status.toString());
    let detailedErrorCode;
    switch (error.status) {
      case 400:
        errorCode = AddressEnum.ADDRESS_NOT_FOUND
          ? `${omapiQueryCall.messageGroupName}.${AddressEnum.ADDRESS_NOT_FOUND}`
          : errorCode;
        this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
      case 500:
        this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
      default:
        detailedErrorCode = this.getDetailedErrorCode(error, errorCode);
        if (detailedErrorCode) {
          errorCode = detailedErrorCode;
        }
        this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
    }
    return throwError(
      () => 'An error occured while trying to fetch ' + omapiQueryCall.messageGroupName + ' | ' + errorCode
    );
  }

  private getDetailedErrorCode(error: HttpErrorResponse, errorCode: string): string | undefined {
    if (error.error && error.error.code) {
      return errorCode.concat('-').concat(error.error.code);
    }
    return undefined;
  }
}
