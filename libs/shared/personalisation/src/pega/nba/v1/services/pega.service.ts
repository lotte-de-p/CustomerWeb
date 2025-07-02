import { Inject, Injectable } from '@angular/core';
import { iif, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { NBARequestParameters } from '../models/nba-request-parameters';
import { NBAList } from '../models/nba-list.model';
import { LoginService, OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { NBAListMapper } from '../mappers/nba-list.mapper';
import { NBAConstants } from '../../constants/nba.constant';
import { ContexthubConstants } from '@telenet/ng-lib-page';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

export interface ContextHubConstants {
  ContextHub: {
    Constants: {
      PROP_ENABLE_PEGA_PERSONALIZATION: string;
    };
  };
}

@Injectable({ providedIn: 'root' })
export class PegaService {
  private readonly log: Log = LogFactory.createLogger(PegaService);

  constructor(
    @Inject('Window') private readonly window: ContextHubConstants,
    private readonly nbaRequestParameters: NBARequestParameters,
    private readonly nbaListMapper: NBAListMapper,
    private readonly ocapiService: OcapiService,
    private readonly loginService: LoginService
  ) {}

  public getNBAList(): Observable<NBAList> {
    const nbaFromRequest$ = this.getNBAFromRequest();
    return nbaFromRequest$.pipe(
      mergeMap((requestNbaList: NBAList) =>
        iif(() => !!requestNbaList.getNBA(), nbaFromRequest$, this.getNBAFromPegaAPI())
      )
    );
  }

  private getNBAFromRequest(): Observable<NBAList> {
    return this.nbaRequestParameters.toNBAList();
  }

  private getNBAFromPegaAPI(): Observable<NBAList> {
    const enablePegaPersonalisation = this.window['ContextHub']['Constants']['PROP_ENABLE_PEGA_PERSONALIZATION'];
    return enablePegaPersonalisation === 'true' ? this.getAuthenticatedPegaNBAList() : of(new NBAList());
  }

  private getAuthenticatedPegaNBAList(): Observable<NBAList> {
    return this.loginService
      .getLoginDetails()
      .pipe(mergeMap((loginDetails) => (loginDetails.isLoggedIn() ? this.getPegaNBAList() : of(new NBAList()))));
  }

  private getPegaNBAList(): Observable<NBAList> {
    const endpoint = this.getServiceURI(NBAConstants.PEGA_NBA_ENDPOINT);
    const ocapiCallConfig = new OcapiCallConfig(
      ContexthubConstants.MESSAGE_GROUP_NBALIST,
      endpoint,
      this.nbaListMapper
    );

    return this.ocapiService.doGet(ocapiCallConfig).pipe(catchError((err: unknown) => this.handlePegaNbaError(err)));
  }

  private handlePegaNbaError(err: unknown) {
    this.log.logError('Error while fetching NBA list from Pega.', err);

    return of(new NBAList());
  }

  private getServiceURI(endpoint: string): string {
    return NBAConstants.SERVICE_PREFIX.concat(NBAConstants.CONTEXT)
      .concat(NBAConstants.API_VERSION_V1)
      .concat(endpoint)
      .concat('?channel=')
      .concat(NBAConstants.CHANNEL);
  }
}
