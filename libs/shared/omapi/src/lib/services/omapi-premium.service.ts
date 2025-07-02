import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { UrlService } from '@telenet/ng-lib-page';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { RawOmapiPremiumInterface } from '../interfaces';
import { OmapiPremiumMapper } from '../mappers';
import { OmapiPremium } from '../models';
import { OmapiCacheService } from './cache/omapi-cache.service';
import { LogFactory } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class OmapiPremiumService {
  gatewayUrl: string;
  private readonly log = LogFactory.createLogger(OmapiPremiumService);

  constructor(
    private readonly http: HttpClient,
    private readonly omapiPremiumMapper: OmapiPremiumMapper,
    private readonly urlService: UrlService,
    private readonly cacheService: OmapiCacheService<RawOmapiPremiumInterface>,
    private readonly configService: ConfigService,
    private readonly messageService: MessageService
  ) {
    this.gatewayUrl = this.configService.getConfig(ConfigConstants.OMAPI_URL);
  }

  getOmapiPremium(
    messageGroup: string,
    epc: string,
    showCustomError?: boolean,
    errorLabelKey?: string
  ): Observable<OmapiPremium> {
    if (!this.cacheService.get(epc)) {
      this.cacheService.add(
        epc,
        this.http.get<RawOmapiPremiumInterface>(this.getPremiumEndpoint(epc), this.getHttpConfig())
      );
    }

    return this.cacheService.get(epc).pipe(
      take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error, messageGroup, showCustomError, errorLabelKey)),
      map((response: RawOmapiPremiumInterface) => {
        return this.omapiPremiumMapper.toModel(response);
      })
    );
  }

  private handleError(
    error: HttpErrorResponse,
    messageGroup: string,
    showCustomError?: boolean,
    errorLabelKey?: string
  ) {
    if (showCustomError && errorLabelKey) {
      this.messageService.addMessage(new ErrorMessage(messageGroup, errorLabelKey));
    } else if (error.status !== 410) {
      this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
    return throwError(() => 'An error occurred while trying to fetch ' + messageGroup);
  }

  private getPremiumEndpoint(epc: string): string {
    return `${this.gatewayUrl}/public/premium/${epc}`;
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
}
