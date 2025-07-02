import { Injectable } from '@angular/core';
import { map as lodashMap } from 'lodash-es';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { OmapiProduct } from '../models/omapi-product.model';
import { OmapiProductMapper } from '../mappers/omapi-product.mapper';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '@telenet/ng-lib-page';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { RawConstituentInterface, RawOmapiProductInterface } from '../interfaces/raw-omapi-product.interface';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { OmapiCacheService } from './cache/omapi-cache.service';
import { LogFactory } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class OmapiProductService {
  public gatewayUrl?: string;
  private readonly log = LogFactory.createLogger(OmapiProductService);
  private readonly FETCH_ERROR_PREFIX = 'An error occurred while trying to fetch ';

  constructor(
    private readonly http: HttpClient,
    private readonly urlService: UrlService,
    private readonly messageService: MessageService,
    private readonly omapiProductMapper: OmapiProductMapper,
    private readonly cacheService: OmapiCacheService<RawOmapiProductInterface>,
    private readonly configService: ConfigService
  ) {}

  getProductByEPC(messageGroup: string, epc: string): Observable<OmapiProduct> {
    const endpoint = this.getProductEndpoint(epc);
    return this.http.get(endpoint, this.getHttpConfig()).pipe(
      take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error, messageGroup)),
      map((response: RawOmapiProductInterface) => {
        return this.omapiProductMapper.toModel(response);
      })
    );
  }

  getRawProductByEndpoint(
    messageGroup: string,
    endpoint: string,
    silentlyHandleError = false
  ): Observable<RawOmapiProductInterface> {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
    }
    return this.cacheService.get(endpoint).pipe(
      take(1),
      catchError((error: HttpErrorResponse) =>
        silentlyHandleError ? this.handleErrorSilent(error, messageGroup) : this.handleError(error, messageGroup)
      ),
      mergeMap((response: RawOmapiProductInterface) => {
        return this.addConstituentsToOmapiResponse(response, messageGroup);
      }),
      map((response) => {
        return response;
      })
    );
  }

  rawProductsFromEndpoints$(
    messageGroup: string,
    endpoints: string[],
    silentlyHandleError = false
  ): Observable<RawOmapiProductInterface[]> {
    return forkJoin(
      lodashMap(endpoints, (endpoint) => this.getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError))
    ).pipe(map((omapiResponses) => omapiResponses.filter((omapiResponse) => omapiResponse !== undefined)));
  }

  getProductByEndpoint(messageGroup: string, endpoint: string): Observable<OmapiProduct> {
    return this.doGet(messageGroup, endpoint);
  }

  // to do cleanup (method name getProductById), maybe method for the hardcoded url
  getProductById(messageGroup: string, omapiId: string): Observable<OmapiProduct> {
    return this.doGet(messageGroup, this.getOmapiProductUrl(omapiId));
  }

  addConstituentsToOmapiResponse(
    rawOmapiResponse: RawOmapiProductInterface,
    messageGroup: string
  ): Observable<RawOmapiProductInterface> {
    if (
      rawOmapiResponse?.product &&
      rawOmapiResponse.product.characteristics &&
      rawOmapiResponse.product.characteristics.constituents
    ) {
      return this.resolveConstituents(rawOmapiResponse.product.characteristics.constituents, messageGroup).pipe(
        map((response: RawConstituentInterface[]) => {
          if (rawOmapiResponse?.product?.characteristics) {
            rawOmapiResponse.product.characteristics.constituents = response;
          }
          return rawOmapiResponse;
        })
      );
    } else {
      return of(rawOmapiResponse);
    }
  }

  getOmapiProductUrl(omapiId: string): string {
    return this.configService.getConfig(ConfigConstants.OMAPI_URL) + '/public/product/' + omapiId;
  }

  private doGet(messageGroup: string, endpoint: string): Observable<OmapiProduct> {
    if (!this.cacheService.get(endpoint)) {
      const httpObservable$ = this.http.get(endpoint, this.getHttpConfig());
      this.cacheService.add(endpoint, httpObservable$);
    }

    return this.cacheService.get(endpoint).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error, messageGroup)),
      map((response: RawOmapiProductInterface) => {
        return this.omapiProductMapper.toModel(response);
      })
    );
  }

  private resolveConstituents(
    constituents: RawConstituentInterface[],
    messageGroup: string
  ): Observable<RawConstituentInterface[]> {
    return forkJoin(lodashMap(constituents, (constituent) => this.resolveConstituent(constituent, messageGroup)));
  }

  private resolveConstituent(
    constituent: RawConstituentInterface,
    messageGroup: string
  ): Observable<RawConstituentInterface> {
    return forkJoin({
      specurl: of(constituent.specurl),
      type: of(constituent.type),
      rawOmapi: this.getRawProductByEndpoint(messageGroup, constituent.specurl, false),
    });
  }

  private getProductEndpoint(epc: string): string {
    return `${this.gatewayUrl}/omapi/public/product/${epc}`;
  }

  private getHttpConfig() {
    return {
      headers: {
        'x-alt-referer': this.urlService.getCurrentUrl(),
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 10000,
      cache: true,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: HttpErrorResponse, messageGroup: string): Observable<any> {
    if (error.status !== 410) {
      this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
    return throwError(() => this.FETCH_ERROR_PREFIX + messageGroup);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleErrorSilent(error: HttpErrorResponse, messageGroup: string): Observable<any> {
    if (error.status !== 410) {
      this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
    return of(undefined);
  }
}
