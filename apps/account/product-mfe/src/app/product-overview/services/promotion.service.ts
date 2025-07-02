import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { UrlService } from '@telenet/ng-lib-page';
import { Observable } from 'rxjs';
import { TIPContractsMapper } from '../mappers/tip-contracts.mapper';
import { TIPContractInterface } from '../interfaces/tip-contract.interface';
import { PromotionServiceConstants } from '../constants/promotion-service.constants';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly urlService: UrlService,
    private readonly tipContractsMapper: TIPContractsMapper
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
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, endpoint, this.tipContractsMapper));
  }

  private getServiceURI(endpoint: string, context: string, version: string): string {
    return PromotionServiceConstants.PROMOTION_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }
}
