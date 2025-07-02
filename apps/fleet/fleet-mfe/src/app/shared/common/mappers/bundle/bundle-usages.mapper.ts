import { Injectable } from '@angular/core';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { BundleUsages } from '../../interfaces/bundle/bundle-usages.model';
import { GroupBundleUsage } from '../../interfaces/bundle/group-bundle-usage.model';
import { RawBundleUsages, RawGroupBundleUsage } from '../../interfaces/bundle/raw-bundle-usages.model';

@Injectable({
  providedIn: 'root',
})
export class BundleUsagesMapper implements MapperInterface<RawBundleUsages, BundleUsages> {
  constructor(private readonly omapiProductMapper: OmapiProductMapper) {}

  toModel(rawBundleUsage: RawBundleUsages): BundleUsages {
    return this.createBundleUsage(rawBundleUsage);
  }

  private createBundleUsage(rawBundleUsage: RawBundleUsages) {
    const bundleUsage = {} as BundleUsages;

    bundleUsage.lastUpdated = rawBundleUsage.lastUpdated;
    bundleUsage.groupBundleUsages = this.createGroupBundles(rawBundleUsage.groupBundle);

    return bundleUsage;
  }

  private createGroupBundles(rawGroupBundle: RawGroupBundleUsage[]) {
    const groupBundles = [] as GroupBundleUsage[];
    rawGroupBundle.forEach((rawBundle) => {
      const groupBundle = {} as GroupBundleUsage;

      groupBundle.name = rawBundle.name;
      groupBundle.remainingUnits = rawBundle.remainingUnits;
      groupBundle.specurl = rawBundle.specurl;
      groupBundle.unitType = rawBundle.unitType;
      groupBundle.startUnits = rawBundle.startUnits;
      groupBundle.usedPercentage = rawBundle.usedPercentage;
      groupBundle.usedUnits = rawBundle.usedUnits;
      groupBundle.productInfo = this.omapiProductMapper.toModel(rawBundle.rawOmapi);

      groupBundles.push(groupBundle);
    });

    return groupBundles;
  }
}
