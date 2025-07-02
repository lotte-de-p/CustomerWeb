import { map as lodashMap } from 'lodash-es';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { forkJoin, Observable } from 'rxjs';
import { CacheService } from './cache/cache.service';
import { RawOmapiQueryProductInterface } from '../interfaces/raw-omapi-query-product.interface';
import { catchError, map, take } from 'rxjs/operators';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { LogFactory } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class OmapiQueryProductService {
  private readonly log = LogFactory.createLogger(OmapiQueryProductService);
  constructor(
    private readonly http: HttpClient,
    private readonly cacheService: CacheService,
    private readonly urlService: UrlService,
    private readonly messageService: MessageService
  ) {}

  getRawQueryProductByEndpoint(messageGroup: string, endpoint: string): Observable<RawOmapiQueryProductInterface> {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
    }
    return this.cacheService.get(endpoint).pipe(
      take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error, messageGroup)),
      map((response: unknown) => response as RawOmapiQueryProductInterface)
    );
  }

  rawQueryProductsFromEndpoints$(
    messageGroup: string,
    endpoints: string[]
  ): Observable<RawOmapiQueryProductInterface[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return forkJoin(lodashMap(endpoints, (endpoint) => this.getRawQueryProductByEndpoint(messageGroup, endpoint)));
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

  private handleError(error: HttpErrorResponse, messageGroup: string): Observable<void> {
    if (error.status !== 410) {
      this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-query-' + error.status));
    }
    this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
    throw Error('An error occurred while trying to fetch ' + messageGroup);
  }
}
