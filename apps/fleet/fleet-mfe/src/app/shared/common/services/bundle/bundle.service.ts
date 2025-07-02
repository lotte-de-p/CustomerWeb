import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { BundleUsagesMapper } from '../../mappers/bundle/bundle-usages.mapper';
import { BundleUsages } from '../../interfaces/bundle/bundle-usages.model';
import { GroupBundleRequestInterface } from '../../interfaces/bundle/group-bundle-request.interface';
import { PostRequestSuccessInterface } from '../../interfaces/post-request-success.interface';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { CommonConstants } from '../../constants/common.constants';
import { BundleConstants } from '../../constants/bundle/bundle.constants';

@Injectable({
  providedIn: 'root',
})
export class BundleService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly bundleUsagesMapper: BundleUsagesMapper,
    private readonly postRequestSuccessMapper: PostRequestSuccessMapper
  ) {}

  getBundleUsages(messageGroup: string, billingAccountNumber: string): Observable<BundleUsages> {
    const url = this.getBillingServiceURI(
      CommonConstants.API_VERSION_V1,
      BundleConstants.CONTEXT_ACCOUNTS,
      `/${billingAccountNumber}`,
      BundleConstants.ENDPOINT_BUNDLE_USAGE
    );

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, url, this.bundleUsagesMapper));
  }

  addSubmitGroupBundles(
    messageGroup: string,
    body: GroupBundleRequestInterface
  ): Observable<PostRequestSuccessInterface> {
    const endpoint = this.getSalesServiceURI(
      CommonConstants.API_VERSION_V1,
      BundleConstants.ENDPOINT_SUBMIT_GROUP_BUNDLES
    );
    return this.ocapiService.doPost(new OcapiCallConfig(messageGroup, endpoint, this.postRequestSuccessMapper, body));
  }

  removeGroupBundles(messageGroup: string, body: GroupBundleRequestInterface): Observable<PostRequestSuccessInterface> {
    const endpoint = this.getSalesServiceURI(CommonConstants.API_VERSION_V1, BundleConstants.ENDPOINT_REMOVE_BUNDLE);
    return this.ocapiService.doPost(new OcapiCallConfig(messageGroup, endpoint, this.postRequestSuccessMapper, body));
  }

  private getBillingServiceURI(
    version: string,
    context: string,
    suffix: string,
    endpoint: string,
    queryParams?: string
  ) {
    const uri = CommonConstants.BILLING_SERVICE_PREFIX.concat(version).concat(context).concat(suffix).concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }

  private getSalesServiceURI(version: string, context: string) {
    return CommonConstants.SALES_SERVICE_PREFIX.concat(version).concat(context);
  }
}
