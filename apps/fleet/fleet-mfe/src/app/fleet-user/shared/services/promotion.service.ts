import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TIPContractInterface } from '../interfaces/tip-contract.interface';
import { UrlService } from '@telenet/ng-lib-page';
import { PromotionServiceConstants } from '../constants/promotion-service.constants';
import { TIPContractsMapper } from '../mappers/tip-contracts.mapper';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(
    private readonly tipContractsMapper: TIPContractsMapper,
    private readonly ocapiService: OcapiService,
    private readonly urlService: UrlService
  ) {}

  getTIPContracts(messageGroupName: string, status?: string): Observable<TIPContractInterface[]> {
    let endpoint = this.getServiceURI(
      PromotionServiceConstants.CONTRACTS,
      PromotionServiceConstants.CONTEXT_TIP,
      PromotionServiceConstants.API_VERSION_V1
    );
    if (status) {
      const urlParam = new Map<string, string>();
      urlParam.set('status', status);
      endpoint = this.urlService.buildUrlWithParams(endpoint, urlParam);
    }
    return this.ocapiService
      .doGet(new OcapiCallConfig(messageGroupName, endpoint, this.tipContractsMapper))
      .pipe(map((response: TIPContractInterface[]) => response));
  }

  private getServiceURI(endpoint: string, context: string, version: string): string {
    return PromotionServiceConstants.PROMOTION_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }
}
